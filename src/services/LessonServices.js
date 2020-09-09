import {API_URL_A4} from '../common/constants'

export const createLesson = async (moduleId, lesson) => {
    const response = await fetch(API_URL_A4 + `/modules/${moduleId}/lessons`,{
        method:"POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })

    return await response.json();
}

export const findLessonsForModule = async (moduleId) => {
    const response = await fetch(API_URL_A4 + `/modules/${moduleId}/lessons`);

    return await response.json();
}

export const findLesson = async (lessonId) => {
    const response = await fetch(API_URL_A4 + `/lessons/${lessonId}`)
    return await response.json();
}

export const updateLessonService = async (lesson, lessonId ) => {
    const response = await fetch(API_URL_A4 + `/lessons/${lessonId}`,{
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers : {
            "content-type": "application/json"
        }
    })

    return await response.json();
}

export const deleteLesson = async (lessonId) => {
    const response = await fetch (API_URL_A4 + `/lessons/${lessonId}`,{
        method: 'DELETE'
    })

    return await response.json();
}