/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let l = cardPoints.length;
  let pfsum = [];
  let sfsum = [];
  let sum, ans;
  pfsum[0] = cardPoints[0];
  sfsum[l - 1] = cardPoints[l - 1];
  for (let i = 1; i < l; i++) {
    pfsum[i] = pfsum[i - 1] + cardPoints[i];
    sfsum[l - i - 1] = sfsum[l - i] + cardPoints[l - i - 1];
  }

  ans = Math.max(pfsum[k - 1], sfsum[l - k]);

  for (let i = 1; i < k; i++) {
    sum = pfsum[i - 1] + sfsum[l - k + i];
    ans = Math.max(ans, sum);
  }

  return ans;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log(maxScore([2, 2, 2, 2], 2));
