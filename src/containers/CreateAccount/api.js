/**
 * Created by jainpri on 1/17/2017.
 */


export const getUserData = () => ({
  "firstName": "John", "lastName": "doe", "email": "johndoe@gmail.com"
})

// export const isUserAuthenticated = () => { return true }

const baseUrl = "http://localhost:7777/api/";

export function isUserAuthenticated(userData) {

  return fetch(baseUrl + 'isUserAuth', {
      method  : 'POST',
      headers : {
        'Accept'        : 'application/json',
        'Content-Type'  : 'application/json'
      },
      body    : JSON.stringify({
        userName : userData.userName,
        password : userData.password
      })
    })
    .then(function (resp) {
      return resp.json()
    })
    .catch(error => error)
    .then(function (resp) {
      return resp
    })
}