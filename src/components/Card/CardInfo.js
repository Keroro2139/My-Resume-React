import React from 'react'

const CardInfo = props => {
    return (
        <div style={styles.infoStyle}>
            {props.children}
        </div>
    )
}

const styles = {
    infoStyle: {
        padding: 15,
    }
}

export default CardInfo