import React from "react";
import {createLessonAction, deleteLessonAction, findLessonForModuleAction,findLessonAction, updateLessonAction} from "../actions/lessonActions";
import {connect} from "react-redux";
import {findLessonsForModule,deleteLesson,createLesson,findLesson, updateLessonService} from "../services/LessonServices";
import LessonTab from "../components/LessonTab.component";

class LessonList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = async ()=> {
        console.log("did mount lesson hi "+this.props.moduleId);
        await this.props.findLessonForModule(this.props.moduleId);
        console.log("did mount lesson done");
    }

    componentDidUpdate = async(prevProps, prevState, snapshot) => {
        if(prevProps.moduleId != this.props.moduleId) {
            this.props.findLessonForModule(this.props.moduleId);
        }
    }

    render() {
        return (
            <div>
                <h4>Lessons</h4>
                <hr />
                <div className={"row"}>
                {
                    this.props.lessons.map((lesson,index) => {
                        console.log(lesson._id);
                        return (
                                <LessonTab
                                    lesson = {lesson}
                                    index = {index}
                                    deleteLesson = {this.props.deleteLesson}
                                    updateLesson = {this.props.updateLesson}
                                    moduleId = {this.props.moduleId}
                                    courseId = {this.props.courseId}
                                    key = {lesson._id}
                                    history = {this.props.history}
                                />
                        )
                    })
                }
                    <div className={"wbdv-lesson-tab rounded"} style={{background:'whitesmoke'}}>
                        <button type="button"
                                className="btn wbdv-row wbdv-button wbdv-delete wbdv-delete-course-btn"
                                onClick={async ()=>{
                                    await this.props.createLesson(this.props.moduleId, "New Lesson");
                                }}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {lessons: state.lessons.lessons}
}

const mapDispatchToProps =  (dispatch) => {
    return{
        createLesson : (moduleId,lesson)=> {
            createLesson(moduleId,{"lesson":lesson}).then((newLesson) =>{
                dispatch(createLessonAction(newLesson));
            })
        },

        findLessonForModule : (moduleId) => {
            findLessonsForModule(moduleId).then((allModules) => {
                console.log(allModules);
                dispatch(findLessonForModuleAction(allModules));
            })

        },

        deleteLesson : (lessonId,index)=> {
            deleteLesson(lessonId).then((response)=>{
                dispatch(deleteLessonAction(index));
            })

        },

        findLesson : (moduleId) => {
            dispatch();
        },

        updateLesson: (updateLesson, lessonIdToUpdate, index) => {
            updateLessonService({"lesson":updateLesson},lessonIdToUpdate).then((response)=>{
                dispatch(updateLessonAction(index, updateLesson));
            })
        }
    }
}

const LessonListContainer = connect(mapStateToProps, mapDispatchToProps)(LessonList);

export default LessonListContainer;


