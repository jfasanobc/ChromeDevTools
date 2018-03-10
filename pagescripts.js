let createNewElement = function(elementToCreate, whereToCreateElement){
    var selectElementLocation = $(whereToCreateElement),
        createThisElement = document.createElement(elementToCreate);

    selectElementLocation.appendChild(createThisElement);
}

window.createNewElement = createNewElement;