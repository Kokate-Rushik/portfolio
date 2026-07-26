document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Configure the intersection observer for the scroll-spy logic
    const observerOptions = {
        root: null,
        // The margin adjusts the trigger line to roughly the middle of the viewport
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Remove active styling from all links
                navLinks.forEach((link) => {
                    link.classList.remove("text-zinc-900", "font-bold");
                    link.classList.add("text-zinc-400");
                });

                // Add active styling to the currently visible section's link
                const activeId = entry.target.id;
                const activeLink = document.querySelector(`.nav-link[href="#${activeId}"]`);
                
                if (activeLink) {
                    activeLink.classList.remove("text-zinc-400");
                    activeLink.classList.add("text-zinc-900", "font-bold");
                }
            }
        });
    }, observerOptions);

    // Observe all main sections
    sections.forEach((section) => {
        if (section.id) {
            sectionObserver.observe(section);
        }
    });
});