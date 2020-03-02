var wwRoot = document.getElementById('wwRoot')
var dmRoot = document.getElementById('dmRoot')
var ccRoot = document.getElementById('ccRoot')


//The proxy URL is what allows the API connection to work properly.
const proxyurl = "https://cors-anywhere.herokuapp.com/";

//W&W API
var shspurl = "https://api.sharpspring.com/pubapi/v1.2/?accountID=70220929EC670F31F94AA2AEAF477F8B&secretKey=D89A98E094605E42CD471A6E114248A3"
//var shspurl = "sample.json"

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("method", "getLeads");
myHeaders.append("params", "");
myHeaders.append("ID", "464646");

var raw = JSON.stringify({"method":"getLeads","params":{"where":""},"id":"123123123"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
var load = document.createElement('p')
load.innerHTML = "LOADING"
wwRoot.appendChild(load)
fetch(proxyurl + shspurl, requestOptions)
  .then(response => response.text())
  .then((result) => {
    wwRoot.removeChild(load)
    var slider = ccRoot.children[0].children[0]
    var data = JSON.parse(result)
    var leads = data.result.lead
    console.log(leads)
    leads.forEach((obj, i) => {
      if (leads[i].dm_status_5e5935a9572f5 != 1){
        $('.slider').slick('slickAdd','<div class="slideCard" id="card' + i + '"></div>')

        const playerContainer = document.getElementById('card'+i)
        const pCard = document.createElement('div')
        pCard.classList.add('playerCard')
        const cName = document.createElement('h2')
        const pName = document.createElement('h5')
        const pEmail = document.createElement('h5')
        const cDesc = document.createElement('h4')
        const cClass = document.createElement('p')
        const cRace = document.createElement('p')
        const cAlignment = document.createElement('p')
        const cLevel = document.createElement('p')
        const cXP = document.createElement('p')

        cName.textContent = leads[i].firstName + " " + leads[i].lastName
        pName.textContent = leads[i].player_first_5e59311cf1c0d + " " + leads[i].player_last_5e5931252e928 //+ "  (" + leads[i].emailAddress + ")"
        //pEmail.textContent = "(" + leads[i].emailAddress + ")"
        cDesc.textContent = leads[i].description
        cRace.textContent = leads[i].race_5e5930bf0feae
        cClass.textContent = leads[i].persona
        cAlignment.textContent = leads[i].g_e_alignment_5e59307fbeb07 + " " + leads[i].l_c_alignment_5e59309f8353b
        cLevel.textContent = "Level " + leads[i].level_5e593102a9927 + " [ " +leads[i].leadScore + "xp]"
        //cXP.textContent = leads[i].leadScore + "xp"

        playerContainer.appendChild(pCard);
        pCard.appendChild(cName);
        pCard.appendChild(pName);
        //pCard.appendChild(pEmail);
        pCard.appendChild(cRace);
        pCard.appendChild(cClass);
        pCard.appendChild(cAlignment);
        pCard.appendChild(cLevel);
        //pCard.appendChild(cXP);
        pCard.appendChild(cDesc);
      }else{
        const dmContainer = document.createElement('div')
        const dm = document.createElement('h2')
        const dmName = document.createElement('h2')
        //const dmEmail = document.createElement('h5')
        const dmDesc = document.createElement('p')

        dmName.textContent = leads[i].firstName + " " + leads[i].lastName
        dm.textContent = "DUNGEON MASTER"
        //dmEmail.textContent = "(" + leads[i].emailAddress + ")"
        dmDesc.textContent = leads[i].description

        dmContainer.classList.add('dmCard')
        dmRoot.appendChild(dmContainer);
        dmContainer.appendChild(dm);
        dmContainer.appendChild(dmName);
        //dmContainer.appendChild(dmEmail);
        dmContainer.appendChild(dmDesc);
      }
    })

  })
  .catch(error => console.log('error', error));
