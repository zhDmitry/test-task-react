import CoreLayout from '../layouts/CoreLayout'
import WorkLog from './WorkLog'


export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  childRoutes : [
    WorkLog(store)
  ]
})

export default createRoutes
