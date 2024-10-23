export default function conditionAlerttemplate(alert){
    console.log(alert)
    let alertType = "";
    // most of the alerts are one word and line up with the icons nicely. "Park Closure" is the exception
    switch (alert.category) {
      case "Park Closure":
        alertType = "closure";
        break;
      default:
        alertType = alert.category.toLowerCase();
    }
    return `
    <li class="alert">
    <svg class="icon" focusable="false" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/sprite.symbol.svg#alert-${alertType}"></use></svg>
    <div>
      <h3 class="alert-${alertType}">${alert.title}</h3>
      <p>${alert.description}</p>
    </div>
    </li>
     <hr class="solid">`;
  }