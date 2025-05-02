document.addEventListener('DOMContentLoaded', function() {
    // 導航欄切換功能
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // 移除所有活動類
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active-section');
            });

            // 添加活動類到當前項
            this.classList.add('active');
            const targetId = this.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active-section');
        });
    });

    // 互動式背景的滑鼠跟蹤功能
    const interactiveSection = document.getElementById('interactive-gradient');
    const blob1 = document.querySelector('.int-blob1');
    const blob2 = document.querySelector('.int-blob2');

    interactiveSection.addEventListener('mousemove', (e) => {
        // 計算滑鼠位置相對於視窗的百分比
        const rect = interactiveSection.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width;
        const mouseY = (e.clientY - rect.top) / rect.height;

        // 根據滑鼠位置移動漸層元素
        blob1.style.transform = `translate(${mouseX * 10}%, ${mouseY * 10}%) rotate(${mouseX * 360}deg)`;
        blob2.style.transform = `translate(${-mouseX * 15}%, ${-mouseY * 15}%) scale(${1 + mouseY * 0.5})`;

        // 動態改變漸層顏色
        const hue1 = mouseX * 360;
        const hue2 = mouseY * 360;
        blob2.style.background = `linear-gradient(135deg,
                    hsl(${hue1}, 100%, 70%),
                    hsl(${hue2}, 100%, 70%))`;
    });

    // 響應式導航欄顏色變化
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        }
    });
});
