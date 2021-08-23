// ex. 1
const footer = document.querySelector('footer');
let count = 0;
footer.addEventListener('click', () => console.log(`Clique ${++count}`));

// ex. 2
const navbarHeader = document.getElementById('navbarHeader');
const hamburger = document.getElementsByClassName('navbar-toggler')[0];
hamburger.addEventListener('click', () => navbarHeader.classList.toggle('collapse'));

// ex. 3
const card0 = document.getElementsByClassName('card')[0];
const card0EditButton = card0.getElementsByTagName('button')[1];
card0EditButton.addEventListener('click', () => card0.style.color = 'red');

// ex. 4
const card1 = document.getElementsByClassName('card')[1];
const card1EditButton = card1.getElementsByTagName('button')[1];
card1EditButton.addEventListener('click', () => card1.style.color = card1.style.color === 'green' ? 'unset' : 'green');

// ex. 5
const navbar = document.getElementsByClassName('navbar')[0];
const bootstrap = document.querySelector('link');
navbar.addEventListener('dblclick', () => bootstrap.disabled = !bootstrap.disabled);

// ex. 6
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    let cardViewButton = card.getElementsByTagName('button')[0];
    let cardImage = card.getElementsByClassName('card-img-top')[0];
    let cardText = card.getElementsByClassName('card-text')[0];
    cardViewButton.addEventListener('mouseenter', () => {
        cardText.style.display = cardText.style.display === 'none' ? 'unset' : 'none';
        cardImage.style.width = cardImage.style.width === '20%' ? 'unset' : '20%';
    });
});


// ex. 7
const buttonNext = document.getElementsByClassName('btn btn-secondary my-2')[0];
buttonNext.addEventListener('click', () => {
    let cardsStack = document.querySelectorAll('.card'); // Fresh copy because we previously used a const
    let firstCard = cardsStack[0].parentNode;
    let lastCard = cardsStack[5].parentNode;
    let stackParent = firstCard.parentNode;
    stackParent.insertBefore(lastCard, firstCard);
});


// ex. 8
const buttonPrevious = document.getElementsByClassName('btn btn-primary my-2')[0];
buttonPrevious.addEventListener('click', () => {
    buttonPrevious.setAttribute('href', '#');
    let cardsStack = document.querySelectorAll('.card'); // See ex. 7
    let firstCard = cardsStack[0].parentNode;
    let lastCard = cardsStack[5].parentNode;
    let stackParent = firstCard.parentNode;
    stackParent.insertBefore(firstCard, lastCard.nextSibling);
});


// ex. 9
const logo = document.getElementsByClassName('navbar-brand')[0];
const body = document.querySelector('body');
const removeBody = () => body.removeAttribute('class');
logo.addEventListener('mouseenter', () => {
    document.addEventListener('keydown', e => {
        let key = e.key;
        switch (key) {
            case 'a':
                removeBody();
                body.classList.add('col-4');
                break;
            case 'y':
                removeBody();
                body.classList.add('col-4');
                body.classList.add('offset-md-4');
                break;
            case 'p':
                removeBody();
                body.classList.add('col-4');
                body.classList.add('offset-md-8');
                break;
            case 'b':
                removeBody();
                break;
        }
    });
});
