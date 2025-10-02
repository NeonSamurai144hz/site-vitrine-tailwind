export function lights() {
  const overlay = document.getElementById('overlay');
  const lightSwitch = document.getElementById('lightSwitch');
  const initialLightSwitch = document.getElementById('initialLightSwitch');
  const welcomeScreen = document.getElementById('welcomeScreen');
  const mainContent = document.getElementById('mainContent');
  let lightsOff = false;

  // Initial light switch - turns on the lights for the first time
  initialLightSwitch.addEventListener('click', function() {
    const switchButton = this.querySelector('div');

    // Animate switch to "on" position (24px moves it to the right within a 64px wide button)
    switchButton.style.transform = 'translateX(24px)';
    this.classList.remove('bg-gray-700', 'hover:bg-gray-600');
    this.classList.add('bg-blue-500', 'hover:bg-blue-600');
    switchButton.classList.remove('bg-gray-400');
    switchButton.classList.add('bg-white');

    // Fade out welcome screen
    setTimeout(() => {
      welcomeScreen.style.opacity = '0';
      welcomeScreen.style.transition = 'opacity 1s ease-in-out';

      // Show main content
      setTimeout(() => {
        welcomeScreen.style.display = 'none';
        mainContent.classList.remove('opacity-0', 'pointer-events-none');
        mainContent.classList.add('opacity-100');
      }, 1000);
    }, 300);
  });

  // Navbar light switch - toggles dark overlay
  if (lightSwitch) {
    const switchButton = lightSwitch.querySelector('div');
    const navbar = lightSwitch.closest('nav');

    lightSwitch.addEventListener('click', function() {
      lightsOff = !lightsOff;

      if (lightsOff) {
        // Turn lights off
        overlay.style.display = 'block';
        setTimeout(() => {
          overlay.style.opacity = '1';
        }, 10);

        // Animate switch to "off" position (20px keeps it within the 56px wide navbar button)
        switchButton.style.transform = 'translateX(0)';
        lightSwitch.classList.remove('bg-blue-500', 'hover:bg-blue-600');
        lightSwitch.classList.add('bg-gray-300', 'hover:bg-gray-400');
        navbar.classList.add('highlight');

      } else {
        // Turn lights on
        overlay.style.opacity = '0';

        // Animate switch to "on" position (20px for navbar switch)
        switchButton.style.transform = 'translateX(20px)';
        lightSwitch.classList.remove('bg-gray-300', 'hover:bg-gray-400');
        lightSwitch.classList.add('bg-blue-500', 'hover:bg-blue-600');

        // Remove highlight and hide overlay after transition
        setTimeout(() => {
          navbar.classList.remove('highlight');
          overlay.style.display = 'none';
        }, 1000);
      }
    });
  }

  // Initialize overlay styles
  overlay.style.transition = 'opacity 1s ease-in-out';
  overlay.style.opacity = '0';
}