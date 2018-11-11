

import React, {Component} from 'react';

class EditStudentDetails extends Component {


    render() {
        let styleData="h5";

        return (
            <form className={'container mt-5'} onSubmit={this.props.handleSubmitCB}>
                <div className="row">
                    <div className="col-2">
                        <label className={styleData}>Enter name:</label>
                        <input className="form-control" type='text'/>

                    </div>
                    <div className="col-2">
                        <label className={styleData}>Enter lastname:</label>
                        <input className="form-control" type='text'/>
                    </div>
                    <div className="col-2"><label className={styleData}>Enter index:</label><input
                        className="form-control" type='text'/></div>
                    <div className="col-2"><label className={styleData}>Enter direction:</label><input
                        className="form-control" type='text'/></div>
                    <div className="col-3">
                        <button type="submit" className={'btn btn-success mt-4'}> Save</button>
                    </div>
                </div>

            </form>


        )
    }
    }


export default EditStudentDetails;
