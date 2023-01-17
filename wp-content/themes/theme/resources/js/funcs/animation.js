const animation = () => {
    const opacityMoveItems = document.querySelectorAll('[data-opacity-move]');
    const opacityItems = document.querySelectorAll('[data-opacity]');
    const itemsAnimation = (array, threshold) => {
        if(array.length) {
            const observerText = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate')
                        observer.unobserve(entry.target)
                    }
                })
            }, { 
                threshold: threshold,
            })
            array.forEach(item => observerText.observe(item))
        }
    }
    itemsAnimation(opacityMoveItems, .3);
    itemsAnimation(opacityItems, .3);


}
export default animation;