import React from "react";
import {Link} from "react-router-dom";

class ModuleRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input : this.props.module.module,
            inputView : false,
            hover : false
        }

        this.moduleInputChangeHandler = this.moduleInputChangeHandler.bind(this);
        this.toggleInputView = this.toggleInputView.bind(this);
    }

    moduleInputChangeHandler = (event) => {
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
            <div className={"rounded wbdv-module-row"} style={linkStyle} onClick={this.toggleHover}>
                <div className={"row"}>
                    <div className={"col-7"}>
                        {   !this.state.inputView &&
                            <Link to={`/course-editor/${this.props.courseId}/module/${this.props.module._id}`}>{this.state.input}</Link>
                        }

                        {   this.state.inputView &&
                            <input value={this.state.input} className={"form-control"} onChange={this.moduleInputChangeHandler}/>
                        }
                    </div>

                    <div className={"col-5"}>
                        {   this.state.inputView &&
                            <button type="button"
                                    className="btn wbdv-row wbdv-button wbdv-delete wbdv-delete-course-btn col-2"
                                    onClick={()=>{
                                        this.toggleInputView();
                                        this.props.updateModule(this.state.input,this.props.module._id,this.props.index);}}>
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
                                    className="btn wbdv-row wbdv-button wbdv-delete wbdv-delete-course-btn col-2"
                                    onClick={()=>{
                                        this.props.deleteModule(this.props.module._id,this.props.index);
                                        this.props.history.push(`/course-editor/${this.props.courseId}`);
                                    }}>
                                <i className="fas fa-times wbdv-delete-course-icon"></i>
                            </button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ModuleRow;