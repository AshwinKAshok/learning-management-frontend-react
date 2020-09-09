import React from "react";
import CourseTableContainer from "./CourseTable.container";
import CourseEditorContainer from "./CourseEditor.container";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class CourseManagerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorView : false
        }
        this.toggleEditorViewHandler = this.toggleEditorViewHandler.bind(this);
    }

    toggleEditorViewHandler = ()=>{
        this.setState((state) => ({
            editorView: !state.editorView
        }))
    }

    render() {
        return (
            <Router>
                <Route
                    path = {"/"}
                    exact={true}
                    render = {(props)=> <CourseTableContainer {...props} table={"table"}/>
                    }
                />

                <Route
                    path = {"/table"}
                    exact={true}
                    render = {(props)=> <CourseTableContainer {...props} table={"table"}/>
                    }
                />

                <Route
                    path = {"/grid"}
                    exact={true}
                    render = {(props)=> <CourseTableContainer {...props} grid={"grid"}/>
                    }
                />

                <Route
                    path={"/course-editor/:courseId"}
                    exact={true}
                    render = {(props)=>
                        <CourseEditorContainer {...props}
                                               courseId = {props.match.params.courseId}/>
                    }/>

                <Route
                    path={"/course-editor/:courseId/module/:moduleId"}
                    exact={true}
                    render = {(props)=>
                        <CourseEditorContainer {...props}
                                               courseId = {props.match.params.courseId}
                                               moduleId = {props.match.params.moduleId}
                        />
                    }/>

                <Route
                    path={"/course-editor/:courseId/module/:moduleId/lesson/:lessonId"}
                    exact={true}
                    render = {(props)=>
                        <CourseEditorContainer {...props}
                                               courseId = {props.match.params.courseId}
                                               moduleId = {props.match.params.moduleId}
                                               lessonId = {props.match.params.lessonId}
                        />
                }/>

                <Route
                    path={"/course-editor/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"}
                    exact={true}
                    render = {(props)=>
                        <CourseEditorContainer {...props}
                                               courseId = {props.match.params.courseId}
                                               moduleId = {props.match.params.moduleId}
                                               lessonId = {props.match.params.lessonId}
                                               topicId  = {props.match.params.topicId}
                        />
                    }/>
            </Router>
        );
    }
}

export default CourseManagerContainer;