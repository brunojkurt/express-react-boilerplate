import api from '../../../services/api'

export const login = async (data, onSuccess, onError) => {
  await api.post('/login', data)
   .then(response => {
      return onSuccess ? onSuccess(response.data) : response.data
   })
   .catch(error => {
     if (onError) {
       onError(error)
     }
   })
}