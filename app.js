const titleDisplay = document.querySelector('.title-container')
const keyboard = document.querySelector('.key-container')
const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
]
const handelClick = (e) =>{
    console.log('clicked') 
}

keys.forEach(key => {
    const buttonElement =document.createElement('button');
    buttonElement.textContent =key
    buttonElement.setAttribute('id',key)
    buttonElement.addEventListener('click',handelClick)
    keyboard.append(buttonElement);
})
const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]