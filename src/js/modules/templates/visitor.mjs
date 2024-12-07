export default function visitorTemplate(visitor){
    return`<li class="visitor-center">
  <h4><a href="visitor-center.html?id=${visitor.id}">${visitor.name}</a></h4>
  <p>${visitor.description}</p>
  <p>${visitor.directionsInfo}</p>
  </li>`;
}