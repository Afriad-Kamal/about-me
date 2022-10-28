/*const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


function weffect(elemnt, txt, orig=""){
  for (t of txt){
    elemnt.innerHTML = orig
    for (letter of t){

    }
  }
}*/

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  document.getElementById('age').innerHTML = "age: " + (new Date(new Date() - new Date("2007-3-9")).getFullYear() - 1970).toString() + "yo";
  var elements = document.getElementsByClassName('me');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
  if (document.getElementById("cursor").display != "none"){
    i = true

    for (cont of document.getElementsByClassName("container")){
      cont.addEventListener("mouseover", (event) => {
        cont.className = "container hovered"
      })
      cont.addEventListener("mouseout", (event) => {
        cont.className = "container nhovered"
      })
    }

    document.addEventListener("mousemove", (event) =>{
      c = document.getElementById("cursor")
      if (i){
        c.style.position = "absolute"
        c.style.borderRadius = "10vh"
        c.style.width = "3vh"
        c.style.height = "3vh"
        c.className = "show"
        c.style.background = "white"
        i = !(i)
      }else{
        console.log("e")
        c.style.left = event.pageX + "px"
        c.style.top = event.pageY + "px"
      }
    }) 
  }
};