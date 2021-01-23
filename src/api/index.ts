import jsonp from "jsonp";

const url = "https://represent.opennorth.ca/postcodes/";

export async function requestMP(postalCode: string) {
  return jsonp(`${url + postalCode}?callback=`, undefined, (err, data) => {
    if (err) return err;
    return data;
  });
}
