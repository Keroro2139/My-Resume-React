import { connect } from 'react-redux'

import InfoComponent from './Info'

const mapStateToProps = state => {
    return {
        changed: state.changed
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoComponent)