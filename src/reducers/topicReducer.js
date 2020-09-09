import {CREATE_TOPIC,UPDATE_TOPIC,DELETE_TOPIC,FIND_TOPIC,FIND_TOPIC_FOR_LESSON} from "../actions/topicActions";

const initialState = {
    topics: [
    ]
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {

        case FIND_TOPIC_FOR_LESSON : {
            return {
                topics: action.allTopics
            }
        }

        case CREATE_TOPIC:{
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }
        }

        case DELETE_TOPIC: {
            const first_part_list = state.topics.slice(0,action.index);
            const second_part_list = state.topics.slice(action.index+1);

            return {
                topics: [...first_part_list, ...second_part_list]
            }
        }

        case FIND_TOPIC : {
            break;
        }

        case UPDATE_TOPIC : {
            let newTopics = [...state.topics];
            newTopics[action.index].topic = action.updatedModule;
            return {
                topics: newTopics
            }
        }

        default : return state;

    }
}

export default topicReducer;