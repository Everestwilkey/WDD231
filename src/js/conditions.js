

import setfooter from "./modules/components/main/setfooter.mjs";
import updateHeroSection from "./modules/components/main/updateherobanner.mjs";
import { getAlerts } from "./modules/info/conditions/getalerts.mjs";
import { createParkInfoLinks } from "./modules/info/parkinfolinks.mjs";
import { getParkData } from "./modules/info/parkService.mjs";
import { getVisitorCenterData } from "./modules/info/conditions/getVisitorCenterData.mjs";
import creatVisitor from "./modules/components/conditions/visitorCreate.mjs";
import createAlert from "./modules/components/conditions/alertsCreate.mjs";
import createActivites from "./modules/components/conditions/activities.mjs";
import { getActivities } from "./modules/info/conditions/getactivities.mjs";
import menuToggle from "./modules/components/main/menue-toggle.mjs";
import listToggle from "./modules/components/main/menuListItem.mjs";



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
  menuToggle()
  listToggle()
}


init()
