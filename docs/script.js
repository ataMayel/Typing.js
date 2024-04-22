const title = new Typing('#title', {
    data: 'Typing.js',
    speed: 120,
    delay: 2000,
    repeat: true,
    back: {
        speed: 40,
        delay: 8000
    }
})

title.start()

const cdn = document.querySelector('#cdn')
cdn.innerText = '<script src="https://cdn.jsdelivr.net/gh/ataMayel/Typing.js/typing.min.js"></script>';

const tag = document.querySelector('#tag')
tag.innerText = '<h1 id="element"></h1>';

const create = document.querySelector('#create')
create.innerText = `const title = new Typing('#element', {
    data: 'Hello world!',
    speed: 60,
    delay: 1000,
    repeat: true,
    back: {
        speed: 20,
        delay: 3000
    },
})`

const start = document.querySelector('#start')
start.innerText = 'title.start()'