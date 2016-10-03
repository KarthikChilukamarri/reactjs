import React from 'react';

class App extends React.Component {
    render() {
        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        };
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>This is Content</h1>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>This is Header</h1>
            </div>
        );
    }
}

export default App;