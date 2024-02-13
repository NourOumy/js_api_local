let membresImg = document.querySelector('.membresImg')
let membreDetails = document.querySelector('.membreDetails')
fetch("script/datas.json")
   .then(response => response.json())
   .then(data => {
     data.users.forEach(function(onedata){
        membresImg.innerHTML +=`<img src="${onedata.image}" alt="membre" class="imgLover" data-userID="${onedata.id-1}">`
     })
     membresImg.addEventListener('click', function(e){   //e = event
      if(e.target.classList.contains("imgLover")){ //la cdt va servir a verifier sur quoi je clique et si c'est la classlist beau
      let membreID = e.target.getAttribute("data-userID")
      membreDetails.innerHTML = 
      `
      <img src="${data.users[membreID].image}" alt="membre">
      <div>${data.users[membreID].name}</div>
      <div>${data.users[membreID].age} ans</div>
      <div>${data.users[membreID].email}</div>
      <div>${data.users[membreID].address.street}</div>
      <div>${data.users[membreID].address.city}</div>
      <div>${data.users[membreID].address.country}</div>
      `
    
      }   
    })

   })
   .catch(error => {console.log("Erreur lors de la récup des données :", error);
 })
  
 


