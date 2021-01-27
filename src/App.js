import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1> TextShare.io </h1>
      </header>
      <TextShareField/>
    </div>
  );
}

export default App;


class TextShareField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        const xhttp = new XMLHttpRequest();
        xhttp.open('POST', 'http://3.133.103.245:8080/api/new' ,true);
        xhttp.send(this.state.value);
        console.log('submitted with value: ' + this.state.value);
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
                    <shareButton className="Share-button" onClick = {this.handleSubmit}> Share </shareButton>
                </footer>
            </form>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
)