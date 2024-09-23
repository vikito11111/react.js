// Get root HTML Element
var rootHtmlElement = document.getElementById('root');

// Initialize root React element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic React elements
var headerReactSectionElement = React.createElement(
    "header",
    { className: "navigation", id: "site-header" },
    React.createElement(
        "h1",
        null,
        "Hello JSX from React"
    ),
    React.createElement(
        "h2",
        null,
        "JSX is awesome!"
    )
);

// Render content
rootReactElement.render(headerReactSectionElement);

//npx babel --watch src --out-dir build --presets react-app/prod
//npm run watch --> for package.json/watch