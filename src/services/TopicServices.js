import {API_CUSTOM} from '../common/constants'

export const createTopic = async (lessonId , topic) => {
    const response = await fetch(API_CUSTOM + `/api/lessons/${lessonId}/topics`,{
        method:"POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })

    return await response.json();
}

export const findTopicsForLesson = async (lessonId) => {
    const response = await fetch(API_CUSTOM + `/api/lessons/${lessonId}/topics`);

    return await response.json();
}

export const findTopic = async (topicId) => {
    const response = await fetch(API_CUSTOM + `/api/topics/${topicId}`)
    return await response.json();
}

export const updateTopicService = async (topicId, topic ) => {
    const response = await fetch(API_CUSTOM + `/api/topics/${topicId}`,{
        method: 'PUT',
        body: JSON.stringify(topic),
        headers : {
            "content-type": "application/json"
        }
    })

    return await response.json();
}

export const deleteTopic = async (topicId) => {
    const response = await fetch (API_CUSTOM + `/api/topics/${topicId}`,{
        method: 'DELETE'
    })

    return await response.json();
}