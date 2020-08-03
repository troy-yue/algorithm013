/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length)  return false;

  const obj = {};
  for (let i = s.length - 1; i >= 0; --i) {
      obj[s[i]] = (obj[s[i]] || 0) + 1;
  }

  for (let i = t.length - 1; i >= 0; --i) {
      obj[t[i]] = (obj[t[i]] || 0) - 1;
      if (obj[t[i]] < 0) {
          return false;
      } else if (obj[t[i]] === 0) {
          delete obj[t[i]];
      }
  }

  return Object.keys(obj).length === 0;
};