import React from "react";
import {Link} from "react-router-dom";

class CourseRowComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            updateMode : false,
            hover : false
        }

        this.toggleUpdateModeHandler = this.toggleUpdateModeHandler.bind(this);
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleUpdateModeHandler = () => {
        this.setState((state) => ({
            updateMode: !state.updateMode
        }))
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

        return(
            <div className="wbdv-row wbdv-course wbdv-course-row">
                {/*Empty space as filler*/}
                <div   className="wbdv-col-1"></div>

                {/*Document icon*/}
                <div onClick={this.toggleHover} style={linkStyle} className="wbdv-col-1 wbdv-course-row-icon-div">
                    <i className="fas fa-file-alt wbdv-row wbdv-icon wbdv-file-icon"></i>
                </div>

                {/*Course title*/}
                <div onClick={this.toggleHover} style={linkStyle} className="wbdv-col-6 wbdv-course-row-title-div">

                    { !this.state.updateMode &&
                      <Link to={`/course-editor/${this.props.course._id}`}>{this.props.course.courseTitle}</Link>

                    }

                    { this.state.updateMode &&
                      <input onClick={()=>{
                          if(this.state.hover) {
                              this.toggleHover();
                          }
                      }
                      } type="text" className="form-control" onChange={(event) => {
                          this.props.updateCourseNameHandler(event, this.props.courseIndex);
                      }}
                             value={this.props.course.courseTitle}
                      />
                    }
                </div>

                {/*Owner name*/}
                <div onClick={this.toggleHover} style={linkStyle} className="wbdv-col-3 wbdv-course-row-owner-div">
                    <span className="wbdv-row wbdv-owner wbdv-course-row-owner">me</span>
                </div>

                {/*Last modified date/time*/}
                <div onClick={this.toggleHover} style={linkStyle} className="wbdv-col-5 wbdv-course-row-modified-div">
                    <span className="wbdv-row wbdv-modified-date wbdv-course-row-modified">{this.props.course.courseUpdatedDate}</span>
                </div>

                {/*Empty space as filler*/}
                <div onClick={this.toggleHover} style={linkStyle} className="wbdv-col-1 wbdv-course-row-empty-div"></div>

                {/*Delete course button*/}
                { !this.state.updateMode &&
                  <div onClick={this.toggleHover} style={linkStyle} className="wbdv-col-1 wbdv-course-row-delete-course-div">
                      <button type="button"
                              className="btn wbdv-row wbdv-button wbdv-delete wbdv-delete-course-btn"
                              onClick={()=>{this.props.deleteCourseHandler(this.props.course._id)}}
                      >
                          <i className="fas fa-times wbdv-delete-course-icon"></i>
                      </button>
                  </div>
                }

                { this.state.updateMode &&
                  <div onClick={this.toggleHover} style={linkStyle} className="wbdv-col-1 wbdv-course-row-delete-course-div"></div>
                }

                { this.state.updateMode &&
                  <div onClick={this.toggleHover} style={linkStyle} className="wbdv-col-1 wbdv-course-row-delete-course-div">
                      <button type="button"
                              className="btn wbdv-row wbdv-button wbdv-delete wbdv-delete-course-btn"
                              onClick={()=>{
                                  this.props.updateCourseHandler(this.props.courseIndex);
                                  this.toggleUpdateModeHandler();
                              }}>
                          <i className="fas fa-check wbdv-delete-course-icon"></i>
                      </button>
                  </div>
                }

                { !this.state.updateMode &&
                  <div  style={linkStyle} className="wbdv-col-1 wbdv-course-row-delete-course-div">
                      <button type="button"
                              className="btn wbdv-row wbdv-button wbdv-delete wbdv-delete-course-btn"
                              onClick={()=> {
                                  if(!this.state.hover) {
                                      this.toggleHover();
                                  }

                                  this.toggleUpdateModeHandler();
                              }}>
                          <i className="fas fa-pencil-alt wbdv-delete-course-icon"></i>
                      </button>
                  </div>
                }

                {/*Empty space as filler*/}
                <div className="wbdv-col-1"></div>
            </div>
        )
    }
}

export default CourseRowComponent;