let createNewElement = function(elementToCreate, whereToCreateElement){
  var selectElementLocation = $(whereToCreateElement),
    createThisElement = document.createElement(elementToCreate);

  if (!elementToCreate || !whereToCreateElement){
    return "Please provide the element you would like to create and the element you are appending it to.\n" + "Example createNewElement('div', 'body');";
  }
    
  selectElementLocation.appendChild(createThisElement);

this.addClass = function(classNameEntered) {
  createThisElement.className = classNameEntered;
}

  return "Element " + elementToCreate + " created";
}

window.createNewElement = createNewElement();