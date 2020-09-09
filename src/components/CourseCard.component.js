import React from "react";
import logo from '../static/doc-thumbnail.png';
import {Link} from "react-router-dom";

class CourseCardComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            updateMode : false,
            clicked : false
        }
        this.toggleUpdateModeHandler = this.toggleUpdateModeHandler.bind(this);
    }

    toggleUpdateModeHandler = () => {
        this.setState((state) => ({
            updateMode: !state.updateMode
        }))
    }

    render() {
        return(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="card wbdv-course-card" >
                    <img src={logo} className="card-img-top" alt={logo} />
                    <div className="card-body">
                        { !this.state.updateMode &&
                            <Link to={`/course-editor/${this.props.course._id}`}>
                              <h5>{this.props.course.courseTitle}</h5>
                            </Link>
                        }

                        { this.state.updateMode &&
                          <input type="text" className="form-control" onChange={(event) => {
                              this.props.updateCourseNameHandler(event, this.props.courseIndex);
                          }}
                                 value={this.props.course.courseTitle}
                          />
                        }

                        <p className="card-text">Last Updated: {this.props.course.courseUpdatedDate}</p>
                        <p>Owned by: me</p>
                    </div>
                    <div className="card-body">
                        {/*Delete course button*/}
                        { !this.state.updateMode &&
                              <button type="button"
                                      className="btn wbdv-row wbdv-button wbdv-delete wbdv-delete-course-btn"
                                      onClick={()=>this.props.deleteCourseHandler(this.props.course._id)}
                              >
                                  <i className="fas fa-times wbdv-delete-course-icon"></i>
                              </button>
                        }

                        { this.state.updateMode &&
                              <button type="button"
                                      className="btn wbdv-row wbdv-button wbdv-delete wbdv-delete-course-btn"
                                      onClick={()=>{
                                          this.props.updateCourseHandler(this.props.courseIndex)
                                          this.toggleUpdateModeHandler();
                                      }}>
                                  <i className="fas fa-check wbdv-delete-course-icon"></i>
                              </button>
                        }

                        { !this.state.updateMode &&
                              <button type="button"
                                      className="btn wbdv-row wbdv-button wbdv-delete wbdv-delete-course-btn"
                                      onClick={this.toggleUpdateModeHandler}>
                                  <i className="fas fa-pencil-alt wbdv-delete-course-icon"></i>
                              </button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseCardComponent;