import React from "react";
import {Link} from "react-router-dom";

class TopicPill extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input : this.props.topic.title,
            inputView : false,
            hover : false
        }

        this.topicInputChangeHandler = this.topicInputChangeHandler.bind(this);
        this.toggleInputView = this.toggleInputView.bind(this);
        this.toggleHover = this.toggleHover.bind(this);
    }

    topicInputChangeHandler = (event) => {
        this.setState({
                          input : event.target.value
                      })
    }

    toggleInputView = () => {
        this.setState({
                          inputView : !this.state.inputView
                      })
    }

    toggleHover = () => {
        this.setState((state) => ({
            hover: !state.hover
        }))
    }

    render() {
        var linkStyle;
        if (this.state.hover) {
            linkStyle = {background: 'lightblue'}
        } else {
            linkStyle = { background: 'whitesmoke'}
        }
        return (
            <div className={"wbdv-lesson-tab rounded"} style={linkStyle} onClick={this.toggleHover}  >
                {   !this.state.inputView &&
                    <Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topic.id}`}>
                        <span>{this.state.input}</span>
                    </Link>
                }

                {   this.state.inputView &&
                    <input value={this.state.input} onChange={this.topicInputChangeHandler}/>
                }

                {   this.state.inputView &&

                    <button type="button"
                    className="btn wbdv-row wbdv-button wbdv-delete wbdv-delete-course-btn col-2"
                    onClick={()=>{
                    this.toggleInputView();
                    this.props.updateTopic(this.state.input,this.props.topic.id,this.props.index);}}>
                    <i className="fas fa-check wbdv-delete-course-icon"></i>
                    </button>
                }

                {   !this.state.inputView &&
                    <button type="button"
                    className="btn wbdv-row wbdv-button wbdv-delete wbdv-delete-course-btn"
                    onClick={this.toggleInputView}>
                    <i className="fas fa-pencil-alt wbdv-delete-course-icon"></i>
                    </button>
                }

                {   !this.state.inputView &&
                    <button type="button"
                    className="btn wbdv-row wbdv-button wbdv-delete wbdv-delete-course-btn"
                    onClick={()=>{
                        this.props.deleteTopic(this.props.topic.id,this.props.index);
                        this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`)
                    }}>
                    <i className="fas fa-times wbdv-delete-course-icon"></i>
                    </button>
                }
            </div>
        )
    }
}

export default TopicPill;