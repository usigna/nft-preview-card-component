let tl = gsap.timeline();

tl.from('.container', {duration: .6, delay: .6, y: 100, opacity: 0, ease: 'power1.in'});
tl.from('.container__item--image', {duration: .6, y: 50, opacity: 0, ease: 'power1.in'});
tl.from('.animate', {uration: .6, y: 50, opacity: 0, ease: 'power1.in', stagger: .6})
tl.from('.attribution', {duration: .6, y: 50, opacity: 0, ease: 'power1.in'});