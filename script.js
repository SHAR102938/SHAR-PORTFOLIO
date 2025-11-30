document.addEventListener('DOMContentLoaded', () => {
  // Data
  const projects = [
    {
      title: 'GAME HUB',
      image: 'image 1.png',
      tech: ['Team Project', 'Frontend', 'Backend'],
      description: 'Mini project built in a team of 4 members for our college mini project.',
      website: 'https://shar102938.github.io/Gamehub/',
      source: 'https://github.com/shar102938/Gamehub'
    },
    {
      title: 'Weather Broadcast',
      image: 'image 2.png',
      tech: ['Hackathon', 'Frontend', 'Backend'],
      description: 'Project made for college hackathon in team of 4 members.',
      website: 'https://shar102938.github.io/Weather-forecast/',
      source: 'https://github.com/shar102938/Weather-forecast'
    }
  ];

  const skills = [
    { name: 'API Documentation', level: 85, symbol: 'fas fa-file-alt' },
    { name: 'Backend Dev', level: 90, symbol: 'fas fa-server' },
    { name: 'C Language', level: 78, symbol: 'fas fa-code' },
    { name: 'CSS', level: 90, symbol: 'fab fa-css3-alt' },
    { name: 'Databases', level: 80, symbol: 'fas fa-database' },
    { name: 'Frontend Dev', level: 88, symbol: 'fas fa-desktop' },
    { name: 'Fullstack', level: 88, symbol: 'fas fa-layer-group' },
    { name: 'HTML', level: 95, symbol: 'fab fa-html5' },
    { name: 'Java', level: 82, symbol: 'fab fa-java' },
    { name: 'JavaScript', level: 85, symbol: 'fab fa-js-square' },
    { name: 'Python', level: 80, symbol: 'fab fa-python' },
    { name: 'UI/UX Design', level: 87, symbol: 'fas fa-palette' }
  ];

  const certifications = [
    { name: 'J.P. Morgan - Software Engineering Job Simulation',  org: 'Forage', image: 'certificates/certificate 1.png' },
    { name: 'Accenture UK - Introduction to Technology Apprenticeship Job Simulation', org: 'Forage', image: 'certificates/certificate 2.png' },
    { name: 'Goldman Sachs - Operations Job Simulation', org: 'Forage', image: 'certificates/certificate 3.png' },
    { name: 'Goldman Sachs - Risk Job Simulation',  org: 'Forage', image: 'certificates/certificate 4.png' },
    { name: 'Deloitte Australia - Technology Job Simulation',  org: 'Forage', image: 'certificates/certificate 5.png' },
    { name: 'Data Visualization',  org: 'freeCodeCamp', image: 'certificates/certificate 6.png' },
    { name: 'Front End Development Libraries', org: 'freeCodeCamp', image: 'certificates/certificate 7.png' },
    { name: 'JavaScript Algorithms and Data Structures (Beta)',  org: 'freeCodeCamp', image: 'certificates/certificate 8.png' },
    { name: 'Career Essentials in Generative AI by Microsoft and LinkedIn',  org: 'Microsoft', image: 'certificates/certificate 9.png' },
    { name: 'Responsive Web Design', org: 'freeCodeCamp', image: 'certificates/certificate 10.png' },
    { name: 'Machine Learning with Python', org: 'freeCodeCamp', image: 'certificates/certificate 11.png' },
    { name: 'Data Analysis with Python',  org: 'freeCodeCamp', image: 'certificates/certificate 12.png' }
  ];

  // Rendering
  const projectsGrid = document.querySelector('.projects-grid');
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card flashcard reveal';
    card.style.animationDelay = `${Math.random() * 4}s`;
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-image">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tech-stack">
        ${project.tech.map(t => `<span>${t}</span>`).join('')}
      </div>
      <div class="card-buttons">
        <a href="${project.website}" target="_blank" class="cta-btn">Visit Website</a>
        <a href="${project.source}" target="_blank" class="cta-btn outline">Source Code</a>
      </div>
    `;
    projectsGrid.appendChild(card);
  });

  const skillsContainer = document.querySelector('.skills-container');
  const skillSymbolsContainer = document.createElement('div');
  skillSymbolsContainer.className = 'skill-symbols';
  skillsContainer.appendChild(skillSymbolsContainer);

  skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill-item';
    skillElement.innerHTML = `<i class="${skill.symbol}"></i><span>${skill.name}</span>`;
    skillSymbolsContainer.appendChild(skillElement);
  });

  const certificationsGrid = document.querySelector('.certifications-grid');
  certifications.forEach(cert => {
    const certCard = document.createElement('div');
    certCard.className = 'cert-card flashcard reveal';
    certCard.style.animationDelay = `${Math.random() * 4}s`;
    certCard.innerHTML = `
      <img src="${cert.image}" alt="${cert.name}" class="cert-image">
      <h3>${cert.name}</h3>
      <p>${cert.org}</p>
      <a href="${cert.image}" target="_blank" class="cta-btn outline">Show Credential</a>
    `;
    certificationsGrid.appendChild(certCard);
  });

  // Animations & Interactions
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const roles = ['Fullstack Developer', 'Backend Developer', 'Frontend Developer', 'UI/UX Designer'];
  let roleIndex = 0;
  const roleElement = document.getElementById('role-animation');

  function updateRole() {
    roleElement.classList.add('role-exiting');

    setTimeout(() => {
        roleElement.textContent = roles[roleIndex];
        roleIndex = (roleIndex + 1) % roles.length;
    }, 3000);
    
    // Spotlight Effect
    const heroSection = document.querySelector('#hero');
    heroSection.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { left, top } = heroSection.getBoundingClientRect();
        heroSection.style.setProperty('--x', `${clientX - left}px`);
        heroSection.style.setProperty('--y', `${clientY - top}px`);
    });
    
    // Parallax Effect
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const parallaxBg = document.querySelector('.parallax-bg');
        const x = (clientX / window.innerWidth - 0.5) * 50;
        const y = (clientY / window.innerHeight - 0.5) * 50;
        if (parallaxBg) {
            parallaxBg.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
    });
    
    // Advanced Scroll Animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
    
    roleElement.classList.remove('role-exiting');
    roleElement.classList.add('role-entering');

    setTimeout(() => {
        roleElement.classList.remove('role-entering');
    }, 500);
  }

  setInterval(updateRole, 2500); // Change role every 2.5 seconds
  updateRole(); // Initial call
});