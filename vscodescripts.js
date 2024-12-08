    document.addEventListener("DOMContentLoaded", function () {
        const collectionLinks = document.querySelectorAll('.collection-link'); // Links to each collection
        const bannerImage = document.getElementById('collection-banner-image'); // If using image block
        const bannerSection = document.querySelector('.section[data-section-id="6755f5cfba217e7b47f3b6c0"]'); // If using background image

        // Define collection-specific images
        const collectionImages = {
            "collection-1": "url('collection-1-banner.jpg')",
            "collection-2": "url('collection-2-banner.jpg')",
            "collection-3": "url('collection-3-banner.jpg')",
            // Add more collections and their respective banner URLs her
        };

        collectionLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                const collectionId = event.target.dataset.collectionId; // Get the collection ID from the clicked link

                if (bannerImage) {
                    // If using an image block
                    bannerImage.src = collectionImages[collectionId] || 'default-banner.jpg';
                } else if (bannerSection) {
                    // If using a background image
                    bannerSection.style.backgroundImage = collectionImages[collectionId] || 'url("default-banner.jpg")';
                }
            });
        });
    });
