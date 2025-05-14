// Friend's name and AI courses data
const friendName = "Tanisha";

const aiCourses = [
  {
    title: "Introduction to Neural Networks and PyTorch",
    link: "https://www.coursera.org/learn/deep-neural-networks-with-pytorch"
  },
  {
    title: "CS50's Introduction to Artificial Intelligence with Python",
    link: "https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python?webview=false&campaign=CS50%27s+Introduction+to+Artificial+Intelligence+with+Python&source=edx&product_category=course"
  },
  {
    title: "Machine Learning",
    link: "https://www.coursera.org/learn/machine-learning"
  }
];

// Set the birthday message
document.getElementById("birthday-message").innerText = `Happy Birthday, ${friendName}!`;

// Populate the gifts list with course links
const giftsList = document.getElementById("gifts-list");
aiCourses.forEach(course => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<a href="${course.link}" target="_blank" rel="noopener noreferrer">${course.title}</a>`;
  giftsList.appendChild(listItem);
});

// Music toggle button logic
const musicButton = document.getElementById("toggle-music");
const audio = document.getElementById("birthday-audio");

musicButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    musicButton.innerText = "Pause Music";
  } else {
    audio.pause();
    musicButton.innerText = "Play Music";
  }
});

// Create pastel confetti effect
function createConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const animationDuration = Math.random() * 3 + 2;

    confetti.style.left = `${x}px`;
    confetti.style.top = `${y}px`;
    confetti.style.animationDuration = `${animationDuration}s`;
    confetti.style.animationDelay = `${Math.random() * 5}s`;
    confetti.style.opacity = Math.random();
  }
}

// Trigger confetti on page load
createConfetti();
