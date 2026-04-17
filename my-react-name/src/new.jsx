let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("data connected");
    } else {
        reject("data not connected");
    }
});

// consume the promise
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => {
    data.forEach(element => {
        console.log(element.name);
    });
})
.catch((error) => console.error(error));ccv 