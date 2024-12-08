<script>
    document.addEventListener("DOMContentLoaded", function () {
        const collectionLinks = document.querySelectorAll('.category-link'); // Links to collections
        const bannerSection = document.querySelector('section[data-section-id="6755f5cfba217e7b47f3b6c0"]'); // The main section

        // Define collection-specific images
        const collectionImages = {
            "default": "url('default-collection-banner.jpg')", // Default banner for the main collection page
            "private-collection": "url('private-collection-banner.jpg')",
            "potions-of-paisley": "url('potions-of-paisley-banner.jpg')",
            "innocent-flowers": "url('innocent-flowers-banner.jpg')",
            "the-hermetic-initiates": "url('hermetic-initiates-banner.jpg')",
            "metropolis-mist": "url('metropolis-mist-banner.jpg')",
            "the-calm": "url('the-calm-banner.jpg')"
        };

        collectionLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                const collectionId = event.target.dataset.collectionId; // Get the collection ID from the clicked link
                // Update the section background image
                bannerSection.style.backgroundImage = collectionImages[collectionId] || collectionImages["default"];
            });
        });
    });
