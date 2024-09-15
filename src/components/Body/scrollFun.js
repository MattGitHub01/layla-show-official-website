function scrollFun(scrollTarget) {
    setTimeout(
        function() {
            scrollTarget.scrollIntoView({ behavior: 'smooth'});
        }, 30
    );
}
export default scrollFun