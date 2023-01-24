import axios, { Axios } from "axios";

var BASE_URL = "http://localhost:9800";

export function getRecipe(recipe) {
  return axios.get(`${BASE_URL}/${recipe}`);
}

export function getRecipeAll() {
  return axios.get(`${BASE_URL}/category`);
}

export function getRecipeFinal(recipe) {
  return axios.get(`${BASE_URL}/recipe/${recipe}`);
}

export function getRecipeHome() {
  return axios.get(`${BASE_URL}`);
}
export function getIngredients(id) {
    return axios.get(`${BASE_URL}/ingredients/${id}`);
}
export function getMethod(id) {
    return axios.get(`${BASE_URL}/method/${id}`);
}
  
export function postData(data) { 
   return axios.post(`${BASE_URL}/signup`,data)
}

export function getData(email) {
   return axios.get(`${BASE_URL}/login/${email}`)
}
 
export function getUser(email) { 
  return axios.get(`${BASE_URL}/profile/${email}`)
}

export function deleteUser(email) { 
  return axios.post(`${BASE_URL}/delete`,email)
}

export function postPassword(password) { 
  console.log(password);
  return axios.post(`${BASE_URL}/password`,password)
}