document.addEventListener('DOMContentLoaded', function () {
    // Get all service containers
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    const serviceContainers = document.querySelectorAll('.service-container');
    var navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    serviceContainers.forEach(container => {
        // Get the read more button and full description for this container
        const readMoreBtn = container.querySelector('.read-more-btn');
        const fullDescription = container.querySelector('.full-description');
        const closeBtn = container.querySelector('.close-btn');

        // Add click event for read more button
        readMoreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            fullDescription.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        // Add click event for close button
        closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            fullDescription.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
});

