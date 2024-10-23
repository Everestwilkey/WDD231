import footerTemplate from "../../templates/footer.mjs"



export default function setfooter (info ){
   var footer = document.querySelector("#park-footer");
  footer.insertAdjacentHTML("afterbegin", footerTemplate(info));
  }