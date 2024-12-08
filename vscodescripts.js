document.addEventListener("DOMContentLoaded", function () {
  // Select the parent container
  const parentContainer = document.querySelector(
    ".products.collection-content-wrapper.products-list"
  );

  // Create the image element
  const bannerImage = document.createElement("img");
  bannerImage.alt = "Category Banner";
  bannerImage.style.width = "100%"; // Makes the banner full-width
  bannerImage.style.marginBottom = "20px"; // Adds space below the banner

  // Insert the image before the <h2>
  const h2Element = parentContainer.querySelector(".nested-category-title");
  h2Element.parentNode.insertBefore(bannerImage, h2Element);
});


bannerImage.src = "https://images.squarespace-cdn.com/content/64a3d7a298b6160bf3ff7eed/937a8c56-415c-4a09-805a-4600d97be078/Private+banner+%28JPEG%29.jpg?content-type=image%2Fjpeg";

