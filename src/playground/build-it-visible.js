const appRoot = document.getElementById('app');
let visibility = false;

const onButtonClick = () => {
    visibility = !visibility;
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={onButtonClick}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p>Here are the details</p>
                </div>
             )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
