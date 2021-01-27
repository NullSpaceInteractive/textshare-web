import './App.css';
import React from 'react';

class AppShare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            date: '',
            text: '',
        }
    }

    componentDidMount() {
        this.setState({id: this.props.match.params})
        console.log(this.state.id);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1> TextShare.io </h1>
                </header>
                <p> this is a sharing site </p>
            </div>
        );
    }
}

export default AppShare;