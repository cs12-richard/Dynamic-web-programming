let startTime = Date.now();

function updateTime() {
  let elapsed = (Date.now() - startTime) / 1000;
  let intPart = Math.floor(elapsed).toString().padStart(4, '0');
  let decPart = Math.floor((elapsed % 1) * 10);
  document.getElementById('time-display').innerText = `${intPart}.${decPart}s`;
}

function updateClock() {
  document.getElementById('clock').innerText = new Date().toLocaleTimeString();
}

function showModal(type) {
  let overlay = document.getElementById('overlay');
  let autoModal = document.getElementById('auto-modal');
  let clickModal = document.getElementById('click-modal');
  overlay.style.display = 'block';
  if (type === 'auto') {
    autoModal.style.display = 'block';
  } else {
    clickModal.style.display = 'block';
  }
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  let overlay = document.getElementById('overlay');
  let autoModal = document.getElementById('auto-modal');
  let clickModal = document.getElementById('click-modal');
  overlay.style.display = 'none';
  autoModal.style.display = 'none';
  clickModal.style.display = 'none';
  document.body.style.overflow = '';
}

function openLink() {
  window.open('https://github.com/cs12-richard', '_blank');
}

function showAd() {
  let ad = document.getElementById('ad');
  ad.style.display = 'block';
  document.body.style.overflow = '';
}

function closeAd() {
  let ad = document.getElementById('ad');
  ad.style.display = 'none';
  document.body.style.overflow = '';
}

function SwitchDarkMode() {
  const body = document.body;
  const darkModeButton = document.querySelector('button[onclick="SwitchDarkMode()"]'); // 找到切換模式的按鈕

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    if (window.location.pathname.includes('index_en.html')) {
      darkModeButton.textContent = 'Switch to Light Mode';
    } else {
      darkModeButton.textContent = '切換明亮模式';
    }
  } else {
    if (window.location.pathname.includes('index_en.html')) {
      darkModeButton.textContent = 'Switch to Dark Mode';
    } else {
      darkModeButton.textContent = '切換黑暗模式';
    }
  }
}

function createSnowflakes() {
  for (let i = 0; i < 10; i++) {
    let snow = document.createElement('div');
    snow.className = 'snow';
    snow.style.left = `${Math.random() * 100}vw`;
    snow.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snow.style.opacity = Math.random();
    snow.style.width = snow.style.height = `${Math.random() * 5 + 5}px`;
    document.body.appendChild(snow);
    setTimeout(() => snow.remove(), parseFloat(snow.style.animationDuration) * 1000 + 1000);
  }
}

window.onload = function() {
  showModal('auto');  // Feature 2 auto
  setTimeout(showAd, 3000);  // Feature 3 ad
  setInterval(updateTime, 100);  // Feature 3 time
  setInterval(updateClock, 1000);  // Feature 5 clock
  setInterval(createSnowflakes, 200);  // Feature 5 snow

  // Feature 4 scroll
  const sections = document.querySelectorAll('section');
  const options = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
      else {
        entry.target.classList.remove('visible');
      }
    });
  }, options);
  sections.forEach(section => {
    section.classList.add('section');
    observer.observe(section);
  });
};