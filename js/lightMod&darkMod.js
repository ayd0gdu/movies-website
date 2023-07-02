const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.menu-list-item a,.dropbtn,.dropdown-content,.dropdown-content a,.sidebar,.sidebar i,.dropsearch-btn,.dropdownSearch-content,.dropdownSearch-content a,.movie-list-filter select,.toggle,.toggle-ball,.movie-item-img,.movie-item-title,.movie-item-buttons,.menu-list-item a:hover")

ball.addEventListener("click", function(){
    items.forEach((item) => item.classList.toggle("active"))
})