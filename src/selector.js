var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];
  
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // your code here
  // traverse the DOM tree and collect matching elements in resultSet
  // use matchFunc to identify matching elements

  return resultSet;
};


// detect and return the type of selector
// return one of these types: id, class, tag.class, tag
//
var selectorTypeMatcher = function(selector) {
  // your code here
  if (selector[0]==="#") {
    return "id";
  } else if (selector[0]===".") {
    return "class";
  } else if (selector.indexOf(".")>1) {
    return "tag.class";
  } else return "tag";
  

};

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    // define matchFunction for id
    matchFunction = function(sampleDivEl) {
      return (sampleDivEl.id === selector.substring(1));
   
    }
  } else if (selectorType === "class") {
    matchFunction = function(sampleDivEl) { 
      return ((sampleDivEl.className.indexOf(selector.substring(1)) > -1)) 
    }
  } else if (selectorType === "tag.class") {
    
    matchFunction = function(sampleDivEl) {
     return (sampleDivEl.className === selector.substring(selector.indexOf('.')+1));
    }
  

  } else if (selectorType === "tag") {
    matchFunction = function(sampleDivEl) {
      return (sampleDivEl.tagName.toLowerCase() === selector);
    // define matchFunction for tag
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};