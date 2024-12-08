    document.addEventListener("DOMContentLoaded", function () {
        const parentContainer = document.querySelector('.products.collection-content-wrapper.products-list');
        
        // Create the image element
        const bannerImage = document.createElement('img');
        bannerImage.src = 'https://images.squarespace-cdn.com/content/64a3d7a298b6160bf3ff7eed/937a8c56-415c-4a09-805a-4600d97be078/Private+banner+%28JPEG%29.jpg?content-type=image%2Fjpeg';
        bannerImage.alt = 'Category Banner';
        bannerImage.style.position = 'absolute';
        bannerImage.style.top = '0'; // Position at the top of the container
        bannerImage.style.left = '0';
        bannerImage.style.width = '100%'; // Full-width
        bannerImage.style.height = '300px'; // Adjust height as needed
        bannerImage.style.zIndex = '0'; // Ensure image stays behind the header

        // Insert the image before the <h2>
        const h2Element = parentContainer.querySelector('.nested-category-title');
        h2Element.parentNode.insertBefore(bannerImage, h2Element);
    });
