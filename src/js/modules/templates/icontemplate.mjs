import spritePath from "@images/sprite.symbol.svg";



export function iconTemplate(iconId) {
  return `
    <svg class="icon" role="presentation" focusable="false">
      <use href="${spritePath}#${iconId}"></use>
    </svg>`;
}
