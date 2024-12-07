import { getJson } from "../parkService.mjs";

export default async function getParkVisitorCenterDetails(id){
    const parkData = await getJson(`visitorcenters?id=${id}`);
    console.log(parkData)
  return parkData.data[0];
}