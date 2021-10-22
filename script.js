
const linksSocialMedia = {
  github: "Ednaldo-byte",
  youtube: "Rocketseat",
  instagram: "ednaldo_cordeiro_",
  twitter: "ed_byte"
}

function changeSocialMediaLinks(){

  for(let li of socialLinks.children){
    const social = li.getAttribute('class')

    li.children[0].href =`https://${social}.com/${linksSocialMedia[social]}`
  }

}

changeSocialMediaLinks()


function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()


/* 
  then -> pegar respostas de algima coisa
  promisse -> é uma promessa de pegar algo
  o fetch vai na url, pegar o que responder e vvai guardar, e para pegar usa-se as promisses, se o fetch conseguiu guardar o conteúdo então ele entra no then
*/
/* 

ARROW FUNCTION

function nomeFuncao(argumentos){

}

Arrow function é uma versão contraída de uma funçao: basicamente retira o 'function' e o nome da função, deixando apenas os argumentos

* RECEBENDO UM VALOR
argumento => {

}

* RECEBENDO MAIS DE UM VALOR
(argumento, argumento2) => {

}

* RECEBENDO NENHUM VALOR
() => {

}

*/  