function cakes(recipe, available) {
  console.log(recipe, available);

  var cakeArray = [];
  
  for (var key in recipe) {
    if (!available[key]) {
      return 0;
    }
    cakeArray.push(Math.floor(available[key] / recipe[key]));
  }

  cakeArray.sort(function(a, b) {
    return a - b;
  });
  console.log(cakeArray);
  return cakeArray[0];
}