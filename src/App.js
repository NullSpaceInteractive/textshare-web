import './App.css';
import React from 'react';
import AppShare from "./AppShare";
import { Route, Switch} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path = "/:id" component={AppShare}>
                    </Route>
                    <Route path = "/">
                        <div className="App">
                            <header className="App-header">
                                <h1> TextShare.io </h1>
                            </header>
                            <TextShareField/>
                        </div>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App;

class TextShareField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            newPageId: '/',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        const xhttp = new XMLHttpRequest();
        xhttp.responseType = 'text';
        xhttp.open('POST', 'http://3.133.103.245:8080/api/new' ,true);
        xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhttp.send(this.state.value);
        xhttp.onload = function () {
            this.setState({newPageId: xhttp.response})
        }
        const newURL = '/' + this.state.newPageId;
        this.props.history.push(newURL);
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <div className="Content-wrapper">
                    <div className="Text-box-wrapper">
                        <textarea
                            placeholder="Input some text to share..."
                            autoFocus="true"
                            cols={30}
                            rows={5}
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <footer className="App-footer">
                    <button className="Share-button" onClick = {this.handleSubmit}> Share </button>
                </footer>
            </form>
        )
    }
}

