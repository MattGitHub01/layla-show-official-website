function scrollFun(scrollTarget) {
    setTimeout(
        function() {
            scrollTarget.scrollIntoView({ behavior: 'smooth'});
        }, 40
    );
}
export default scrollFun