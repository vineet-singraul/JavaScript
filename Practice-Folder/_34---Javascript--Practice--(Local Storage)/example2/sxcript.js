// Function to save theme preference
function saveThemePreference(theme) {
    localStorage.setItem("theme", theme);
}

// Function to get theme preference
function getThemePreference() {
    return localStorage.getItem("theme") || "light"; // Default to light theme
}

// Apply the stored theme when the page loads
document.body.className = getThemePreference();

// Example usage
saveThemePreference("dark"); // This will store the dark theme preference
console.log(getThemePreference()); // Output: dark
