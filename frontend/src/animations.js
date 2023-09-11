import {gsap} from "gsap/all";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import store from "@/store";

gsap.registerPlugin(ScrollTrigger);

let data = store.getters.page_data_status;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function waitingData() {
    while (data === false) {
        data = store.getters.page_data_status;
        await sleep(100);
    }
    return 0;
}

waitingData().then(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1001px)", () => {
        gsap.from('.offer__suggestation-block',
            {
                translateX: "-100%",
                duration: .5,
                scrollTrigger: {
                    trigger: '.offer__suggestation-block',
                    start: `bottom bottom`,
                },
            }
        );
        gsap.from('.offer__suggestations',
            {
                translateX: "100%",
                duration: .5,
                delay: .5,

                scrollTrigger: {
                    trigger: '.offer__suggestation-block',
                    start: `bottom bottom`,
                },
            }
        );
    });
    mm.add("(min-width: 761px)", () => {
        gsap.from('.about-me__title',
            {
                translateX: "-100%",
                duration: .7,
                opacity: 0,

                scrollTrigger: {
                    trigger: '.about-me__content',
                    start: 'bottom bottom',
                },
            }
        );
        gsap.from('.about-me__description',
            {
                translateX: "-100%",
                duration: .7,
                opacity: 0,

                scrollTrigger: {
                    trigger: '.about-me__content',
                    start: 'bottom bottom',
                },
            }
        );
        gsap.from('.about-me__photo-block',
            {
                translateX: "100%",
                duration: .7,
                opacity: 0,

                scrollTrigger: {
                    trigger: '.about-me__content',
                    start: 'bottom bottom',
                },
            }
        );
    });
    mm.add("(max-width: 1000px)", () => {
        gsap.from('.offer__suggestation-block',
            {
                translateY: "-100%",
                opacity: 0,
                duration: .5,
                scrollTrigger: {
                    trigger: '.offer__suggestation-block',
                    start: `bottom+=250px bottom`,
                },
            }
        );
    });
    mm.add("(max-width: 760px)", () => {
        gsap.from('.about-me__content',
            {
                translateY: "30%",
                duration: .7,
                opacity: 0,

                scrollTrigger: {
                    trigger: '.about-me',
                    start: 'top+=250px bottom',
                },
            }
        );
    });

    gsap.from('.skills .title',
        {
            translateY: "50%",
            duration: .5,
            opacity: 0,

            scrollTrigger: {
                trigger: '.skills',
                start: 'center bottom',
            },
        }
    );
    gsap.from('.skills__grid',
        {
            translateY: "50%",
            duration: .5,
            opacity: 0,

            scrollTrigger: {
                trigger: '.skills',
                start: 'center bottom',
            },
        }
    );
    gsap.from('.portfolio .title',
        {
            translateY: "100%",
            duration: .8,
            opacity: 0,

            scrollTrigger: {
                trigger: '.portfolio',
                start: 'top+=200px bottom',
            },
        }
    );
    gsap.from('.portfolio__item',
        {
            translateY: "100%",
            duration: .8,
            opacity: 0,
            stagger: 0.3,

            scrollTrigger: {
                trigger: '.portfolio',
                start: 'top+=200px bottom',
            },
        }
    );
});
