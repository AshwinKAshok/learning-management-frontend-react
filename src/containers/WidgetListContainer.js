import React from "react";
import {
    createWidget,
    updateWidget,
    findAllWidgets,
    findWidgetById,
    findWidgetsForTopic,
    deleteWidget
} from "../services/WidgetServices";

import {
    createWidgetAction,
    updateWidgetAction,
    deleteWidgetAction,
    moveWidgetDownOrder,
    moveWidgetUpOrder,
    findALLWidgetsForTopic,
    findWidgetAction,
    updateWidgetTypeInLocal,
    updateWidgetSizeInLocal
} from "../actions/widgetActions";

import {connect} from "react-redux";
import WidgetRow from "../components/WidgetRow.component";
import "../static/widgetList.css"

class WidgetList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            preview : false
        }

        this.togglePreview = this.togglePreview.bind(this);
    }

    componentDidMount = async () => {
        await this.props.findWidgetsForTopic(this.props.topicId);
    }

    componentDidUpdate = async(prevProps, prevState, snapshot) => {
        if(prevProps.topicId != this.props.topicId) {
            await this.props.findWidgetsForTopic(this.props.topicId);
        }
    }

    togglePreview = () => {
        this.setState(state =>({
            preview: !state.preview
        }))
    }

    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-10"}></div>
                    <div className={"col-2"}>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick = {this.togglePreview} />
                            <label className="custom-control-label" htmlFor="customSwitch1">
                                Toggle Preview
                            </label>
                        </div>
                        <br/>
                    </div>
                </div>
                <div className={"row"}>
                    {
                        this.props.widgets.map( (widget, index) => {
                            return (
                                <WidgetRow widget={widget}
                                           index = {index}
                                           topicId = {this.props.topicId}
                                           moveWidgetUpOrder = {this.props.moveWidgetUpOrder}
                                           moveWidgetDownOrder = {this.props.moveWidgetDownOrder}
                                           deleteWidget = {this.props.deleteWidget}
                                           updateWidget = {this.props.updateWidget}
                                           updateWidgetTypeInLocal = {this.props.updateWidgetTypeInLocal}
                                           updateWidgetSizeInLocal = {this.props.updateWidgetSizeInLocal}
                                           key = {widget.id}
                                           preview = {this.state.preview}
                                           totalWidgets = {this.props.widgets.length}
                                />
                            )
                        })
                    }
                </div>

                <div className={"row"}>
                    <div className={"col-12"}>

                        <button className={"btn bg-secondary wbdv-widgetList-btn"} onClick={() => {
                            const widgetTemplate = {
                                "topicId": this.props.topicId,
                                "type": "heading",
                                "size": 1,
                                "order_value" : this.props.widgets.length,
                                "listType" : "OrderedListWidget"
                            }
                            this.props.createWidget(this.props.topicId, widgetTemplate);
                        }}><i className="fas fa-plus"></i></button>
                    </div>
                </div>

            </div>

        )
    }
}

const mapStateToProps =  (state) => {
    return {widgets : state.widgets.widgets}
}

const mapDispatchToProps = (dispatch) => {
    return {
        createWidget : (topicId, widget) => {
            createWidget(topicId, widget).then((newWidget) => {
                dispatch(createWidgetAction(newWidget));
            })
        },

        findWidgetsForTopic : (tid) => {
            findWidgetsForTopic(tid).then((widgetList) => {
              dispatch(findALLWidgetsForTopic(widgetList));
            })
        },

        findAllWidgets : () => {
            findAllWidgets().then((response) => {
                console.log(response);
            })

        },

        updateWidget : (wid, widget,index) => {
            updateWidget(wid,widget).then((response) => {
                console.log("after update:");
                console.log(response);
                dispatch(updateWidgetAction(index, widget));
            })
        },

        updateWidgetTypeInLocal : (index, newType) => {
            dispatch(updateWidgetTypeInLocal(index, newType));
        },

        deleteWidget : (wid, index) => {

            deleteWidget(wid).then((response) => {
                console.log(response);
                dispatch(deleteWidgetAction(index));
            })
        },

        moveWidgetUpOrder : (index) => {
            dispatch(moveWidgetUpOrder(index));
        },

        moveWidgetDownOrder : (index) => {
            dispatch(moveWidgetDownOrder(index));
        },

        updateWidgetSizeInLocal : (index, newSize) => {
            dispatch(updateWidgetSizeInLocal(index, newSize));
        },
    }
}

const WidgetListContainer = connect(mapStateToProps, mapDispatchToProps)(WidgetList);

export default WidgetListContainer;