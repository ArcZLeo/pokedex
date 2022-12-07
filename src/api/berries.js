import { API_HOST } from "../utils/constants";

export async function getBerriesApi(endpointUrl) {
  try {
    const url = `${API_HOST}/item?limit=20&offset=0`;
    const response = await fetch(endpointUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}


export async function getBerryApiTotal() {
    try {
      const url = `${API_HOST}/item?limit=200`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  
export async function getBerryDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
  
export async function getBerryDetailsApi(id) {
  try {
    const url = `${API_HOST}/item/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
