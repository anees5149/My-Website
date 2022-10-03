var request = new XMLHttpRequest()

request.open('POST', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // Begin accessing JSON data here
 // var data = JSON.parse(this.response)
 document.getElementById('root').innerHTML = this.responseText;

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      console.log(movie.title);
      
    })
  } else {
    console.log('error');
  }
}

request.send()