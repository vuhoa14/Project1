////////////// search//////////////
	const btnOpenSearch = document.querySelector('.search_trigger');
	const searchWrap = document.querySelector('.search_wrap');
	const searchOverLay = Array.from(document.querySelectorAll('.search_overlay'));
	const searchClose = document.querySelector('.close-search');

	btnOpenSearch.addEventListener('click', function() {
		searchWrap.classList.add('open');
		for (let i = 0; i < 3; i++) {
			searchOverLay[i].classList.add('open');
		}
	});

	searchClose.addEventListener('click', function() {
		searchWrap.classList.remove('open');
		for (let i = 0; i < 3; i++) {
			searchOverLay[i].classList.remove('open');
		}
	});
	//========================
	// =============2,Drop Menu =========

let dropdown=Array.from(document.querySelectorAll(".dropdown"));
let contents =document.querySelectorAll(".dropdown .dropdown__menu");

dropdown.forEach(function(item){
    item.addEventListener('click', function(e){
        e.stopPropagation();
        this.lastElementChild.classList.toggle('show');
    })
})
 window.addEventListener("click", function(){
         if (!event.target.matches('.dropdown')){
            for (let i = 0; i < contents.length; i++) {
                contents[i].classList.remove("show");
            }
         }
    });
 