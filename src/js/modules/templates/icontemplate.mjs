export function iconTemplate(iconId) {
    return `<svg class="icon" role="presentation" focusable="false">
    <use
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xlink:href="/images/sprite.symbol.svg#${iconId}"
    ></use>
    </svg>`;
    }