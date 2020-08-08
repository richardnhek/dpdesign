
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
const hsTitle1= document.querySelector('.is2a')
const hsDes1 = document.querySelector('.is2b')
const hsb1 = document.querySelector('.is2c')
const hsb2 = document.querySelector('.is3c')
const hsb3 = document.querySelector('.is4c')
const hsb4 = document.querySelector('.is5c')
const hsb5 = document.querySelector('.is6c')
const hsb6 = document.querySelector('.is7c')
const hsb7 = document.querySelector('.is8c')
const hsb8 = document.querySelector('.is9c')
const hsb9 = document.querySelector('.is10c')
const hsTitle2 = document.querySelector('.is3a')
const hsDes2 = document.querySelector('.is3b')
const hsTitle3 = document.querySelector('.is4a')
const hsDes3  = document.querySelector('.is4b')




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
        hsTitle1.textContent = data[attr].hsTitle1
        hsDes1.textContent = data[attr].hsDes1
        hsb1.textContent = data[attr].hsb1
        hsb2.textContent = data[attr].hsb1
        hsb3.textContent = data[attr].hsb1
        hsb4.textContent = data[attr].hsb1
        hsb5.textContent = data[attr].hsb1
        hsb6.textContent = data[attr].hsb1
        hsb7.textContent = data[attr].hsb1
        hsb8.textContent = data[attr].hsb1
        hsb9.textContent = data[attr].hsb1
        hsTitle2.textContent = data[attr].hsTitle2
        hsDes2.textContent = data[attr].hsDes2
        hsTitle3.textContent = data[attr].hsTitle3
        hsDes3.textContent = data[attr].hsDes3
       


       

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
        "hs": "Our Services",
        "hsTitle1": "FULL TURNKEY SERVICE",
        "hsDes1": " We provide a full turnkey design service, which offers a complete management of the entire project from conception to completion. Based on careful planning....",
        "hsb1": "Read more",
        "hsTitle2": "INTERIOR DESIGN",
        "hsDes2": "Our interior design team is packed with highly creative and passionate individuals and by working with our carefully selected partnered suppliers and contractors....",
        "hsTitle3": "EXTERIOR DESIGN",
        "hsDes3":"Exterior design is what gives life to your buildings and here at DP7, we consider first impressions to be of the highest value while we highly prioritize your safety and well-being....",

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
        "hsTitle1": "សេវាកម្ម ជាកញ្ជប់",
        "hsDes1": "យើង​ផ្តល់គម្រោងសេវាកម្មជាកញ្ជប់​ ដែលផ្តល់ការគ្រប់គ្រោងពេញលេញ​ លើគម្រោង ​ចាប់តាំងពី​ការរចនាប្លង់​ រហូតដល់បញ្ជប់គម្រោង​។​ ផ្អែកលើការគ្រងទុក​យ៉ាងយកចិត្តទុកដាក់​.....",
        "hsb1": "អានបន្ត",
        "hsTitle2": "ការតុបតែងខាងក្នុង",
        "hsDes2": " ក្រុមអ្នករចនារបស់យើង​ត្រូវបានពោពេញដោយភាពច្នៃប្រឌិតខ្ពស់​​​ ស្របតាមចំណង់ចំណូលចិត្តរបស់អតិថិជន​​ ជាមួយសភ្ភារះមានគុណភាពល្អ​ នឹងជាងមានជំនាញ​......​",
        "hsTitle3": "ការតុបតែងខាងក្រៅ",
        "hsDes3": "",


      
    }
}