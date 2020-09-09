import React from "react";
import '../static/CourseTable.style.client.css'

const CourseTableHeaderComponent = (props) => {
    return (<nav className="wbdv-header bg-primary">

        <div className="wbdv-hamburger-button wbdv-col-1">
            <button type="button" className="btn btn-primary wbdv-field wbdv-hamburger">
                <i className="fas fa-bars"></i>
            </button>
        </div>


        <div className="wbdv-col-7 wbdv-course-manager-label">
            <h5 className="wbdv-label wbdv-course-manager">Course Manager</h5>
        </div>


        <div className="wbdv-field wbdv-new-course wbdv-new-course-field wbdv-col-10">
            <input type="text" className="form-control" placeholder="New course title" onChange={props.newCourseTitleChangeHandler}/>
        </div>


        <div className="wbdv-col-1">
            <button type="button" className="btn btn-danger wbdv-button wbdv-add-course" onClick={props.addCourseHandler}>
                <i className="fas fa-plus wbdv-add-button"></i>
            </button>
        </div>

        <div className="wbdv-col-1"></div>
    </nav>)
}

export default CourseTableHeaderComponent;

