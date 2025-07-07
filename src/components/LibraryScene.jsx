import { useEffect, useState, useRef, useCallback } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";
import { WaypointGraph } from "../utils/waypoints.js"; // Relative path
import { waypoints } from "../utils/waypoints.js";

const LibraryScene = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const canvasRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  
  const waypointGraphRef = useRef(null);
  const lineRef = useRef(null); // Ref for the line mesh
  const moveObjectAlongPathRef = useRef(null);
  
  const handleSearch = () => {
    // Trim whitespace and convert to lowercase for case-insensitive comparison
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
    alert("Please enter a book title to search."); // Prevent empty searches
    return;
  }
  if (!waypointGraphRef.current || !moveObjectAlongPathRef.current) {
    console.error("Babylon.js objects are not initialized.");
    return;
  }

    console.log("Search Query:", query); // Debug: Log the search query
    console.log("Waypoints:", waypoints); // Debug: Log the waypoints data
  
    // Find the waypoint where the book title includes the search query
    const waypoint = waypoints.find((wp) => {
      if (wp.book) {
        const title = wp.book.title.toLowerCase();
        console.log(`Checking book: ${title} against query: ${query}`); // Debug: Log each book title being checked
        return title.includes(query);
      }
      return false;
    });
  
    console.log("Matched Waypoint:", waypoint); // Debug: Log the matched waypoint
  
    if (waypoint) {
      // Calculate the path to the target waypoint
      const path = waypointGraphRef.current.aStar(waypoints[0].id, waypoint.id);
      if (path?.length) {
        // Move the character along the path
        moveObjectAlongPathRef.current(
          path,
          1.0,
          () => handlePathComplete(waypoint.book)
        );
      }
      setIsModalOpen(false);
    } 
    
    else {
      alert("Book not found!");
    }
  };

  const handlePathComplete = useCallback((book) => {
    setSelectedBook(book);
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
    scene.collisionsEnabled = true;

    // Initialize WaypointGraph with all waypoints
    const waypointGraph = new WaypointGraph(waypoints, scene);
    waypointGraphRef.current = waypointGraph;

    
    // const createWaypoints = () => {
    //   return waypoints.map(wp => {
    //     const sphere = BABYLON.MeshBuilder.CreateSphere(wp.id, { diameter: 0.5 }, scene);
    //     sphere.position = new BABYLON.Vector3(wp.position.x, wp.position.y, wp.position.z);
    //     sphere.wpId = wp.id; // Store waypoint ID for reference
    //     sphere.isPickable = true; // Ensure it can be clicked
        
    //     return sphere;
    //   });
    // };

    // const waypointMeshes = createWaypoints(); // Generate waypoint spheres
    // waypointMeshes.forEach(mesh => scene.addMesh(mesh)); // Add them to the scene

    // Raycasting for selecting waypoints
    canvas.addEventListener("click", (e) => {
      const pickResult = scene.pick(scene.pointerX, scene.pointerY);
      if (pickResult.hit) {
        const pickedMesh = pickResult.pickedMesh;
        if (pickedMesh && pickedMesh.wpId) {
          console.log("Waypoint clicked:", pickedMesh.wpId);
    
          // Example: Find path to this waypoint
          const start = waypoints[0]?.id || "manual1"; // Use first waypoint if available
          const end = pickedMesh.wpId;
          const path = waypointGraph.aStar(start, end);
    
          // Move character along the path
          if (path && path.length > 0) {
            const endWaypoint = waypoints.find(wp => wp.id === end);
            moveObjectAlongPath( path, 1.0, () => handlePathComplete(endWaypoint.book));
          }
        } else if (pickedMesh.name === "receptionDesk") {
          setIsModalOpen(true); // Open the search modal
        }
      }
    });
    // CAMERA (FIRST-PERSON STYLE)
    const camera = new BABYLON.UniversalCamera("camera", new BABYLON.Vector3(2, 18, -3), scene);
    camera.attachControl(canvas, true);
    camera.speed = 0.5;
    camera.minZ = 0.1;

    scene.onPointerDown = () => {
      canvas.requestPointerLock();
    };

    const inputMap = {};
    scene.actionManager = new BABYLON.ActionManager(scene);
    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnKeyDownTrigger, (evt) => inputMap[evt.sourceEvent.key.toLowerCase()] = true
    ));
    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnKeyUpTrigger, (evt) => inputMap[evt.sourceEvent.key.toLowerCase()] = false
    ));

    const movementSpeed = 0.3;
    scene.onBeforeRenderObservable.add(() => {
      let forward = camera.getDirection(BABYLON.Vector3.Forward());
      let right = camera.getDirection(BABYLON.Vector3.Right());

      if (inputMap["w"]) camera.position.addInPlace(forward.scale(movementSpeed));
      if (inputMap["s"]) camera.position.subtractInPlace(forward.scale(movementSpeed));
      if (inputMap["a"]) camera.position.subtractInPlace(right.scale(movementSpeed));
      if (inputMap["d"]) camera.position.addInPlace(right.scale(movementSpeed));

      camera.position.y = Math.max(1.5, camera.position.y);
    });

    // Move object along path
    const moveObjectAlongPath = (path, speed, onComplete) => {
      let index = 0;
      const points = []; // Array to store the line's points
    
      const move = () => {
        if (index >= path.length) {
          onComplete(); // Trigger the modal when the path is complete
          return; // Stop when the end of the path is reached
        }
    
        const waypointId = path[index];
        const targetPosition = waypointGraph.nodes[waypointId].position;
    
        // Add the new point to the line
        points.push(targetPosition);
    
        // Update the line's vertices
        if (lineRef.current) {
          lineRef.current.dispose(); // Remove the old line
        }
        lineRef.current = BABYLON.MeshBuilder.CreateLines("pathLine", { points }, scene);
    
        // Schedule the next step
        setTimeout(() => {
          index++;
          move(); // Move to the next waypoint
        }, speed * 1000); // Convert speed to milliseconds
      };
    
      move(); // Start moving
    };
    moveObjectAlongPathRef.current = moveObjectAlongPath;

    // Example usage
    // Create footsteps
    
  // Create footsteps
  // const footsteps = BABYLON.MeshBuilder.CreateSphere("footsteps", { width: 5, height: 5 }, scene);
  // const footstepsMat = new BABYLON.StandardMaterial("footstepsMat", scene);
  // footstepsMat.diffuseTexture = new BABYLON.Texture("/footsteps.jpeg", scene); // Add a footstep texture
  // footsteps.material = footstepsMat;
  // footsteps.position.y = 0.1; // Slightly above the ground
  

      // LIGHTING
      const hemiLight = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(2, 50, -50), scene);
      hemiLight.intensity = 0.5;
  
      const sunLight = new BABYLON.DirectionalLight("sunLight", new BABYLON.Vector3(0, -1, 0.3), scene);
      sunLight.position = new BABYLON.Vector3(0, 30, -10);
      sunLight.intensity = 0.6;
  
      // FLOOR
      const floor = BABYLON.MeshBuilder.CreateGround("floor", { width: 50, height: 50 }, scene);
      const floorMat = new BABYLON.StandardMaterial("floorMat", scene);
      floorMat.diffuseTexture = new BABYLON.Texture("/floor.jpg", scene);
      floor.material = floorMat;
  
      // DOME CEILING
      // Dome Structure (Semi-Sphere)
      const dome = BABYLON.MeshBuilder.CreateSphere("dome", { diameter: 60, segments: 32 }, scene);
      dome.scaling.y = 0.5;
      dome.position.y = 12;
  
  const domeMat = new BABYLON.StandardMaterial("domeMat", scene);
  domeMat.diffuseTexture = new BABYLON.Texture("/dome.jpeg", scene); // Ensure you have a proper texture
  domeMat.backFaceCulling = false; // Render both sides for visibility
  dome.material = domeMat;
  domeMat.alpha = 0.5;
  domeMat.specularColor = new BABYLON.Color3(1, 1, 1);
  
  
  // Lighting Effect Through Dome (Spotlight to simulate sunlight)
  const domeLight = new BABYLON.SpotLight("domeLight", new BABYLON.Vector3(0, 15, 0), new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, scene);
  domeLight.diffuse = new BABYLON.Color3(1, 1, 0.8); // Warm sunlight effect
  domeLight.intensity = 1.2;
  
  
      // WALLS
      const createWall = (name, position, rotation) => {
        const wall = BABYLON.MeshBuilder.CreateBox(name, { width: 50, height: 10, depth: 0.5 }, scene);
        wall.position = position;
        if (rotation) wall.rotation.y = rotation;
        const wallMat = new BABYLON.StandardMaterial("wallMat", scene);
        wallMat.diffuseTexture = new BABYLON.Texture("/wall.jpg", scene);
        wall.material = wallMat;
        wall.checkCollisions = true;
      };
  
      createWall("backWall", new BABYLON.Vector3(0, 5, -25));
      createWall("frontWall", new BABYLON.Vector3(0, 5, 25));
      createWall("leftWall", new BABYLON.Vector3(-25, 5, 0), Math.PI / 2);
      createWall("rightWall", new BABYLON.Vector3(25, 5, 0), -Math.PI / 2);
  
      // WINDOWS
      const createWindow = (name, position) => {
        const window = BABYLON.MeshBuilder.CreatePlane(name, { width: 30, height: 5 }, scene);
        window.position = position;
        const windowMat = new BABYLON.StandardMaterial(name + "Mat", scene);
        windowMat.diffuseTexture = new BABYLON.Texture("/window.jpg", scene);
        window.material = windowMat;
        windowMat.backFaceCulling = false;
      };
  
      createWindow("largeWindowFront", new BABYLON.Vector3(0, 5, 24.6));
      createWindow("largeWindowBack", new BABYLON.Vector3(0, 5, -24.6));
  
      // BOOKSHELVES
      for (let i = -10; i <= 10; i += 4) {
        for (let z of [-10, -5, 0, 5]) {
          const bookshelf = BABYLON.MeshBuilder.CreateBox("bookshelf", { width: 4, height: 6, depth: 1 }, scene);
          bookshelf.position.set(i, 3, z);
          const shelfMat = new BABYLON.StandardMaterial("shelfMat", scene);
          shelfMat.diffuseTexture = new BABYLON.Texture("/bookshelf.png", scene);
          bookshelf.material = shelfMat;
          bookshelf.isObstacle = true; 
        }
      }
       // Reception Desk
  const receptionDesk = BABYLON.MeshBuilder.CreateBox("receptionDesk", { width: 3, height: 1.5, depth: 1 }, scene);
  receptionDesk.position = new BABYLON.Vector3(10, 1, -20); // Adjust position as needed
  
  const receptionMat = new BABYLON.StandardMaterial("receptionMat", scene);
  receptionMat.diffuseTexture = new BABYLON.Texture("/reception.webp", scene);
  receptionDesk.material = receptionMat;
  
  // Chair (Simple Cylinder + Box for Backrest)
  const chairSeat = BABYLON.MeshBuilder.CreateCylinder("chairSeat", { diameter: 1.5, height: 0.2 }, scene);
  chairSeat.position = new BABYLON.Vector3(11, 2, -22); // Slightly in front of the desk
  
  const chairBackrest = BABYLON.MeshBuilder.CreateBox("chairBackrest", { width: 1, height: 1, depth: 1.5 }, scene);
  chairBackrest.position = new BABYLON.Vector3(11, 1, -22); // Slightly behind the seat
  chairBackrest.rotation.x = Math.PI / 2;
  
  const chairMat = new BABYLON.StandardMaterial("chairMat", scene);
  chairMat.diffuseTexture = new BABYLON.Texture("/chair.webp", scene);
  chairSeat.material = chairMat;
  chairBackrest.material = chairMat;
  
  
      for (let z = -10; z <= 10; z += 4) {
        for (let x of [-23, -17, 17, 23]) {
          const bookshelf = BABYLON.MeshBuilder.CreateBox("bookshelf", { width: 4, height: 6, depth: 1 }, scene);
          bookshelf.position.set(x, 3, z);
          bookshelf.rotation.y = Math.PI / 2;
          bookshelf.material = new BABYLON.StandardMaterial("shelfMat", scene);
          bookshelf.material.diffuseTexture = new BABYLON.Texture("/bookshelf.png", scene);
          bookshelf.checkCollisions = true;
          bookshelf.isObstacle = true; 
        }
      }

      
      
      // DOOR
      const door = BABYLON.MeshBuilder.CreateBox("door", { width: 2, height: 8, depth: 0.2 }, scene);
      door.position.set(24, 4, -20);
      door.rotation.y = Math.PI / 2;
      door.material = new BABYLON.StandardMaterial("doorMat", scene);
      door.material.diffuseTexture = new BABYLON.Texture("/door.jpeg", scene);

    engine.runRenderLoop(() => scene.render());
    window.addEventListener("resize", () => engine.resize());

    // Cleanup on unmount
    return () => engine.dispose();
  }, [handlePathComplete]);

  return (
    <>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      {isModalOpen && (
        <div style={modalStyle}>
          <h2>Search for a Book</h2>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter book title"
          />
          <button style={{padding: "2px"}} onClick={() => handleSearch(searchQuery)}>
            Search
          </button>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
        )}
        {selectedBook && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "black",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          zIndex: 1000}}>
          <h2 style={{ color: "white" }}>{selectedBook.title}</h2>
          <p style={{ color: "white" }}>{selectedBook.summary}</p>
          
          <button onClick={() => setSelectedBook(null)}>Close</button>
        </div>
      )}
    </>
  );
};

  // Reusable modal styles
  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    zIndex: 1000
  };

export default LibraryScene;
