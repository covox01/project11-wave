
function animate(){
   var tl = new TimelineMax({repeat: -1})
   tl

      .to("#worm", .5, {width: 324.7, height: 58, ease: Linear.easeNone}, "sync")
      .to("#init-state", .5, {morphSVG: "#wiggle-state1", ease: Linear.easeNone}, "sync")
      // .to("#worm", .5, { width: 324.7, height: 59, ease: Linear.easeNone }, "sync2")
      // .to("#init-state", .5, { morphSVG: "#wiggle-state2", ease: Linear.easeNone }, "sync2")
      // .to("#worm", .5, { width: 324.7, height: 59, ease: Linear.easeNone }, "sync3")
      // .to("#init-state", .5, { morphSVG: "#wiggle-state3", ease: Linear.easeNone }, "sync3")
      .to("#worm", .25, {width: 328.5, height: 55.1, ease: Linear.easeNone}, "sync4")
      .to("#init-state", .25, {morphSVG: "#end-state", ease: Linear.easeNone, shapeIndex: 3}, "sync4")
      .to("#worm", .25, { width: 335.5, height: 39.1, ease: Linear.easeNone }, "sync5")
      .to("#init-state", .25, { morphSVG: "#end-state2", ease: Linear.easeNone, shapeIndex: 3 }, "sync5")
      .to("#worm", .25, { width: 325.5, height: 30.1, ease: Linear.easeNone }, "sync5")
      .to("#init-state", .25, { morphSVG: "#init-state", ease: Linear.easeNone, shapeIndex: 3 }, "sync5")
      


      // .to("#worm", .5, { width: 323, height: 61.6, ease: Linear.easeNone }, "sync2")
      // .to("#init-state", .5, { morphSVG: "#wiggle-state-3", ease: Linear.easeNone }, "sync2")
}

function loop() {
   var tl = new TimelineMax({yoyo:true, repeat: -1})
   tl
      .to("#worm", .5, { width: 328, height: 67.9, ease: Linear.easeNone }, "sync1")
      .to("#init-state", .5, { morphSVG: "#wiggle-state2", ease: Linear.easeNone }, "sync1")
      .to("#init-state", .5, { morphSVG: "#wiggle-state3", ease: Linear.easeNone }, "sync3")
}

function init(){
   TweenMax.set(".center", {xPercent: -50, yPercent: -50})
   animate()
}

init()