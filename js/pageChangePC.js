function pageChange_PC() {
    if (window.innerWidth > 1500) {
        window.location.href = "./index.html";
    }
}
pageChange_PC();

window.addEventListener("resize", pageChange_PC);