
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Menu navigasi untuk perangkat mobile
if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Tutup navigasi" : "Buka navigasi"
        );
    });

    // Tutup menu setelah tautan diklik
    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Buka navigasi"
            );
        });
    });

    // Tutup menu dengan tombol Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            nav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Buka navigasi"
            );
        }
    });
}

// Tahun footer otomatis
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
