import { FETCH_SKILLS } from '../utils/constant'

const initialState = {};
const skillReducer = (state = initialState, action) => {
    console.log('In reducer ', action)
    switch(action.type) {
        case FETCH_SKILLS : return {
            ...state, 
            skillData: action.skills
        }

        default: return {
            ...state
        }
    }
}

export default skillReducer;