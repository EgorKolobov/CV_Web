if($('body').is('.home_page')){
    var btnContainer = document.getElementsByClassName("menu__nav");

    // Получаем все кнопки class="menu__navigation"
    var btns = btnContainer[0].getElementsByClassName("menu__navigation");

    // Loop through the buttons and add the active class to the current/clicked button
    // В цикле проходимся по кнопкам и добавляем класс active на click-нутую кнопку
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
var element = document.getElementsByClassName('footer_info')
var par = document.createElement("p"); // Создаём тег p
var text = document.createTextNode('Load time: '+parseInt(loadTime/-10000000000)+' ms'); // Создаём текстовое поле для тега p
element[0].appendChild(par.appendChild(text))