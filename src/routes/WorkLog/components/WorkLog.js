import React from 'react'
import MonthSelect from './MonthSelect';
import WorklogTable from './WorkLogTable';
import WorkLogForm from './WorklogForm';

export const WorkLog = ({ onMonthSelect, data, addWorkLog, removeWorkLog }) => (
  <div className="container">
    <div className="col-md-2" >
      <MonthSelect onSelect={onMonthSelect}></MonthSelect>
    </div>
    <div className="col-md-8" >
    </div>
    <div className="col-md-2" >
      <WorkLogForm addWorkLog={addWorkLog} data={data} />
    </div>
    <div className="row">
      <div className="col-md-12">
        <WorklogTable data={data} removeWorkLog={removeWorkLog} />
      </div>
    </div>
  </div>
)


export default WorkLog
