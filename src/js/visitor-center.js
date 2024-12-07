import setfooter from "./modules/components/main/setfooter.mjs";
import { getParkData } from "./modules/info/parkService.mjs";
import getParkVisitorCenterDetails from "./modules/info/VistorCenter/GetParkVisitorCenter.mjs";
import { setVisitorCenterContent } from "./modules/templates/visitorheadertemplate.mjs";

export default function getParameter(param) {
    const search = window.location.search; // Get the query string
    const params = new URLSearchParams(search); // Parse the query string
    return params.get(param); // Get the value of the specified parameter
}

async function initvistor() {
    
    const parkData =  await getParkData();
    const id = getParameter("id");
    const vistorcenter = await getParkVisitorCenterDetails(id)
    console.log("here is the info")
    console.log(vistorcenter)
    // setVisitorCenterContent(vistorcenter)
    
    setfooter(parkData);
}

initvistor()
