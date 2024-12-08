<script>
    document.addEventListener("DOMContentLoaded", function () {
        const parentContainer = document.querySelector('.products.collection-content-wrapper.products-list');
        
        // Create the image element
        const bannerImage = document.createElement('img');
        bannerImage.src = 'your-banner-image-url.jpg';
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
</script>
