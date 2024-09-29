
import CreateCards from "./modules/components/createCards.mjs";
import setfooter from "./modules/components/setfooter.mjs";
import updateHeroSection from "./modules/components/updateherobanner.mjs";
import { getParkInfoLinks } from "./modules/info/parkinfolinks.mjs";
import { getParkData } from "./modules/info/parkService.mjs";
import footerTemplate from "./modules/templates/footer.mjs";


const parkData = getParkData();
var parkinfo = getParkInfoLinks()

function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${parkData.fullName}</h1>
  <p>${parkData.description}</p>`;
}

setParkIntro(parkData)
updateHeroSection(parkData)
CreateCards(parkinfo)
setfooter(parkData)