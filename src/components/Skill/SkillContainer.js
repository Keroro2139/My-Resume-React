import { connect } from 'react-redux'

import SkillComponent from './Skill'

const mapStateToProps = state => {
    return {
        changed: state.changed
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillComponent)