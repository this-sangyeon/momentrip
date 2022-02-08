function pageChange_mobile() {
    if (window.innerWidth <= 1500) {
        window.location.href = "./Momentrip_mobile.html";
    }
}
pageChange_mobile();

window.addEventListener("resize", pageChange_mobile);