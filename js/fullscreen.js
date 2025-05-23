
if (document.fullscreenEnabled) {
    const zone = document.querySelector(".test")
    const fullscreen_button = document.querySelector(".fullscreen");
    fullscreen_button.setAttribute('id','fullscreen-button');
    fullscreen_button.addEventListener("click", toggle_fullscreen);
    fullscreen_button.innerHTML  = `
        <svg viewBox="0 0 24 24">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 
            7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
        </svg>
        <svg viewBox="0 0 24 24">
            <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 
            11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
        </svg>
    `;
    zone.appendChild(fullscreen_button);
}

function toggle_fullscreen() {
        const zone = document.querySelector(".test")
    if (!document.fullscreenElement) {
        zone.requestFullscreen();
        zone.setAttribute("fullscreen",""); 
    } else {
        document.exitFullscreen();
        document.body.removeAttribute("fullscreen"); 
    }
} 