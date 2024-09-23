// Get root HTML Element
const rootHtmlElement = document.getElementById('root');
console.dir(rootHtmlElement);

// Initialize root React element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic React elements   .createElement(elementType, options, text/context);
const headerReactElement = React.createElement('h1', null, 'Hello JSX from React');
console.log(headerReactElement);

const secondHeaderReactElement = React.createElement('h2', null, 'JSX is awesome!');
console.log(secondHeaderReactElement);

const headerReactSectionElement = React.createElement('header', null, headerReactElement, secondHeaderReactElement);

// Render content
rootReactElement.render(headerReactSectionElement);