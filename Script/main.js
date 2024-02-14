let membresImg = document.querySelector('.membresImg')
let membreDetails = document.querySelector('.membreDetails')
// on va chercher les datas locales
fetch("script/datas.json")
   .then(response => response.json())
   .then(data => {
     data.users.forEach(function(user){
        membresImg.innerHTML +=`<img src="${user.image}" alt="membre" class="imgLover" data-userID="${user.id-1}">`
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
      <div>${data.users[membreID].address.street +  " " + data.users[membreID].address.city + " " + data.users[membreID].address.country}</div>
      `
    
      }   
    })

   })
   .catch(error => {console.log("Erreur lors de la récup des données :", error);
 })
  
//  bien observer les données qu'on reçoit
// ici on voit que les datas sontt dans un objet. et dans l'objet, il y a un tableau


