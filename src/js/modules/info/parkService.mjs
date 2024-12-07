
const baseUrl  = "https://developer.nps.gov/api/v1/"; 
const apikey = import.meta.env.VITE_NPS_API_KEY;

export  async function getParkData(parkcode = "yell"){
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apikey
    }
  };
  
  const response = await fetch(baseUrl + "parks" + `?parkCode=${parkcode}`, options);
   let park = await response.json();
   console.log(park);
   return park.data[0]
}
export async function getJson(url) {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apikey
    }
  };
  let data = {};
  const response = await fetch(baseUrl + url, options);
  if (response.ok) {
    data = await response.json();
  } else throw new Error("response not ok");
  return data;
}