window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

// Function to show the fullscreen image when an image is clicked
function showFullscreenImage(imageUrl) {
  const fullscreenContainer = document.createElement("div");
  fullscreenContainer.classList.add("fullscreen-container");

  const img = document.createElement("img");
  img.src = imageUrl;
  img.classList.add("fullscreen-image");

  const closeButton = document.createElement("button");
  closeButton.innerHTML = "&#10005;";
  closeButton.classList.add("close-button");

  fullscreenContainer.appendChild(img);
  img.parentNode.insertBefore(closeButton, img.nextSibling);
  document.body.appendChild(fullscreenContainer);

  // Add click event listener to the close button
  closeButton.addEventListener("click", () => {
    document.body.removeChild(fullscreenContainer);
  });

  // Add click event listener to the fullscreen container (for closing when clicked outside the image)
  fullscreenContainer.addEventListener("click", (event) => {
    if (event.target === fullscreenContainer) {
      document.body.removeChild(fullscreenContainer);
    }
  });
}

// Add click event listener to all images with the "service-img" class
const serviceImages = document.querySelectorAll(".service-img");
serviceImages.forEach((img) => {
  img.addEventListener("click", (event) => {
    const imageUrl = event.target.src;
    showFullscreenImage(imageUrl);
  });
});