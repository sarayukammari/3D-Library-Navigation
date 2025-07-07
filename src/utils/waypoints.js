
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";


export const waypoints = [
    {
        id: "manual1",
        position: { x: 15, y: 3, z: -10 },
        book: {
            title: "Book 1",
            summary: "This is the summary of Book 1."
        }
    },
    {
        id: "manual2",
        position: { x: 15, y: 3, z: -6 },
        book: {
            title: "Book 2",
            summary: "This is the summary of Book 2."
        }
    },
    {
        id: "manual3",
        position: { x: 15, y: 3, z: -2 },
        book: {
            title: "Book 3",
            summary: "This is the summary of Book 3."
        }
    },
    {
        id: "manual4",
        position: { x: 15, y: 3, z: 2 },
        book: {
            title: "Book 4",
            summary: "This is the summary of Book 4."
        }
    },
    {
        id: "manual5",
        position: { x: 15, y: 3, z: 6 },
        book: {
            title: "Percy Jackson",
            summary: "Percy Jackson and the Olympians: The Lightning Thief is a story about a troubled young boy who finds out his father is a Greek god, making him a demigod. He and his friends are given the task of finding and returning Zeus's lightning bolt as monsters from the Underworld attempt to stop them."
        }
    },
    {
        id: "manual6",
        position: { x: 15, y: 3, z: 10 },
        book: {
            title: "Book 6",
            summary: "This is the summary of Book 6."
        }
    },
    {
        id: "manuall1",
        position: { x: -10, y: 1, z: -12 },
        book: {
            title: "Book 7",
            summary: "This is the summary of Book 7."
        }
    },
    {
        id: "manuall2",
        position: { x: 10, y: 1, z: -12 },
        book: {
            title: "Book 8",
            summary: "This is the summary of Book 8."
        }
    },
    {
        id: "manuall3",
        position: { x: -10, y: 3, z: -12 },
        book: {
            title: "Book 9",
            summary: "This is the summary of Book 9."
        }
    },
    {
        id: "manuall4",
        position: { x: -6, y: 3, z: -12 },
        book: {
            title: "Book 10",
            summary: "This is the summary of Book 10."
        }
    },
    {
        id: "manuall5",
        position: { x: -2, y: 3, z: -12 },
        book: {
            title: "Book 11",
            summary: "This is the summary of Book 11."
        }
    },
    {
        id: "manuall6",
        position: { x: 2, y: 3, z: -12 },
        book: {
            title: "Book 12",
            summary: "This is the summary of Book 12."
        }
    },
    {
        id: "manual17",
        position: { x: 6, y: 3, z: -12 },
        book: {
            title: "Book 13",
            summary: "This is the summary of Book 13."
        }
    },
    {
        id: "manual18",
        position: { x: 10, y: 3, z: -12 },
        book: {
            title: "Book 14",
            summary: "This is the summary of Book 14."
        }
    },
    {
        id: "wp_-10_-10",
        position: { x: -10, y: 1, z: -8 },
        book: {
            title: "Book 15",
            summary: "This is the summary of Book 15."
        }
    },
    {
        id: "wp_-10_-5",
        position: { x: -10, y: 1, z: -3 },
        book: {
            title: "Book 16",
            summary: "This is the summary of Book 16."
        }
    },
    {
        id: "wp_-10_0",
        position: { x: -10, y: 1, z: 2 },
        book: {
            title: "Book 17",
            summary: "This is the summary of Book 17."
        }
    },
    {
        id: "wp_-10_5",
        position: { x: -10, y: 1, z: 7 },
        book: {
            title: "Book 18",
            summary: "This is the summary of Book 18."
        }
    },
    {
        id: "wp_10_-10",
        position: { x: 10, y: 1, z: -8 },
        book: {
            title: "Book 19",
            summary: "This is the summary of Book 19."
        }
    },
    {
        id: "wp_10_-5",
        position: { x: 10, y: 1, z: -3 },
        book: {
            title: "Book 20",
            summary: "This is the summary of Book 20."
        }
    },
    {
        id: "wp_10_0",
        position: { x: 10, y: 1, z: 2 },
        book: {
            title: "Book 21",
            summary: "This is the summary of Book 21."
        }
    },
    {
        id: "wp_10_5",
        position: { x: 10, y: 1, z: 7 },
        book: {
            title: "Book 22",
            summary: "This is the summary of Book 22."
        }
    },
    {
        id: "wp_-23_-10",
        position: { x: -21, y: 1, z: -10 },
        book: {
            title: "Book 23",
            summary: "This is the summary of Book 23."
        }
    },
    {
        id: "wp_-23_10",
        position: { x: -21, y: 1, z: 10 },
        book: {
            title: "Book 24",
            summary: "This is the summary of Book 24."
        }
    },
    {
        id: "wp_23_-10",
        position: { x: 21, y: 1, z: -10 },
        book: {
            title: "Book 25",
            summary: "This is the summary of Book 25."
        }
    },
    {
        id: "wp_23_10",
        position: { x: 21, y: 1, z: 10 },
        book: {
            title: "Book 26",
            summary: "This is the summary of Book 26."
        }
    },
    {
        id: "wp_-10_-10",
        position: { x: -10, y: 3, z: -8 },
        book: {
            title: "Book 27",
            summary: "This is the summary of Book 27."
        }
    },
    {
        id: "wp_-10_-5",
        position: { x: -10, y: 3, z: -3 },
        book: {
            title: "Book 28",
            summary: "This is the summary of Book 28."
        }
    },
    {
        id: "wp_-10_0",
        position: { x: -10, y: 3, z: 2 },
        book: {
            title: "Book 29",
            summary: "This is the summary of Book 29."
        }
    },
    {
        id: "wp_-10_5",
        position: { x: -10, y: 3, z: 7 },
        book: {
            title: "Book 30",
            summary: "This is the summary of Book 30."
        }
    },
    {
        id: "wp_-6_-10",
        position: { x: -6, y: 3, z: -8 },
        book: {
            title: "Book 31",
            summary: "This is the summary of Book 31."
        }
    },
    {
        id: "wp_-6_-5",
        position: { x: -6, y: 3, z: -3 },
        book: {
            title: "Book 32",
            summary: "This is the summary of Book 32."
        }
    },
    {
        id: "wp_-6_0",
        position: { x: -6, y: 3, z: 2 },
        book: {
            title: "Book 33",
            summary: "This is the summary of Book 33."
        }
    },
    {
        id: "wp_-6_5",
        position: { x: -6, y: 3, z: 7 },
        book: {
            title: "Book 34",
            summary: "This is the summary of Book 34."
        }
    },
    {
        id: "wp_-2_-10",
        position: { x: -2, y: 3, z: -8 },
        book: {
            title: "Book 35",
            summary: "This is the summary of Book 35."
        }
    },
    {
        id: "wp_-2_-5",
        position: { x: -2, y: 3, z: -3 },
        book: {
            title: "Book 36",
            summary: "This is the summary of Book 36."
        }
    },
    {
        id: "wp_-2_0",
        position: { x: -2, y: 3, z: 2 },
        book: {
            title: "Book 37",
            summary: "This is the summary of Book 37."
        }
    },
    {
        id: "wp_-2_5",
        position: { x: -2, y: 3, z: 7 },
        book: {
            title: "Book 38",
            summary: "This is the summary of Book 38."
        }
    },
    {
        id: "wp_2_-10",
        position: { x: 2, y: 3, z: -8 },
        book: {
            title: "Book 39",
            summary: "This is the summary of Book 39."
        }
    },
    {
        id: "wp_2_-5",
        position: { x: 2, y: 3, z: -3 },
        book: {
            title: "Book 40",
            summary: "This is the summary of Book 40."
        }
    },
    {
        id: "wp_2_0",
        position: { x: 2, y: 3, z: 2 },
        book: {
            title: "Book 41",
            summary: "This is the summary of Book 41."
        }
    },
    {
        id: "wp_2_5",
        position: { x: 2, y: 3, z: 7 },
        book: {
            title: "Book 42",
            summary: "This is the summary of Book 42."
        }
    },
    {
        id: "wp_6_-10",
        position: { x: 6, y: 3, z: -8 },
        book: {
            title: "Book 43",
            summary: "This is the summary of Book 43."
        }
    },
    {
        id: "wp_6_-5",
        position: { x: 6, y: 3, z: -3 },
        book: {
            title: "Book 44",
            summary: "This is the summary of Book 44."
        }
    },
    {
        id: "wp_6_0",
        position: { x: 6, y: 3, z: 2 },
        book: {
            title: "Book 45",
            summary: "This is the summary of Book 45."
        }
    },
    {
        id: "wp_6_5",
        position: { x: 6, y: 3, z: 7 },
        book: {
            title: "Book 46",
            summary: "This is the summary of Book 46."
        }
    },
    {
        id: "wp_10_-10",
        position: { x: 10, y: 3, z: -8 },
        book: {
            title: "Book 47",
            summary: "This is the summary of Book 47."
        }
    },
    {
        id: "wp_10_-5",
        position: { x: 10, y: 3, z: -3 },
        book: {
            title: "Book 48",
            summary: "This is the summary of Book 48."
        }
    },
    {
        id: "wp_10_0",
        position: { x: 10, y: 3, z: 2 },
        book: {
            title: "Book 49",
            summary: "This is the summary of Book 49."
        }
    },
    {
        id: "wp_10_5",
        position: { x: 10, y: 3, z: 7 },
        book: {
            title: "Book 50",
            summary: "This is the summary of Book 50."
        }
    },
    {
        id: "wp_-23_-10",
        position: { x: -21, y: 3, z: -10 },
        book: {
            title: "Book 51",
            summary: "This is the summary of Book 51."
        }
    },
    {
        id: "wp_-17_-10",
        position: { x: -15, y: 3, z: -10 },
        book: {
            title: "Book 52",
            summary: "This is the summary of Book 52."
        }
    },
    {
        id: "wp_17_-10",
        position: { x: 19, y: 3, z: -10 },
        book: {
            title: "Book 53",
            summary: "This is the summary of Book 53."
        }
    },
    {
        id: "wp_23_-10",
        position: { x: 25, y: 3, z: -10 },
        book: {
            title: "Book 54",
            summary: "This is the summary of Book 54."
        }
    },
    {
        id: "wp_-23_-6",
        position: { x: -21, y: 3, z: -6 },
        book: {
            title: "Book 55",
            summary: "This is the summary of Book 55."
        }
    },
    {
        id: "wp_-17_-6",
        position: { x: -15, y: 3, z: -6 },
        book: {
            title: "Book 56",
            summary: "This is the summary of Book 56."
        }
    },
    {
        id: "wp_17_-6",
        position: { x: 19, y: 3, z: -6 },
        book: {
            title: "Book 57",
            summary: "This is the summary of Book 57."
        }
    },
    {
        id: "wp_23_-6",
        position: { x: 25, y: 3, z: -6 },
        book: {
            title: "Book 58",
            summary: "This is the summary of Book 58."
        }
    },
    {
        id: "wp_-23_-2",
        position: { x: -21, y: 3, z: -2 },
        book: {
            title: "Book 59",
            summary: "This is the summary of Book 59."
        }
    },
    {
        id: "wp_-17_-2",
        position: { x: -15, y: 3, z: -2 },
        book: {
            title: "Book 60",
            summary: "This is the summary of Book 60."
        }
    },
    {
        id: "wp_17_-2",
        position: { x: 19, y: 3, z: -2 },
        book: {
            title: "Book 61",
            summary: "This is the summary of Book 61."
        }
    },
    {
        id: "wp_23_-2",
        position: { x: 25, y: 3, z: -2 },
        book: {
            title: "Book 62",
            summary: "This is the summary of Book 62."
        }
    },
    {
        id: "wp_-23_2",
        position: { x: -21, y: 3, z: 2 },
        book: {
            title: "Book 63",
            summary: "This is the summary of Book 63."
        }
    },
    {
        id: "wp_-17_2",
        position: { x: -15, y: 3, z: 2 },
        book: {
            title: "Book 64",
            summary: "This is the summary of Book 64."
        }
    },
    {
        id: "wp_17_2",
        position: { x: 19, y: 3, z: 2 },
        book: {
            title: "Book 65",
            summary: "This is the summary of Book 65."
        }
    },
    {
        id: "wp_23_2",
        position: { x: 25, y: 3, z: 2 },
        book: {
            title: "Book 66",
            summary: "This is the summary of Book 66."
        }
    },
    {
        id: "wp_-23_6",
        position: { x: -21, y: 3, z: 6 },
        book: {
            title: "Book 67",
            summary: "This is the summary of Book 67."
        }
    },
    {
        id: "wp_-17_6",
        position: { x: -15, y: 3, z: 6 },
        book: {
            title: "Harry Potter",
            summary: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends, Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry."
        }
    },
    {
        id: "wp_17_6",
        position: { x: 19, y: 3, z: 6 },
        book: {
            title: "Book 69",
            summary: "This is the summary of Book 69."
        }
    },
    {
        id: "wp_23_6",
        position: { x: 25, y: 3, z: 6 } ,
        book: {
            title: "Book 70",
            summary: "This is the summary of Book 70."
        }
    },
    {
        id: "wp_-23_10",
        position: { x: -21, y: 3, z: 10 },
        book: {
            title: "Book 71",
            summary: "This is the summary of Book 71."
        }
    },
    {
        id: "wp_-17_10",
        position: { x: -15, y: 3, z: 10 },
        book: {
            title: "Book 72",
            summary: "This is the summary of Book 72."
        }
    },
    {
        id: "wp_17_10",
        position: { x: 19, y: 3, z: 10 },
        book: {
            title: "Book 73",
            summary: "This is the summary of Book 73."
        }
    },
    {
        id: "wp_23_10",
        position: { x: 25, y: 3, z: 10 },
        book: {
            title: "Book 74",
            summary: "This is the summary of Book 74."
        }
    },
    
];
export class WaypointGraph {
  constructor(waypoints, scene) {
      this.nodes = {}; // Store waypoints
      this.edges = {}; // Store connections between waypoints
      this.createGraph(waypoints, scene);
  }

  createGraph(waypoints, scene) {
      // Add waypoints as nodes
      waypoints.forEach(wp => {
        this.nodes[wp.id] = {
            id: wp.id,
            position: new BABYLON.Vector3(wp.position.x, wp.position.y, wp.position.z)
        };
        this.edges[wp.id] = [];
        
    });


      // Connect waypoints if no obstacle is in the way
      const distanceThreshold = 6;
      waypoints.forEach(wp1 => {
          waypoints.forEach(wp2 => {
              if (wp1.id !== wp2.id) {
                  const dist = this.calculateDistance(wp1.position, wp2.position);
                     
                  // Check if the path is clear before adding an edge
                  if (dist <= distanceThreshold && !this.isPathBlocked(wp1.id, wp2.id, scene)) {
                      this.edges[wp1.id].push({ id: wp2.id, cost: dist });
                  }
              }
          });
      });
  }

  calculateDistance(pos1, pos2) {
      return Math.sqrt(
          Math.pow(pos1.x - pos2.x, 2) +
          Math.pow(pos1.y - pos2.y, 2) +
          Math.pow(pos1.z - pos2.z, 2)
      );
  }

  isPathBlocked(startId, endId, scene) {
    if (typeof startId !== "string" || typeof endId !== "string") {
      console.error("Invalid waypoint ID:", startId, endId);
      return true; // Assume blocked if invalid IDs
  }

    // Ensure we're using waypoint IDs, not direct position objects
    const start = this.nodes[startId]?.position;
    const end = this.nodes[endId]?.position;

    if (!start || !end) {
        console.error("Waypoint not found", startId, endId);
        return true; // Assume blocked if invalid IDs
    }

    const direction = end.subtract(start).normalize();
    const length = BABYLON.Vector3.Distance(start, end);
    const ray = new BABYLON.Ray(start, direction, length);

    // Cast the ray and check if it hits any obstacle
    const hit = scene.pickWithRay(ray);
    return hit && hit.pickedMesh && hit.pickedMesh.isObstacle; // Ensure bookshelves have isObstacle = true
}

  // A* Algorithm Implementation
  aStar(startId, goalId) {
    // Validate startId and goalId
    if (typeof startId !== "string" || typeof goalId !== "string") {
        console.error("Invalid waypoint ID:", startId, goalId);
        return null; // Return null if IDs are invalid
    }

    const startNode = this.nodes[startId];
    const goalNode = this.nodes[goalId];

    if (!startNode || !goalNode) {
        console.error("Waypoint not found:", startId, goalId);
        return null; // Return null if waypoints don't exist
    }

    const openSet = new Set([startId]);
    const cameFrom = {};
    const gScore = {};
    const fScore = {};


    // Initialize scores
    for (const nodeId in this.nodes) {
        gScore[nodeId] = Infinity;
        fScore[nodeId] = Infinity;
    }
    gScore[startId] = 0;
    fScore[startId] = this.calculateDistance(startNode.position, goalNode.position);

    while (openSet.size > 0) {
        // Get the node in openSet with the lowest fScore
        let current = null;
        let lowestFScore = Infinity;
        for (const nodeId of openSet) {
            if (fScore[nodeId] < lowestFScore) {
                lowestFScore = fScore[nodeId];
                current = nodeId;
            }
        }

        

        // If we've reached the goal, reconstruct the path
        if (current === goalId) {
            console.log("Goal reached! Reconstructing path...");
            return this.reconstructPath(cameFrom, current);
        }

        // Move current node from openSet to closedSet
        openSet.delete(current);
        

        // Check if edges for current exist
        if (!this.edges[current] || !Array.isArray(this.edges[current])) {
            console.error("Invalid edges for waypoint:", current, this.edges[current]);
            return null;
        }

        // Explore neighbors
        for (const neighbor of this.edges[current]) {
            const tentativeGScore = gScore[current] + neighbor.cost;

            if (tentativeGScore < gScore[neighbor.id]) {
                cameFrom[neighbor.id] = current;
                gScore[neighbor.id] = tentativeGScore;
                fScore[neighbor.id] = gScore[neighbor.id] + this.calculateDistance(
                    this.nodes[neighbor.id].position,
                    goalNode.position
                );

                if (!openSet.has(neighbor.id)) {
                    openSet.add(neighbor.id);
                    
                }
            }
        }
    }

    // If the loop ends without finding the goal, return null (no path)
    console.error("No path exists between", startId, "and", goalId);
    return null;
}

  // Helper function to reconstruct the path
  reconstructPath(cameFrom, current) {
      const path = [current];
      while (cameFrom[current]) {
          current = cameFrom[current];
          path.unshift(current);
      }
      return path;
  }
}
// export class WaypointGraph {
//     constructor(waypoints) {
//       this.nodes = {}; // Store waypoints
//       this.edges = {}; // Store connections between waypoints
//       this.createGraph(waypoints);
//     }
  
//     createGraph(waypoints) {
//       // Add waypoints as nodes
//       waypoints.forEach(wp => {
//         this.nodes[wp.id] = new BABYLON.Vector3(
//             wp.position.x,
//             wp.position.y,
//             wp.position.z
//           );
//         this.edges[wp.id] = [];
//       });
  
//       // Connect waypoints based on proximity
//       const distanceThreshold = 6;
//       waypoints.forEach(wp1 => {
//         waypoints.forEach(wp2 => {
//           if (wp1.id !== wp2.id) {
//             const dist = this.calculateDistance(wp1.position, wp2.position);
//             if (dist <= distanceThreshold) {
//               this.edges[wp1.id].push({ id: wp2.id, cost: dist });
//             }
//           }
//         });
//       });
//     }
  
//     calculateDistance(pos1, pos2) {
//       return Math.sqrt(
//         Math.pow(pos1.x - pos2.x, 2) +
//         Math.pow(pos1.y - pos2.y, 2) +
//         Math.pow(pos1.z - pos2.z, 2)
//       );
//     }
  
//     // A* Algorithm Implementation
//     aStar(startId, goalId) {
//       const openSet = new Set([startId]);
//       const cameFrom = {};
//       const gScore = {};
//       const fScore = {};
  
//       // Initialize scores
//       for (const nodeId in this.nodes) {
//         gScore[nodeId] = Infinity;
//         fScore[nodeId] = Infinity;
//       }
//       gScore[startId] = 0;
//       fScore[startId] = this.calculateDistance(this.nodes[startId], this.nodes[goalId]);
  
//       while (openSet.size > 0) {
//         // Get the node in openSet with the lowest fScore
//         let current = null;
//         let lowestFScore = Infinity;
//         for (const nodeId of openSet) {
//           if (fScore[nodeId] < lowestFScore) {
//             lowestFScore = fScore[nodeId];
//             current = nodeId;
//           }
//         }
  
//         // If we've reached the goal, reconstruct the path
//         if (current === goalId) {
//           return this.reconstructPath(cameFrom, current);
//         }
  
//         // Move current node from openSet to closedSet
//         openSet.delete(current);
  
//         // Explore neighbors
//         for (const neighbor of this.edges[current]) {
//           const tentativeGScore = gScore[current] + neighbor.cost;
  
//           if (tentativeGScore < gScore[neighbor.id]) {
//             // This path to the neighbor is better than any previous one
//             cameFrom[neighbor.id] = current;
//             gScore[neighbor.id] = tentativeGScore;
//             fScore[neighbor.id] = gScore[neighbor.id] + this.calculateDistance(this.nodes[neighbor.id], this.nodes[goalId]);
  
//             if (!openSet.has(neighbor.id)) {
//               openSet.add(neighbor.id);
//             }
//           }
//         }
//       }
  
//       // If the loop ends without finding the goal, return null (no path)
//       return null;
//     }
  
//     // Helper function to reconstruct the path
//     reconstructPath(cameFrom, current) {
//       const path = [current];
//       while (cameFrom[current]) {
//         current = cameFrom[current];
//         path.unshift(current);
//       }
//       return path;
//     }
//   }