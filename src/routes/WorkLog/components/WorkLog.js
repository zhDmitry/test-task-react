import React from 'react'
import PropTypes from 'prop-types'
import MonthSelect from './MonthSelect';
import WorklogTable from './WorkLogTable';
import WorkLogForm from './WorklogForm';

export const WorkLog = ({ onMonthSelect, data }) => (
  <div className="row">
    <div className="col-md-10" >
      <MonthSelect onSelect={onMonthSelect}></MonthSelect>
    </div>
    <div className="col-md-2" >
          <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
            Add
</button>
    <WorkLogForm />
    </div>
    <div className="col-md-12">
      <WorklogTable data={data} />
    </div>
  </div>
)


export default WorkLog
