window.mockApiUrl = "https://5ff1a6a7db1158001748b2d6.mockapi.io/pets/";

window.removePet = (id) => {
  fetch(`${window.mockApiUrl}${id}`, {
    method: "DELETE",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json()).then((pet) => {
    window.location.reload();
    console.log(pet);
  })
};

window.openPetDetail = (id) => {
  fetch(`${window.mockApiUrl}${id}`, {
    method: "GET",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json()).then((pet) => {
    console.log(pet);
    let modalEl = document.getElementById('petModal');
    let modalPet = new bootstrap.Modal(modalEl);
    modalEl.querySelector('#modalLabel').innerHTML = pet.name;
    modalEl.querySelector('.modal-body').innerHTML = `<p class="text-center">${pet.description}</p>
    <img class="w-25 mx-auto d-block" src="${pet.image}"/>
    `;
    modalPet.show();
  })
};


let petModalHTML = `<div class="modal fade" id="petModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;


let newEl = document.createElement("div");
newEl.innerHTML = petModalHTML;
document.body.appendChild(newEl);