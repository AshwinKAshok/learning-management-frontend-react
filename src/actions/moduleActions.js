export const CREATE_MODULE = "CREATE_MODULE";
export const DELETE_MODULE = "DELETE_MODULE";
export const FIND_MODULES_FOR_COURSE = 'FIND_MODULES_FOR_COURSE';
export const UPDATE_MODULE = "UPDATE_MODULE";
export const FIND_MODULE = "FIND_MODULE";

export const findModulesForCourseAction = (allModules) => {
    return {
        type: FIND_MODULES_FOR_COURSE,
        allModules : allModules
    }
}

export const createModuleAction = (newModule) => {
    return {
        type: CREATE_MODULE,
        newModule: newModule
    }
}

export const deleteModuleAction = (index) => {
    return {
        type: DELETE_MODULE,
        index: index
    }
}

export const updateModuleAction = (index, updatedModule) => {
    return {
        type :UPDATE_MODULE,
        updatedModule : updatedModule,
        index : index
    }
}

export const findModuleAction = (moduleId) => {
    return {
        type : FIND_MODULE,
        moduleId : moduleId
    }
}


