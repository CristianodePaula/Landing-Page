import { keyframes } from 'styled-components'

// TEXT
export const welcomeanime = {
    initial: { y: -40, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 2, ease: 'easeInOut' } }
}
export const titleAnime = {
    initial: { y: -40, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 2, delay: 1, ease: 'easeInOut' } }
}
export const buttonAnime = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        scale: [0.5, 1],
        transition: { duration: 5, delay: 1, ease: 'easeInOut' }
    }
}
export const emergingAnime = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 7, delay: 1, ease: 'easeInOut' }
    }
}

// BUBLE
export const bubbleAnime = keyframes`
    0% { 
        transform: translateY(0);
        opacity: 0;
    }
    50% { 
        opacity: 1;
    }
    70% {
        opacity: 1;  
    }
    100% { 
        transform: translateY(-80vh);
        opacity: 0;  
}
`
// FISH
export const fishGoBackAnime = {
    initial: {},
    animate: {
        opacity: 1,
        scale: [1, 0.5, 1, 0.5, 1],
        transition: { repeat: Infinity, duration: 10, ease: 'linear' }
    }
}

export const fishfloat01Anime = {
    initial: { x: 0, y: 0 },
    animate: {
        x: ['10px', '20px', '30px', '20px', '10px'],
        y: ['30px', '10px', '10px', '20px', '30px'],
        transition: { repeat: Infinity, duration: 3 }
    }
}

export const fishfloat02Anime = {
    initial: { x: 0, y: 0 },
    animate: {
        x: ['20px', '10px', '30px', '10px', '20px'],
        y: ['10px', '20px', '10px', '10px', '10px'],
        transition: { repeat: Infinity, duration: 3 }
    }
}

export const fishfloat03Anime = {
    initial: { x: 0, y: 0 },
    animate: {
        x: ['15px', '5px', '10px', '5px', '15px'],
        y: ['20px', '10px', '20px', '10px', '20px'],
        transition: { repeat: Infinity, duration: 3 }
    }
}

export const shrimpsAnime = {
    initial: { x: 0, y: 0 },
    animate: {
        x: ['0px', '10px', '20px', '30px', '20px', '10px', '0px'],
        y: ['0px', '20px', '10px', '5px', '0px'],
        scale: 1.02, transition: { repeat: Infinity, duration: 3 }
    }
}

export const starfishAnime = {
    initial: {},
    animate: {
        scale: [0.5, 1, 0.5, 1, 0.5],
        rotate: [0, 360, 0, 0, 360, 0],
        transition: { repeat: Infinity, duration: 8 }
    }
}




