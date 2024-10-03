import MediaCardTemplates from "../templates/MediaCardTemplate.mjs"

export default function CreateCards (info){
    var main =  document.querySelector(".info")
    const html = info.map(MediaCardTemplates)
    main.innerHTML = html.join("")
  }