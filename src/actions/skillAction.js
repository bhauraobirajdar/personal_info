import { FETCH_SKILLS } from "../utils/constant"

const skills = [
    { type: "NodeJs", level: 85 },
    { type: "Javascript", level: 75 },
    { type: "Posgres", level: 80 },
    { type: "Docker", level: 70 }
]
export const fetchSkillList = () => dispatch => {
    console.log('In action')
    dispatch({
        type: FETCH_SKILLS,
        skills: skills
    })
}