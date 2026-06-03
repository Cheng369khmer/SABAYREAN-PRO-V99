// ==========================================
// SbayRean - script.js
// ==========================================

// --- 1. Hamburger Menu Toggle ---
const menuBtn = document.getElementById('menu-btn');
const navContent = document.getElementById('nav-content');

if (menuBtn && navContent) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navContent.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navContent.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navContent.classList.remove('active');
    });
  });
}

// --- 2. Dark Mode Toggle ---
const themeToggle = document.getElementById('theme-toggle');

// Load saved preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  if (themeToggle) themeToggle.checked = true;
}

if (themeToggle) {
  themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
  });
}

// --- 3. Language Toggle (EN / KM) ---
const translations = {
  en: {
    home: "Home", projects: "Projects", services: "Services",
    courses: "Courses", contact: "Contact", about: "About",
    login: "Login", register: "Register",
    badge: "Web Developer · Freelancer · Online Teaching",
    h1_start: "Learn to build", h1_highlight: "real-world websites",
    h1_end: "with clear guidance.",
    hero_desc: "Master modern web development step by step with practical lessons, real projects, and clear explanations in every module.",
    btn_browse: "Browse Courses", btn_projects: "View Projects",
    stat_students: "Students taught", stat_courses: "Courses available",
    stat_years: "Years of teaching experience",
    p1_title: "E-Commerce Platform",
    p1_desc: "A full-stack e-commerce website with payment integration, user dashboard, and admin panel.",
    p2_title: "School Management System",
    p2_desc: "A complete system for managing students, courses, attendance, and grading.",
    p3_title: "Personal Portfolio Website",
    p3_desc: "A fully responsive personal portfolio designed to showcase skills and previous work.",
    p4_title: "Social Media App",
    p4_desc: "A platform to connect with friends, share posts, and chat in real-time.",
    p5_title: "Blogging Platform",
    p5_desc: "A fast and SEO-friendly blogging platform with markdown support and commenting system.",
    btn_view_project: "View Project",
    footer_name: "Sokhom Thangcheng",
    footer_desc: "Year 4 student majoring in Computer Science and Networking at Chenla University.",
    footer_quick_links: "QUICK LINKS", footer_follow: "FOLLOW ME",
    footer_link_home: "Home", footer_link_about: "About Me",
    footer_link_courses: "Courses", footer_link_projects: "Projects",
  },
  km: {
    home: "ទំព័រដើម", projects: "គម្រោង", services: "សេវាកម្ម",
    courses: "វគ្គសិក្សា", contact: "ទំនាក់ទំនង", about: "អំពីខ្ញុំ",
    login: "ចូល", register: "ចុះឈ្មោះ",
    badge: "អ្នកអភិវឌ្ឍន៍គេហទំព័រ · Freelancer · បង្រៀនអនឡាញ",
    h1_start: "រៀនបង្កើត", h1_highlight: "គេហទំព័រពិតប្រាកដ",
    h1_end: "ជាមួយការណែនាំច្បាស់លាស់។",
    hero_desc: "ស្ទាត់ជំនាញការអភិវឌ្ឍន៍គេហទំព័រទំនើបជាជំហានៗ ជាមួយមេរៀនជាក់ស្ដែង គម្រោងពិត និងការពន្យល់ច្បាស់លាស់ក្នុងគ្រប់ module។",
    btn_browse: "មើលវគ្គសិក្សា", btn_projects: "មើលគម្រោង",
    stat_students: "សិស្សដែលបានបង្រៀន", stat_courses: "វគ្គសិក្សាដែលមាន",
    stat_years: "ឆ្នាំនៃបទពិសោធន៍បង្រៀន",
    p1_title: "វេទិកា E-Commerce",
    p1_desc: "គេហទំព័រ e-commerce ពេញលេញ ជាមួយការរួមបញ្ចូលការទូទាត់ ផ្ទាំងគ្រប់គ្រងអ្នកប្រើ និងប្រព័ន្ធគ្រប់គ្រង។",
    p2_title: "ប្រព័ន្ធគ្រប់គ្រងសាលារៀន",
    p2_desc: "ប្រព័ន្ធពេញលេញសម្រាប់គ្រប់គ្រងសិស្ស វគ្គសិក្សា វត្តមាន និងការផ្តល់ពិន្ទុ។",
    p3_title: "គេហទំព័រ Portfolio ផ្ទាល់ខ្លួន",
    p3_desc: "Portfolio ផ្ទាល់ខ្លួនដែលឆ្លើយតបពេញលេញ ដើម្បីបង្ហាញជំនាញ និងការងារមុន។",
    p4_title: "កម្មវិធីប្រព័ន្ធសង្គម",
    p4_desc: "វេទិកាដើម្បីភ្ជាប់ជាមួយមិត្តភក្ដិ ចែករំលែកការបង្ហោះ និងជជែកក្នុងពេលវេលាជាក់ស្ដែង។",
    p5_title: "វេទិកា Blogging",
    p5_desc: "វេទិការ blogging លឿន និងស្ដាប់គូ SEO ជាមួយការគាំទ្រ markdown និងប្រព័ន្ធមតិ។",
    btn_view_project: "មើលគម្រោង",
    footer_name: "សុខម ថានឆេង",
    footer_desc: "សិស្សឆ្នាំទី៤ ជំនាញ Computer Science and Networking នៅសាកលវិទ្យាល័យចិនឡា។",
    footer_quick_links: "តំណភ្ជាប់រហ័ស", footer_follow: "តាមដានខ្ញុំ",
    footer_link_home: "ទំព័រដើម", footer_link_about: "អំពីខ្ញុំ",
    footer_link_courses: "វគ្គសិក្សា", footer_link_projects: "គម្រោង",
  }
};

let currentLang = localStorage.getItem('lang') || 'en';
const langToggle = document.getElementById('lang-toggle');

function applyLanguage(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  if (langToggle) {
    langToggle.src = lang === 'en' ? 'uk-flag.png' : 'kh-flag.png';
    langToggle.alt = lang === 'en' ? 'English' : 'ខ្មែរ';
  }
  document.documentElement.lang = lang === 'km' ? 'km' : 'en';
}

applyLanguage(currentLang);

if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'km' : 'en';
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
  });
}


// --- 3. Language About (EN / KM) ---
"purpose_title"; "Purpose of Creating This Website",
    "purpose_desc"; "This website was created to provide coding learning opportunities and help build an understanding of various programming languages in Khmer.",
    "purpose_card1_title"; "Coding Skill Development",
    "purpose_card1_desc"; "We created this website to help you learn programming and provide knowledge and skills in useful coding languages.",
    "purpose_card2_title"; "Building a Learning Community",
    "purpose_card2_desc"; "We want to build a community for learners to share experiences and technologies in web development.",
    "purpose_card3_title"; "Elevating Skill Levels",
    "purpose_card3_desc"; "This website also aims to elevate your skill levels by providing opportunities to learn from practical projects and modern pedagogy."

"purpose_title"; "គោលបំណងនៃការបង្កើតវេបសាយនេះ",
    "purpose_desc"; "វេបសាយនេះត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ឱកាសសម្រាប់ការរៀនកូដ និងជួយបង្កើតការយល់ដឹងពីភាសាកូដនានាជាភាសាខ្មែរ។",
    "purpose_card1_title"; "ការអភិវឌ្ឍជំនាញកូដ",
    "purpose_card1_desc"; "យើងបង្កើតវេបសាយនេះដើម្បីជួយអ្នករៀនបង្កើតកម្មវិធីនិងផ្តល់នូវការយល់ដឹងនិងជំនាញជាមួយភាសាកូដដែលមានប្រយោជន៍។",
    "purpose_card2_title"; "ការបង្កើតសហគមន៍អ្នកសិក្សា",
    "purpose_card2_desc"; "យើងចង់បង្កើតសហគមន៍មួយសម្រាប់អ្នកសិក្សាដែលអាចចែករំលែកបទពិសោធន៍និងបច្ចេកវិទ្យាក្នុងការអភិវឌ្ឍវេបសាយ។",
    "purpose_card3_title"; "ការលើកស្ទួយកម្រិតជំនាញ",
    "purpose_card3_desc"; "វេបសាយនេះក៏មានគោលបំណងលើកស្ទួយកម្រិតជំនាញរបស់អ្នកដោយផ្តល់ឱកាសរៀនពីគម្រោងជាក់ស្តែងនិងគរុកោសល្យថ្មីៗ។"


// --- Dashborad For User Interface ---

// កូដសម្រាប់ចាប់យកព្រឹត្តិការណ៍ពេលចុចប៊ូតុង Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // ទប់មិនឱ្យទំព័រ Refresh

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // ឧទាហរណ៍ទិន្នន័យត្រាប់ (Mock Data) ដែលបានមកពី Database (Backend)
    const mockDatabase = {
        "user@gmail.com": { role: "user", name: "Sokhom" },
        "admin@gmail.com": { role: "admin", name: "Admin Manager" },
        "superadmin@gmail.com": { role: "superadmin", name: "Super Admin" }
    };

    // ត្រួតពិនិត្យគណនី
    if (mockDatabase[email]) {
        const userRole = mockDatabase[email].role;

        // រក្សាទុកទិន្នន័យក្នុង LocalStorage សម្រាប់ការប្រើប្រាស់បន្ត
        localStorage.setItem('currentUser', JSON.stringify(mockDatabase[email]));

        // បញ្ជូនទំព័រទៅតាមកម្រិតសិទ្ធិ (Role)
        if (userRole === 'user') {
            window.location.href = 'dashboard.html'; // ទៅកាន់ទំព័រសិស្ស
        } else if (userRole === 'admin') {
            window.location.href = '../admin/manage-users.html'; // ទៅកាន់ទំព័រ Admin
        } else if (userRole === 'superadmin') {
            window.location.href = '../superadmin/dashboard.html'; // ទៅកាន់ទំព័រ Super Admin
        }
    } else {
        alert("អ៊ីមែល ឬលេខសម្ងាត់មិនត្រឹមត្រូវទេ!");
    }
});


//--- Rigister ----

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // កន្លែងនេះបងអាចបន្ថែម Logic បញ្ជូនទិន្នន័យទៅ Backend (API)
    // ...
    
    alert("ចុះឈ្មោះទទួលបានជោគជ័យ! សូមចូលគណនី (Login)។");
    
    // បញ្ជូនទៅកាន់ទំព័រ Login វិញ
    window.location.href = 'login.html'; 
});


//---- MY MAIN COURSES  ---

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('course-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    // Function to filter the courses
    const filterCourses = () => {
        // Get the search text and convert to lowercase
        const searchTerm = searchInput.value.toLowerCase();
        
        // Find which filter button is currently active
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

        courseCards.forEach(card => {
            // Get text from the title and description
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('p').textContent.toLowerCase();
            const category = card.dataset.category;

            // Check if the card matches the search text and the selected category
            const matchesSearch = title.includes(searchTerm) || desc.includes(searchTerm);
            const matchesFilter = activeFilter === 'all' || category === activeFilter;

            // Show or hide the card based on the checks
            if (matchesSearch && matchesFilter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    };

    // Listen for typing in the search box
    if (searchInput) {
        searchInput.addEventListener('input', filterCourses);
    }

    // Listen for clicks on the filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add 'active' class to the clicked button
            btn.classList.add('active');
            
            // Run the filter function again
            filterCourses();
        });
    });
});