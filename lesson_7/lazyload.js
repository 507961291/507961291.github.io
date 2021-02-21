// get all elements with a data-src attribute
const loadQueue = document.querySelectorAll('img[data-src]');

//set the src value to the value of the data-src
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
    };

//Intersection Observer parameters
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
};

//Intercection Observer
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach( (item) => {
            if (!item.isIntersecting) {
                return;
            } else {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
            })
        }, imgOptions);
    loadQueue.forEach( (img) => {
            imgObserver.observe(img);
    });
} else {
    loadQueue.forEach((img)=> {
        loadImages(img);
    })
}