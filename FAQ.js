// JavaScript to add accordion effect to the FAQ items
const faqItems = document.querySelectorAll('.faq-item');

function toggleAccordion() {
    this.classList.toggle('active');
}

faqItems.forEach(item => item.addEventListener('click', toggleAccordion));

