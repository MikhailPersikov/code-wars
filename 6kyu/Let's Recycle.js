function recycle(array) {
  const materials = { 
    "paper": [], 
    "glass": [], 
    "organic": [],
    "plastic": [] 
  }
  
  array.forEach(el => {
    materials[el.material].push(el.type);
    if(el.secondMaterial)
      materials[el.secondMaterial].push(el.type);
  });

  return Object.values(materials);
}