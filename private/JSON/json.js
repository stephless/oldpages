var root = document.getElementById('nav_json')

var url = 'example.json'

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((items) => {
    items.forEach((movie, i) => {
      const h2 = document.createElement('h2')
      const h3 = document.createElement('h3')
      h2.textContent = items[i].first_name + " " + items[i].last_name
      h3.textContent = items[i].title
      root.appendChild(h2);
      root.appendChild(h3);
    });



    //var items = JSON.parse(url)
    //var users = items.data;
    //console.log(items)

    //const h1 = document.createElement('h1')
    //h1.textContent = movies[i]
    //console.log(h1.textContent)
  });


/*const app = document.getElementById('api_root')
const list = document.getElementById('list_api')

const container = list
container.setAttribute('class', 'container')

app.appendChild(container)

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://reqres.in/api/users', true)

request.onload = function() {
  // Begin accessing JSON data here
  var items = JSON.parse(this.response)
  var users = items.data;

  if (request.status >= 200 && request.status < 400) {
    for (i = 0; i < users.length; i++){
        console.log(users[i].id)
        const card = document.createElement('li')
        card.setAttribute( 'id', i)
        card.setAttribute( 'class', 'item_api')
        const text = document.createElement('div')

        const h1 = document.createElement('h1')
        h1.textContent = `${users[i].first_name} ${users[i].last_name}`

        const a = document.createElement('a')
        a.textContent = users[i].email
        a.href = `mailto:${users[i].email}`

        const img = document.createElement('img')
        img.src = users[i].avatar

        container.appendChild(card)
        card.appendChild(img)
        card.appendChild(text)
        text.appendChild(h1)
        text.appendChild(a)
      }
    } else {
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `No Luck Here!`
      app.appendChild(errorMessage)
    }
}


// Send request
request.send()
*/
