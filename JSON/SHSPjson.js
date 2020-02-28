var url = 'ShSp.json'
var api_root = document.getElementById('nav_shsp')
var shsp_api_root = document.getElementById('nav_shsp_api')
//The proxy URL is what allows the API connection to work properly.
const proxyurl = "https://cors-anywhere.herokuapp.com/";

// Stephem Leslie Art API
//var shspurl = "https://api.sharpspring.com/pubapi/v1.2/?accountID=CFA994835AABB98EF1FEA6582EE1749A&secretKey=8DC79D4D83E7A81B0D27E5159688C877"

//Cat Scraps API
var shspurl = "https://api.sharpspring.com/pubapi/v1.2/?accountID=02852F671C96233B05556178F6EEC82D&secretKey=A86616190E6F9F5D259D4CE67000FD66"
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((items) => {
    var leads = items.result.lead
    console.log(leads)
    leads.forEach((obj, i) => {
      const h2 = document.createElement('h2')
      const h3 = document.createElement('h3')
      h2.textContent = leads[i].firstName + " " + leads[i].lastName
      h3.textContent = leads[i].emailAddress

      api_root.appendChild(h2);
      api_root.appendChild(h3);
    });
  });

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("method", "getLeads");
  myHeaders.append("params", "");
  myHeaders.append("ID", "123123");

  var raw = JSON.stringify({"method":"getLeads","params":{"where":"null"},"id":"222222222222"});

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("method", "getLeads");
myHeaders.append("params", "");
myHeaders.append("ID", "123123");

var raw = JSON.stringify({"method":"getLeads","params":{"where":"null"},"id":"222222222222"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
var load = document.createElement('p')
load.innerHTML = "loading"
shsp_api_root.appendChild(load)
fetch(proxyurl + shspurl, requestOptions)
  .then(response => response.text())
  .then((result) => {
    shsp_api_root.removeChild(load)
    var data = JSON.parse(result)
    var leads = data.result.lead
    console.log(leads)
    leads.forEach((obj, i) => {
      const h2 = document.createElement('h2')
      const h3 = document.createElement('h3')
      h2.textContent = leads[i].firstName + " " + leads[i].lastName
      h3.textContent = leads[i].emailAddress

      shsp_api_root.appendChild(h2);
      shsp_api_root.appendChild(h3);
    })

  })
  .catch(error => console.log('error', error));





/*var request = new XMLHttpRequest()
request.open('GET', shspurl, true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  console.log(data)
}
request.send()
/*var first_name, last_name, email


function SubmitForm(){
  console.log("got")
  first_name = document.getElementById("first_name").value;
  last_name = document.getElementById("last_name").value;
  email = document.getElementById("email").value;
  console.log(first_name + " " + last_name + " , " + email);

  event.preventDefault();

    const url = "https://api.sharpspring.com/pubapi/v1.2/?accountID=CFA994835AABB98EF1FEA6582EE1749A&secretKey=8DC79D4D83E7A81B0D27E5159688C877";
    const objects = {'email' : email,
                'firstName' : first_name,
                'lastName' : last_name
                };
    const headers = [{ "key": "Content-Type",
                      "name": "Content-Type",
                      "value": "application/json",
                      "type": "text"
                    },
                    {
                      "key": "method",
                      "value": "getFields",
                      "type": "text"
                    },
                    {
                      "key": "params",
                      "value": "",
                      "type": "text"
                    },
                    {
                      "key": "ID",
                      "value": "123123",
                      "type": "text"}];

    const body = [ "method": "createLeads",
               "params": {"objects": [objects]},
                "id": "123123123"
              ];
    const params = ["objects" : [objects]]
    const method = "POST"
    };

    /*fetch(url, other_params)
        .then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Could not reach the API: " + response.statusText);
        }
    }).then(function(data) {
        document.getElementById("message").innerHTML = data.encoded;
    }).catch(function(error) {
        document.getElementById("message").innerHTML = error.message;
    });
    return true;
  /*request.onload = function() {
    // Begin accessing JSON data here
  }

  // Send request
  request.send()
}*/


/*"method": "POST",
"header": [
  {
    "key": "Content-Type",
    "name": "Content-Type",
    "value": "application/json",
    "type": "text"
  },
  {
    "key": "method",
    "value": "getFields",
    "type": "text"
  },
  {
    "key": "params",
    "value": "",
    "type": "text"
  },
  {
    "key": "ID",
    "value": "123123",
    "type": "text"
  }
],
"body": {
  "mode": "raw",
  "raw": "{\n  \"method\":\"createLeads\",\n  \"params\":\n    {\"objects\":\n      [\n        {\"firstName\":\"Andrew\",\"lastName\":\"Downs\",\"phoneNumber\":\"1234525\",\"emailAddress\":\"andrew.downs@sharpspring.com\"},\n        {\"firstName\":\"Chris\",\"lastName\":\"Vogler\",\"phoneNumber\":\"75728959\",\"emailAddress\":\"Christopher.vogler@sharpspring.com\"}\n      ]\n      \n    },\n  \"id\":\"123123123\"\n}",
  "options": {
    "raw": {
      "language": "json"
    }
  }
},
"url": {
  "raw": "{{url}}",
  "host": [
    "{{url}}"
  ]
},
"description": "General request"
},
"response": []
},*/
