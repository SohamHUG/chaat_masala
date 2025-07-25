// observ la nav#menu
const observerNav = new MutationObserver(() => {
    const nav = document.querySelector("#menu");
    if (nav) {
        console.log(nav.querySelector("ul"));
        observerNav.disconnect();
    }
});

observerNav.observe(document.body, {
    childList: true,
    subtree: true,
});
