var $scrollingContainer = $(".scrolling-container");
var $list = $scrollingContainer.find("ul.scroll-list");
var $clonedList = $list.clone();
var listWidth = 0;

$list.find("li").each(function () {
    listWidth += $(this).outerWidth(true);
    listWidth += 20;
});

$list.add($clonedList).css({"width":listWidth + "px"});

$clonedList.addClass("cloned").appendTo($scrollingContainer);

//TimelineMax
var infinite = new TimelineMax({repeat: -1, paused: true});
var time = 40;

infinite
  .fromTo($list, time, {rotation:0.01,x:0}, {force3D:true, x: -listWidth, ease: Linear.easeNone}, 0)
  .fromTo($clonedList, time, {rotation:0.01, x:listWidth}, {force3D:true, x:0, ease: Linear.easeNone}, 0)
  .set($list, {force3D:true, rotation:0.01, x: listWidth})
  .to($clonedList, time, {force3D:true, rotation:0.01, x: -listWidth, ease: Linear.easeNone}, time)
  .to($list, time, {force3D:true, rotation:0.01, x: 0, ease: Linear.easeNone}, time)
  .progress(1).progress(0)
  .play();

//Pause/play
$scrollingContainer.on("mouseenter", 
function(){
    infinite.pause();
}).on("mouseleave", function(){
    infinite.play();
});

