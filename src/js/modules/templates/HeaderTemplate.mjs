export default function parkInfoTemplate(info) {
    return `
        <a href="/" class="hero-banner__title">${info.name}</a>
        <p class="hero-banner__subtitle">
          <span>${info.designation}</span>
          <span>${info.states}</span>
        </p>`;
}