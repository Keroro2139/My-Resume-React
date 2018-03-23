import { connect } from 'react-redux'

import ExperienceComponent from './Experience'

const mapStateToProps = state => {
    return {
        changed: state.changed
    }
}

export default connect(mapStateToProps)(ExperienceComponent)