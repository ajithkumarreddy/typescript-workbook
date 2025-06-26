// Must not be a null {} type
let user: {} = {};              // ✅

let user1: object = {};          // ✅

let user2: Record<string, any> = { name: "Hanuman" }; // ✅

 // let f: {} = null;        // ❌ Error (null not assignable)
// let g: {} = undefined;   // ❌ Error