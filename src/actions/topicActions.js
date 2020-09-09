export const CREATE_TOPIC = "CREATE_TOPIC";
export const DELETE_TOPIC = "DELETE_TOPIC";
export const FIND_TOPIC_FOR_LESSON = 'FIND_TOPIC_FOR_LESSON';
export const UPDATE_TOPIC = "UPDATE_TOPIC";
export const FIND_TOPIC = "FIND_TOPIC";

export const findTopicForLessonAction = (allTopics) => {
    return {
        type: FIND_TOPIC_FOR_LESSON,
        allTopics : allTopics
    }
}

export const createTopicAction = (newTopic) => {
    return {
        type: CREATE_TOPIC,
        newTopic: newTopic
    }
}

export const deleteTopicAction = (index) => {
    return {
        type: DELETE_TOPIC,
        index: index
    }
}

export const updateTopicAction = (index, updatedTopic) => {
    return {
        type :UPDATE_TOPIC,
        index : index,
        updatedTopic : updatedTopic
    }
}

export const findTopicAction = (allTopics) => {
    return {
        type : FIND_TOPIC,
        allTopics : allTopics
    }
}


