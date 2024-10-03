
const baseUrl  = "https://developer.nps.gov/api/v1/"; 
const apikey = import.meta.env.VITE_NPS_API_KEY;

export  async function getParkData(){
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apikey
    }
  };
  let data = {};
  const response = await fetch(baseUrl + "parks" + "?parkCode=yell", options);
   let park = await response.json();
   console.log(park);
   return park.data[0]
}