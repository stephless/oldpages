var thresh = false;
window.onscroll = function() {
  var scroll = document.documentElement.scrollTop
  var nav = document.getElementById("navigation")

    if (scroll >= 100 && thresh ==false){
      console.log("hiding")
      nav.setAttribute("style","transform: translatey(-100px);transition:0s")
    }

    if (scroll >= 400){
      thresh = true;
      console.log("displaying")
      nav.classList.add("sticky")
      nav.setAttribute("style","transform: translatey(0px);")

    }
    if (scroll == 0){
      thresh = false;
      console.log("home")
      nav.classList.remove("sticky")
      nav.setAttribute("style","")
    }
    console.log(thresh)
};
