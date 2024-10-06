  function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 500; i++) {  // Reduced stars to 500 for better performance
        const star = document.createElement("div");
        star.className = "star";
        const size = Math.random() * 2 + "px";  // Random star size
        star.style.width = size;
        star.style.height = size;
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.opacity = Math.random();
        container.appendChild(star);
    }
  }
  createStars();
  
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


  function showDetails(planet) {
    const details = {
        sun: {
            name: 'Sun',
            description: 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma.'
        },
        mercury: {
            name: 'Mercury',
            description: 'Mercury is the smallest planet in the Solar System and closest to the Sun. It is a rocky planet with extreme temperatures.'
        },
        venus: {
            name: 'Venus',
            description: 'Venus is the second planet from the Sun. It is the hottest planet in the Solar System due to its thick atmosphere.'
        },
        earth: {
            name: 'Earth',
            description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life.'
        },
        mars: {
            name: 'Mars',
            description: 'Mars is the fourth planet from the Sun and is often called the "Red Planet" due to its reddish appearance.'
        },
        jupiter: {
            name: 'Jupiter',
            description: 'Jupiter is the largest planet in the Solar System, known for its massive size and the Great Red Spot.'
        },
        saturn: {
            name: 'Saturn',
            description: 'Saturn is the sixth planet from the Sun and is well known for its prominent ring system.'
        },
        uranus: {
            name: 'Uranus',
            description: 'Uranus is the seventh planet from the Sun. It has a unique sideways rotation and is known for its blue-green color.'
        },
        neptune: {
            name: 'Neptune',
            description: 'Neptune is the eighth and farthest known planet from the Sun. It is a gas giant with strong winds.'
        }
    };

    const planetDetails = document.getElementById('planet-details');
    planetDetails.innerHTML = `<h2>${details[planet].name}</h2><p>${details[planet].description}</p>`;
}
