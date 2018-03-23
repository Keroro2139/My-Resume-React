import React, { Component } from 'react';

import Header from '../Header'
import Home from '../Home'
import Footer from '../Footer'
import HOC from '../HOC'

class Page extends Component {
    render() {
        return (
            <div id='container'>
                <Header />
                <Home />
                <Footer />
            </div>
        )
    }
}

export default HOC('time')(Page)