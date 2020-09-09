import React from "react";
import '../static/CourseTable.style.client.css'
import CourseCardComponent from "./CourseCard.component";

const CourseGridComponent  = (props) => {
    return (
        <div className="row">
            {
                props.courses.map((course, index) => {
                    return <CourseCardComponent key={course._id}
                                                updateCourseNameHandler={props.updateCourseNameHandler}
                                                updateCourseHandler={props.updateCourseHandler}
                                                deleteCourseHandler={props.deleteCourseHandler}
                                                toggleEditorViewHandler = {props.toggleEditorViewHandler}
                                                courseIndex={index}
                                                course={course}

                    />
                })
            }
        </div>
    )
}

export default CourseGridComponent;

