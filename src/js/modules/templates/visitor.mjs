export default function visitorTemplate(visitor){
    return`<li>
              <h3>${visitor.name}</h3>
              <p>${visitor.description}</p>
              <p>${visitor.directionsInfo}</p>
              <br>
            </li>`
}