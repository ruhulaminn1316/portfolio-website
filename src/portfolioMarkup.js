export const portfolioMarkup = String.raw`
        <!--==================== HEADER ====================-->
        <header class="header" id="header">
            <nav class="nav container">
                <a href="#" class="nav__logo"><span class="nav__logo-code" aria-hidden="true">&lt;</span><span class="nav__logo-code">RUHUL</span><span class="nav__logo-code" aria-hidden="true">/</span><span class="nav__logo-code">AMIN</span><span class="nav__logo-code" aria-hidden="true">&gt;</span></a>
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list grid">
                        <li class="nav__item">
                            <a href="#home" class="nav__link">
                                <i class="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#about" class="nav__link">
                                <i class="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#skills" class="nav__link">
                                <i class="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                          <li class="nav__item">
                            <a href="#project" class="nav__link">
                                <i class="uil uil-briefcase nav__icon"></i>Projects
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#education" class="nav__link">
                                <i class="uil uil-graduation-cap nav__icon"></i>Education
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#achievements" class="nav__link">
                                <i class="uil uil-award nav__icon"></i>Achievements
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#services" class="nav__link">
                                <i class="uil uil-briefcase-alt nav__icon"></i>Services
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#gallery" class="nav__link">
                                <i class="uil uil-images nav__icon"></i>Gallary
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#contact" class="nav__link">
                                <i class="uil uil-message nav__icon"></i>Contact                               
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" id="nav-close"></i>
                </div>
                <div class="nav__btns">
                    <!-- Theme change button -->

                    <i class="uil uil-moon change-theme" id="theme-button"></i>

                    <div class="nav__toggle" id="nav-toggle">
                        <i class="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>

        <!--==================== MAIN ====================-->
        <main class="main">
            <!--==================== HOME ====================-->
            <section class="home home--pro section" id="home">
                <div class="home__container container">
                    <div class="home__content home__content--pro">
                        <div class="home__data home__data--pro">
                            <p class="home__badge"><span class="home__badge-dot" aria-hidden="true"></span>Available for work</p>
                            <h1 class="home__title"><span class="home__intro">Hi, I'm</span><span class="home__name">RUHUL AMIN</span></h1>
                            <h3 class="home__subtitle home__subtitle--pro"><span class="home__typing" data-typing='["Frontend Developer", "React Enthusiast"]'>Frontend Developer</span> <span class="home__subtitle-divider">|</span> Building Modern Web Apps<span class="home__typing-cursor" aria-hidden="true">|</span></h3>
                            <p class="home__description">I build modern, responsive, and user-friendly web applications using React and JavaScript.</p>

                            <div class="home__stats" aria-label="Professional highlights">
                                <div class="home__stat">
                                    <span class="home__stat-value">1+</span>
                                    <span class="home__stat-label">Years Experience</span>
                                </div>
                                <div class="home__stat">
                                    <span class="home__stat-value">10+</span>
                                    <span class="home__stat-label">Projects Completed</span>
                                </div>
                                <div class="home__stat">
                                    <span class="home__stat-value">5+</span>
                                    <span class="home__stat-label">Technologies</span>
                                </div>
                            </div>

                            <div class="home__actions">
                                <a href="#project" class="button button--flex home__cta home__cta--primary">View My Work<i class="uil uil-arrow-right button__icon"></i></a>
                                <a download href="packages/pdf/Ruhul_Cv.pdf" class="button button--flex home__cta home__cta--secondary">Download Resume<i class="uil uil-download-alt button__icon"></i></a>
                            </div>
                        </div>

                        <div class="home__visual">
                            <span class="home__visual-blur" aria-hidden="true"></span>
                            <div class="home__img">
                                <div class="home__avatar-wrap home__avatar-wrap--pro">
                                    <span class="home__avatar-ring" aria-hidden="true"></span>
                                    <img src="./ruhul%20amin.jpg" alt="Ruhul Amin profile photo" class="home__avatar-img">
                                    <span class="home__avatar-dev" aria-hidden="true">&lt;/&gt;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!--==================== ABOUT ====================-->
            <section class="about section" id="about">
                <div class="about__container about__container--pro container grid">
                    <div class="about__profile-card">
                        <div class="about__avatar-wrap">
                            <span class="about__avatar-ring" aria-hidden="true"></span>
                            <img src="./ruhul%20amin.jpg" alt="Ruhul Amin portrait" class="about__img">
                        </div>
                        <h3 class="about__profile-name">Ruhul Amin</h3>
                        <p class="about__profile-role">Frontend Developer</p>
                        <p class="about__availability"><span class="about__availability-dot" aria-hidden="true"></span>Available</p>

                        <div class="about__socials">
                            <a href="https://www.github.com/ruhulaminn1316/" target="_blank" class="about__social" aria-label="GitHub"><i class="uil uil-github-alt"></i></a>
                            <a href="https://www.linkedin.com/in/ruhulaminn1316/" target="_blank" class="about__social" aria-label="LinkedIn"><i class="uil uil-linkedin-alt"></i></a>
                            <a href="mailto:ruhulaminn1316@gmail.com" class="about__social" aria-label="Email"><i class="uil uil-envelope"></i></a>
                            <a href="tel:+8801737145602" class="about__social" aria-label="Phone"><i class="uil uil-phone-alt"></i></a>
                        </div>
                    </div>

                    <div class="about__data about__data--pro">
                        <div class="about__intro-box">
                            <div class="about__heading">
                                <h2 class="about__title">About Me</h2>
                                <p class="about__kicker">Who I Am</p>
                            </div>
                            <p class="about__description">I'm a passionate frontend developer and CSE student who loves building modern, responsive, and user-friendly web applications using React and JavaScript.</p>
                            <div class="about__highlights" aria-label="About highlights">
                                <span class="about__highlight"><i class="uil uil-code-branch" aria-hidden="true"></i> Clean Code Mindset</span>
                                <span class="about__highlight"><i class="uil uil-mobile-android" aria-hidden="true"></i> Responsive First</span>
                                <span class="about__highlight"><i class="uil uil-lightbulb-alt" aria-hidden="true"></i> UI Problem Solver</span>
                            </div>
                        </div>

                        <div class="about__details">
                            <article class="about__detail-card">
                                <i class="uil uil-graduation-cap about__detail-icon" aria-hidden="true"></i>
                                <div>
                                    <h3 class="about__detail-title">Education</h3>
                                    <p class="about__detail-text">Currently studying Computer Science and Engineering and building strong fundamentals in programming and web technologies.</p>
                                </div>
                            </article>

                            <article class="about__detail-card">
                                <i class="uil uil-window-grid about__detail-icon" aria-hidden="true"></i>
                                <div>
                                    <h3 class="about__detail-title">What I Do</h3>
                                    <p class="about__detail-text">I build responsive and interactive web applications with clean UI/UX using modern frontend technologies like React.</p>
                                </div>
                            </article>

                            <article class="about__detail-card">
                                <i class="uil uil-rocket about__detail-icon" aria-hidden="true"></i>
                                <div>
                                    <h3 class="about__detail-title">Goals</h3>
                                    <p class="about__detail-text">My goal is to grow as a developer, work on real-world projects, and contribute to impactful digital products.</p>
                                </div>
                            </article>
                        </div>

                    </div>
                </div>
            </section>

            <!--==================== SKILLS ====================-->
            <section class="skills section" id="skills">
                <h2 class="section__title">Skills</h2>
                <span class="section__subtitle">My technical stack</span>

                <div class="skills__container container">
                    <!--==================== PROGRAMMING LANGUAGES ====================-->
                    <div class="skills__subsection">
                        <div class="skills__subsection-header skills__subsection-toggle" data-section="languages">
                            <div class="skills__header-content">
                                <h3 class="skills__subsection-title">Programming Languages</h3>
                                <p class="skills__subsection-description">Core coding languages I use</p>
                            </div>
                            <i class="uil uil-angle-down skills__toggle-icon"></i>
                        </div>
                        <div class="skills__icons-grid skills__icons-hidden">
                            <div class="skills__icon-item"><i class="devicon-c-plain skills__icon-large"></i><span class="skills__icon-label">C</span></div>
                            <div class="skills__icon-item"><i class="devicon-cplusplus-plain skills__icon-large"></i><span class="skills__icon-label">C++</span></div>
                            <div class="skills__icon-item"><i class="devicon-java-plain skills__icon-large"></i><span class="skills__icon-label">Java</span></div>
                            <div class="skills__icon-item"><i class="devicon-python-plain skills__icon-large"></i><span class="skills__icon-label">Python</span></div>
                            <div class="skills__icon-item"><i class="devicon-javascript-plain skills__icon-large"></i><span class="skills__icon-label">JavaScript</span></div>
                            <div class="skills__icon-item"><i class="devicon-php-plain skills__icon-large"></i><span class="skills__icon-label">PHP</span></div>
                            <div class="skills__icon-item"><i class="devicon-html5-plain skills__icon-large"></i><span class="skills__icon-label">HTML5</span></div>
                            <div class="skills__icon-item"><i class="devicon-css3-plain skills__icon-large"></i><span class="skills__icon-label">CSS3</span></div>
                        </div>
                    </div>

                    <!--==================== FRAMEWORKS & LIBRARIES ====================-->
                    <div class="skills__subsection">
                        <div class="skills__subsection-header skills__subsection-toggle" data-section="frameworks">
                            <div class="skills__header-content">
                                <h3 class="skills__subsection-title">Frameworks & Libraries</h3>
                                <p class="skills__subsection-description">Technologies for modern development</p>
                            </div>
                            <i class="uil uil-angle-down skills__toggle-icon"></i>
                        </div>
                        <div class="skills__icons-grid skills__icons-hidden">
                            <div class="skills__icon-item"><i class="devicon-django-plain skills__icon-large"></i><span class="skills__icon-label">Django</span></div>
                            <div class="skills__icon-item"><i class="devicon-react-original skills__icon-large"></i><span class="skills__icon-label">React</span></div>
                            <div class="skills__icon-item"><i class="devicon-tailwindcss-plain skills__icon-large"></i><span class="skills__icon-label">Tailwind</span></div>
                            <div class="skills__icon-item"><i class="devicon-bootstrap-plain skills__icon-large"></i><span class="skills__icon-label">Bootstrap</span></div>
                        </div>
                    </div>

                    <!--==================== TOOLS & PLATFORMS ====================-->
                    <div class="skills__subsection">
                        <div class="skills__subsection-header skills__subsection-toggle" data-section="tools">
                            <div class="skills__header-content">
                                <h3 class="skills__subsection-title">Tools & Platforms</h3>
                                <p class="skills__subsection-description">Daily workflow and productivity tools</p>
                            </div>
                            <i class="uil uil-angle-down skills__toggle-icon"></i>
                        </div>
                        <div class="skills__icons-grid skills__icons-hidden">
                            <div class="skills__icon-item"><i class="devicon-git-plain skills__icon-large"></i><span class="skills__icon-label">Git</span></div>
                            <div class="skills__icon-item"><i class="devicon-github-original skills__icon-large"></i><span class="skills__icon-label">GitHub</span></div>
                            <div class="skills__icon-item"><i class="devicon-vscode-plain skills__icon-large"></i><span class="skills__icon-label">VS Code</span></div>
                            <div class="skills__icon-item"><i class="devicon-firebase-plain skills__icon-large"></i><span class="skills__icon-label">Firebase</span></div>
                            <div class="skills__icon-item"><i class="devicon-linux-plain skills__icon-large"></i><span class="skills__icon-label">Linux</span></div>
                            <div class="skills__icon-item"><i class="devicon-bash-plain skills__icon-large"></i><span class="skills__icon-label">Terminal</span></div>
                        </div>
                    </div>
                </div>
            </section>

              <!--==================== QUALIFICATION ====================-->
        <section class="qualification__section" id="education">
            <h2 class="section__title">Qualification</h2>
            <span class="section__subtitle">My personal journey</span>

            <div class="qualification__container container">
                <div class="qualification__tabs">
                    <div class="qualification__button button--flex qualification__active" data-target='#education-tab'>
                        <i class="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div class="qualification__button button--flex" data-target="#work">
                        <i class="uil uil-briefcase-alt qualification__icon"></i>
                        Work
                    </div>
                </div>

                <div class="qualification__sections">
            <!--==================== QUALIFICATION CONTENT 1 ====================-->
            <div class="qualification__content qualification__active" data-content id="education-tab">
             <!--==================== QUALIFICATION 1 ====================--> 
             <div class="qualification__data">
                 <div>
                     <h3 class="qualification__title">Bachelor of Science in Computer Science and Engineering (CSE)</h3>
                     <span class="qualification__subtitle">Green University of Bangladesh</span>
                     <div class="qualification__calendar">
                        <i class="uil uil-calendar-alt"></i>
                        Semester: 9th (Ongoing)
                     </div>
                 </div>

                 <div>
                     <span class="qualification__rounder"></span>
                     <span class="qualification__line"></span>
                 </div>
             </div>
             
             <!--==================== QUALIFICATION 2 ====================--> 
             <div class="qualification__data">
                <div></div>
                <div>
                   <span class="qualification__rounder"></span>
                   <span class="qualification__line"></span>
                </div>

                <div>
                          <h3 class="qualification__title">ALIM/HSC, (Higher Secondary Certificate)</h3>
                          <span class="qualification__subtitle">Namazgor Gausul Azam Kamil Madrasah, Naogaon</span>
                    <div class="qualification__calendar">
                       <i class="uil uil-calendar-alt"></i>
                              2019 - 2021
                    </div>
                </div>
            </div> 

            <!--==================== QUALIFICATION 3 ====================--> 
            <div class="qualification__data">
                <div>
                    <h3 class="qualification__title">SSC / Dhakil, Secondary School Certificate</h3>
                    <span class="qualification__subtitle">Moskipur Dhakil Madrasah, Atrai, Naogaon</span>
                    <div class="qualification__calendar">
                       <i class="uil uil-calendar-alt"></i>
                       2010 - 2019
                    </div>
                </div>

                <div>
                    <span class="qualification__rounder"></span>
                    <!-- <span class="qualification__line"></span> -->
                </div>
            </div> 
            </div>
            
            <!--==================== QUALIFICATION CONTENT 2 ====================-->
            <div class="qualification__content" data-content id="work">
                <!--==================== QUALIFICATION 1 ====================--> 
                <div class="qualification__data">
                    <div>
                        <h3 class="qualification__title">Trainee Banking Assistant</h3>
                        <span class="qualification__subtitle">DFCC Head Office - Colombo</span>
                        <div class="qualification__calendar">
                           <i class="uil uil-calendar-alt"></i>
                           2017 - 2019
                        </div>
                    </div>
   
                    <div>
                        <span class="qualification__rounder"></span>
                        <span class="qualification__line"></span>
                    </div>
                </div>
                
                <!--==================== QUALIFICATION 2 ====================--> 
                <div class="qualification__data">
                   <div></div>
                   <div>
                      <span class="qualification__rounder"></span>
                      <span class="qualification__line"></span>
                   </div>
   
                   <div>
                       <h3 class="qualification__title">Banking Assistant</h3>
                       <span class="qualification__subtitle">DFCC Head Office - Colombo</span>
                       <div class="qualification__calendar">
                          <i class="uil uil-calendar-alt"></i>
                          2019 - 2020
                       </div>
                   </div>
               </div> 
   
               <!--==================== QUALIFICATION 3 ====================--> 
               <div class="qualification__data">
                   <div>
                       <h3 class="qualification__title">Data Analyst - Digital banking</h3>
                       <span class="qualification__subtitle">DFCC Head Office - Colombo</span>
                       <div class="qualification__calendar">
                          <i class="uil uil-calendar-alt"></i>
                          2020 - Present
                       </div>
                   </div>
   
                   <div>
                       <span class="qualification__rounder"></span>
                       <!-- <span class="qualification__line"></span> -->
                   </div>
               </div> 
          
               </div> 
             
               </div>
            </div>
        </section>
      
        <!--==================== SERVICES ====================-->
        <section class="services section" id="services">
            <h2 class="section__title">Services</h2>
            <span class="section__subtitle">What I offer</span>

            <div class="services__container container grid">
        <!--==================== SERVICES 1 ====================-->  
        <div class="services__content">
            <div>
                <i class="uil uil-arrow services__icon"></i>
                <h3 class="services__title">Web Developer<br></h3>
            </div>
            <span class="button button--flex button--small button--link services__button">
                View more
                <i class="uil uil-arrow-right button__icon"></i>
            </span>

            <div class="services__modal">
                <div class="services__modal-content">
                    <h4 class="services__modal-title">Web Developer <br></h4>
                    <i class="uil uil-times services__modal-close"></i>

                    <ul class="services__modal-services grid">
                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>I develop modern and responsive websites.</p>
                        </li>

                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>I build clean and user-friendly interfaces.</p>
                        </li>

                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>I optimize website performance and SEO basics.</p>
                        </li>

                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>I maintain and update websites regularly.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>  
        
        <!--==================== SERVICES 2 ====================--> 
        <div class="services__content">
            <div>
                <i class="uil uil-window-grid services__icon"></i>
                <h3 class="services__title">Web Application<br> </h3>
            </div>
            <span class="button button--flex button--small button--link services__button">
                View more
                <i class="uil uil-arrow-right button__icon"></i>
            </span>

            <div class="services__modal">
                <div class="services__modal-content">
                    <h4 class="services__modal-title">Web Application<br></h4>
                    <i class="uil uil-times services__modal-close"></i>

                    <ul class="services__modal-services grid">
                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>I build dynamic web applications.</p>
                        </li>

                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>I integrate frontend with backend and APIs.</p>
                        </li>

                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>I implement authentication and database features.</p>
                        </li>

                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>I deploy and maintain scalable web app solutions.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>  
       
        <!--==================== SERVICES 3 ====================-->
        <div class="services__content">
            <div>
                <i class="uil uil-mobile-android services__icon"></i>
                <h3 class="services__title">Mobile Application<br></h3>
            </div>
            <span class="button button--flex button--small button--link services__button">
                View more
                <i class="uil uil-arrow-right button__icon"></i>
            </span>

            <div class="services__modal">
                <div class="services__modal-content">
                    <h4 class="services__modal-title">Mobile Application<br></h4>
                    <i class="uil uil-times services__modal-close"></i>

                    <ul class="services__modal-services grid">
                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>I design intuitive mobile app interfaces.</p>
                        </li>

                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>I develop cross-platform mobile app features.</p>
                        </li>

                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>I connect apps with APIs and backend services.</p>
                        </li>

                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>I improve app performance and user experience.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
  
       
        </div>
        </section>
        <!--==================== PORTFOLIO ====================-->
        <section class="portfolio section" id="gallery">

            <h2 class="section__title">Gallery</h2>
            <span class="section__subtitle">Most recent works</span>

            <div class="portfolio__container container swiper-container">
                <div class="swiper-wrapper">
        <!--==================== PORTFOLIO 1 ====================-->
        
            <div class="portfolio__content grid swiper-slide">
                <img src="./packages/images/portfolio1.jpg" alt="" class="portfolio__img">

                <div class="portfolio_">
                    <h3 class="portfolio__title">Modern Dashboard</h3>
                    <p class="portfolio__description">Data analitical dashboard adaptable to all devices, 
                        with ui components and animated interactions.</p>
                    <a href="#" class="button button--flex button--small portfolio__button">
                        Demo
                        <i class="uil uil-arrow-right button__icon"></i>
                    </a>
                </div>
            </div>

            <!--==================== PORTFOLIO 2 ====================-->
        
            <div class="portfolio__content grid swiper-slide">
                <img src="./packages/images/portfolio3.PNG" alt="" class="portfolio__img">

                <div class="portfolio_">
                    <h3 class="portfolio__title">E-Commerce website</h3>
                    <p class="portfolio__description">Above Amazon clone is adaptable to all devices, with 
                        ui components and animated interactions.</p>
                    <a href="#" class="button button--flex button--small portfolio__button">
                        Demo
                        <i class="uil uil-arrow-right button__icon"></i>
                    </a>
                </div>
            </div>

            <!--==================== PORTFOLIO 3 ====================-->
        
            <div class="portfolio__content grid swiper-slide">
                <img src="./packages/images/portfolio2.png" alt="" class="portfolio__img">

                <div class="portfolio_">
                    <h3 class="portfolio__title">Brand Design</h3>
                    <p class="portfolio__description">Tesla Clone is adaptable to all devices, with 
                        ui components and animated interactions.</p>
                    <a href="#" class="button button--flex button--small portfolio__button">
                        Demo
                        <i class="uil uil-arrow-right button__icon"></i>
                    </a>
                </div>
            </div>
                </div>

            <!-- add arrows-->
            <div class="swiper-button-next">
                <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
            </div>

            <div class="swiper-button-prev">
                <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
            </div>

            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            
        
        </div>

        </section>

        <!--==================== ACHIEVEMENTS ====================-->
        <section class="achievements section" id="achievements">
            <h2 class="section__title">Achievements</h2>
            <span class="section__subtitle">My certificates and recognitions</span>

            <div class="achievements__container container grid">
                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-medal"></i>
                    </div>
                    <h3 class="achievements__title">CV Writing for Professionals</h3>
                    <p class="achievements__meta">Date: 2023-01-27</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-cv-writing-for-professionals.pdf#view=FitH" title="CV Writing for Professionals Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-trophy"></i>
                    </div>
                    <h3 class="achievements__title">Module 1: Introduction to WordPress</h3>
                    <p class="achievements__meta">Date: 2024-11-02</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-module-1-introduction-to-wordpress.pdf#view=FitH" title="Module 1 Introduction to WordPress Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-star"></i>
                    </div>
                    <h3 class="achievements__title">Module 1: Research Nutshell</h3>
                    <p class="achievements__meta">Date: 2024-12-05</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-module-1-research-nutshell.pdf#view=FitH" title="Module 1 Research Nutshell Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-certificate"></i>
                    </div>
                    <h3 class="achievements__title">Module 2: WordPress Installation</h3>
                    <p class="achievements__meta">Date: 2024-11-03</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-module-2-wordpress-installation.pdf#view=FitH" title="Module 2 WordPress Installation Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Module 3: Basic of WordPress Part 1</h3>
                    <p class="achievements__meta">Date: 2024-11-03</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-module-3-basic-of-wordpress-part-1.pdf#view=FitH" title="Module 3 Basic of WordPress Part 1 Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Module 4: Basic of WordPress Part 2</h3>
                    <p class="achievements__meta">Date: 2024-11-03</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-module-4-basic-of-wordpress-part-2.pdf#view=FitH" title="Module 4 Basic of WordPress Part 2 Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-file-check"></i>
                    </div>
                    <h3 class="achievements__title">MS Excel Beginner to Advanced</h3>
                    <p class="achievements__meta">Date: 2023-01-30</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-ms-excel-beginner-to-advanced.pdf#view=FitH" title="MS Excel Beginner to Advanced Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-file-check"></i>
                    </div>
                    <h3 class="achievements__title">MS Excel Beginner to Advanced (Duplicate)</h3>
                    <p class="achievements__meta">Date: 2023-01-30</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-ms-excel-beginner-to-advanced%20(1).pdf#view=FitH" title="MS Excel Beginner to Advanced Duplicate Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-file-check"></i>
                    </div>
                    <h3 class="achievements__title">MS PowerPoint Advanced Course</h3>
                    <p class="achievements__meta">Date: 2023-01-30</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-ms-powerpoint-advanced-course.pdf#view=FitH" title="MS PowerPoint Advanced Course Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-file-check"></i>
                    </div>
                    <h3 class="achievements__title">Visual Identity Graphic Design</h3>
                    <p class="achievements__meta">Date: 2023-01-30</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-visual-identity-graphic-design.pdf#view=FitH" title="Visual Identity Graphic Design Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Advanced Skills for Professional Landscape</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-advanced-skills-for-professional-landscape.pdf#view=FitH" title="Advanced Skills for Professional Landscape Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Art of Communication</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-art-of-communication.pdf#view=FitH" title="Art of Communication Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Build Your Brand</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-build-your-brand.pdf#view=FitH" title="Build Your Brand Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Canva for Presentations</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-canva-for-presentations.pdf#view=FitH" title="Canva for Presentations Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Communicate with Confidence</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-communicate-with-confidence.pdf#view=FitH" title="Communicate with Confidence Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Design System in Figma</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-design-system-in-figma.pdf#view=FitH" title="Design System in Figma Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Design System Thinking with AI</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-design-system-thinking-with-ai.pdf#view=FitH" title="Design System Thinking with AI Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Design Your First Landing Page</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-design-your-first-landing-page.pdf#view=FitH" title="Design Your First Landing Page Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Discovering LinkedIn for Career Growth</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-discovering-linkedin-for-career-growth2.pdf#view=FitH" title="Discovering LinkedIn for Career Growth Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">English for Daily Use</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-english-for-daily-use.pdf#view=FitH" title="English for Daily Use Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Excel Mastery</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-excel-mastery.pdf#view=FitH" title="Excel Mastery Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Facebook Marketing Course</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-facebook-marketing-course.pdf#view=FitH" title="Facebook Marketing Course Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Humanizing AI Experiences</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-humanizing-ai-experiences.pdf#view=FitH" title="Humanizing AI Experiences Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">LinkedIn 101</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-linkedin-101.pdf#view=FitH" title="LinkedIn 101 Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Navigating Interviews: Tips and Tricks</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-navigating-interviews-tips-and-tricks.pdf#view=FitH" title="Navigating Interviews Tips and Tricks Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Project Based Excel</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-project-based-excel.pdf#view=FitH" title="Project Based Excel Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Smart CV</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-smart-cv.pdf#view=FitH" title="Smart CV Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">Test Hacks to Get Hired</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-test-hacks-to-get-hired.pdf#view=FitH" title="Test Hacks to Get Hired Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <h3 class="achievements__title">UX Research Strategy with AI</h3>
                    <p class="achievements__meta">Certificate</p>
                    <iframe class="achievements__preview" src="./certificate/certificate-ux-research-strategy-with-ai.pdf#view=FitH" title="UX Research Strategy with AI Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-document-layout-left"></i>
                    </div>
                    <h3 class="achievements__title">IELTS Listening Module</h3>
                    <p class="achievements__meta">Date: 2025-10-21</p>
                    <iframe class="achievements__preview" src="./certificate/FNBCLM_20251021_2631.pdf#view=FitH" title="IELTS Listening Module Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-document-layout-left"></i>
                    </div>
                    <h3 class="achievements__title">IELTS Reading Module</h3>
                    <p class="achievements__meta">Date: 2025-10-14</p>
                    <iframe class="achievements__preview" src="./certificate/FNBCRM_20251014_3743.pdf#view=FitH" title="IELTS Reading Module Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-document-layout-left"></i>
                    </div>
                    <h3 class="achievements__title">IELTS Speaking Module</h3>
                    <p class="achievements__meta">Date: 2025-09-03</p>
                    <iframe class="achievements__preview" src="./certificate/FNBCSM_20250903_1843.pdf#view=FitH" title="IELTS Speaking Module Certificate" loading="lazy"></iframe>
                </article>

                <article class="achievements__card">
                    <div class="achievements__icon">
                        <i class="uil uil-document-layout-left"></i>
                    </div>
                    <h3 class="achievements__title">IELTS Writing Module</h3>
                    <p class="achievements__meta">Date: 2025-10-28</p>
                    <iframe class="achievements__preview" src="./certificate/FNBCWM_20251028_2511.pdf#view=FitH" title="IELTS Writing Module Certificate" loading="lazy"></iframe>
                </article>
            </div>
        </section>

        <!--==================== PROJECT IN MIND ====================-->
        <section class="project section" id="project">

            <div class="project__bg">
                <div class="project__container container grid">
                    <div class="project__data">
                        <h2 class="project__title">You have a new project?</h2>
                        <p class="project__description">Contact me now and get discounts on your Web development projects.</p>
                        <a href="#contact" class="button button--flex button--white">Contact me
                            <i class="uil uil-message project__icon button__icon"></i>
                        </a>
                       
                    </div>
                    <!-- <img src="assets/img/project.png" alt="" class="project__img"> -->
                </div>
            </div>

        </section>
        <!--==================== CONTACT ME ====================-->
        <section class="contact section" id="contact">
            <h2 class="section__title">Contact me</h2>
            <span class="section__subtitle">Get in touch</span>

            <div class="contact__container container grid">
                <div>
                    <div class="contact__information">
                        <i class="uil uil-phone-alt contact__icon"></i>

                        <div>
                            <h3 class="contact__title">Call me</h3>
                            <span class="contatc__subtitle">+8801737-145602</span>
                        </div>
                    </div>

                    <div class="contact__information">
                        <i class="uil uil-envelope contact__icon"></i>

                        <div>
                            <h3 class="contact__title">E-mail</h3>
                            <span class="contatc__subtitle">ruhulaminn1316@gmail.com</span>
                        </div>
                    </div>

                    <div class="contact__information">
                        <i class="uil uil-map-marker contact__icon"></i>

                        <div>
                            <h3 class="contact__title">Location</h3>
                            <span class="contatc__subtitle">Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>

                <form action="" class="contact__form grid">
                    <div class="contact__inputs grid">
                        <div class="contact__content">
                            <label for="" class="contact__label">Name</label>
                            <input type="text" class="contact__input">
                        </div>

                        <div class="contact__content">
                            <label for="" class="contact__label">E-mail</label>
                            <input type="email" class="contact__input">
                        </div>
                    </div>

                    <div class="contact__content">
                        <label for="" class="contact__label">Subject</label>
                        <input type="text" class="contact__input">
                    </div>

                    <div class="contact__content">
                        <label for="" class="contact__label">Description</label>
                        <textarea name="" id="" cols="0" rows="7" class="contact__input"></textarea>
                    </div>

                    <div>
                        <a href="#" class="button button--flex">
                            Send message
                            <i class="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </form>
            </div>

        </section>
    </main>

    <!--==================== FOOTER ====================-->
    <footer class="footer">

        <div class="footer__bg">
            <div class="footer__container container grid">
                <div class="footer__brand">
                    <h1 class="footer__title">Ruhul Amin</h1>
                    <span class="footer__subtitle">Web Developer | CSE Student</span>
                    <p class="footer__description">Building modern web and mobile solutions with clean UI and practical impact.</p>
                </div>

                <ul class="footer__links">
                    <li>
                        <a href="#services" class="footer__link">Services</a>
                    </li>
                    <li>
                        <a href="#gallery" class="footer__link">Gallery</a>
                    </li>
                    <li>
                        <a href="#achievements" class="footer__link">Achievements</a>
                    </li>
                    <li>
                        <a href="#contact" class="footer__link">Contact</a>
                    </li>
                </ul>

                <div class="footer__socials">
                    <a href="https://www.linkedin.com/in/ruhulaminn1316/" target="_blank" class="footer__social" aria-label="LinkedIn">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://www.github.com/ruhulaminn1316/" target="_blank" class="footer__social" aria-label="GitHub">
                        <i class="uil uil-github-alt"></i>
                    </a>
                    <a href="https://x.com/ruhulaminn1316" target="_blank" class="footer__social" aria-label="X">
                        <i class="uil uil-twitter-alt"></i>
                    </a>
                </div>
            </div>
            <p class="footer__copy">&#169; Ruhul Amin. All rights reserved.</p>
        </div>
    </footer>

    <!--==================== SCROLL TOP ====================-->
    <a href="#" class="scrollup" id="scroll-up">
        <i class="uil uil-arrow-up scrollup__icon"></i>
    </a>
    

    <!--==================== SWIPER JS ====================-->
    

    <!--==================== MAIN JS ====================-->
    
`;

