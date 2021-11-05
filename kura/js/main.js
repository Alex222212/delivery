const buttonAuth = document.querySelector('.button-auth')
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')
const logInForm = document.getElementById('logInForm')
const InputLogin = document.getElementById('login')
const InputPassword = document.getElementById('password')
const buttonOut = document.querySelector('.button-out')
const userName = document.querySelector('.user-name')
const wrongLogin = document.querySelector('.wrong_login')
const login = (user) => {
    userName.style.display = "block";
    userName.textContent = user.login
    modalAuth.style.display = "none";
    buttonAuth.style.display = "none";
    buttonOut.style.display = "block";
console.log(user)
}

const logout = () =>{
    buttonOut.style.display = "none";
    buttonAuth.style.display = "flex";
    userName.style.display = "none";
    localStorage.removeItem('user');
}
buttonAuth.addEventListener('click', () =>{
    modalAuth.style.display = "flex";
})
closeAuth.addEventListener('click', () =>{
    modalAuth.style.display = "none";
})
logInForm.addEventListener('submit', (event) =>{
 event.preventDefault();
 const user = {
login: InputLogin.value,
password: InputPassword.value
 }
 if(user.login == ''){
    wrongLogin.style.display= 'flex'
 } else {
 login(user);
 localStorage.setItem('user', JSON.stringify(user));
}
})
buttonOut.addEventListener('click', () =>{
    logout();
})
if(localStorage.getItem('user')){

    login(JSON.parse(localStorage.getItem('user')))
}
