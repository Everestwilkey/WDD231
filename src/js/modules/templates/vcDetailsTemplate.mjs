import { iconTemplate } from "./icontemplate.mjs";

export function vcDetailsTemplate(elementId, summaryText, iconId, content) {
    return `<details name="vc-details" id="${elementId}">
    <summary>
    ${iconTemplate(iconId)}
    ${summaryText}
    </summary>
    ${content}
    </details>`;
    }