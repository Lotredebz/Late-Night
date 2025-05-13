
const channelID = 'UCmy6d_VwSZe1eRlCpyMaoCQ';
const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelID}`;

fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`)
  .then(res => res.json())
  .then(data => {
    const video = data.items[0];
    const videoID = video.link.split('=')[1];
    const videoTitle = video.title;
    document.getElementById('titreVideo').textContent = videoTitle;
    const ajoutVid = `<iframe class="leblockvid" src="https://www.youtube.com/embed/${videoID}" allowfullscreen></iframe>`;
    document.getElementById("BlockVideo").innerHTML = ajoutVid;
  })
  .catch(err => {
    console.error(err);
    document.getElementById('titreVideo').textContent = 'Impossible de charger le titre';
    document.getElementById("BlockVideo").innerHTML = '<p>Impossible de charger la video.</p>';
  });

function carouselle (){
  const commuDivs = document.querySelectorAll('.commu');
  const nextBouttons = document.querySelectorAll('.next');
  const prevBouttons = document.querySelectorAll('.prev');
  let positionActu = 0;

  function montreDiv(index) {
    commuDivs.forEach(function (div, i) {
        div.style.display = i === index ? 'block' : 'none';
    });
  }

  nextBouttons.forEach(function (boutton) {
    boutton.addEventListener('click', function (event) {
        event.preventDefault();
        positionActu = (positionActu + 1) % commuDivs.length;
        montreDiv(positionActu);
    });
  });

  prevBouttons.forEach(function (boutton) {
    boutton.addEventListener('click', function (event) {
        event.preventDefault();
        positionActu = (positionActu - 1 + commuDivs.length) % commuDivs.length;
        montreDiv(positionActu);
    });
  });
}
document.addEventListener('DOMContentLoaded', carouselle )
