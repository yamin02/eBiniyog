const utils = require('./utils')

$('#closePopupBtn').on('click', function () {     
    document.getElementById('popup').style.display = 'none';
    document.querySelector('.popup-overlay').style.display = 'none';
});

(async () => {
    await utils.dsetoLocalstorage();
    await utils.marketStatus();
})();

$('#TopNavs').html(`<nav class="topnav nav-one">
<a href="/#/home"><img src="./resource/apple-icon.png" style="width: 25px;"></a>
<a id="page-name">Home</a>
<a id="dsex-info-navbar"></a>
<a id="marketstatus"></a>
</nav>
<div class="progress"></div>`
)


window.fav = (id) => {
    console.log("fav pressed")
    var fav0 =  document.getElementById(`fav${id}`)
    
    var favstock = localStorage.fav ? JSON.parse(localStorage.fav) : [];
    if( fav0.classList.contains('checked')) {
        var index = favstock.indexOf(id);
        favstock.splice(index, 1);
        fav0.classList.remove('checked');
    } else {
        fav0.classList.add('checked');
        var favstock = localStorage.fav ? JSON.parse(localStorage.fav) : [];
        favstock.push(id) ;
    }
    localStorage.fav = JSON.stringify(favstock);
}



window.closeOverlay = function (param) { 
        $(".overlay").removeClass("active").html("");
 }