// ===== التمرير السلس =====
document.addEventListener('DOMContentLoaded', function() {
    // التمرير السلس لجميع روابط الـ anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });



    // ===== تأثير الكتابة لقسم الترحيب =====
    const welcomeText = document.querySelector('.welcome p');
    if (welcomeText) {
        const originalText = welcomeText.textContent;
        welcomeText.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                welcomeText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // بدء تأثير الكتابة عندما يكون العنصر في منطقة الرؤية
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(welcomeText);
    }






// التشغيل مرة واحدة عند التحميل

    // ===== تحسين البطاقات التفاعلية =====
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)';
        });

        // إضافة تأثير النقر
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') return; // لا تضيف تأثير إذا كان النقر على رابط
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // ===== تأثيرات الأزرار =====
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            // تأثير التموج
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // ===== تأثير التحميل =====
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // ===== إبراز رابط التنقل النشط =====
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function highlightNavLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);







    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    

    
    /* تحسين تأثيرات البطاقات الحالية */
    .card {
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
`;

document.head.appendChild(style);




    



