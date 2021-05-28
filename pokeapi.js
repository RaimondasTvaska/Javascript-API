
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')

.then(function (response) {
    //console.log(response.data);
    //console.log(Array.isArray(response.data.abilities));
    document.getElementById("container").innerHTML = create(response.data);
    
  })

 .catch(function (error) {
   console.log(error);
 });





//  function create(data) {
//      if (data == null) {
//          return;
         
//      }
      
    let HTML = "";
    if (typeof data === "object") {
        if (Array.isArray(data)) {
            //console.log(data);
            HTML += `<ol>`;
            for (let i = 0; i < data.length; i++) {
                HTML += create(data[i]);
                
            } 
            HTML += `</ol>`;
            }else{
            HTML += `<ul>`;
            // let something = Object.values(data);
            // for (let i = 0; i < something.length; i++) {
            //     HTML += create(something[i]);
                for (const key in data) {
                    
                    HTML += create(key[i]);
                        
                }
                
            }
            HTML += `<ul>`;
            
        }else{
            HTML += `<li>${data}</li>`;
        }
        
    return HTML;
      
  }

