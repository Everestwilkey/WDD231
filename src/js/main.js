import { getParkData } from './parkService.mjs';

// Fetch park data
const parkData = getParkData();

// Update the disclaimer section
const disclaimer = document.querySelector(".disclaimer a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// Function to create the park info template
function parkInfoTemplate(info) {
    return `
    
        <a href="/" class="hero-banner__title">${info.name}</a>
        <p class="hero-banner__subtitle">
          <span>${info.designation}</span>
          <span>${info.states}</span>
        </p>`;
}

// Select the hero banner content and update it with park data
const heroBannerContent = document.querySelector('.hero-banner__content');

// Update the content with the park information using the parkInfoTemplate
heroBannerContent.innerHTML = parkInfoTemplate(parkData);

// Update the hero banner image separately (if needed)
const heroBannerImage = document.querySelector('.hero-banner img');
heroBannerImage.src = parkData.images[0].url;
heroBannerImage.alt = parkData.images[0].altText;
