
export default function  MediaCardTemplates(info){
    return `<section class = "media-card">
  <img id="Cardimages" src="${info.image}" alt="" />
  <a id="CardTile" href="${info.link}"> ${info.name}</a>
  <p id="Cardinfo">${info.description}</p>
</section>
`;
}