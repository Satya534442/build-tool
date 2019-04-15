import React, {Component} from 'react';

export default class Tool extends Component{
    constructor(props){
        super(props);
        this.buildFileRef = React.createRef();
        this.fileSelectEvent = this.fileSelectEvent.bind(this);
        this.state = {
            disableBuildBtn: true
        }
    }
    fileSelectEvent(){
        const node = this.buildFileRef.current;
        this.setState({disableBuildBtn: node ? false: true});
    }
    render(){
        return (<div className="container" style={{"textAlign": "center"}}>
            <h1>
                Welcome to Front End Engineering Build
            </h1>
            <div className="form-container" style={{"border": "1px solid", "width": "75%" ,"borderRadius": "19px","margin": "50px auto"}}>
                <form>
                    <div className="row form-group" style={{"marginRight": "0", "marginLeft": "0", "width": "100%", "padding": "30px"}}>
                        <label className="col-lg-4" htmlFor="datafile">Enter the project directory:</label>
                        <input ref={this.buildFileRef} type="file" id="datafile" name="datafile" size="40" className="form-control-file border col-lg-8"  multiple onChange={this.fileSelectEvent} /> 
                        <div style={{ width: "100%", "marginTop": "50px"}}>
                            <button type="button" className="btn btn-primary" style={{ width: "30%", "marginRight": "30px"}} disabled={this.state.disableBuildBtn}>Start Build</button>
                            <button type="button" className="btn btn-secondary" style={{ width: "30%"}}>Clear</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>);
    }
}