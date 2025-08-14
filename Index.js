const input = document.getElementById('Txt')
const RnnP = document.getElementById('kss')
let ms = document.getElementById('rda')
let secondDiv = document.getElementById('SecondDiv')
const phone = '(61) 99273-0855'

let thirdDiv = document.getElementById('thirdDIVb')
const commands = {
    clear: () => {
        ms.innerHTML = '';
        RnnP.innerHTML = '';
        secondDiv.innerHTML = '';
        thirdDiv.innerHTML = '';
    },

    help: () => {
        const helps = document.createElement('p')
        helps.style.fontFamily = "'Courier New', monospace"
        helps.style.fontSize = '16px'
        writing(helps, 'Commands is : Clear, Help, About, Contact and Info')
        ms.appendChild(helps)
    },
    info: () => {
            writing(RnnP, 'Hi, My name is Renan Rodrigues, and im working on my Front-end and Back-end Development')
                const lInfo = document.createElement('label')
                lInfo.setAttribute('for', 'tst')
                lInfo.innerText = 'Personal Info'
                const pInfo = document.createElement('input')
                pInfo.setAttribute('type', 'radio')
                pInfo.setAttribute('id', 'tst')
        //
            ms.appendChild(pInfo)
            ms.appendChild(lInfo)
        //
                 pInfo.addEventListener('change', () =>{
                    if(pInfo.checked){
                        if(!document.getElementById('personal')){
                        const info2 = document.createElement('p')
                        info2.setAttribute('id', 'personal')
                        info2.style.fontFamily = "'Courier New', monospace"
                        info2.style.fontSize = '16px'
                        info2.style.padding = '20px'
                        info2.style.paddingRight = '50px'
                        
                        ms.appendChild(info2)
                                
                        writing(info2, 'I am currently seeking internship or job opportunities in web development.');

                            if(document.getElementById('personal')){
                                let buttonFS = document.createElement('button')
                                buttonFS.setAttribute('id', 'btnFS')
                                let msgFS = document.createElement('p')
                                msgFS.style.fontSize = '19px'
                                ms.appendChild(buttonFS)
                                ms.appendChild(msgFS)

                                writing(msgFS, 'For everything u need ull get it here')
                            }
                        }
                    }
                 })
                 
                 let labelPJ = document.createElement('label')
                 labelPJ.setAttribute('for', 'projectsSELECT')
                 labelPJ.innerText = `Projects `
                let projects = document.createElement('input')
                projects.setAttribute('type' , 'radio')
                projects.setAttribute('id', 'projectsSELECT')
                projects.setAttribute('name', 'selector')

                 secondDiv.appendChild(projects)
                 secondDiv.appendChild(labelPJ)
    
                
    projects.addEventListener('change', () =>{
        if(!document.getElementById('fbutton')){

                let fButton = document.createElement('button')
                fButton.setAttribute('id', 'fbutton')
                fButton.innerText = 'Project 1'

            thirdDiv.appendChild(fButton)

        fButton.addEventListener('click', () =>{
            window.location.href = 'youtube.com'
        })
    }
    })
            input.value = ''   
        },
    contact: () => {
                    let number = document.createElement('p')
                    number.style.fontFamily = "'Courier New', monospace"
                    number.style.fontSize = '16px'
                    number.style.marginTop = '10px'
                    ms.appendChild(number)
                    writing(number, `Contact number is : ${phone}`)
    }
}

function writing(element, text, vel = 50){
    let i = 0
    function typing(){
        if(i < text.length){
            element.innerHTML += text.charAt(i)
            i++
            setTimeout(typing, vel)
        }
    }
    typing();
}
function createP(tag, id) {
    const element = document.createElement(tag); 
    element.id = id; 
    return element;  
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        console.log('Carregou')


        const cmd = input.value.trim().toLowerCase();
        if(commands[cmd]){
            commands[cmd]();
        }

            input.value = '';
    }
}
input.addEventListener('keydown', handleEnter)