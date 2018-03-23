import React from 'react'

const CardImage = props => {
    return (
        <div style={styles.containerImage}>
            {props.children}
        </div>
    )
}

const styles = {
    containerImage: {
        width: '100%',
    }
}

export default CardImage