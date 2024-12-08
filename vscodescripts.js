    document.addEventListener("DOMContentLoaded", function () {
        // Select the parent container
        const parentContainer = document.querySelector('.products.collection-content-wrapper.products-list');
        
        // Create the image element
        const bannerImage = document.createElement('img');
        bannerImage.src = 'your-banner-image-url.jpg';
        bannerImage.alt = 'Category Banner';
        bannerImage.style.width = '100%'; // Makes the banner full-width
        bannerImage.style.marginBottom = '20px'; // Adds space below the banner

        // Insert the image before the <h2>
        const h2Element = parentContainer.querySelector('.nested-category-title');
        h2Element.parentNode.insertBefore(bannerImage, h2Element);
    });