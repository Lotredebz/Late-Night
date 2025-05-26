
// var CHANNEL_ID = "UCmy6d_VwSZe1eRlCpyMaoCQ";

// function fetchVideos(order, containerId) {
//     var url = "https://www.googleapis.com/youtube/v3/search?" +
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
//         var videos = data.items;
//         var container = document.getElementById(containerId);
//         container.innerHTML = "";

//         var count = 0;
//         for (var i = 0; i < videos.length && count < 5; i++) {
//         var video = videos[i];
//         if (video.id.kind !== "youtube#video") {
//             continue;
//         }

//         var videoId = video.id.videoId;
//         var title = video.snippet.title;

//         var div = document.createElement("div");
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

    const rssUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCmy6d_VwSZe1eRlCpyMaoCQ';
    const apiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(rssUrl);

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const videoList = document.getElementById('video-list');
        data.items.slice(0, 5).forEach(item => {
          const videoId = item.link.split('=')[1];
          const div = document.createElement('div');
          div.className = 'video-card';
          div.innerHTML = `
            <iframe class="iframe" src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
            <div class="title">${item.title}</div>
          `;
          videoList.appendChild(div);
        });
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des vidéos :', error);
      });
