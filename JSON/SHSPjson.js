var url = 'ShSp.json'
var api_root = document.getElementById('nav_shsp')

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((items) => {
    var leads = items.result.lead
    console.log(leads)
    leads.forEach((obj, i) => {
      const h1 = document.createElement('h1')
      const h2 = document.createElement('h2')
      h1.textContent = leads[i].firstName + " " + leads[i].lastName
      h2.textContent = leads[i].emailAddress

      api_root.appendChild(h1);
      api_root.appendChild(h2);
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

var shspurl = "https://api.sharpspring.com/pubapi/v1.2/?accountID=CFA994835AABB98EF1FEA6582EE1749A&secretKey=8DC79D4D83E7A81B0D27E5159688C877"
var data = JSON.stringify({"method":"getLeads","params":{"where":"null"},"id":"222222222222"});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.sharpspring.com/pubapi/v1.2/");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("method", "getLeads");
xhr.setRequestHeader("params", "");
xhr.setRequestHeader("ID", "123123");

xhr.send(data);





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
