/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const obj = {};
  for (let i = 0; i < strs.length; ++i) {
      const str = strs[i].split('').sort().join('');
      obj[str] = (obj[str] || []).concat(strs[i]);
  }
  return Object.values(obj);
};