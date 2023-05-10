function displayGrid() {
    document.getElementById("grid-container").style.display = "grid";
    document.getElementById("column-container").style.display = "none";
    document.querySelector('.nav-link.active').classList.remove('active');
    Event.target.classList.add('active');
  }
  
  function displayColumn() {
    document.getElementById("grid-container").style.display = "none";
    document.getElementById("column-container").style.display = "flex";
    document.querySelector('.nav-link.active').classList.remove('active');
    Event.target.classList.add('active');
  }