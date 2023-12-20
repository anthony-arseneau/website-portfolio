window._wq = window._wq || [];
_wq.push({ id: 'phc3h7va9i', onReady: function(video) {
  console.log("I got a handle to the video!", video);
}});

$("#play").click(function () {
    _wq.push({
        id: "phc3h7va9i", onReady: function (video) {
            video.play();
            video.unmute();
        }
    })
})