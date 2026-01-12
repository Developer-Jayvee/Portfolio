import { SEND_API } from "../../constants/domains";
const emailForm = document.getElementById('emailForm');
let sendEmailBtn = document.getElementById('sendEmailBtn');


async function sendEmail(form_data) {
    sendEmailBtn.setAttribute('disabled',true);
    sendEmailBtn.innerText = 'Loading...';
    sendEmailBtn.classList.add('not-allowed');
    try {
        const { data } = await axios.post(SEND_API + '/api/send-mail',form_data);
        if(data){
            sendEmailBtn.setAttribute('disabled',false);
        }
        return data;
    } catch (error) {
        console.log(`Error occured in ${error}`);
    }finally{
        resetFields();
    }
}
function resetFields(){
    sendEmailBtn.removeAttribute('disabled');
    sendEmailBtn.classList.remove('not-allowed');
    sendEmailBtn.innerText = 'Send Email';
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
}
emailForm.addEventListener('submit', async function(e){
    e.preventDefault();
    const form_data  = {
        email:document.getElementById('email').value,
        message:document.getElementById('message').value
    }
    await sendEmail(form_data);
})

