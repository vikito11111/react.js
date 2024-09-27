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

// Create component without JSX
function Main(props) {
    return React.createElement('main', {}, React.createElement('h3', {}, props.title), React.createElement('ul', {}, React.createElement('li', {}, 'The Matrix'), React.createElement('li', {}, 'Man of Steel')));
}

var siteContent = React.createElement('div', {}, headerReactSectionElement, React.createElement(Main, { title: 'Best Moviews' }));

var siteContentUsingSJX = React.createElement(
    "div",
    null,
    headerReactSectionElement,
    React.createElement(Main, { title: "Best movies" })
);

// Render content
//rootReactElement.render(siteContent);
rootReactElement.render(siteContentUsingSJX);

//npx babel --watch src --out-dir dist --presets react-app/prod
//npm run watch --> for package.json/watch