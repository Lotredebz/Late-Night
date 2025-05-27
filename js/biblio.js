
// let CHANNEL_ID = "UCmy6d_VwSZe1eRlCpyMaoCQ";

// function fetchVideos(order, containerId) {
//     let url = "https://www.googleapis.com/youtube/v3/search?" +
//     "key=" + API_KEY +
//     "&channelId=" + CHANNEL_ID +
//     "&part=snippet" +
//     "&order=" + order +
//     "&maxResults=10";

//     fetch(url)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         let videos = data.items;
//         let container = document.getElementById(containerId);
//         container.innerHTML = "";

//         let count = 0;
//         for (let i = 0; i < videos.length && count < 5; i++) {
//         let video = videos[i];
//         if (video.id.kind !== "youtube#video") {
//             continue;
//         }

//         let videoId = video.id.videoId;
//         let title = video.snippet.title;

//         let div = document.createElement("div");
//         div.className = "video-card";
//         div.innerHTML =
//             "<iframe src='https://www.youtube.com/embed/" + videoId + "' frameborder='0' allowfullscreen></iframe>" +
//             "<div class='title'>" + title + "</div>";
//         container.appendChild(div);
//         count++;
//         }
//     })
//     .catch(function (error) {
//         console.error("Erreur lors de la récupération des vidéos :", error);
//     });
// }

// fetchVideos("date", "recent");
// fetchVideos("viewCount", "popular");

    const rssUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCX6OQ3DkcsbYNE6H8uQQuVA'; // UCmy6d_VwSZe1eRlCpyMaoCQ
    const apiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(rssUrl);

    fetch(apiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let videoList = document.getElementById('video-list');
      data.items.slice(0, 5).forEach(function(item) {
        let videoId = item.link.split('=')[1];
        let div = document.createElement('div');
        div.className = 'video-card';
        div.innerHTML =
          '<iframe class="iframe" src="https://www.youtube.com/embed/' + videoId + '" allowfullscreen></iframe>' +
          '<div class="title">' + item.title + '</div>';
        videoList.appendChild(div);
      });
    })
    .catch(function(error) {
      console.error('Erreur lors de la récupération des vidéos :', error);
  });
