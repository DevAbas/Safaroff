$(document).ready(function(){

  //init ScrollMagic
  var controller = new ScrollMagic.Controller({addIndicators: false});

  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '.icn-wrap',
    triggerHook: 0.9
  })
  .setClassToggle('.icn-wrap', 'fade-in')
  .addTo(controller);


  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '.partnor',
    triggerHook: 0.9
  })
  .setClassToggle('.partnor', 'fade-in')
  .addTo(controller);

  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '.img-tm',
    triggerHook: 0.9
  })
  .setClassToggle('.img-tm', 'fade-in')
  .addTo(controller);

  // form scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: 'form',
    triggerHook: 0.9
  })
  .setClassToggle('form', 'fade-in')
  .addTo(controller);

//bear scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '.bear',
    triggerHook: 0.9
  })
  .setClassToggle('.bear', 'fade-in')
  .addTo(controller);
});
