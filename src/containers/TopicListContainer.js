import React from "react";
import {connect} from "react-redux";
import {
    createTopic,
    findTopic,
    findTopicsForLesson,
    deleteTopic,
    updateTopicService
} from "../services/TopicServices";
import {createTopicAction,updateTopicAction,deleteTopicAction, findTopicAction, findTopicForLessonAction} from "../actions/topicActions";
import TopicPill from "../components/TopicPill.component";

class TopicList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = async ()=> {
        console.log("did mount topiclist hi "+this.props.lessonId);
        await this.props.findTopicForLesson(this.props.lessonId);
        console.log("did mount topiclist done");
    }

    componentDidUpdate = async(prevProps, prevState, snapshot) => {
        if(prevProps.lessonId != this.props.lessonId) {
            this.props.findTopicForLesson(this.props.lessonId);
        }
    }

    render() {

        return (
            <div>
                <br />
                <h4>Topics</h4>
                <hr />
                <div className={"row"}>
                {
                    this.props.topics.map((topic, index) => {
                        return (
                            <TopicPill topic={topic}
                                       index={index}
                                       deleteTopic={this.props.deleteTopic}
                                       updateTopic={this.props.updateTopic}
                                       moduleId={this.props.moduleId}
                                       courseId={this.props.courseId}
                                       lessonId={this.props.lessonId}
                                       key={topic.id}
                                       // topicId = {topic._id}
                                       history = {this.props.history}
                            />
                        )
                    })
                }
                    <div className={"wbdv-lesson-tab rounded"} style={{background:'whitesmoke'}}>
                        <button type="button"
                                className="btn wbdv-row wbdv-button wbdv-delete wbdv-delete-course-btn"
                                onClick={async ()=>{
                                    await this.props.createTopic(this.props.lessonId, "New Topic");
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

    return {topics: state.topics.topics}
}

const mapDispatchToProps =  (dispatch) => {
    return{
        createTopic : (lessonId,title)=> {
            createTopic(lessonId,{"title":title}).then((newTopic) =>{
                    dispatch(createTopicAction(newTopic));
            })

        },

        findTopicForLesson : (lessonId) => {
            findTopicsForLesson(lessonId).then((allModules) => {
                console.log(allModules);
                dispatch(findTopicForLessonAction(allModules));
            })

        },

        deleteTopic : (topicId,index)=> {
            deleteTopic(topicId).then((response)=>{
                    dispatch(deleteTopicAction(index));
            })

        },

        findTopic : (lessonId) => {
            dispatch();
        },

        updateTopic: (updateTopicTitle, topicIdToUpdate, index) => {
            updateTopicService(topicIdToUpdate,{"title":updateTopicTitle}).then((response)=>{
                    dispatch(updateTopicAction(index, updateTopicTitle));
            })
        }
    }
}

const TopicListContainer = connect(mapStateToProps, mapDispatchToProps)(TopicList);

export default TopicListContainer;


