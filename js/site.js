//alert("bla")

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const todoList = document.querySelector("#new-todo") // Select the todo input
const tdButton = document.querySelector("#todoButton") // Select the todo button
const tdlist = document.querySelector(".todo-list") // Yes these names suck, this is the result of 3 hours of bug fixing XD
// Yes it mightve taken me 45 minutes to realise I needed a . instead of a # for this last one... we dont talk about it

const secret = "Secret Message!"

if (isMorning)
{
    document.querySelector('div#welcome > h3').textContent = 'Good Morning,'
}
else if (isAfternoon)
{
    document.querySelector('div#welcome > h3').textContent = 'Good Afternoon,'
}
else
{
    document.querySelector('div#welcome > h3').textContent = 'Good Evening,'
}

localStorage.setItem("It's a secret to everybody.", "I think its a reference to Zelda, but im not sure... Also saw your last message, ill get around to that exp farm eventually... maybe...")

// Assignment 5
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

// Change image every 5 seconds
setInterval(() => {
    currentImage ++
    if (currentImage === 5) { currentImage == 0 }
    showImages()
}, 5000)

// change image to next when user clicks
const nextButton = document.querySelector('#next')
nextButton.addEventListener('click', () => {
    currentImage ++
    if (currentImage === 5) { currentImage == 0 }
    showImages()
 })

// change image to previous when user clicks
const prevButton = document.querySelector('#prev')
prevButton.addEventListener('click', () => {
    currentImage --
    if (currentImage === -1) { currentImage == 4 }
    showImages()
 })

// TODO LIST ASSIGNMENT

// renderTodos function, runs when save button is clicked.
const renderTodos = () => {

    const todos = JSON.parse(localStorage.getItem('todo-list')) || []

    // Add a new item to the list
    todos.push({ text: todoList.value, completed: false })

    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos))

    // Clear the li's before we recreate them
    tdlist.innerHTML = ''

    todos.map(todo => {
        const li = document.createElement('li')
        li.textContent = todo.text
        tdlist.append(li)
    })
}

tdButton.addEventListener("click", renderTodos)


// Runs on load to put saved todos back into the list

// This repeated code could be its own function, but I want to catch up on classwork and save time, it works as is
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

tdlist.innerHTML = ''

todos.map(todo => {
        const li = document.createElement('li')
        li.textContent = todo.text
        tdlist.append(li)
    })