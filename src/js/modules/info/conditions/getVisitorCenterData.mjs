const baseUrl  = "https://developer.nps.gov/api/v1/visitorcenters?"; 
const apikey = import.meta.env.VITE_NPS_API_KEY;

export async function getVisitorCenterData(parkcode = "yell") {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apikey
    }
  };

  try {
    // Correct URL construction
    const response = await fetch(`${baseUrl}parkCode=${parkcode}`, options);
    
    if (!response.ok) {
      throw new Error("Failed to fetch visitor center data");
    }

    // Parse the JSON response
    const visitor = await response.json();
    console.log("This is visitor data:");
    console.log(visitor);

    return visitor.data;
  } catch (error) {
    console.error("Error fetching visitor center data:", error);
    return [];
  }
}
