import React from 'react';
import { getFormValueForKeys, validateDateRange } from '../utils';


class WorkLogForm extends React.Component {
    static formKeys = ['date', 'comment', 'startTime', 'endTime'];

    state = {
        errors: null
    }

    onSubmit = (e) => {
        if (this.refs.form.checkValidity()) {
            const formValue = getFormValueForKeys(WorkLogForm.formKeys, this.refs.form);
            try {
                validateDateRange({
                    selectedDate: formValue.date,
                    worklogList: this.props.data,
                    startTime: formValue.startTime,
                    endTime: formValue.endTime
                })
                this.formReset();
                this.props.addWorkLog(formValue);
                $('#myModal').modal('toggle'); // eslint-disable-line
            } catch (e) {
                this.setState({
                    errors: e.message
                })
            }

        }

    }
    formReset = () => {
        this.refs.form.reset();
        this.setState({ errors: null })
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                    Add
                </button>
                <div className="modal fade" id="myModal" ref="dialog" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <form action={"javascript:0"} ref="form">
                                <div className="modal-header">
                                    <button type="button" className="close" onClick={this.formReset} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h4 className="modal-title" id="myModalLabel">Add worklog form</h4>
                                </div>
                                <div className="modal-body">
                                    {
                                        this.state.errors && <div className="alert alert-danger">
                                            {this.state.errors}
                                        </div>
                                    }
                                    <div className="input-group">
                                        <span className="input-group-addon" id="date"> Date </span>
                                        <input type="date" className="form-control" placeholder="Date" name="date" aria-describedby="date" required />
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-addon" id="startTime"> Start Time </span>
                                        <input type="time" className="form-control" name="startTime" placeholder="Start Time" required aria-describedby="startTime" />
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-addon" id="endTime"> End Time </span>
                                        <input type="time" className="form-control" name="endTime" placeholder="End Time" required aria-describedby="endTime" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="comment">Comment:</label>
                                        <textarea className="form-control" rows="5" name="comment" id="comment"></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="reset" onClick={this.formReset} className="btn btn-default" ref="close" data-dismiss="modal">Close</button>
                                    <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div >
        );
    }
}

export default WorkLogForm;