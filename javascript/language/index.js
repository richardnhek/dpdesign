
const checkL = document.querySelector('.social-links')
const link = document.querySelectorAll('a')
const home = document.querySelector('.ih1')
const about = document.querySelector('.ia1')
const aboutUs = document.querySelector('.ia2')
const team = document.querySelector('.ia3')
const partner = document.querySelector('.ia4')
const history = document.querySelector('.ia5')
const service = document.querySelector('.is1')
const work = document.querySelector('.iw1')
const client = document.querySelector('.ic1')
const  contact = document.querySelector('.ict1')
const tip = document.querySelector('.it1')
// const s1 = document.querySelector('.is1')
// const s2 = document.querySelector('.is2')
const hs = document.querySelector('.is2')



link.forEach(el => {
    el.addEventListener('click', () => {
        checkL.querySelector('.active').classList.remove('active')
        el.classList.add('active')


        const attr = el.getAttribute('language')

        home.textContent = data[attr].home 
        about.textContent = data[attr].about
        aboutUs.textContent = data[attr].aboutUs
        team.textContent = data[attr].team
        partner.textContent = data[attr].partner
        history.textContent = data[attr].history
        service.textContent = data[attr].service
        work.textContent = data[attr].work
        client.textContent = data[attr].client
        contact.textContent = data[attr].contact
        tip.textContent = data[attr].tip
        // s1.textContent = data[attr].s1
        // s2.textContent = data[attr].s2
        hs.textContent = data[attr].hs
    })


})



var data = {
    "english": {
        "home": "Home",
        "about": "About",
        "aboutUs": "Who We are",
        "team": "Our Team",
        "partner": "Our Partners",
        "history" : "Our Story",
        "service" : "Services",
        "work": "Work",
        "client": "Clients",
        "contact": "Contact",
        "tip": "Tips",
        // "s1": "Provide solutions",
        // "s2": "high quality innovative cost effective"
        "hs": "Our Services"
    },
    "khmer": {
      "home": "ទំព័រដើម",
      "about" : "អំពីយើង",
      "aboutUs": "តើពួកយើងជាអ្នកណា?",
      "team": "សមាជិករបស់យើង",
      "partner": "ដៃគូរបស់យើង",
      "history" : "ប្រវិត្តរបស់យើង" ,
      "service" : "សេវាកម្ម",
      "work": "ការងារយើង",
      "client": "អតិថិជន",
      "contact": "ទំនាក់ទំនង",
        "tip": "ចំណេះដឹង",
        // "s1": "យើងផ្ដល់ជូន  ដំណោះស្រាយ",
        // "s2": "high quality innovative cost effective"
        "hs": "សេវាកម្មរបស់យើង",

      
    }
}