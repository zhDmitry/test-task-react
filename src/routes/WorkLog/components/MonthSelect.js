import React from 'react'

const MONTH_LIST = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const MonthSelect = ({ onSelect }) => {
    return (
        <select onClick={(e)=>onSelect(e.target.value)}>
            {
                MONTH_LIST.map((el,i)=>{
                    return <option key={i} value={i}>
                            {el}
                    </option>
                })
            }
        </select>
    )
}

export default MonthSelect