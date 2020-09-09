import {CREATE_LESSON,DELETE_LESSON,FIND_LESSON,FIND_LESSON_FOR_LESSON,UPDATE_LESSON} from '../actions/lessonActions'

const initialState = {
    lessons: [
    ]
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {

        case FIND_LESSON_FOR_LESSON : {
            return {
                lessons: action.allLessons
            }
        }

        case CREATE_LESSON:{
            return {
                lessons:[
                ...state.lessons,
                action.newLesson
                ]
            }
        }

        case DELETE_LESSON: {
            const first_part_list = state.lessons.slice(0,action.index);
            const second_part_list = state.lessons.slice(action.index+1);

            return {
                lessons: [...first_part_list,...second_part_list]
            }
        }

        case FIND_LESSON : {
            break;

        }

        case UPDATE_LESSON : {
            let newLessons = [...state.lessons];
            newLessons[action.index].lesson = action.updatedLesson;
            return {
                lessons: newLessons
            }
        }

        default : return state;

    }
}

export default lessonReducer;