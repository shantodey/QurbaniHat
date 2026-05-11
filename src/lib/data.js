import data from'@/assets/animal.json';
 export const allAnimal= async()=>{
    return data
 }

 export const allAnimalId= async(id) => {
    return data.find(i=>i.id===Number(id))
 }