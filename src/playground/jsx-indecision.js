console.log('App.js is running');

// create app object with title, subtitle
// use title and subtitle in template
const app = {
    title: 'Wow Armory',
    subtitle: 'Characters',
    characters: []
}

const character = {
    name: 'Wildur',
    age: 43,
    location: 'Badlands'
};

const onFormSubmit = (e) => {
    e.preventDefault(); // prevents url to be modified after click submit on the form
    const character = e.target.elements.character.value;
    if (character) {
        app.characters.push(character);
        e.target.elements.character.value = '';
        renderIndecisionApp();
    }
    
};

const clearCharacters = () => {
    app.characters = [];
    renderIndecisionApp();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.characters.length);
    const character = app.characters[randomNum];
    alert(character);
}

// excercise:
// create a new template
// div
// h1 -> your name
// p -> age: 
// p -> location

function getLocation(location) {
    if (location) return <p>Location: {location}</p>;
}

const template2 = (
    <div>
        <h1>{character.name ? character.name : 'Anonymous'}</h1>
        {(character.age && character.age >= 20) && <p>Age: {character.age}</p>}
        {getLocation(character.location)}
    </div>
);

const appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.characters.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.characters.length}</p>
            <button disabled={app.characters.length === 0} onClick={makeDecision}>Which character to play?</button>
            <button onClick={clearCharacters}>Remove All</button>
            <ul>
                {
                    app.characters.map((character) => {
                        return <li key={character}>{character}</li>;
                    })
                }
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="character"/>
                <button>Add Character</button>
                
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderIndecisionApp();


