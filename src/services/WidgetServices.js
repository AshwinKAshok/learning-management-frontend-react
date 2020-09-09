import {API_CUSTOM} from "../common/constants";

export const createWidget = async (topicId, widget) => {
    const response = await fetch(API_CUSTOM + `/api/topics/${topicId}/widgets`,{
        method: "POST",
        body : JSON.stringify(widget),
        headers : {
            'content-type' : 'application/json'
        }
    });

    return await response.json();
}


export const findWidgetsForTopic= async (tid) => {
    const response = await fetch(API_CUSTOM + `/api/topics/${tid}/widgets`);

    return await response.json();
}

export const findAllWidgets = async () => {
    const response = await fetch(API_CUSTOM + `/api/widgets`);

    return await response.json();
}

export const findWidgetById = async (wid) => {
    const response = await fetch(API_CUSTOM + `/api/widgets/${wid}`);

    return await response.json();
}

export const updateWidget = async (wid,widget) => {
    const response = await fetch( API_CUSTOM + `/api/widgets/${wid}`,{
        method : "PUT",
        body : JSON.stringify(widget),
        headers : {
            'content-type' : 'application/json'
        }
    });

    return await response.json();
}

export const deleteWidget = async (wid) => {
    const response = await fetch( API_CUSTOM + `/api/widgets/${wid}`, {
        method : "DELETE"
    });

    return await response.json();
}