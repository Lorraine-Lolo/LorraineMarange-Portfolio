function togglePanel(id) {
  var panel = document.getElementById(id);
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }