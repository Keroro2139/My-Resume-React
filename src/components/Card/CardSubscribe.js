import { connect } from 'react-redux'

import CardComponent from './Card'

const mapStateToProps = state => {
    return {
        changed: state.changed
    }
}

export default connect(mapStateToProps)(CardComponent)
