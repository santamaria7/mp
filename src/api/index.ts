import jsonp from "jsonp";

const url = "https://represent.opennorth.ca/postcodes/";





export async function requestMPJSONP(postalCode: string, callback: Function) {
  return jsonp(
    `${url + postalCode}?callback=`,
    undefined,
    (err, data: PostCodeData) => {
      callback(err, data);
    }
  );
}
