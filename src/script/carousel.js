import Glide from '@glidejs/glide';

/**
 * Initializes all Glide carousels present on the page uniformly.
 * Loops over each element matching the .glide class selector.
 */
export const initCarousels = () => {
    const carousels = document.querySelectorAll('.glide');
    carousels.forEach((carouselElement) => {
        new Glide(carouselElement, {
            type: 'carousel',
            activeNav: 'glide__bullet--active',
            rewind: true,
            startAt: 0,
            perView: 3,
            peek: { before: 0, after: 0 },
            gap: 68,
            breakpoints: {
                1023: {
                    perView: 2,
                    gap: 26,
                    peek: {
                        before: 128,
                        after: 128,
                    },
                },
                576: {
                    perView: 1,
                    gap: 26,
                    peek: {
                        before: 128,
                        after: 128,
                    },
                },
                427: {
                    perView: 1,
                    gap: 26,
                    peek: {
                        before: 100,
                        after: 100,
                    },
                },
            },
        }).mount();
    });
};
