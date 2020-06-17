var mouseX, mouseY, angleX, angleY;
var maxAngle = 6;
var layerSpace = .25;
var perspective = 1000

function mouse_position(e){
  mouseX = e.clientX - ($("#container").width()/2);
  mouseY = ($("#container").height()/2) - e.clientY ;
  console.log("mouse location:", mouseX, mouseY)
  angleX = mouseX/($("#container").width()/2) * maxAngle;
  angleY = mouseY/($("#container").height()/2) * maxAngle;
  if (angleX > maxAngle) angleX = maxAngle;
  if (angleX < -maxAngle) angleX = -maxAngle;
  if (angleY > maxAngle) angleY = maxAngle;
  if (angleY < -maxAngle) angleY = -maxAngle;
  //console.log("mouse Angle:", angleX, angleY)
  $("#layer1").css({
    /*Translate(x = the conversion of the mouseX to it's respective quadrent, divided by -2,
                minus the number of layers times layer depth)
                -2 softens & reverses the angle to 'face' the mouse mouse
               (y = the conversion of the mousey to it's respective quadrent, divided by 2,
                minus the number of layers times layer depth)
                positive 2, because the value is already reversed
      rotateX(the y position of the mouse) because of the way rotate X works
      rotateY(the x position of the mouse) because of the way rotate Y works*/
    'transform': 'translate(' + ((angleX/-2)) + 'px , ' + ((angleY/2)) + 'px) perspective(' + perspective + 'px) rotateX(' + (angleY) + 'deg) rotateY(' + (angleX) + 'deg)'
  })
  $("#layer2").css({
    'transform': 'translate(' + ((angleX/-2 * -1 * layerSpace)) + 'px , ' + ((angleY/2 * -1 * layerSpace)) + 'px) perspective(' + perspective + 'px) rotateX(' + (angleY) + 'deg) rotateY(' + (angleX) + 'deg)'
  })
  $("#layer3").css({
    'transform': 'translate(' + ((angleX/-2 * -2 * layerSpace)) + 'px , ' + ((angleY/2 * -2 * layerSpace)) + 'px) perspective(' + perspective + 'px) rotateX(' + (angleY) + 'deg) rotateY(' + (angleX) + 'deg)'
  })
  $("#layer4").css({
    'transform': 'translate(' + ((angleX/-2 * -3 * layerSpace)) + 'px , ' + ((angleY/2 * -3 * layerSpace)) + 'px) perspective(' + perspective + 'px) rotateX(' + (angleY) + 'deg) rotateY(' + (angleX) + 'deg)'
  })
  $("#layer5").css({
    'transform': 'translate(' + ((angleX/-2 * -4 * layerSpace)) + 'px , ' + ((angleY/2 * -4 * layerSpace)) + 'px) perspective(' + perspective + 'px) rotateX(' + (angleY) + 'deg) rotateY(' + (angleX) + 'deg)'
  })
  $("#layer6").css({
    'transform': 'translate(' + ((angleX/-2 * -5 * layerSpace)) + 'px , ' + ((angleY/2 * -5 * layerSpace)) + 'px) perspective(' + perspective + 'px) rotateX(' + (angleY) + 'deg) rotateY(' + (angleX) + 'deg)'
  })
  $("#layer7").css({
    'transform': 'translate(' + ((angleX/-2 * -6 * layerSpace)) + 'px , ' + ((angleY/2 * -6 * layerSpace)) + 'px) perspective(' + perspective + 'px) rotateX(' + (angleY) + 'deg) rotateY(' + (angleX) + 'deg)'
  })
  $("#layer8").css({
    'transform': 'translate(' + ((angleX/-2 * -7 * layerSpace)) + 'px , ' + ((angleY/2 * -7 * layerSpace)) + 'px) perspective(' + perspective + 'px) rotateX(' + (angleY) + 'deg) rotateY(' + (angleX) + 'deg)'
  })
}
$(document).ready(function(){
  $("body").mouseleave(function(){
    $(".layer").css({
      'transform': 'translate(0 , 0) rotateX(0) rotateY(0)'
    });
  })
});
