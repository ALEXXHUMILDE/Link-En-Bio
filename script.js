document.addEventListener("DOMContentLoaded", function () {
    const shareLink = document.getElementById("share-link");
    const copyButton = document.getElementById("copy-button");
    const shareButton = document.getElementById("share-button");
    const shareModal = document.getElementById("share-modal");
    const overlay = document.getElementById("overlay");
    const closePopup = document.getElementById("close-button");

    shareButton.addEventListener("click", function () {
        shareModal.style.display = "block";
        overlay.style.display = "block";
    });

    closePopup.addEventListener("click", function () {
        shareModal.style.display = "none";
        overlay.style.display = "none";
    });

    copyButton.addEventListener("click", function () {
        shareLink.select();
        document.execCommand("copy");
        shareLink.setSelectionRange(0, 0);
        copyButton.innerText = "¡Enlace copiado!";
        setTimeout(function () {
            copyButton.innerText = "Copiar enlace";
        }, 5000)
    });
});

console.log("Web creada por alexxhumilde. 🥳")