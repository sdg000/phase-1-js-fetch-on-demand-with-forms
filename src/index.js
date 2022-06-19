const init = () => {
    // grabbing form element / adding event listener to  prevent default behaviour
    const inputForm = document.querySelector('form')
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault()

        //grabbing form input by it's ID, to be appended to url as path to selecting user's movie choice.
        const input = document.querySelector('input#searchByID')

        // append user input to db url to path to user movie choice (REst path guidelines) // convert response to object.
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        
        // use response to update title / summary display page by re-assigning their value 
        .then(data => {
            document.querySelector('section#movieDetails h4').textContent = data.title
            document.querySelector('section#movieDetails p').textContent = data.summary
        })
    })
  
}
document.addEventListener('DOMContentLoaded', init);