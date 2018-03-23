import { connect } from 'react-redux'

import EducationComponent from './Education'

const mapStateToProps = state => {
    return {
        changed: state.changed
    }
}

export default connect(mapStateToProps)(EducationComponent)