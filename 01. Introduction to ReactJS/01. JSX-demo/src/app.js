// Get root HTML Element
const rootHtmlElement = document.getElementById('root');

// Initialize root React element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic React elements
const headerReactSectionElement = (
    <header className="navigation" id="site-header">
        <h1>Hello JSX from React</h1>
        <h2>JSX is awesome!</h2>
    </header>
);

// Render content
rootReactElement.render(headerReactSectionElement);

//npx babel --watch src --out-dir build --presets react-app/prod
//npm run watch --> for package.json/watch