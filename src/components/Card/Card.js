import React, { Component } from 'react'

const Theme = {
    lightTheme: {
        backgroundCard: '#fff'
    },
    darkTheme: {
        backgroundCard: '#202020'
    }
}

class Card extends Component {

    render() {

        const { changed } = this.props
        const Mode = changed.changed

        const styles = {
            cardStyle: {
                width: '100%',
                height: 'auto',
                overflowX: 'hidden',
                boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.5)',
                borderRadius: '2px',
                border: 'none',
                margin: '15px 0',
                backgroundColor: `${Theme[Mode].backgroundCard}`,
            }
        }

        return (
            <div style={styles.cardStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default Card