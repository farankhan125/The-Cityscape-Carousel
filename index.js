const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const card4 = document.querySelector('.card4')
const card5 = document.querySelector('.card5')
const card6 = document.querySelector('.card6')
const card7 = document.querySelector('.card7')
const card8 = document.querySelector('.card8')
const card9 = document.querySelector('.card9')
const card10 = document.querySelector('.card10')
const card11 = document.querySelector('.card11')
const dot1 = document.querySelector('.dot1')
const dot2 = document.querySelector('.dot2')
const dot3 = document.querySelector('.dot3')
const dot4 = document.querySelector('.dot4')
const dot5 = document.querySelector('.dot5')
const dot6 = document.querySelector('.dot6')
const dot7 = document.querySelector('.dot7')
const dot8 = document.querySelector('.dot8')
const dot9 = document.querySelector('.dot9')
const dot10 = document.querySelector('.dot10')
const dot11 = document.querySelector('.dot11')
const rightButton = document.querySelector('.r-button')
const leftButton = document.querySelector('.l-button')
const cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11]
let counter = 1

rightButton.addEventListener('click', () => {

    if (counter == 1) {

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i}`)
        }

        counter++
        leftButton.style.opacity = '1';
        dot1.classList.remove('active-dot')
        dot2.classList.add('active-dot')
    }

    else if (counter == 2) {
        
        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 1}`)
        }

        counter++
        dot2.classList.remove('active-dot')
        dot3.classList.add('active-dot')
    }

    else if (counter == 3) {
        
        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 1}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 2}`)
        }

        counter++
        dot3.classList.remove('active-dot')
        dot4.classList.add('active-dot')
    }

    else if (counter == 4) {
        
        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 2}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 3}`)
        }

        counter++
        dot4.classList.remove('active-dot')
        dot5.classList.add('active-dot')
    }

    else if (counter == 5) {
        
        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 3}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 4}`)
        }

        counter++
        dot5.classList.remove('active-dot')
        dot6.classList.add('active-dot')
    }

    else if (counter == 6) {
        
        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 4}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 5}`)
        }

        counter++
        dot6.classList.remove('active-dot')
        dot7.classList.add('active-dot')
    }

    else if (counter == 7) {
        
        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 5}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 6}`)
        }

        counter++
        dot7.classList.remove('active-dot')
        dot8.classList.add('active-dot')
    }

    else if (counter == 8) {
        
        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 6}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 7}`)
        }

        counter++
        dot8.classList.remove('active-dot')
        dot9.classList.add('active-dot')
    }

    else if (counter == 9) {
        
        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 7}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 8}`)
        }

        counter++
        dot9.classList.remove('active-dot')
        dot10.classList.add('active-dot')
    }

    else if (counter == 10) {
        
        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 8}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 9}`)
        }

        counter++
        rightButton.style.opacity = '0';
        dot10.classList.remove('active-dot')
        dot11.classList.add('active-dot')
    }

})






leftButton.addEventListener('click', () => {

    if (counter == 2) {

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i}`)
        }

        counter--
        leftButton.style.opacity = '0';
        dot2.classList.remove('active-dot')
        dot1.classList.add('active-dot')
    }

    if (counter == 3) {

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 1}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i}`)
        }

        counter--
        dot3.classList.remove('active-dot')
        dot2.classList.add('active-dot')
    }

    if (counter == 4) {

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 2}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 1}`)
        }

        counter--
        dot4.classList.remove('active-dot')
        dot3.classList.add('active-dot')
    }

    if (counter == 5) {

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 3}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 2}`)
        }

        counter--
        dot5.classList.remove('active-dot')
        dot4.classList.add('active-dot')
    }

    if (counter == 6) {

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 4}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 3}`)
        }

        counter--
        dot6.classList.remove('active-dot')
        dot5.classList.add('active-dot')
    }

    if (counter == 7) {

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 5}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 4}`)
        }

        counter--
        dot7.classList.remove('active-dot')
        dot6.classList.add('active-dot')
    }

    if (counter == 8) {

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 6}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 5}`)
        }

        counter--
        dot8.classList.remove('active-dot')
        dot7.classList.add('active-dot')
    }

    if (counter == 9) {

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 7}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 6}`)
        }

        counter--
        dot9.classList.remove('active-dot')
        dot8.classList.add('active-dot')
    }

    if (counter == 10) {

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 8}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 7}`)
        }

        counter--
        dot10.classList.remove('active-dot')
        dot9.classList.add('active-dot')
    }

    if (counter == 11) {

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.remove(`slide${i - 9}`)
        }

        // Above Remove Class/ Below Add Class

        for (let i = 9; i < 20; i++) {
            cards[i - 9].classList.add(`slide${i - 8}`)
        }

        counter--
        rightButton.style.opacity = '1';
        dot11.classList.remove('active-dot')
        dot10.classList.add('active-dot')
    }

})