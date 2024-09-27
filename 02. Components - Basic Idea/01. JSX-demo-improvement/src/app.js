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

// Create component without JSX
function Main(props) {
    return React.createElement(
        'main', 
        {},
        React.createElement(
            'h3',
            {},
            props.title
        ),
        React.createElement(
            'ul',
            {},
            React.createElement(
                'li',
                {},
                'The Matrix'
            ),
            React.createElement(
                'li',
                {},
                'Man of Steel'
            )
        )
    );
}

const siteContent = React.createElement(
    'div',
    {},
    headerReactSectionElement,
    React.createElement(
        Main,
        {title: 'Best Moviews'},
    )
);

const siteContentUsingSJX = (
    <div>
        {headerReactSectionElement}
        <Main title="Best movies" />
    </div>
);

// Render content
//rootReactElement.render(siteContent);
rootReactElement.render(siteContentUsingSJX)

//npx babel --watch src --out-dir dist --presets react-app/prod
//npm run watch --> for package.json/watch