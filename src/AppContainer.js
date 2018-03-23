import { connect } from 'react-redux'

import AppComponent from './App'

const mapStateToProps = state => {
    return {
        changed: state.changed
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)