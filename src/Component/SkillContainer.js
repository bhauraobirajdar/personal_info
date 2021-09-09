import { connect } from 'react-redux'
import { fetchSkillList } from '../actions/skillAction'
import Skills from './Skills'

const mapStateToProps = (state) => {
    console.log("In mapStateToProps ", state.skillReducer)
    return {
        skillListTest : state.skillReducer && state.skillReducer.skillData
    }
}

const mapDispatchToProps = dispatch => {
    console.log("In mapDispatchToProps")
    return {
        getSkills: () => dispatch(fetchSkillList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills)