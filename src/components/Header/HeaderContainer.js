import { connect } from 'react-redux'

import HeaderComponent from './Header'
import { switchTheme, changeLanguage } from '../../actions'

const mapStateToProps = state => {
    return {
        changed: state.changed,
        language: state.language
    }
}

export default connect(mapStateToProps, { switchTheme, changeLanguage })(HeaderComponent)