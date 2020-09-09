import React from "react";
import ModuleListContainer from "./ModuleListContainer";
import LessonListContainer from "./LessonListContainer";
import TopicListContainer from "./TopicListContainer";
import {combineReducers,createStore} from "redux";
import {Provider} from 'react-redux';
import moduleReducer from "../reducers/moduleReducer";
import lessonReducer from "../reducers/lessonReducer";
import topicReducer from "../reducers/topicReducer";
import widgetReducer from "../reducers/WidgetReducer";
import {findCourseByID} from "../services/CourseService";
import "../static/courseEditorReact.style.client.css"
import WidgetListContainer from "./WidgetListContainer";

const rootReducer = combineReducers({
    modules : moduleReducer,
    lessons : lessonReducer,
    topics : topicReducer,
    widgets: widgetReducer
    })

const store = createStore(rootReducer);

class CourseEditorContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courseTitle : ""
        }
    }

    componentDidMount = async () =>{
       await findCourseByID(this.props.courseId).then((course) => {
           this.setState({
               courseTitle : course.courseTitle
                         })
       })
    }

    render() {
        return (
            <Provider store={store}>
                <div className={"container-fluid"}>
                    <div className={"row bg-light"} >
                        <div className={"col-1"}>
                            <button type="button"
                                    className="btn bg-secondary wbdv-courseEditor-close-btn"
                                    onClick={()=>{
                                        this.props.history.push("/")
                                    }}
                            >
                                <i className="fas fa-times fa-lg"></i>
                            </button>
                        </div>
                        <div className={"col-11"}>
                            <h1>{this.state.courseTitle}</h1>
                        </div>
                    </div>
                    <br />
                    <div className={"row"}>
                        <div className={"col-12 col-sm-3"}  >
                            <ModuleListContainer courseId = {this.props.courseId}
                                                 history = {this.props.history}
                            />
                        </div>
                        <div className={"col-12 col-sm-9 "}>
                            {
                                this.props.moduleId &&
                                <LessonListContainer courseId={this.props.courseId}
                                                     moduleId={this.props.moduleId}
                                                     history = {this.props.history}
                                />
                            }

                            {   this.props.lessonId &&
                                <TopicListContainer courseId={this.props.courseId}
                                                    moduleId={this.props.moduleId}
                                                    lessonId={this.props.lessonId}
                                                    history = {this.props.history}
                                />
                            }

                            {
                                this.props.topicId &&
                                <WidgetListContainer courseId={this.props.courseId}
                                                     moduleId={this.props.moduleId}
                                                     lessonId={this.props.lessonId}
                                                     topicId ={this.props.topicId}
                                />
                            }
                        </div>
                    </div>

                </div>

            </Provider>

        )
    }
}

export default CourseEditorContainer;