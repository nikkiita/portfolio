window.onscroll = function () {
    myFunction()
};

let navigation = document.getElementById("navigation");
let sticky = navigation.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navigation.classList.add("sticky");
    } else {
        navigation.classList.remove("sticky");
    }
}