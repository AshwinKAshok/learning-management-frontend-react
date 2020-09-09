import React from "react";
import ListElement from "./listElement.component";

class WidgetRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topicId: this.props.widget.topicId ? this.props.widget.topicId : "",
            id: this.props.widget.id ? this.props.widget.id : "",
            name: this.props.widget.name ? this.props.widget.name : "",
            type:this.props.widget.type ? this.props.widget.type : "",
            order_value : this.props.widget.order_value ? this.props.widget.order_value : 0,
            text: this.props.widget.text ? this.props.widget.text : "",
            url : this.props.widget.url ? this.props.widget.url : "",
            size : this.props.widget.size ? this.props.widget.size : 1,
            width : this.props.widget.width ? this.props.widget.width : "0",
            height : this.props.widget.height ? this.props.widget.height : "0",
            cssClass : this.props.widget.cssClass ? this.props.widget.cssClass : "",
            style : this.props.widget.style ? this.props.widget.style : "",
            value : this.props.widget.value ? this.props.widget.value : "",
            listType : this.props.widget.listType ? this.props.widget.listType : "OrderedListWidget",
            outputList : []
        }

        this.widgetNameChangeHandler = this.widgetNameChangeHandler.bind(this);
        this.widgetTextChangeHandler = this.widgetTextChangeHandler.bind(this);
        this.widgetListTextChangeHandler = this.widgetListTextChangeHandler.bind(this);
        this.widgetUrlChangeHandler = this.widgetUrlChangeHandler.bind(this);
        this.widgetListTypeChangeHandler = this.widgetListTypeChangeHandler.bind(this);

    }

    componentDidMount() {
        this.setState({
            outputList : this.state.text.split("\n")
                      })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.type !== this.props.widget.type) {

            this.setState({
                type : this.props.widget.type
                               })
        }

        if(prevState.size !== this.props.widget.size) {

            this.setState({
                              size : this.props.widget.size
                          })
        }

        if(prevState.order_value !== this.props.widget.order_value) {

            this.setState({
                              order_value : this.props.widget.order_value
                          })
        }
    }

    widgetTextChangeHandler = (event) => {
        this.setState({
                          text : event.target.value
                      })
    }

    widgetListTextChangeHandler = (event) => {
        this.setState({
            text : event.target.value,
            outputList : event.target.value.split("\n")
                      })
    }

    widgetUrlChangeHandler = (event) => {
        this.setState({
                          url : event.target.value
                      })
    }


    widgetNameChangeHandler = (event) => {
        this.setState({
                          name : event.target.value
                      })
    }

    widgetListTypeChangeHandler = (event) => {
        this.setState({
            listType : event.target.value
                      })
    }

    render() {

        return (
            <div className={"container-fluid border rounded m-1 bg-light"}>
                <div className={"row mt-2"}>
                    <div className={"col-sm-12 col-md-5"}>
                        {
                            (this.props.widget.type === "heading") &&
                            <h4>Heading Widget</h4>
                        }
                        {
                            (this.props.widget.type === "paragraph") &&
                            <h4>Paragraph Widget</h4>
                        }
                        {
                            (this.props.widget.type === "imageWidget") &&
                            <h4>Image Widget</h4>
                        }

                        {
                            (this.state.listType === "OrderedListWidget" && this.state.type === "listWidget" ) &&
                            <h4>Ordered list Widget</h4>
                        }

                        {
                            (this.state.listType === "UnorderedListWidget" && this.state.type === "listWidget" ) &&
                            <h4>Unordered list Widget</h4>
                        }
                    </div>
                    <div className={"col-2 col-md-1"}>
                        {   this.state.order_value > 0 &&
                            <button className={"btn bg-warning"} onClick={() => {this.props.moveWidgetUpOrder(this.props.index)}}>
                                <i className="fas fa-arrow-up"></i>
                            </button>
                        }
                    </div>
                    <div className={"col-2 col-md-1"}>
                        {   this.props.totalWidgets-1 != this.props.index &&
                            <button className={"btn bg-warning"} onClick={() => {this.props.moveWidgetDownOrder(this.props.index)}}>
                                <i className="fas fa-arrow-down"></i>
                            </button>
                        }

                    </div>
                    <div className={"col-3"}>
                        <select className={"form-control"} onChange={(event)=>{
                            this.props.updateWidgetTypeInLocal(this.props.index, event.target.value);
                        }} value={this.state.type}>
                            <option value={"heading"}>Heading</option>
                            <option value={"paragraph"}>Paragraph</option>
                            <option value={"imageWidget"}>Image</option>
                            <option value={"listWidget"}>List</option>
                        </select>
                    </div>
                    <div className={"col-1"}>
                        <button className={"btn bg-danger"} onClick={() => {
                            this.props.deleteWidget(this.props.widget.id,this.props.index);
                        }}><i className="fas fa-times"></i></button>
                    </div>


                </div>

                {   !this.props.preview &&
                    <hr/>
                }

                {/*widget text*/}
                <div className={"row"}>
                    <div className={"col-12"}>
                        {   (this.state.type === "heading") && !this.props.preview &&
                            <input placeholder={"Heading text"} type="text" className={"form-control"} onChange={this.widgetTextChangeHandler} value={this.state.text}/>
                        }

                        {
                            (this.state.type === "paragraph") && !this.props.preview &&
                            <textarea placeholder={"Your text goes here."} className={"form-control"} onChange={this.widgetTextChangeHandler} value={this.state.text} />
                        }

                        {   (this.state.type === "imageWidget") && !this.props.preview &&
                            <input placeholder={"URL"} type="text" className={"form-control"} onChange={this.widgetUrlChangeHandler} value={this.state.url}/>
                        }

                        {
                            (this.state.type === "listWidget") && !this.props.preview &&
                            <textarea placeholder={"Enter one list item per line "} className={"form-control"} onChange={(event)=>{
                                this.widgetListTextChangeHandler(event);
                            }} value={this.state.text} />
                        }

                    </div>
                </div>

                {/*Input for heading size*/}
                {   this.state.type === "heading" && !this.props.preview &&
                    <div className={"row"}>
                        <div className={"col-12 mt-1"}>
                            <select className={"form-control"} onChange={(event) => {
                                this.props.updateWidgetSizeInLocal(this.props.index, event.target.value);
                            }} value={this.state.size}>
                                <option value={1}>Heading Size 1</option>
                                <option value={2}>Heading Size 2</option>
                                <option value={3}>Heading Size 3</option>
                                <option value={4}>Heading Size 4</option>
                                <option value={5}>Heading Size 5</option>
                                <option value={6}>Heading Size 6</option>
                            </select>
                        </div>

                    </div>
                }

                {   (this.state.type === "listWidget") && !this.props.preview &&
                    <div className={"row"}>
                        <div className={"col-12 mt-1"}>
                            <select className={"form-control"} onChange={(event) => {
                                // this.props.updateWidgetSizeInLocal(this.props.index, event.target.value);
                                this.widgetListTypeChangeHandler(event);
                            }} value={this.state.listType}>
                                <option value={"OrderedListWidget"}>Ordered List</option>
                                <option value={"UnorderedListWidget"}>Unordered List</option>
                            </select>
                        </div>
                    </div>
                }

                {/*input for widget name*/}
                {   !this.props.preview &&
                    <div className={"row"}>
                        <div className={"col-12 mt-1"}>
                            <input placeholder={"Widget name"} className={"form-control"} value={this.state.name} onChange={this.widgetNameChangeHandler}/>
                        </div>
                    </div>
                }

                <hr/>
                <div className={"row"}>
                    <div className={"col-12"}><h1>Preview</h1></div>
                </div>
                <hr/>

                <div className={"row"}>
                    <div className={"col-12"}>
                        {   this.state.type === "heading" &&
                            <div>
                                {   (this.state.size === "1" || this.state.size === 1) &&
                                    <h1>{this.state.text}</h1>
                                }

                                {(this.state.size === "2" || this.state.size === 2) &&
                                 <h2>{this.state.text}</h2>
                                }

                                {(this.state.size === "3" || this.state.size === 3)&&
                                 <h3>{this.state.text}</h3>
                                }

                                {(this.state.size === "4" || this.state.size === 4)&&
                                 <h4>{this.state.text}</h4>
                                }

                                {(this.state.size === "5" || this.state.size === 5)&&
                                 <h5>{this.state.text}</h5>
                                }

                                {(this.state.size === "6" || this.state.size === 6) &&
                                 <h6>{this.state.text}</h6>
                                }
                            </div>
                        }

                        {   this.state.listType === "OrderedListWidget" && this.state.type === "listWidget"  &&
                            <div className={"col-12"}>
                                <ol>
                                    {
                                       this.state.outputList.map((value, index) => {
                                           return <ListElement listElementValue = {value}
                                                               key = {index*12345}
                                           />
                                       })
                                    }
                                </ol>
                            </div>
                        }

                        {   this.state.listType === "UnorderedListWidget" && this.state.type === "listWidget" &&
                            <div className={"col-12"}>
                                <ul>
                                    {
                                        this.state.outputList.map((value, index) => {
                                            return <ListElement listElementValue = {value}
                                                                key = {index*124445}
                                            />
                                        })
                                    }
                                </ul>
                            </div>
                        }

                        {   this.state.type === "paragraph" &&
                            <div className={"col-12"}>{this.state.text}</div>
                        }

                        {   this.state.type === "imageWidget" &&
                            <div className={"col-12"}>
                                <img src={this.state.url} />
                            </div>
                        }
                    </div>
                </div>

                {  <div className={"row"}>
                    <div className={"col-6 col-md-7 col-lg-9"}></div>
                    <div className={"col-6 col-sm-5 col-lg-3"}>
                        <button className={"btn bg-secondary"} onClick={() => {
                            this.props.updateWidget(this.props.widget.id,
                                                    this.state,
                                                    this.props.index);
                        }}>Save this widget
                        </button>
                    </div>
                    </div>
                }
                <br />
            </div>
        )
    }
}

export default WidgetRow;