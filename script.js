var email1 = document.getElementById("Email1").value
var password1 = document.getElementById("Password1").value
function submit(){
  fetch('https://reqres.in/api/register', {
    method: 'POST',
    body: JSON.stringify({
      email: email1,
      password: password1

    }),
    headers: {
      "Content-type": "text/html; charset=UTF-8"
  }
  
    // Converting to JSON
    .then(response => response.json())

    // Displaying results to console
    .then(json => console.log(json))
    }
  )}
  return submit();

// get request
// fetch ('https://reqres.in/api/users?page=2')
// .then((res) => {
//     if (res.ok){
//         console.log('http request successful')
//     }
//     else{
//         console.log('http request unsuccessful')
//     }
//     return res;
// })
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((error) => console.log(error));

// post or put request

// let email = document.getElementById('Email1').value;
// let password = document.getElementById('Password').value;

// fetch('https://reqres.in/api/users', {
//     method: "POST",
//     headers: {
//         "content-type": 'application/json',
//     },
//     body: JSON.stringify({
//         "email": email,
//         "password": password
//     })

// })
//     .then((res) => {
//         if (res.ok) {
//             console.log('http request successful')
//         }
//         else {
//             console.log('http unsuccesfull')
//         }
//         return res;
//     })
//     .then((res => res.json))
//     .then((data => console.log(data)))
//     .catch((error => console.log(error)));

// function users(p1, p2) {
//     return p1 * p2;
//   }
//   document.getElementById("result").innerHTML = users(4, 3);

// function users() {
//     result.innerText = "Loading....";
//     fetch('https://reqres.in/api/users?page=2')
//         .then((res) => res.json())
//         .then((data => console.log(data)))
//         // JSON.stringify({data})

//         };

//         .catch((error => console.log(error)))};
    // var logger = document.getElementById('result');
    // console.log = function (message) {
    //     if (typeof message == 'object') {
    //         logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
    //     } else {
    //         logger.innerHTML += message + '<br />';
    //     }

    
    // document.getElementById("result").innerHTML = users();


// put request
// fetch('https://reqres.in/api/users/2', {
//     method: "PUT",
//     headers: {
//         "content-type": 'application/json',
//     },
//     body: JSON.stringify({name: 'saleem'}),

// })
// .then((res) => {
//     if (res.ok){
//         console.log('http request successful')
//     }
//     else{
//         console.log('http unsuccesfull')
//     }
//     return res;
// })
// .then((res => res.json))
// .then((data =>console.log(data)))
// .catch((error => console.log(error)));

// delte request
// fetch('https://reqres.in/api/users/2', { method: 'DELETE' })
//     .then((res) => {
//         if (res.ok) {
//             console.log('http request successful')
//         }
//         else {
//             console.log('http request unsuccessful')
//         }
//         return res;
//     })
