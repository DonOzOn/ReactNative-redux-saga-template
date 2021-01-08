import client from './HttpClient'

export const login = (username, password) => client.post("api/login", username, password)
export const testApi = () => client.get("api/v1/user")