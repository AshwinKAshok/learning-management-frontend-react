import {
    FIND_WIDGET,
    FIND_ALL_WIDGETS_FOR_TOPIC,
    CREATE_WIDGET,
    DELETE_WIDGET,
    UPDATE_WIDGET,
    MOVE_WIDGET_DOWN,
    MOVE_WIDGET_UP,
    UPDATE_WIDGET_TYPE_IN_LOCAL,
    UPDATE_WIDGET_SIZE_IN_LOCAL
} from '../actions/widgetActions'
import {updateWidget} from "../services/WidgetServices";

const initialState = {
    widgets: []
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_WIDGETS_FOR_TOPIC : {
            let newWidgetList = action.allWidgetsList;

            newWidgetList.sort((widget1,widget2) => {
                return widget1.order_value - widget2.order_value;
            })

            return {
                widgets: newWidgetList
            }

            break;
        }

        case CREATE_WIDGET:{

            return {
                widgets: [
                    ...state.widgets,
                    action.newWidget
                ]
            }

            break;

        }

        case DELETE_WIDGET: {
            const first_part_list = state.widgets.slice(0,action.index);
            const second_part_list = state.widgets.slice(action.index+1);
            for(let i=0; i<second_part_list.length;i++)
            {
                second_part_list[i].order_value = second_part_list[i].order_value -1;
                updateWidget(second_part_list[i].id,second_part_list[i]).then((response) => {
                    console.log(response);
                })
            }

            return {
                widgets: [...first_part_list,...second_part_list]
            }
            break;
        }

        case FIND_WIDGET : {
            break;

        }

        case UPDATE_WIDGET : {
            let newWidgets = [...state.widgets];

            newWidgets[action.index] = action.updatedWidget;
            return {
                widgets: newWidgets
            }

            break;
        }

        case MOVE_WIDGET_UP : {

            let newWidgets = [...state.widgets];
            if(newWidgets[action.index].order_value === 0 || newWidgets[action.index].order_value === "0" ) {
                return state;
            } else {
                newWidgets[action.index] = state.widgets[action.index-1];
                newWidgets[action.index].order_value = newWidgets[action.index].order_value+1;
                updateWidget(newWidgets[action.index].id, newWidgets[action.index]).then((response) => {
                    console.log(response);
                })

                newWidgets[action.index-1] = state.widgets[action.index];
                newWidgets[action.index-1].order_value = newWidgets[action.index].order_value-1;
                updateWidget(newWidgets[action.index-1].id, newWidgets[action.index-1]).then((response) => {
                    console.log(response);
                })

               return {widgets: newWidgets};
            }

            return state;
        }

        case MOVE_WIDGET_DOWN : {
            let newWidgets = [...state.widgets];
            console.log(newWidgets[action.index].order_value);
            if(newWidgets[action.index].order_value === state.widgets.length-1 || newWidgets[action.index].order_value === (state.widgets.length-1.).toString()  ) {
                return state;
            } else {
                newWidgets[action.index] = state.widgets[action.index+1];
                newWidgets[action.index].order_value = newWidgets[action.index].order_value-1;
                updateWidget(newWidgets[action.index].id, newWidgets[action.index]).then((response) => {
                    console.log(response);
                })

                newWidgets[action.index+1] = state.widgets[action.index];
                newWidgets[action.index+1].order_value = newWidgets[action.index].order_value+1;
                updateWidget(newWidgets[action.index+1].id, newWidgets[action.index+1]).then((response) => {
                    console.log(response);
                })

                return {widgets : newWidgets };
            }
            return state;
            break;
        }

        case UPDATE_WIDGET_TYPE_IN_LOCAL : {
            let newWidgetList = [...state.widgets];

            newWidgetList[action.index].type = action.newType;
            return {widgets : newWidgetList};
        }

        case UPDATE_WIDGET_SIZE_IN_LOCAL : {
            let newWidgetList = [...state.widgets];

            newWidgetList[action.index].size = action.newSize;

            return {widgets: newWidgetList};
        }

        default : return state;

    }
}

export default widgetReducer;