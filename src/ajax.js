import axios from 'axios'
import config from './config'
import store from './store'

const client = axios.create({baseURL: config.apiBaseUrl})

// client.interceptors.request.use(config => {
//   const token = store.getState().getIn(['Users', 'realUser', 'auth_token'], getCookie('IOP_AUTH')) || ''
//   if (token) {
//     config.headers = {Authorization: token}
//   }
//   return config
// })

export const responseInterceptor = resp => {
  const correctEnvironment = config.environment !== 'testing' && config.environment !== 'ci' && config.environment !== undefined
  if (correctEnvironment && resp instanceof Error) {
    console.error('Axios Error ', resp) // eslint-disable-line no-console
  }

  const errors = resp.response.data && resp.response.data.errors ? resp.response.data.errors : [{detail: 'Error'}]

  return Promise.reject(errors)
}

client.interceptors.response.use(resp => resp, responseInterceptor)

export default client
