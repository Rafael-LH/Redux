import './redux.css'


document.getElementById('form').addEventListener('submit', handleSubmit)
   
function handleSubmit(e){
      
        e.preventDefault()

        let data = new FormData(document.getElementById('form') )
        let title = data.get('title')
        /* console.log(title) */
    }