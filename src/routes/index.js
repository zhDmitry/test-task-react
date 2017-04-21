import CoreLayout from '../layouts/CoreLayout'
import WorkLog from './WorkLog'


export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: { onEnter: (nextState, replace) => replace('/worklog') },
  childRoutes: [
    WorkLog(store)
  ]
})

export default createRoutes
