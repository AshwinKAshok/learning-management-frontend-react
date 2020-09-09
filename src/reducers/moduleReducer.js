import {CREATE_MODULE,DELETE_MODULE,FIND_MODULES_FOR_COURSE, FIND_MODULE, UPDATE_MODULE} from '../actions/moduleActions'

const initialState = {
    modules: [
    ]
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {

        case FIND_MODULES_FOR_COURSE : {
            return {
                modules: action.allModules
            }
        }

        case CREATE_MODULE:{
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            }
        }

        case DELETE_MODULE: {
            const first_part_list = state.modules.slice(0,action.index);
            const second_part_list = state.modules.slice(action.index+1);

            return {
                modules: [...first_part_list,...second_part_list]
            }
        }

        case FIND_MODULE : {
            break;

        }

        case UPDATE_MODULE : {
            let newModules = [...state.modules];

            newModules[action.index].module = action.updatedModule;
            console.log(newModules[action.index].module);
            return {
                modules: newModules
            }
        }

        default : return state;

    }
}

export default moduleReducer;