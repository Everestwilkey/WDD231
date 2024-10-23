

import CreateCards from "./modules/components/parkpage/createCards.mjs";
import setfooter from "./modules/components/main/setfooter.mjs";
import updateHeroSection from "./modules/components/main/updateherobanner.mjs";
import { getAlerts } from "./modules/info/conditions/getalerts.mjs";
import { createParkInfoLinks } from "./modules/info/parkinfolinks.mjs";
import { getParkData } from "./modules/info/parkService.mjs";
import footerTemplate from "./modules/templates/footer.mjs";
import { getVisitorCenterData } from "./modules/info/conditions/getVisitorCenterData.mjs";
import creatVisitor from "./modules/components/conditions/visitorCreate.mjs";
import createAlert from "./modules/components/conditions/alertscreate.mjs";
import createActivites from "./modules/components/conditions/activities.mjs";
import { getActivities } from "./modules/info/conditions/getactivities.mjs";



async function init() {

  const parkData =  await getParkData();
  var parkinfo = await createParkInfoLinks();
  var alerts = await getAlerts();
  var visitor = await getVisitorCenterData();
  var activities = await getActivities();
  updateHeroSection(parkData);
  createAlert(alerts);
  creatVisitor(visitor);
  createActivites(activities);
  setfooter(parkData);
}


init()
