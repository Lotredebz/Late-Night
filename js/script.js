
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