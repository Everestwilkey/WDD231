
// parkService.mjs or getalerts.mjs
const baseUrl = "https://developer.nps.gov/api/v1/alerts?"; 
const apikey = import.meta.env.VITE_NPS_API_KEY;

export async function getAlerts(parkcode = "yell") {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apikey
    }
  };

  try {
    // Fetch data for the park's alerts
    const response = await fetch(`${baseUrl}parkCode=${parkcode}`, options);
    
    if (!response.ok) {
      throw new Error("Failed to fetch park alerts");
    }

    const alerts = await response.json();
    console.log("This is alert data");
    console.log(alerts);

    return alerts.data;
  } catch (error) {
    console.error("Error fetching alerts:", error);
    return [];
  }
}
