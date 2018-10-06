// Encode everything to utf-8
// Modified source code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[\-|\.|\!|\~|\*|\'|\(|\)|\w]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}
