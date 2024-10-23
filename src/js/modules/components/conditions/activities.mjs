import activitiesTemplate from "../../templates/activities.mjs"

export default function createActivites(activitesdata){
    let unorderList = document.getElementById('Activities')
    const html = activitesdata.map(activitiesTemplate)
    unorderList.innerHTML = html.join("")

}