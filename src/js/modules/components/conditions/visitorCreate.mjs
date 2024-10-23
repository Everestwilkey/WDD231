import visitorTemplate from "../../templates/visitor.mjs";


export default function createVisitor(visitor){
    console.log(alert)
    var vis =  document.querySelector(".serviceslist");
    const html = visitor.map(visitorTemplate)
    vis.innerHTML += html.join("")
  }