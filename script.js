const themeToggleButton = document.getElementById("themeToggleButton");

// Function to toggle between dark and light themes
function toggleTheme() {
  // Check the current theme in localStorage or default to light
  const currentTheme = localStorage.getItem("theme") || "light";
  
  // Switch between themes
  const newTheme = currentTheme === "light" ? "dark" : "light";

  // Apply the new theme to the body and button
  document.body.classList.remove(currentTheme);
  document.body.classList.add(newTheme);
  themeToggleButton.classList.remove(currentTheme);
  themeToggleButton.classList.add(newTheme);

  // Save the selected theme in localStorage
  localStorage.setItem("theme", newTheme);
}

// Load the theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme);
  themeToggleButton.classList.add(savedTheme);
});

// Event listener for the button to toggle the theme
themeToggleButton.addEventListener("click", toggleTheme);
