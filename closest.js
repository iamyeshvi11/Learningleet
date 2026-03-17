function closest(n,m)
{
  let closest = 0;
    let minDifference = Infinity;

    // Check numbers around n
    for (let i = n - Math.abs(m); i <= n + Math.abs(m); i++) {
        if (i % m === 0) {
            let difference = Math.abs(n - i);

            if (difference < minDifference || 
               (difference === minDifference && Math.abs(i) > Math.abs(closest))) {
                closest = i;
                minDifference = difference;
            }
        }
    }
    return closest;
}

console.log(closest(15,4))