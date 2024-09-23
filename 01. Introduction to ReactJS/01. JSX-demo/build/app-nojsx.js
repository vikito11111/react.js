// Get root HTML Element
var rootHtmlElement = document.getElementById('root');
console.dir(rootHtmlElement);

// Initialize root React element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic React elements   .createElement(elementType, options, text/context);
var headerReactElement = React.createElement('h1', null, 'Hello JSX from React');
console.log(headerReactElement);

var secondHeaderReactElement = React.createElement('h2', null, 'JSX is awesome!');
console.log(secondHeaderReactElement);

var headerReactSectionElement = React.createElement('header', null, headerReactElement, secondHeaderReactElement);

// Render content
rootReactElement.render(headerReactSectionElement);