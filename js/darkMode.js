let darkModeCheck = document.querySelector("body");

document.getElementById("darkModeButton").addEventListener("click", function() {
  if (darkModeCheck.classList.contains("dark"))
  {
    darkModeCheck.classList.remove("dark");
  }
  else
  {
    darkModeCheck.classList.add("dark");
  }
});