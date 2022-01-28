const selectOne = (selector) => {
    return document.querySelector(selector);
}

const botBody = selectOne('.bot-container')


gsap.set(botBody, {autoAlpha: 0})
gsap.set('.header', {autoAlpha: 0})
gsap.set('.header .close', {autoAlpha: 0})
gsap.set('.header .inner ', {autoAlpha: 0})
gsap.set('.body', {autoAlpha: 0})
gsap.set('.body .inner h3', {autoAlpha: 0})
gsap.set('.body .inner ul li', {autoAlpha: 0})
gsap.set('.body .inner button', {autoAlpha: 0})

let tl = gsap.timeline({ease: 'Power2.ease', paused: true});
tl.to('.chat-bot-toggle', {scale: 0})
    .to(botBody, {autoAlpha: 1})
    .to('.header', {autoAlpha: 1, duration: 1})
    .to('.header .inner', {autoAlpha: 1, duration: 1})
    .to('.header .bot-icon', {autoAlpha: 1, duration: 1})
    .to('.body', {autoAlpha: 1, duration: 1})
    .to('.body h3', {autoAlpha: 1, duration: 1})
    .to('.body ul li', {autoAlpha: 1, duration: 1, stagger: 1})
    .to('.body button', {autoAlpha: 1, duration: 1})
    .to('.header .close', {autoAlpha: 1, duration: 1})
const showPopup = () => {
    tl.play();
}

const closePopup = ()=>{
    tl.reverse();
}


