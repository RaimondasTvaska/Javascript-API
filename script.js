// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/users/')
  .then(function (response) {
      let names = response.data.map(user => user.name);
      let ulElement = document.getElementsByTagName("ul")[0];
    //let result = objArray.map(a => a.foo);
    // handle success
    let liHtml = "";
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        liHtml += `<li>${name}</li>`
        
    }

    ulElement.innerHTML = liHtml;
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  //1. make a variable where we store the names of received array of objects
  //2. select the <ul> html from document
  //3. for loop to go through every name to append to ul document

