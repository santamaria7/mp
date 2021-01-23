import axios from "axios";

const url = "https://represent.opennorth.ca/postcodes/";

export async function requestMP(postalCode: string) {
  return axios.get(url + postalCode);
}
