function opentab(tabname) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-contents");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");

    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    event.currentTarget.classList.add("active-link");
}