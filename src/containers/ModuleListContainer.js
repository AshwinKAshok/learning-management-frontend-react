import React from "react";
import {createModuleAction, deleteModuleAction, findModulesForCourseAction,updateModuleAction} from "../actions/moduleActions";
import {
    findModulesForCourse,
    updateModule,
    findModule,
    deleteModule,
    createModule
} from "../services/ModuleServices";
import {connect} from "react-redux";
import ModuleRow from "../components/ModuleRow.component";

class ModuleList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = async ()=> {
        console.log("did mount hi "+this.props.courseId);
        await this.props.findModuleForCourse(this.props.courseId);
        console.log("did mount done");

    }


    render() {

        return (

            <div >
                <h4>Modules</h4>
                <hr/>
                {
                    this.props.modules.map((module,index) => {
                        return (
                            <div key={module._id}>
                                <ModuleRow module = {module}
                                           index = {index}
                                           deleteModule = {this.props.deleteModule}
                                           updateModule = {this.props.updateModule}
                                           courseId = {this.props.courseId}
                                           key = {index}
                                           history = {this.props.history}
                                />
                            </div>
                            )
                    })
                }
                <div >
                    <button type="button"
                            className="btn bg-secondary wbdv-moduleList-btn"
                            onClick={async ()=>{
                                await this.props.createModule(this.props.courseId, "New Module");
                            }}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {modules: state.modules.modules}
}

const mapDispatchToProps =  (dispatch) => {
    return{
        createModule : (courseId,module)=> {
            createModule(courseId,{"module":module}).then((module) =>{
                dispatch(createModuleAction(module));
            })

        },

        findModuleForCourse : (courseId) => {
            findModulesForCourse(courseId).then((allModules) => {
                console.log(allModules);
                dispatch(findModulesForCourseAction(allModules));
            })

        },

        deleteModule : (moduleId,index)=> {
            deleteModule(moduleId).then((response)=>{
                console.log(response);
                dispatch(deleteModuleAction(index));
            })

        },

        findModule : (moduleId) => {
            dispatch();
        },

        updateModule: (updatedModule, moduleIdToUpdate, index) => {
            updateModule({"module":updatedModule},moduleIdToUpdate).then((response)=>{
                dispatch(updateModuleAction(index, updatedModule));
            })
        }
    }
}

const ModuleListContainer = connect(mapStateToProps, mapDispatchToProps)(ModuleList);

export default ModuleListContainer;