
const emailForm = document.getElementById('emailForm');
let sendEmailBtn = document.getElementById('sendEmailBtn');
let  emailField =  document.getElementById('email');
let messageField =    document.getElementById('message');
const SEND_API = "https://portfolio-be-production-778b.up.railway.app";

async function sendEmail(form_data) {
    sendEmailBtn.setAttribute('disabled',true);
    isSetDisabled([sendEmailBtn,emailField,messageField]);
    sendEmailBtn.innerText = 'Loading...';
    sendEmailBtn.classList.add('not-allowed');
    try {
        const { data } = await axios.post(SEND_API + '/api/send-email',form_data);
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
function isSetDisabled(elements , isDIsabled = true){
    if(Array.isArray(elements) && elements.length > 0){
        elements.forEach(element => {
            if(isDIsabled){
                element.setAttribute('disabled', isDIsabled);
            }else{
                if(element.hasAttribute('disabled')){
                    element.removeAttribute('disabled');
                }
            }
        });
    }
}
function resetFields(){
    isSetDisabled([sendEmailBtn,emailField,messageField],false);
    sendEmailBtn.classList.remove('not-allowed');
    sendEmailBtn.innerText = 'Send Email';
    emailField.value = "";
    messageField.value = "";
}
emailForm.addEventListener('submit', async function(e){
    e.preventDefault();
    const form_data  = {
        email: emailField.value,
        message:messageField.value
    }
    await sendEmail(form_data);
})

