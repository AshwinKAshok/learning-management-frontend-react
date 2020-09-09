import React from "react";
import '../static/CourseTable.style.client.css'
import CourseRowComponent from "./CourseRow.component";

const CourseListComponent = (props) => {
    return (
        props.courses.map((course,index)=>{

            return <CourseRowComponent key={course._id}
                                       updateCourseNameHandler = {props.updateCourseNameHandler}
                                       updateCourseHandler = {props.updateCourseHandler}
                                       deleteCourseHandler = {props.deleteCourseHandler}
                                       courseIndex = {index}
                                       course = {course}
                                       toggleEditorViewHandler = {props.toggleEditorViewHandler}
            />

        })
    )
}


export default CourseListComponent;