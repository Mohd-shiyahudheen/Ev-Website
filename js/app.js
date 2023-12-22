const form = document.querySelector('form')
const formEvent = form.addEventListener('submit', event =>{
    event.preventDefault()

    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const message = document.querySelector('#message').value

    const postData = {name, email, message}
    createBlog(postData)
})

const createBlog = postData =>{
    axios.post('http://54.251.225.222:9000/api/utils/sendemail',postData).then((res) => {
        const result = res.data.data
        console.log(result);
        alert('Message send successfully to admin')
    }).catch((err) => {
        console.log(err);
    });
}