const emailForm = document.getElementById('emailForm');
const sendEmailBtn = document.getElementById('sendEmailBtn');
async function sendEmail(form_data) {
    const { data } = await axios.post('http://localhost:3000/api/send-email',form_data);
    return data;
}

emailForm.addEventListener('submit', async function(e){
    e.preventDefault();

    
    const form_data  = {
        email:document.getElementById('email').value,
        message:document.getElementById('message').value
    }
    
    await sendEmail(form_data);

    
})

