// Define a new map
const idNames = new Map()



// Set key-value pairs
idNames.set(1, "Tim the T-Rex")
idNames.set(2, "Vince the Veloci")
idNames.set(3, "Sue the Bellu")
idNames.set(4, "Sueyuyu the Bellu")


// // Get the value a specific key maps to
console.log(idNames.get(3))

// // // Iterate over the keys of the map
for (const id of idNames.keys()) {
  console.log(idNames.get(id))
}

// // Check if the map has a key
const key = 4
if (idNames.has(key)) {
  console.log(`${key} found!`)
}

// // Delete a key (with its value) from the map
idNames.delete(2)
console.log(idNames);


// // Get the size of the map
console.log(idNames.size)

//challenge
const dinos = [
      { id: 1, name: "Tim the T-Rex" },
      { id: 2, name: "Vince the Veloci" },
      { id: 3, name: "Sue the Bellu" },
      { id: 1, name: "Dean the Edmon" },
      { id: 2, name: "Sam the Seismo" },
      { id: 5, name: "Karen the Cryol" }
    ]


function arrayOfDuplicates(dinos) {
    let duplicates = []
    const idNames = new Map()

    for(const {id, name} of dinos) {
       if(idNames.has(id)) {
         duplicates.push(idNames.get(id))
         duplicates.push(name)
       }else{
         idNames.set(id,name)
       }
        
    }

    return duplicates
    
}

console.log(arrayOfDuplicates(dinos));  //time complexity O(n) space complexity O(n)



