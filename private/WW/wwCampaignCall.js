 var campaignRoot = document.getElementById('campaignRoot')

var campaignHeaders = new Headers();
campaignHeaders.append("Content-Type", "application/json");
campaignHeaders.append("method", "getLeads");
campaignHeaders.append("params", "");
campaignHeaders.append("ID", "464646");

var campaignRaw = JSON.stringify({"method":"getOpportunity","params":{"id":"6133698563"},"id":"123123123"});

var requestOptions = {
  method: 'POST',
  headers: campaignHeaders,
  body: campaignRaw,
  redirect: 'follow'
};

var cload = document.createElement('p')
cload.innerHTML = "LOADING"
campaignRoot.appendChild(cload)
fetch(proxyurl + shspurl, requestOptions)
  .then(response => response.text())
  .then(result => {
    campaignRoot.removeChild(cload)
    var cmpnData = JSON.parse(result)
    var campaign = cmpnData.result.opportunity

    const cmpnCard = document.createElement('div')
    cmpnCard.textContent = campaign[0].most_recent_update_5e5983564bd84
    console.log(campaign[0])
    campaignRoot.appendChild(cmpnCard);
  })
  .catch(error => console.log('error', error));
