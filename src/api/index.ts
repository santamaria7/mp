import fetchJsonp from "fetch-jsonp";

const url = "https://represent.opennorth.ca/postcodes/";

export async function requestMPJSONP(postalCode: string) {
  return fetchJsonp(
    `${url + postalCode.toUpperCase()}?callback=`).then(res => res.json())
}
