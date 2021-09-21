// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  // Input - className "string"
  // Output - array like structure containing all nodes with corresponding classname.

  // return result array thing
  var nodeSearch = element || document.body;
  var result = [];

  // if the node / name exists and name cotains classname
  // push node into results

  // check if node has childern
  // if it does, call getElementByClassName on them. & concat

  if (nodeSearch.classList && nodeSearch.classList.contains(className)) {
    result.push(nodeSearch);
  }

  if (nodeSearch.childNodes) {
    for (var i = 0; i < nodeSearch.childNodes.length; i++) {
      result = result.concat(getElementsByClassName(className, nodeSearch.childNodes[i]));
    }
  }

  return result;
};