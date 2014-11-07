var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];
  
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

        
 




var walk_the_DOM = function walk(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walk(node, func);
        node = node.nextSibling;
    }
};

walk_the_DOM(startEl, function(node) {
    if(node.nodeType == 1)
    {
   if (matchFunc(node)) resultSet.push(node);
   console.log(node);
     //   alert(node.nodeName + ' id: ' + node.id);
    }
 
});



//var childNodes = startEl.childNodes;

//         for(var i=0; i<childNodes.length; i++) {

//            // console.log(childNodes[i]);
// if (matchFunc(childNodes[i])) resultSet.push(childNodes[i])

// //  console.log(matchFunc);
//         };
    



  // your code here
  // traverse the DOM tree and collect matching elements in resultSet
  // use matchFunc to identify matching elements

  return resultSet;
};


var $ = function(selector) {
 var elements; 
  var selectorMatchFunc = matchFunctionMaker(selector);
   // console.log(selectorMatchFunc);
  //  console.log(selector);
  //console.log(selectorMatchFunc);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  //console.log(selectorMatchFunc);
  return elements;
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
    // console.log(selector.substring(1));
    //  console.log(selector+" ".substring(1)+"arc");






// class="fdasfaf adfasfa adfad dasf photo asdfdasf"

//class="photo dfafaf ad  af asdf"

//clas="photo"

//class="dfrfqwerqewer qwerewrqw photo"



var with_space_front = " "+selector.substring(1);
var with_space_rear = selector.substring(1)+" ";
      return ((sampleDivEl.className.indexOf(with_space_front) > -1) ||  (sampleDivEl.className===selector.substring(1)) || (sampleDivEl.className.indexOf(with_space_rear) > -1)) 
    }
  } else if (selectorType === "tag.class") {
    
    matchFunction = function(sampleDivEl) {
     return (sampleDivEl.className === selector.substring(selector.indexOf('.')+1));
    }
  

  } else if (selectorType === "tag") {
    matchFunction = function(sampleDivEl) {
    console.log(typeof sampleDivEl);
    if (sampleDivEl.tagName === undefined)
    {
      // console.log(sampleDivEl);
      //  console.log(selector);
      //   console.log(sampleDivEl === selector);
      return (sampleDivEl === selector);
      
    } else {
    return (sampleDivEl.tagName.toLowerCase() === selector);  
    }
    
    // define matchFunction for tag

    }
  }
  return matchFunction;
};

