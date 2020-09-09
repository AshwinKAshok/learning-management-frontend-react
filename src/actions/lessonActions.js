export const CREATE_LESSON = "CREATE_LESSON";
export const DELETE_LESSON = "DELETE_LESSON";
export const FIND_LESSON_FOR_LESSON = 'FIND_LESSON_FOR_LESSON';
export const UPDATE_LESSON = "UPDATE_LESSON";
export const FIND_LESSON = "FIND_LESSON";

export const findLessonForModuleAction = (allLessons) => {
    return {
        type: FIND_LESSON_FOR_LESSON,
        allLessons : allLessons
    }
}

export const createLessonAction = (newLesson) => {
    return {
        type: CREATE_LESSON,
        newLesson: newLesson
    }
}

export const deleteLessonAction = (index) => {
    return {
        type: DELETE_LESSON,
        index: index
    }
}

export const updateLessonAction = (index, updatedLesson) => {
    return {
        type :UPDATE_LESSON,
        updatedLesson : updatedLesson,
        index : index
    }
}

export const findLessonAction = (lessonId) => {
    return {
        type : FIND_LESSON,
        moduleId : lessonId
    }
}


