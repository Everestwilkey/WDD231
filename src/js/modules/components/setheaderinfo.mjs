export default function setHeaderInfo(parkData){
    let disclaimer = document.querySelector(".disclaimer a");
    disclaimer.href = parkData.url;
    disclaimer.innerHTML = parkData.fullName;
    document.querySelector('title').innerHTML = parkData.fullName
  }