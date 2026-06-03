// ==========================================
// SbayRean - script.js (តំឡើងប្រព័ន្ធរួចរាល់)
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
    // បញ្ចូលទិន្នន័យ About Page ឱ្យត្រូវទម្រង់
    purpose_title: "Purpose of Creating This Website",
    purpose_desc: "This website was created to provide coding learning opportunities and help build an understanding of various programming languages in Khmer.",
    purpose_card1_title: "Coding Skill Development",
    purpose_card1_desc: "We created this website to help you learn programming and provide knowledge and skills in useful coding languages.",
    purpose_card2_title: "Building a Learning Community",
    purpose_card2_desc: "We want to build a community for learners to share experiences and technologies in web development.",
    purpose_card3_title: "Elevating Skill Levels",
    purpose_card3_desc: "This website also aims to elevate your skill levels by providing opportunities to learn from practical projects and modern pedagogy."
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
    p4_desc: "វេទិកាដើម្បីភ្ជាប់ជាមួយមិត្តភក្ដិ ចែករំលែកការបង្ហោះ និងជជែកក្នុងពេលវេលាជាក់ស្ដែង Ly។",
    p5_title: "វេទិកា Blogging",
    p5_desc: "វេទិការ blogging លឿន និងស្ដាប់គូ SEO ជាមួយការគាំទ្រ markdown និងប្រព័ន្ធមតិ។",
    btn_view_project: "មើលគម្រោង",
    footer_name: "សុខម ថានឆេង",
    footer_desc: "សិស្សឆ្នាំទី៤ ជំនាញ Computer Science and Networking នៅសាកលវិទ្យាល័យចិនឡា។",
    footer_quick_links: "តំណភ្ជាប់រហ័ស", footer_follow: "តាមដានខ្ញុំ",
    footer_link_home: "ទំព័រដើម", footer_link_about: "អំពីខ្ញុំ",
    footer_link_courses: "វគ្គសិក្សា", footer_link_projects: "គម្រោង",
    // បញ្ចូលទិន្នន័យ About Page ឱ្យត្រូវទម្រង់
    purpose_title: "គោលបំណងនៃការបង្កើតវេបសាយនេះ",
    purpose_desc: "វេបសាយនេះត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ឱកាសសម្រាប់ការរៀនកូដ និងជួយបង្កើតការយល់ដឹងពីភាសាកូដនានាជាភាសាខ្មែរBound។",
    purpose_card1_title: "ការអភិវឌ្ឍជំនាញកូដ",
    purpose_card1_desc: "យើងបង្កើតវេបសាយនេះដើម្បីជួយអ្នករៀនបង្កើតកម្មវិធីនិងផ្តល់នូវការយល់ដឹងនិងជំនាញជាមួយភាសាកូដដែលមានប្រយោជន៍។",
    purpose_card2_title: "ការបង្កើតសហគមន៍អ្នកសិក្សា",
    purpose_card2_desc: "យើងចង់បង្កើតសហគមន៍មួយសម្រាប់អ្នកសិក្សាដែលអាចចែករំលែកបទពិសោធន៍និងបច្ចេកវិទ្យាក្នុងការអភិវឌ្ឍវេបសាយ។",
    purpose_card3_title: "ការលើកស្ទួយកម្រិតជំនាញ",
    purpose_card3_desc: "វេបសាយនេះក៏មានគោលបំណងលើកស្ទួយកម្រិតជំនាញរបស់អ្នកដោយផ្តល់ឱកាសរៀនពីគម្រោងជាក់ស្តែងនិងគរុកោសល្យថ្មីៗ។"
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


// --- 4. Dashboard For User Interface (Login) ---
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // ទប់មិនឱ្យទំព័រ Refresh

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // ឧទាហរណ៍ទិន្នន័យត្រាប់ (Mock Data)
        const mockDatabase = {
            "user@gmail.com": { role: "user", name: "Sokhom" },
            "admin@gmail.com": { role: "admin", name: "Admin Manager" },
            "superadmin@gmail.com": { role: "superadmin", name: "Super Admin" }
        };

        // ត្រួតពិនិត្យគណនី
        if (mockDatabase[email]) {
            const userRole = mockDatabase[email].role;

            // រក្សាទុកទិន្នន័យក្នុង LocalStorage
            localStorage.setItem('currentUser', JSON.stringify(mockDatabase[email]));

            // បញ្ជូនទំព័រទៅតាមកម្រិតសិទ្ធិ (Role)
            if (userRole === 'user') {
                window.location.href = 'dashboard.html';
            } else if (userRole === 'admin') {
                window.location.href = '../admin/manage-users.html';
            } else if (userRole === 'superadmin') {
                window.location.href = '../superadmin/dashboard.html';
            }
        } else {
            alert("អ៊ីមែល ឬលេខសម្ងាត់មិនត្រឹមត្រូវទេ!");
        }
    });
}


//--- 5. Register ----
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("ចុះឈ្មោះទទួលបានជោគជ័យ! សូមចូលគណនី (Login)។");
        window.location.href = 'login.html'; 
    });
}


//---- 6. MY MAIN COURSES (Filter & Search) ---
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('course-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    // ប្រសិនបើមិនមែនជាទំព័រ Courses ទេ មិនបាច់ឱ្យកូដខាងក្រោមដំណើរការឡើយ
    if (filterBtns.length === 0 || courseCards.length === 0) return;

    // Function សម្រាប់ចម្រោះកាតវគ្គសិក្សា
    const filterCourses = () => {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const activeBtn = document.querySelector('.filter-btn.active');
        const activeFilter = activeBtn ? activeBtn.dataset.filter : 'all';

        courseCards.forEach(card => {
            const titleEl = card.querySelector('h3');
            const descEl = card.querySelector('p');
            
            if (!titleEl || !descEl) return;

            const title = titleEl.textContent.toLowerCase();
            const desc = descEl.textContent.toLowerCase();
            const category = card.dataset.category;

            // ពិនិត្យលក្ខខណ្ឌស្វែងរកតាមអក្សរ
            const matchesSearch = title.includes(searchTerm) || desc.includes(searchTerm);
            
            // ពិនិត្យលក្ខខណ្ឌតាមប៊ូតុងប្រភេទ (Category)
            let matchesFilter = false;
            if (activeFilter === 'all') {
                matchesFilter = true;
            } else if (activeFilter === 'comingsoon' && category === 'upcoming') {
                matchesFilter = true;
            } else if (activeFilter === category) {
                matchesFilter = true;
            }

            // បង្ហាញ ឬលាក់តាមរយៈ style.display ផ្ទាល់ (មិនបាច់ពឹង CSS Class .hidden ទៀតឡើយ)
            if (matchesSearch && matchesFilter) {
                card.style.display = ''; // រក្សាទម្រង់ CSS Grid ដើម
            } else {
                card.style.display = 'none'; // លាក់ប័ណ្ណ
            }
        });
    };

    // ចាប់ព្រឹត្តិការណ៍ពេលវាយស្វែងរកក្នុង Search Box
    if (searchInput) {
        searchInput.addEventListener('input', filterCourses);
    }

    // ចាប់ព្រឹត្តិការណ៍ពេលចុចលើប៊ូតុង Filter
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // រត់តម្រងឡើងវិញ
            filterCourses();
        });
    });
});



//==== LINK TO BACKEND ADD API ========

// រង់ចាំឱ្យទំព័រ Web ដំណើរការរួចរាល់សិន (DOM Ready)
document.addEventListener('DOMContentLoaded', () => {
    fetchProjects();
});

// អនុគមន៍សម្រាប់ទាញទិន្នន័យពី Node.js API
async function fetchProjects() {
    const projectContainer = document.querySelector('.projects-grid');
    
    try {
        // ១. ហៅទៅកាន់ API Back-End ដែលប្អូនទើបតែបានបើកដំណើរការ
        const response = await fetch('http://localhost:5000/api/projects');
        
        if (!response.ok) {
            throw new Error('មិនអាចទាញទិន្នន័យពី Server បានទេ!');
        }

        // ២. បំប្លែងទិន្នន័យដែលទទួលបានឱ្យទៅជា JSON Array
        const projects = await response.json();

        // ៣. លុបទិន្នន័យចាស់ៗ (Static HTML) ចេញពី Container សិន
        projectContainer.innerHTML = '';

        // ៤. វិលជុំ (Loop) ទិន្នន័យដើម្បីបង្កើតជា Card ថ្មីៗធ្លាក់មកពី API
        projects.forEach(project => {
            const cardHTML = `
                <div class="project-card">
                    <div class="project-img-wrapper">
                        <img src="${project.image_url}" alt="${project.title}">
                    </div>
                    <div class="project-content">
                        <span class="project-tag">${project.tags}</span>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="#" class="project-btn">👉 <span>View Project</span></a>
                    </div>
                </div>
            `;
            // ញាត់កូដ HTML ចូលទៅក្នុងទំព័រ Web
            projectContainer.insertAdjacentHTML('beforeend', cardHTML);
        });

    } catch (error) {
        console.error('Error fetching projects:', error);
        projectContainer.innerHTML = `<p style="color: red; text-align: center;">មានបញ្ហាក្នុងការតភ្ជាប់ទៅកាន់ Server: ${error.message}</p>`;
    }
}

// ==========================================
// COURSE FETCHING & FILTERING LOGIC
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const coursesGrid = document.getElementById('coursesGrid');
    const searchInput = document.getElementById('course-search');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // អថេរសម្រាប់ផ្ទុកទិន្នន័យ Course ទាំងអស់ពី API
    let allCourses = []; 

    // ពិនិត្យមើលថាតើយើងកំពុងនៅលើទំព័រ courses.html ឬអត់
    if (coursesGrid) {
        fetchCourses();
    }

    // 1. ទាញយកទិន្នន័យពី Backend (Port 5000)
    async function fetchCourses() {
        try {
            const response = await fetch('http://localhost:5000/api/courses');
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            allCourses = await response.json();
            
            // បង្ហាញ Courses ទាំងអស់នៅពេលដើមដំបូង
            displayCourses(allCourses);
            
            // បើកដំណើរការ Search និង Filter បន្ទាប់ពីទាញទិន្នន័យបាន
            initializeFilters();

        } catch (error) {
            console.error('Error fetching courses:', error);
            coursesGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #ff6b6b; background: rgba(255,0,0,0.1); border-radius: 8px;">
                    <h3 style="margin-bottom: 10px;">⚠️ Connection Error</h3>
                    <p>Cannot connect to the server. Please make sure your Node.js backend (Port 5000) is running.</p>
                </div>`;
        }
    }

    // 2. មុខងារសម្រាប់បង្ហាញកាត Course
    function displayCourses(coursesToShow) {
        coursesGrid.innerHTML = ''; // សម្អាតទិន្នន័យចាស់

        if (coursesToShow.length === 0) {
            coursesGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #94a3b8;">No courses found matching your criteria.</p>';
            return;
        }

        coursesToShow.forEach(course => {
            let cardHTML = '';

            if (course.is_locked || course.category === 'upcoming') {
                // ទម្រង់សម្រាប់ Course ដែលចាក់សោរ
                cardHTML = `
                    <div class="course-card" data-category="${course.category}">
                        <div class="locked-img-wrapper">
                            <img src="${course.image_url}" alt="${course.title}" class="course-img">
                            <div class="lock-overlay">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lock-icon" style="width: 40px; height: 40px; color: white;">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="course-content">
                            <h3>${course.title}</h3>
                            <p>${course.description}</p>
                            <div class="course-footer">
                                <span class="course-price">${course.price}</span>
                                <span class="enroll-btn disabled-btn" style="background: #475569; cursor: not-allowed; opacity: 0.7;">Locked</span>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                // ទម្រង់សម្រាប់ Course ធម្មតា
                cardHTML = `
                    <div class="course-card" data-category="${course.category}">
                        <img src="${course.image_url}" alt="${course.title}" class="course-img">
                        <div class="course-content">
                            <h3>${course.title}</h3>
                            <p>${course.description}</p>
                            <div class="course-footer">
                                <span class="course-price">${course.price}</span>
                                <a href="${course.link}" class="enroll-btn">View Course</a>
                            </div>
                        </div>
                    </div>
                `;
            }

            coursesGrid.innerHTML += cardHTML;
        });
    }

    // 3. មុខងារសម្រាប់ Search និង Filter
    function initializeFilters() {
        let currentFilter = 'all';
        let currentSearchQuery = '';

        // មុខងារចម្រាញ់ទិន្នន័យ (ហៅប្រើពេលចុចប៊ូតុង ឬវាយអក្សរ)
        function filterData() {
            let filteredCourses = allCourses.filter(course => {
                // ឆែក Filter (Category)
                const categoryMatch = currentFilter === 'all' || 
                                      course.category === currentFilter || 
                                      (currentFilter === 'comingsoon' && (course.is_locked || course.category === 'upcoming'));
                
                // ឆែក Search (Title)
                const searchMatch = course.title.toLowerCase().includes(currentSearchQuery.toLowerCase());

                return categoryMatch && searchMatch;
            });

            displayCourses(filteredCourses);
        }

        // ការចាប់យកព្រឹត្តិការណ៍ពេលវាយអក្សរក្នុងប្រអប់ Search
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                currentSearchQuery = e.target.value;
                filterData();
            });
        }

        // ការចាប់យកព្រឹត្តិការណ៍ពេលចុចប៊ូតុង Filter
        if (filterButtons.length > 0) {
            filterButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    // លុប class 'active' ពីប៊ូតុងចាស់ ហើយដាក់លើប៊ូតុងដែលទើបចុច
                    filterButtons.forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');

                    currentFilter = e.target.getAttribute('data-filter');
                    filterData();
                });
            });
        }
    }
});