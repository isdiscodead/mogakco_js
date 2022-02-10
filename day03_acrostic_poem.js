function btn_onclick(id) {
    if ( id == "mo" ) {
        btn = document.getElementsByTagName("span")[0];
        btn.innerHTML = "처럼이니";

    } else if ( id == "gak" ) {
        btn = document.getElementsByTagName("span")[1];
        btn.innerHTML = "잡고 열심히 하면";

    } else {
        btn = document.getElementsByTagName("span")[2];
        btn.innerHTML = "린이 탈출이다 😎";
    }
}