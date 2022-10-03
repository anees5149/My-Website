// main.js

// POST request using fetch()
fetch("https://jsonplaceholder.typicode.com/posts", {
	
	
	// Adding method type
	method: "POST",
	
	// Adding body or contents to send
	body: JSON.stringify({
		title: "foo2",
		body: "bar2",
		userId: 3
	}),
	
	// Adding headers to the request
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	},
	
})


// Converting to JSON
.then(response => response.json())


// Displaying results to console
.then(json => console.log(json));
try {
    const { data } = await axios({
        method: 'put',
        url: '/api/article/123',
        data: {
            title: 'Making PUT Requests with Axios',
            status: 'published'
        }
    });

    console.log(data);
} catch (err) {
    if (err.response.status === 404) {
        console.log('Resource could not be found!');
    } else {
        console.log(err.message);
    }
}