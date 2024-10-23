
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