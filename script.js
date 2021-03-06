// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/users/')
  .then(function (response) {
      //let names = response.data.map(user => user.name);
      //let ulElement = document.getElementsByTagName("ul")[0];
    //let result = objArray.map(a => a.foo);
    // handle success
    // let liHtml = "";
    // for (let i = 0; i < names.length; i++) {
    //     const name = names[i];
    //     liHtml += `<li>${name}</li>`
        
    //}

    // ulElement.innerHTML = liHtml;
    let table = document.getElementById('table');
    let HTML = 
      `<tr>
        <th>id</th>
        <th>name</th>
        <th>username</th>
        <th>email</th>
        <th>phone</th>
        <th>website</th>
        <th>company</th>
        <th>address</th>
        <th>test</th>
      </tr>`;
    console.log(Object.keys(response.data[2]));
      response.data.forEach(user => {
        HTML += 
          `<tr>
            <td> ${user.id} </td>
            <td> ${user.name} </td>
            <td> ${user.username} </td>
            <td> ${user.email} </td>
            <td> ${user.phone} </td>
            <td> ${user.website} </td>
            <td>

        
              <ul>
                <li>${user.company.name}</li>
                <li>${user.company.catchPhrase}</li>
                <li>${user.company.bs}</li>
              </ul>
             </td>;
             <td>
              <ol>
                <li>${user.address.city}</li>
                <li>${user.address.street}</li>
                <li>${user.address.suite}</li>
                <li>${user.address.zipcode}</li>
                <li>
                  <ul>
                    <li>${user.address.geo.lat}</li>
                    <li>${user.address.geo.lng}</li>
                  </ul>
                </li>
              </ol>
              <td/>

          </tr>`;

     //console.log(response);
     //console.log(response.data);
       //console.log(user.address);
      
    });

    table.innerHTML += HTML;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  //1. make a variable where we store the names of received array of objects
  //2. select the <ul> html from document
  //3. for loop to go through every name to append to ul document

