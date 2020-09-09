import {API_URL} from '../common/constants';

export const updateCourse = async (courseId, newCourseData) => {

    console.log(`${API_URL}/${courseId}`);
    console.log(newCourseData);
    const response = await fetch (`${API_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(newCourseData),
        headers : {
            "content-type": "application/json"
        }
    })

    return await response.json();
}

export const deleteCourse = async (courseId) => {
    const response = await fetch(`${API_URL}/${courseId}`, {
        method: 'DELETE'
    })
    return await response.json()
}

export const createCourse = async (course) =>
{
    const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const findAllCourses = async () => {
    const response = await fetch(API_URL);

    return await response.json();
}

export const findCourseByID = async (courseId) => {
    const response = await fetch(`${API_URL}/${courseId}`);

    return await response.json();
}
