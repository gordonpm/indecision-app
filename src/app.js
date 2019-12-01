import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Header from './components/Header';
import Option from './components/Option';
import Action from './components/Action';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing.
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
     }
    componentWillUnmount() { // not used very often. This is called when IndecisionApp component goes away.
        console.log('ComponentWillUnmount');
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] })); // property of arrow function when returning object
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
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
        this.setState((prevState) => ({ 
            options: prevState.options.concat(option) 
        }));
    }
    render() {
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
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

// Component which displayes all existing options and a button "Remove All"
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }    
            
        </div>
    )
}

// Stateless functional Component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };
//ReactDOM.render(<User name="Gordon" age={21} />, document.getElementById('app'));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));