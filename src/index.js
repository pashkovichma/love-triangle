/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let length = preferences.length;
  let count = 0;
  for (let i = 0; i <length; i++) {
    let second = preferences[i]-1;
    let third = preferences[second]-1;
    if (preferences[third]-1 == i&&second!=i&&second!=third&&i!=third){
      count++;
    }
    
  }
  return count/3;
};
