let editBtn = document.querySelector("#editBtn");
let overlay = document.querySelector(".modal__overlay");
let modal = document.querySelector(".modal");
let profileName = document.querySelector(".profile__name");
let profileTitle = document.querySelector(".profile__title");
let nameInput = document.forms.profile.elements.name;
let titleInput = document.forms.profile.elements.title;

editBtn.addEventListener("click", function (event) {
  nameInput.value = profileName.textContent;
  titleInput.value = profileTitle.textContent;
  overlay.classList.add("modal__overlay_show");
  modal.classList.add("modal_show");
});

closeBtn.addEventListener("click", closeModal);

saveBtn.addEventListener("click", function () {
  profileName.textContent = nameInput.value;
  profileTitle.textContent = titleInput.value;
  closeModal();
});

function closeModal() {
  overlay.classList.remove("modal__overlay_show");
  modal.classList.remove("modal_show");
}
