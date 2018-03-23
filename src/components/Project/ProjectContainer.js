import { connect } from 'react-redux'

import ProjectComponent from './Project'

const mapStateToProps = state => {
    return {
        changed: state.changed
    }
}

export default connect(mapStateToProps)(ProjectComponent)
