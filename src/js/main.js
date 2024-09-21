import { getParkData } from './parkService.mjs';

const parkData = getParkData();


let disclaimer = document.querySelector(".disclaimer a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;
document.querySelector('title').innerHTML = parkData.fullName

function parkInfoTemplate(info) {
    return `
        <a href="/" class="hero-banner__title">${info.name}</a>
        <p class="hero-banner__subtitle">
          <span>${info.designation}</span>
          <span>${info.states}</span>
        </p>`;
}


const heroBannerContent = document.querySelector('.hero-banner__content');

heroBannerContent.innerHTML = parkInfoTemplate(parkData);

const heroBannerImage = document.querySelector('.hero-banner img');
heroBannerImage.src = parkData.images[0].url;
heroBannerImage.alt = parkData.images[0].altText;
