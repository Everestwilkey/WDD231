import conditionAlerttemplate from "../../templates/conditionsAlert.mjs";
import conditionAlert from "../../templates/conditionsAlert.mjs"

export default function createAlert (alert){
    console.log(alert)
    var alialert =  document.querySelector(".alerts > ul");
    const html = alert.map(conditionAlerttemplate)
    
    alialert.innerHTML += html.join("")
  }