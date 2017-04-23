import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'worklog',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Container = require('./containers/WorkLogContainer').default
      const reducer = require('./store/worklog').default
      injectReducer(store, { key: 'worklog', reducer })
      cb(null, Container)
    }, 'worklog')
  }
})
