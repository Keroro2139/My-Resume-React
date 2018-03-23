import React from 'react'

const CardContainer = props => {
    return (
        <div style={styles.containerContainer}>
            {props.children}
        </div>
    )
}

const styles = {
    containerContainer: {
        padding: 15,
    }
}

export default CardContainer