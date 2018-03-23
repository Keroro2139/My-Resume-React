import React, { Component } from 'react'

import Loading from '../Loading'

const LoaderHOC = (propName) => (WrappedComponent) => {
    return class LoaderHOC extends Component {

        isEmpty(prop) {
            return (
                prop === null ||
                prop === undefined ||
                prop.length === 0 ||
                prop === 0 //for this case.
            )
        }

        render() {
            return this.isEmpty(this.props[propName]) ?
                <Loading />
                : <WrappedComponent {...this.props}
                />
        }
    }
}

export default LoaderHOC