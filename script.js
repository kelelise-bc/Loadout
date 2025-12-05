// ====== BASIC MODAL HANDLING ======
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal-sheet");
const modalBody = document.getElementById("modal-body");
const modalTitle = document.getElementById("modal-title");
const closeModalBtn = document.getElementById("close-modal");

// Open modal function
function openModal(title, templateId) {
  modalTitle.textContent = title;

  // Clear previous content
  modalBody.innerHTML = "";

  // Clone the appropriate template
  const template = document.getElementById(templateId);
  const clone = template.content.cloneNode(true);

  modalBody.appendChild(clone);

  // Activate overlay + sheet
  modalOverlay.classList.add("active");
  modal.classList.add("active"); // <-- REQUIRED
}

// Close modal
function closeModal() {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active"); // <-- REQUIRED
  modalBody.innerHTML = "";
}

// Event listener to close
closeModalBtn.addEventListener("click", closeModal);

// Click outside modal closes overlay
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// ====== TILE CLICK EVENTS ======

// Flying
document.querySelector(".tile-1").addEventListener("click", () => {
  openModal("Flying Details", "flying-modal-template");
});
// Road Trip
document.querySelector(".tile-2").addEventListener("click", () => {
  openModal("Road Trip Details", "roadtrip-modal-template");
});
// Backpacking
document.querySelector(".tile-3").addEventListener("click", () => {
  openModal("Backpacking Details", "backpacking-modal-template");
});
// YOU (center tile)
document.querySelector(".center").addEventListener("click", () => {
  openModal("Your Trip", "you-modal-template");
});
// Weather
document.querySelector(".tile-6").addEventListener("click", () => {
  openModal("Weather", "weather-modal-template");
});
document.querySelector(".tile-7").addEventListener("click", () => {
  openModal("Lodging Details", "lodging-modal-template");
});
// Minimalist
document.querySelector(".tile-5").addEventListener("click", () => {
  openModal("Minimalist", "minimalist-modal-template");
});
// Pets
document.querySelector(".tile-4").addEventListener("click", () => {
  openModal("Pets", "pets-modal-template");
});
// Activities
document.querySelector(".tile-8").addEventListener("click", () => {
  openModal("Activities", "activities-modal-template");
});
