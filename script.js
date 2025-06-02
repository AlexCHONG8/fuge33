document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Get selected language
            const lang = this.dataset.lang;
            
            // Update navigation links
            document.querySelectorAll('nav a').forEach(link => {
                link.textContent = link.dataset[lang];
            });
            
            // Update all elements with data attributes
            document.querySelectorAll('[data-en], [data-zh]').forEach(el => {
                if (el.dataset[lang]) {
                    el.textContent = el.dataset[lang];
                }
            });
            
            // Update page title
            if (lang === 'zh') {
                document.title = document.querySelector('title').textContent.replace('| Summed Medtech', '| 森迈医疗');
            } else {
                document.title = document.querySelector('title').textContent.replace('| 森迈医疗', '| Summed Medtech');
            }
        });
    });
});
