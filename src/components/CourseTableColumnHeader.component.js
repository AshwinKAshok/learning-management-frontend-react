import React from "react";
import '../static/CourseTable.style.client.css'
import {Link} from "react-router-dom";

const CourseTableColumnHeaderComponent = (props) => {
    return (

        <nav className="wbdv-second-header">

            <div className="wbdv-col-1"></div>

            <div className="wbdv-col-7">
                <h6 className="wbdv-header wbdv-title">Title</h6>
            </div>

            <div className="wbdv-col-3">
                <h6 className="wbdv-header wbdv-owner">Owned by</h6>
            </div>

            <div className="wbdv-col-6">
                <h6 className="wbdv-header wbdv-last-modified">Last modified</h6>
            </div>

            <div className="wbdv-col-1">
                { !props.listView &&
                  <Link to={`/table`}>
                      <button type="button"
                              className="btn wbdv-button wbdv-grid-layout wbdv-button wbdv-list-layout"
                              id="wbdv-grid-view-btn" onClick={props.toggleViewHandler}>
                          <i className="fas fa-list wbdv-grid-view-icon"></i>
                      </button>
                  </Link>
                }
                { props.listView &&
                  <Link to={`/grid`}>
                      <button type="button"
                              className="btn wbdv-button wbdv-grid-layout wbdv-button wbdv-list-layout"
                              id="wbdv-grid-view-btn" onClick={props.toggleViewHandler}>

                          <i className="fas fa-grip-horizontal wbdv-grid-view-icon"></i>

                      </button>
                  </Link>
                }
            </div>

            <div className="wbdv-col-1">
                <button type="button" className="btn wbdv-header wbdv-sort" id="wbdv-sort-btn">
                    <i className="fas fa-sort-alpha-down" id="wbdv-sort-icon"></i>
                </button>
            </div>

            <div className="wbdv-col-1"></div>
        </nav>
    )
};

export default CourseTableColumnHeaderComponent;