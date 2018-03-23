import React from 'react'

const CardDetail = props => {
    return (
        <div style={styles.detailContainer}>
            {props.children}
        </div>
    )
}

const styles = {
    detailContainer: {
        padding: '0 20px',
        marginTop: 30,
    }
}

export default CardDetail