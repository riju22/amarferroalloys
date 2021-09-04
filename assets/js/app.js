function init() {
    if (document.querySelector('#big-slider')) {
        var bigSlider = tns({
            container: '#big-slider .slider-wrapper',
            autoplay: false,
            loop: true,
            items: 1,
            autoplayButtonOutput: false,
            controls: false
        });
    }

    if (document.querySelector('#inventory')) {
        var inventorySlider = tns({
            container: '#inventory .slider-wrapper',
            autoplay: false,
            loop: true,
            nav: false,
            autoplayButtonOutput: false,
            controls: false,
            items: 1,
            responsive: {
                993: {
                    items: 3
                }
            },
            onInit: function() {
                let btnControls = document.querySelectorAll('.btn-control');
                let tnsOuter = document.querySelector('.btn-control ~ .tns-outer');

                tnsOuter.prepend(btnControls[0],btnControls[1]);

                btnControls[0].addEventListener('click', () => {
                    inventorySlider.goTo('prev');
                });

                btnControls[1].addEventListener('click', () => {
                    inventorySlider.goTo('next');
                });

                let height = document.querySelector('#inventory .slide img').height;
                let varHeight = getComputedStyle(document.documentElement).getPropertyValue('--height');
                document.documentElement.style.setProperty('--height',height + 'px');
            }
        });
    }

    if (document.querySelector('#gallery')) {
        var gallerySlider = tns({
            container: '#gallery .slider-wrapper',
            autoplay: false,
            loop: true,
            nav: false,
            autoplayButtonOutput: false,
            controls: false,
            items: 1.1,
            gutter: 5,
            responsive: {
                993: {
                    items: 4,
                    gutter: 10
                },
                769: {
                    items: 3.1
                },
                426: {
                    items: 2
                }
            }
        });
    }
}

init();