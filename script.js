/* =========================
   CERTIFICATE MODAL
========================= */

function openCertificate(image, title) {
    const modal = document.getElementById("certificateModal");
    const modalImage = document.getElementById("certificateImage");
    const modalTitle = document.getElementById("certificateTitle");

    modalImage.src = image;
    modalImage.alt = title;
    modalTitle.textContent = title;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeCertificate(event) {

    if (
        event &&
        event.target !== event.currentTarget &&
        !event.target.classList.contains("certificate-modal-close")
    ) {
        return;
    }

    const modal = document.getElementById("certificateModal");

    modal.classList.remove("active");

    document.body.style.overflow = "";
}
function toggleStar(button) {
    button.classList.toggle("starred");

    const icon = button.querySelector(".star-icon");
    const text = button.querySelector(".star-text");

    if (button.classList.contains("starred")) {
        icon.textContent = "★";
        text.textContent = "Thank you!";
    } else {
        icon.textContent = "☆";
        text.textContent = "Star this portfolio";
    }

    
}