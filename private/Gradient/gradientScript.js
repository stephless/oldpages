var root = document.getElementById('root')
var colors = [0,1]
var total = 10000
var perc = 255/total
var myRow

console.log(root)
for(i = 0; i< total; i++){
  colors[i] = "rgba(" + (i*perc) + ","  + (i*perc) + ","  + (i*perc) + ","  + 1 + ")"

}
colors.forEach((item, i) => {
  console.log(colors[i])
  if (i % 100 == 0) {
    myRow = document.createElement('div')
    myRow.classList.add("row")
    root.appendChild(myRow)

  }
  var myDiv = document.createElement('div')
  myDiv.style.backgroundColor = colors[i]
  myRow.appendChild(myDiv)
});
