class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid option';
        }
        else if (this.state.options.indexOf(option) >= 0) {
            return 'this option already exists';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option) //Add new option to the options array
            };
        });
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your hands in the life of a computer.';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}
// Component to display header (title and subtitle)
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

// Component which displays the "What should I do" button
const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
}

// Component which displayes all existing options and a button "Remove All"
const Options = (props) => {
    return (
        <div>
            {
                props.options.map((option) => <Option key={option} optionText={option} />)
            }    
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    )
}

// Child Component of Options
const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    )
}

// Component which displays the form to add a new option
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {
                error
            };
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>            
            </div>
        )
    }
}

// Stateless functional Component
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};
//ReactDOM.render(<User name="Gordon" age={21} />, document.getElementById('app'));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
