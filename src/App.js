import React, { Component } from 'react';

import Page from './components/Page'

class App extends Component {
    state = {
        time: 0
    }

    componentDidMount() {
        setTimeout(() => this.setState({ time: 1 }), 1);
    }

    render() {
        const { changed } = this.props
        const Mode = changed.changed

        const Theme = {
            lightTheme: {
                backgroundApp: '#fff'
            },
            darkTheme: {
                backgroundApp: '#424242'
            }
        }

        return (
            <div style={{ height: '100%', background: `${Theme[Mode].backgroundApp}` }}>
                <Page time={this.state.time} />
            </div>
        )
    }
}

export default App