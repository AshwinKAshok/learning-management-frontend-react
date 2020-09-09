export const CREATE_WIDGET = "CREATE_WIDGET";
export const DELETE_WIDGET = "DELETE_WIDGET";
export const FIND_ALL_WIDGETS_FOR_TOPIC = 'FIND_ALL_WIDGETS_FOR_TOPIC';
export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const FIND_WIDGET = "FIND_WIDGET";
export const MOVE_WIDGET_UP = "MOVE_WIDGET_UP";
export const MOVE_WIDGET_DOWN = "MOVE_WIDGET_DOWN";
export const UPDATE_WIDGET_TYPE_IN_LOCAL = "UPDATE_WIDGET_TYPE_IN_LOCAL";
export const UPDATE_WIDGET_SIZE_IN_LOCAL = "UPDATE_WIDGET_SIZE";


export const findALLWidgetsForTopic = (allWidgetsList) => {
    return {
        type: FIND_ALL_WIDGETS_FOR_TOPIC,
        allWidgetsList : allWidgetsList
    }
}

export const createWidgetAction = (newWidget) => {
    return {
        type: CREATE_WIDGET,
        newWidget: newWidget
    }
}

export const deleteWidgetAction = (index) => {
    return {
        type: DELETE_WIDGET,
        index: index
    }
}

export const updateWidgetAction = (index, updatedWidget) => {
    return {
        type :UPDATE_WIDGET,
        updatedWidget : updatedWidget,
        index : index
    }
}

export const findWidgetAction = (widgetId) => {
    return {
        type : FIND_WIDGET,
        widgetId : widgetId
    }
}

export const moveWidgetUpOrder = (index) => {
    return {
        type : MOVE_WIDGET_UP,
        index : index
    }
}

export const moveWidgetDownOrder = (index) => {
    return {
        type : MOVE_WIDGET_DOWN,
        index : index
    }
}

export const updateWidgetTypeInLocal = (index, newType) => {
    return {
        type : UPDATE_WIDGET_TYPE_IN_LOCAL,
        index : index,
        newType : newType
    }
}

export const updateWidgetSizeInLocal = (index, newSize) => {
    return {
        type : UPDATE_WIDGET_SIZE_IN_LOCAL,
        index : index,
        newSize : newSize
    }
}
