const tl = new TimelineMax ();


tl.to
(".box_switcher", 1.5,{
    scale: 200, ease: Expo.linear,  },"0.1",
    "-=1"
);

tl.reverse();
$(document).on("click", ".nav_dark", function () {
	tl.reversed(!tl.reversed());
});
tl.to
(".nav_light", 0.1,{
    opacity:1, ease: Expo.linear,  },"0.1",
    "-=1"
);
tl.to
(".nav_dark", 0.1,{
    opacity:0, ease: Expo.linear,  },"0.1",
    "-=1"
);


tl.reverse();
$(document).on("click", ".nav_light", function () {
	tl.reversed(!tl.reversed());
});