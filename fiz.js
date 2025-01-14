const image = document.getElementById('rotateimg');
    let rotation = 0; // Initial rotation
    let scale = 1;    // Initial scale for zoom

    // Rotate image on scroll
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY; // Get current scroll position
      rotation = scrollY % 360; // Rotate image based on scroll
      image.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    });

    // Zoom in/out using keys
    window.addEventListener('keydown', (event) => {
      if (event.key === '+') {
        scale += 0.1; // Zoom in
      } else if (event.key === '-') {
        scale = Math.max(0.1, scale - 0.1); // Zoom out, minimum scale = 0.1
      }
      image.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    });