import {API_URL_A4} from '../common/constants'

export const createModule = async (courseId, module) => {
    const response = await fetch(API_URL_A4 + `/courses/${courseId}/modules`,{
        method:"POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })

    return await response.json();
}

export const findModulesForCourse = async (courseId) => {
    const response = await fetch(API_URL_A4 + `/courses/${courseId}/modules`);

    return await response.json();
}

export const findModule = async (moduleId) => {
    const response = await fetch(API_URL_A4 + `/modules/${moduleId}`)
    return await response.json();
}

export const updateModule = async ( module, moduleId ) => {
    console.log(module);
    const response = await fetch(API_URL_A4 + `/modules/${moduleId}`,{
        method: 'PUT',
        body: JSON.stringify(module),
        headers : {
            "content-type": "application/json"
        }
    })

    return await response.json();
}

export const deleteModule = async (moduleId) => {
    const response = await fetch (API_URL_A4 + `/modules/${moduleId}`,{
        method: 'DELETE'
    })

    return await response.json();
}