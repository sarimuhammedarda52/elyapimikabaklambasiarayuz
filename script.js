document.addEventListener('DOMContentLoaded', () => {

    const themeToggleBtn = document.querySelector('.theme-toggle');
    const iconMoon = document.getElementById('icon-moon');
    const iconSun = document.getElementById('icon-sun');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        iconMoon.classList.add('hidden');
        iconSun.classList.remove('hidden');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                iconMoon.classList.add('hidden');
                iconSun.classList.remove('hidden');
                localStorage.setItem('theme', 'dark-mode');
            } else {
                iconSun.classList.add('hidden');
                iconMoon.classList.remove('hidden');
                localStorage.setItem('theme', '');
            }
        });
    }

    const galleryToggleBtn = document.getElementById('gallery-toggle-btn');
    const galleryStatus = document.getElementById('gallery-status');
    const galleryIconNight = document.getElementById('gallery-icon-night');
    const galleryIconDay = document.getElementById('gallery-icon-day');
    const galleryMainImg = document.getElementById('gallery-main-img');
    const galleryCaption = document.getElementById('gallery-caption');
    
    const dayImageSrc = 'urunfotograf/gunduzurunfoto.jpg';
    const nightImageSrc = 'urunfotograf/geceurunfoto.png';

    let isNightMode = false;

    if (galleryToggleBtn && galleryMainImg) {
        galleryToggleBtn.addEventListener('click', () => {
            galleryMainImg.classList.add('fade-out');
            
            setTimeout(() => {
                isNightMode = !isNightMode;
                
                if (isNightMode) {
                    galleryMainImg.src = nightImageSrc;
                    galleryStatus.innerText = 'Gündüz Halini Gör';
                    galleryIconNight.classList.add('hidden');
                    galleryIconDay.classList.remove('hidden');
                    galleryCaption.innerText = 'Gece: LED ışığın yarattığı modern ve aydınlık atmosfer.';
                } else {
                    galleryMainImg.src = dayImageSrc;
                    galleryStatus.innerText = 'Gece Halini Gör';
                    galleryIconDay.classList.add('hidden');
                    galleryIconNight.classList.remove('hidden');
                    galleryCaption.innerText = 'Gündüz: Doğal kabak dokusu ve balık desenlerinin canlılığı.';
                }
                
                galleryMainImg.classList.remove('fade-out');
            }, 400);
        });
    }

    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});