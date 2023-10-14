import axios from 'axios'

const httpUtil = axios.create({
  timeout: 1200,
})

export default httpUtil
