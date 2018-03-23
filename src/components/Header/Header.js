import React, { Component } from 'react'

import Switch from 'material-ui/Switch'

const Theme = {
    lightTheme: {
        color: '#202020',
        clock: '#202020',
        language: '#202020',
    },
    darkTheme: {
        color: '#E41E26',
        clock: '#fff',
        language: '#dcdcdc',
    }
}

class Header extends Component {
    state = {
        changedTheme: false,
        date: new Date(),
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked })
        var index = ''
        if (event.target.checked) {
            index = 'darkTheme'
        }
        else if (!event.target.checked) {
            index = 'lightTheme'
        }
        this.props.switchTheme(index)
    }
    handleThai() {
        this.props.changeLanguage('TH')
    }
    handleEnglish() {
        this.props.changeLanguage('EN')
    }
    render() {
        const { date } = this.state
        var Hours = date.getHours().toString()
        var Minutes = date.getMinutes().toString()
        var Seconds = date.getSeconds().toString()
        if (Hours >= 0 && Hours < 10) {
            Hours = '0' + Hours
        }
        if (Minutes >= 0 && Minutes < 10) {
            Minutes = '0' + Minutes
        }
        if (Seconds >= 0 && Seconds < 10) {
            Seconds = '0' + Seconds
        }

        const Clock = Hours + ':' + Minutes + ':' + Seconds

        const { changed } = this.props
        var Mode = changed.changed

        const styles = {
            headerStyle: {
                width: '100%',
                height: 60,
                marginBottom: -10,
            },
            position: {
                display: 'flex',
            },
            label: {
                fontSize: 16,
                color: `${Theme[Mode].color}`,
                padding: '17px 10px',
                marginRight: 0,
                right: 80,
                position: 'absolute',
                display: 'inline-block',
            },
            time: {
                color: `${Theme[Mode].clock}`,
                float: 'left',
                padding: '17px 30px'
            },
            switch: {
                position: 'absolute',
                paddingTop: 6,
                right: 30
            },
            languageTH: {
                marginTop: 18,
                color: `${Theme[Mode].language}`,
                fontSize: 14,
            },
            slash: {
                padding: '17px 5px',
                color: `${Theme[Mode].language}`,
                fontSize: 14
            },
            languageENG: {
                marginTop: 18.75,
                color: `${Theme[Mode].language}`,
                fontSize: 14
            },

        }

        if (Mode === 'darkTheme') {
            Mode = 'Dark theme'
        }
        else if (Mode === 'lightTheme') {
            Mode = 'Light theme'
        }

        return (
            <div style={styles.headerStyle}>
                <div style={styles.position}>
                    <p style={styles.time}>{Clock}</p>
                    <p style={styles.languageTH} id='thai-language' onClick={this.handleThai.bind(this)}>ภาษาไทย</p>
                    <p style={styles.slash}>|</p>
                    <p style={styles.languageENG} id='eng-language' onClick={this.handleEnglish.bind(this)}>English (Demo)</p>
                    <p style={styles.label}>{Mode}</p>
                    <div style={styles.switch}>
                        <Switch
                            checked={Mode === 'Light theme' ? false : true}
                            onChange={this.handleChange('changedTheme')}
                            value="changedTheme"
                            color="secondary"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header