    document.addEventListener("DOMContentLoaded", function () {
        const collectionLinks = document.querySelectorAll('.category-link'); // Links to collections
        const bannerSection = document.querySelector('section[data-section-id="6755f5cfba217e7b47f3b6c0"]'); // The main section

        // Define collection-specific images
        const collectionImages = {
            "collections": "url('https://images.squarespace-cdn.com/content/64a3d7a298b6160bf3ff7eed/3d7e0dd6-7a26-4205-8d03-df363bf829ec/cameron-highlands-tea-plantations-4-1195899.jpg?content-type=image%2Fjpeg')", // Default banner for the main collection page
            "private-collection": "url('https://images.squarespace-cdn.com/content/64a3d7a298b6160bf3ff7eed/937a8c56-415c-4a09-805a-4600d97be078/Private+banner+%28JPEG%29.jpg?content-type=image%2Fjpeg')",
            "potions-of-paisley": "url('potions-of-paisley-banner.jpg')",
            "innocent-flowers": "url('innocent-flowers-banner.jpg')",
            "the-hermetic-initiates": "url('https://images.squarespace-cdn.com/content/64a3d7a298b6160bf3ff7eed/c2ff6596-5577-4685-870b-b399c8fa3866/Hermetic+banner+2+%28JPEG%29.jpg?content-type=image%2Fjpeg')",
            "metropolis-mist": "url('metropolis-mist-banner.jpg')",
            "the-calm": "url('https://images.squarespace-cdn.com/content/64a3d7a298b6160bf3ff7eed/580d2cff-25c9-4722-9bbf-7013748c0d3d/Calm+banner.jpg?content-type=image%2Fjpeg')"
        };

        collectionLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                const collectionId = event.target.dataset.collectionId; // Get the collection ID from the clicked link
                // Update the section background image
                bannerSection.style.backgroundImage = collectionImages[collectionId] || collectionImages["default"];
            });
        });
    });
