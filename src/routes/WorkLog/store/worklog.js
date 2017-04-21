import data from '../../../../db.json'
export const SET_SELECTED_MONTH = 'SET_SELECTED_MONTH';
export const SET_ADD_DIALOG_VISIBITY = 'SET_ADD_DIALOG_VISIBILITY';
export const SET_WORKLOGS = 'SET_WORKLOGS';
export const ADD_WORKLOG = 'ADD_WORKLOG';


const createAction = (type) => (payload) => ({ type, payload })

export const addWorkLog = createAction(ADD_WORKLOG);
export const setSelectedMonth = createAction(SET_SELECTED_MONTH);
export const setWorkLogs = createAction(SET_WORKLOGS);
export const setAddDialogVisiblity = createAction(SET_ADD_DIALOG_VISIBITY);

export const actions = {
    addWorkLog,
    setSelectedMonth,
    setWorkLogs,
    setAddDialogVisiblity
}


const worklogInitialState = {
    worklogs: data,
    selectedMonth: 0,
    dialogVisiblity: false,
}

// this is should be separeted reducers 
export const worklog = (state = worklogInitialState, { type, payload }) => {
    switch (type) {
        case SET_WORKLOGS:
            return {
                ...state,
                worklogs: payload
            };
        case SET_SELECTED_MONTH:
            return {
                ...state,
                selectedMonth: payload
            };
        case SET_ADD_DIALOG_VISIBITY:
            return {
                ...state,
                dialogVisiblity: payload
            }
        case ADD_WORKLOG:
            // it is fine to use there data normalization instead of plain arrays
            return {
                ...state,
                worklogs: [state.worklogs, ...payload]
            }
        default:
            return state
    }
}