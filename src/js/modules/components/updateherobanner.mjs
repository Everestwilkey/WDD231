import parkInfoTemplate from "../templates/HeaderTemplate.mjs";
import setHeaderInfo from "./setheaderinfo.mjs";




export default function updateHeroSection(parkData) {
    const heroBannerContent = document.querySelector('.hero-banner__content');
    heroBannerContent.innerHTML = parkInfoTemplate(parkData);
    setHeaderInfo(parkData)
    const heroBannerImage = document.querySelector('.hero-banner img');
    heroBannerImage.src = parkData.images[0].url;
    heroBannerImage.alt = parkData.images[0].altText;
    }