/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {

let altitudes = [0];   
let maxAltitude = 0;

for (let i = 0; i < gain.length; i++) {
    let newAltitude = altitudes[i] + gain[i]; 
    altitudes.push(newAltitude);

    if (newAltitude > maxAltitude) {
        maxAltitude = newAltitude;
    }
}

return maxAltitude;
  
};

console.log(largestAltitude([-5,1,5,0,-7]));