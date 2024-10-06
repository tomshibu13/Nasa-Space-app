function createStars() {
  const container = document.querySelector("body");

  // Loop to create 500 stars
  for (let i = 0; i < 500; i++) {
      const star = document.createElement("div");
      star.className = "star";

      // Random size between 1px and 3px
      const size = Math.random() * 2 + 1 + "px";
      star.style.width = size;
      star.style.height = size;

      // Random positions for each star
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";

      // Random opacity for the initial appearance
      star.style.opacity = Math.random();

      // Append star to body
      container.appendChild(star);
  }
}

// Call function to create stars
createStars();