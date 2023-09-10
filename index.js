const submit = document.getElementById('submit')
const resetPag = document.getElementById('btnRestAll')
const sect = document.getElementById('sect')


function awaitFetch(id){
   const response = fetch(`https://rickandmortyapi.com/api/character/${id}`)
   .then(res => res.json())
   .then(data => {
        return data
    })

   return response
}
submit.addEventListener('click',async ()=>{
     
    let identi = document.getElementById('id')
    
    const result = await awaitFetch(identi.value)

    const card = document.createElement('div')
    card.classList.add('col-sm-3')
    card.classList.add('card')
    card.classList.add('m-2')

    const imageCard = document.createElement('img')
    imageCard.src = result.image
    imageCard.classList.add('card-img-top')

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    
    const nameCharacter = document.createElement('h3')
    nameCharacter.textContent = result.name
    nameCharacter.style.color = '#5b5b5b'
    nameCharacter.classList.add('card-title')
    nameCharacter.classList.add('text-center')
    

    const divQualites = document.createElement('div')
    divQualites.classList.add('row')


    const statusDiv = document.createElement('div')
    statusDiv.classList.add('centralize')
    statusDiv.classList.add('col-sm')

    const textStatus = document.createElement('h5')
    textStatus.textContent = 'Status'

    const status = document.createElement('h6')
    status.textContent = result.status
    if(status.textContent === 'Alive') status.classList.add('alive')
    if(status.textContent === 'Dead') status.classList.add('dead')
    if(status.textContent === 'unknown') status.classList.add('unknown')  

    statusDiv.append(textStatus,status)

    const specieDiv = document.createElement('div')
    specieDiv.classList.add('centralize')
    specieDiv.classList.add('col-sm')

    const textSpecie = document.createElement('h5')
    textSpecie.textContent = 'Specie'

    const specie = document.createElement('h6')
    specie.textContent = result.species
    specie.classList.add('specie')

    specieDiv.append(textSpecie,specie)

    const genderDiv = document.createElement('div')
    genderDiv.classList.add('centralize')
    genderDiv.classList.add('col-sm')

    const textGender = document.createElement('h5')
    textGender.textContent = 'Gender'

    const gender = document.createElement('h6')
    gender.textContent = result.gender
    if(gender.textContent === 'Male') gender.classList.add('male')
    if(gender.textContent === 'Female') gender.classList.add('female')
    if(gender.textContent === 'unknown') gender.classList.add('unknown')
    

    genderDiv.append(textGender,gender)

    divQualites.append(statusDiv,specieDiv,genderDiv)

    const divBtn = document.createElement('div')
    divBtn.classList.add('resetBtn')

    identi.value =  ''

    const resetBtn = document.createElement('button')
    resetBtn.textContent = 'Resetar'
    resetBtn.id = 'reset'
    resetBtn.classList.add('resetBtn')
    resetBtn.classList.add('mt-3')
    resetBtn.classList.add('btn')
    resetBtn.classList.add('btn-danger')


    resetBtn.addEventListener('click',()=>{
        sect.removeChild(card)
        identi.value = ''
    
    })
    resetPag.addEventListener('click',()=>{
        sect.removeChild(card)
        identi.value = ''
    })

    divBtn.appendChild(resetBtn)
    cardBody.append(nameCharacter,divQualites,divBtn)
    card.append(imageCard,cardBody)

    sect.appendChild(card)

})
