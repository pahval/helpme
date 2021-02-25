// validation logic
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('Password')
const password2 = document.getElementById('password2')
// functions
function showError(input,message){
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}
function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}
// 
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(input.value).toLowerCase())){
        showSuccess(input)
    }else{
        showError(input , `${input.value} is not valid`)
    }
}
// check password match
function checkPasswordMatch(input1 , input2){
    if(input1.value === input2.value){
        showSuccess(password2)
    }else{
        showError(password2 , 'incorrect password match')
    }
}
// check required fields
function getFieldName(input){
    return input.id.slice(0,1).toUpperCase() + input.id.slice(1,input.id.length)
}

function checkRequired(inputArr){
    inputArr.forEach((input) => {
        if(input.value.trim() === ''){
            showError(input ,`${getFieldName(input)} is mendatory to fill this field`)
        }else{
            showSuccess(input)
        }
    })
}

//
function checkLength(input , min ,max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must me greater than or equal to ${min} char`)
    }else if(input.value.length >max){
        showError(input,`${getFieldName(input)} must be less than or equal to ${max} char`)
    }else{
        showSuccess(input)
    }
}
//event listener
form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(username.value)
    checkRequired([username , email,password , password2])
    checkLength(username,3,10)
    checkEmail(email)
    checkLength(password,6,20)
    checkPasswordMatch(password , password2)
})