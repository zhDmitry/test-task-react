import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'worklog',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Container = require('./containers/WorkLogContainer').default
      // const reducer = require('./modules/counter').default
      // injectReducer(store, { key: 'counter', reducer })
      cb(null, Container)
    }, 'worklog')
  }
})
