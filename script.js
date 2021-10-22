
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


function changeVetorColorGradient1(){
  vetor.src = 'images/vetor.png'
  light1.style.opacity = '70%'
  light2.style.opacity = '0%'
  light3.style.opacity = '0%'
}

function changeVetorColorGradient2(){
  vetor.src = 'images/vetor3.png'
  light1.style.opacity = '0%'
  light2.style.opacity = '70%'
  light3.style.opacity = '0%'
}

function changeVetorColorGradient3(){
  vetor.src = 'images/vetor2.png'
  light1.style.opacity = '0%'
  light2.style.opacity = '0%'
  light3.style.opacity = '70%'
}