import React from "react";
import {createCourse, deleteCourse, findAllCourses, updateCourse} from "../services/CourseService";
import CourseTableHeaderComponent from "../components/CourseTableHeader.component";
import CourseTableColumnHeaderComponent from "../components/CourseTableColumnHeader.component";
import CourseListComponent from "../components/CourseList.component";
import CourseGridComponent from "../components/CourseGrid.component";

class CourseTableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listView : true,
            courses: [],
            newCourseTitle: ""
        }

        this.newCourseTitleChangeHandler = this.newCourseTitleChangeHandler.bind(this);
        this.addCourse = this.addCourse.bind(this);
        // this.toggleViewHandler = this.toggleViewHandler.bind(this);
        this.updateCourseNameHandler = this.updateCourseNameHandler.bind(this);
        this.deleteCourseHandler = this.deleteCourseHandler.bind(this);
    }

    componentDidMount = async () => {

        const allCourses = await findAllCourses();

        this.setState({
                          courses: allCourses
                      })
    }

    addCourse = async () =>
    {
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const newCourse = {
            courseTitle: this.state.newCourseTitle,
            courseUpdatedDate: date
        }
        const actualCourse = await createCourse(newCourse)
        const allCourses = await findAllCourses()
        this.setState({
                          courses: allCourses
                      })
    }

    // toggleViewHandler = ()=>{
    //     this.setState((state) => ({
    //         listView: !state.listView
    //     }))
    // }

    newCourseTitleChangeHandler= (event)=> {
        this.setState({
                          newCourseTitle: event.target.value
                      });
    }

    updateCourseHandler = async (courseIndex) =>{
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let newCourseData = {
            "courseTitle" : this.state.courses[courseIndex].courseTitle,
            "courseUpdatedDate" : date
        }
        await updateCourse(this.state.courses[courseIndex]._id, newCourseData).then(status => {console.log(status)});
        const allCourses = await findAllCourses();

        this.setState({
            updateMode: false,
            courses: allCourses
                      })

    }

    updateCourseNameHandler = (event, courseIndex) => {
        var updatedCourses = this.state.courses;
        updatedCourses[courseIndex].courseTitle = event.target.value;
        this.setState((state) => ({
            courses: updatedCourses
            }));
    }

    deleteCourseHandler = async (courseId) => {
        await deleteCourse(courseId).then((response)=>{
            console.log(response);
        })
        const allCourses = await findAllCourses()
        this.setState({
                          courses: allCourses
                      })
        
    }

    render() {
        var listViewBool = true;
        if(this.props.table)
        {
            listViewBool = true;
        }else{
            listViewBool = false;
        }

        return (
            <div>
                <CourseTableHeaderComponent newCourseTitleChangeHandler = {this.newCourseTitleChangeHandler}
                                            addCourseHandler = {this.addCourse}
                />

                <CourseTableColumnHeaderComponent listView={listViewBool}/>

                { this.props.table &&
                    <CourseListComponent courses={this.state.courses}
                                         updateCourseNameHandler={this.updateCourseNameHandler}
                                         updateCourseHandler={this.updateCourseHandler}
                                         deleteCourseHandler={this.deleteCourseHandler}
                                         toggleEditorViewHandler = {this.props.toggleEditorViewHandler}
                    />
                }

                { this.props.grid &&
                    <CourseGridComponent courses={this.state.courses}
                                         updateCourseNameHandler={this.updateCourseNameHandler}
                                         updateCourseHandler={this.updateCourseHandler}
                                         deleteCourseHandler={this.deleteCourseHandler}
                                         toggleEditorViewHandler = {this.props.toggleEditorViewHandler}
                    />
                }
            </div>
        )
    }
}

export default CourseTableContainer;