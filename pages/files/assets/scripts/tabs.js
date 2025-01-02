function aktywujZakladke(zakladkaId) {
    document.getElementById('tablink1').style.display = 'none';
    document.getElementById('tablink2').style.display = 'none';

    document.getElementById(zakladkaId).style.display = 'block';
}

function openMain() {
    aktywujZakladke('tablink1');
}

function openNews() {
    aktywujZakladke('tablink2');
}

function show_description(event) {
  const description = event.currentTarget.querySelector('.description').innerHTML;
  const modal = document.getElementById('descriptionModal');
  const modalContent = modal.querySelector('.modal-content');

  modalContent.innerHTML = description;
  modal.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  aktywujZakladke('tablink1');

  const modal = document.getElementById('descriptionModal');
  const closeModalButton = modal.querySelector('.close');

  closeModalButton.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    aktywujZakladke('tablink1');
});