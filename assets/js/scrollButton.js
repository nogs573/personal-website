document.getElementById('scrollDownButton').addEventListener('click', function() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth' // This adds smooth scrolling animation (optional)
    });
  });