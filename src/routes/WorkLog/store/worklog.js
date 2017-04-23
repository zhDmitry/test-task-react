import moment from 'moment';

import data from '../../../../db.json'


export const SET_SELECTED_MONTH = 'SET_SELECTED_MONTH';
export const REMOVE_WORKLOG = 'REMOVE_WORKLOG';
export const SET_WORKLOGS = 'SET_WORKLOGS';
export const ADD_WORKLOG = 'ADD_WORKLOG';


const createAction = (type) => (payload) => ({ type, payload })

export const addWorkLog = createAction(ADD_WORKLOG);
export const setSelectedMonth = createAction(SET_SELECTED_MONTH);
export const setWorkLogs = createAction(SET_WORKLOGS);
export const removeWorkLog = createAction(REMOVE_WORKLOG);

export const actions = {
    addWorkLog,
    setSelectedMonth,
    setWorkLogs,
    removeWorkLog
}


const worklogInitialState = {
    list: data,
    selectedMonth: 0,
    dialogVisiblity: false,
}

export const worklog = (state = worklogInitialState, { type, payload }) => {
    switch (type) {
        case SET_WORKLOGS:
            return {
                ...state,
                list: payload
            };
        case SET_SELECTED_MONTH:
            return {
                ...state,
                selectedMonth: payload
            };
        case REMOVE_WORKLOG:
            return {
                ...state,
                list: state.list.filter(el => el.id !== payload)
            }
        case ADD_WORKLOG:
            const worklogToAdd = {
                ...payload,
                date: moment(payload.date).format(),
                startTime: moment(payload.startTime, 'h:mm').format(),
                endTime: moment(payload.endTime, 'h:mm').format()
            }
            return {
                ...state,
                list: [...state.list, worklogToAdd]
            }
        default:
            return state
    }
}

export default worklog;