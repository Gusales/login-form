let isShowedPassword = false
async function handleShowPassword(id) {
  isShowedPassword = !isShowedPassword
  const passwordInput = document.getElementById(id)
  const eyeButton = document.querySelector(`.icon-${id}`)
  console.log(eyeButton)

  if (isShowedPassword) {
    passwordInput.type = "text"
    eyeButton.classList.replace("ph-eye", "ph-eye-slash")
  }
  else{
    passwordInput.type = "password"
    eyeButton.classList.replace("ph-eye-slash", "ph-eye")
  }
}

let isLoginIsActive = true
function handleChangeForms() {
  isLoginIsActive = !isLoginIsActive

  const loginForm = document.querySelector('.form__login')
  const createAccountForm = document.querySelector('.form__createAccount')

  if (isLoginIsActive) {
    loginForm.style.display = "flex"
    createAccountForm.style.display = "none"
  }
  else{
    loginForm.style.display = "none"
    createAccountForm.style.display = "flex"
  }
}

const formLogin = document.getElementById('form-login')
formLogin.addEventListener('submit', (event) => {
  event.preventDefault();

  alert('Você acabou de fazer login no sistema!')
})

const createAccountForm = document.getElementById('create-Account')
createAccountForm.addEventListener('submit', (event) => {
  event.preventDefault();

  alert('Conta criada com sucesso!')
})