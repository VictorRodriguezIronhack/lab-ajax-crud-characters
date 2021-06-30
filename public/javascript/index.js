const charactersAPI = new APIHandler();


function displayCharacterFromAPI(elem) {
  let characters = `
    <div class="character-info">
     <div class="name">${elem.name}</div>
      <div class="occupation">${elem.occupation}</div> 
      <div class="cartoon">${elem.cartoon}</div>
       <div class="weapon">${elem.weapon}</div>
        <div class="weapon">${elem.id}</div>
         </div> `
  document.querySelector('.characters-container').innerHTML = characters
}





window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  });



  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const input = document.querySelector('[name="character-id"]')
    const id = input.value

    charactersAPI
      .getOneRegister(id)
      .then(response => {
        displayCharacter

      })

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
