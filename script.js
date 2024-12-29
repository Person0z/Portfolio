document.addEventListener('DOMContentLoaded', () => {
  const expandBtn = document.getElementById('expandBtn');
  const projectsGrid = document.getElementById('projectsGrid');
  let expanded = false;

  // Grab all cards
  const projectCards = projectsGrid.querySelectorAll('.project-card');

  // Initialize: only first 3 are visible
  projectCards.forEach((card, index) => {
    if (index < 3) {
      card.classList.add('visible');
    } else {
      card.classList.add('hidden');
    }
  });

  function updateView() {
    projectCards.forEach((card, index) => {
      if (!expanded && index >= 3) {
        card.classList.remove('visible');
        card.classList.add('hidden');
      } else {
        card.classList.remove('hidden');
        card.classList.add('visible');
      }
    });
    expandBtn.textContent = expanded
      ? 'Click to show Less'
      : 'Expand to see more!';
  }

  expandBtn.addEventListener('click', () => {
    expanded = !expanded;
    updateView();
  });
});


  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks   = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
      });

      const navItemLinks = navLinks.querySelectorAll('a');
      navItemLinks.forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('show');
        });
      });
    });