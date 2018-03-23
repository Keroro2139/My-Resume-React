import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div id='footer'>
                <div style={styles.footerContainer}>
                    <a href="https://www.facebook.com/Keroro2139" target="_blank">
                        <div id='container-icon-facebook'>
                            <i className="fab fa-facebook-f"></i>
                        </div>
                    </a>
                    <a href="https://github.com/Keroro2139" target="_blank">
                        <div id="container-icon-github">
                            <i className="fab fa-github"></i>
                        </div>
                    </a>
                    <a href="https://line.me/ti/p/FOh9apTdMG" target="_blank">
                        <div id="container-icon-line">
                            <i className="fab fa-line"></i>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

const styles = {
    footerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100%)',
    }
}

export default Footer