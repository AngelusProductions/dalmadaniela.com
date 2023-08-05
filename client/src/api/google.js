
import { ROOT_API_URL, apiEndpoints } from '../constants/paths'

export const uploadFileToStorage = async file => {
  let fileData = new FormData();
  fileData.append('file', file.data);
  await fetch(`${ROOT_API_URL}${apiEndpoints.upload}`, {
    method: 'POST',
    body: fileData,
    mode: 'no-cors'
  })
}