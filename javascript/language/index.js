
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
const hsTitle4 = document.querySelector('.is5a')
const hsDes4 = document.querySelector('.is5b')
const hsTitle5 = document.querySelector('.is6a')
const hsTitle6 = document.querySelector('.is7a')
const hsTitle7 = document.querySelector('.is8a')
const hsTitle8 = document.querySelector('.is9a')
const hsTitle9 = document.querySelector('.is10a')
const ipTitle = document.querySelector('.ipt')
const ipCa = document.querySelector('.ipCa')
const ipCb = document.querySelector('.ipCb')
const ipCc = document.querySelector('.ipCc')
const ipCd = document.querySelector('.ipCd')
const ipCe = document.querySelector('.ipCe')
const ipCe1 = document.querySelector('.ipCe1')
const ipCe2 = document.querySelector('.ipCe2')
const ipCe3 = document.querySelector('.ipCe3')
const ipCm = document.querySelector('.ipCm')
const ibTitle = document.querySelector('.ibt')
const ibDes1 = document.querySelector('.ibd1')
const ibDes2 = document.querySelector('.ibd2')
const ibDes3 = document.querySelector('.ibd3')
const ibB1 = document.querySelector('.ibb1')
const ibB2 = document.querySelector('.ibb2')
const ibB3 = document.querySelector('.ibb3')
const im = document.querySelector('.im')
const ic = document.querySelector('.ic')
const iml1 = document.querySelector('.iml1')
const iml2 = document.querySelector('.iml2')
const ift = document.querySelector('.ift')
const ifd1 = document.querySelector('.ifd1')
const ifd2 = document.querySelector('.ifd2')
const ifd3 = document.querySelector('.ifd3')
const ifd4 = document.querySelector('.ifd4')
const ifd5 = document.querySelector('.ifd5')





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
       hsTitle4.textContent = data[attr].hsTitle4
       hsDes4.textContent = data[attr].hsDes4
       hsTitle5.textContent = data[attr].hsTitle5
       hsTitle6.textContent = data[attr].hsTitle6
       hsTitle7.textContent = data[attr].hsTitle7
       hsTitle8.textContent = data[attr].hsTitle8
       hsTitle9.textContent = data[attr].hsTitle9
       ipTitle.textContent = data[attr].ipTitle
       ipCa.textContent = data[attr].ipCa
       ipCb.textContent = data[attr].ipCb
       ipCc.textContent = data[attr].ipCc
       ipCd.textContent = data[attr].ipCd
       ipCe.textContent = data[attr].ipCe
       ipCe1.textContent = data[attr].ipCe1
       ipCe2.textContent = data[attr].ipCe2
       ipCe3.textContent = data[attr].ipCe3
       ipCm.textContent = data[attr].ipCm
       ibTitle.textContent = data[attr].ibTitle
       ibDes1.textContent = data[attr].ibDes1
       ibDes2.textContent = data[attr].ibDes2
       ibDes3.textContent = data[attr].ibDes3
       ibB1.textContent = data[attr].hsb1
       ibB2.textContent = data[attr].hsb1
       ibB3.textContent = data[attr].hsb1
       im.textContent = data[attr].im
       ic.textContent = data[attr].ic
       iml1.textContent = data[attr].iml1
       iml2.textContent = data[attr].iml2
       ift.textContent = data[attr].about
       ifd1.textContent = data[attr].ifd1
       ifd2.textContent = data[attr].ifd2
       ifd3.textContent = data[attr].ifd3
       ifd4.textContent = data[attr].ifd4
       ifd5.textContent = data[attr].ifd5

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
        "hsTitle4": "ARCHITECTURAL SERVICE",
        "hsDes4": `As the saying goes "Architecture and Design can help bring balance to people's lives" and with us, we guarantee that our architecture team will exceed your expectations and....`,
        "hsTitle5": "CONSTRUCTION SERVICE",
        "hsTitle6": "RENOVATION",
        "hsTitle7": "EXPANSION",
        "hsTitle8": "MEP SERVICE",
        "hsTitle9": "FURNITURES PRODUCTION",
        "ipTitle": "Our Latest Projects",
        "ipCa": "Offices",
        "ipCb": "Shops & Retail Stores",
        "ipCa": "Cafes",
        "ipCa": "Furnitures",
        "ipCa": "Others",
        "ipCe1": "Royal Cambodian Army",
        "ipCe2": "Vattanac Investment Ltd",
        "ipCe3": "Deloitte",
        "ipCm": "More",
        "ibTitle": "Why Us?",
        "ibDes1": "High Quality, Innovative and Cost Effective",
        "ibDes2": "Many Close Partnerships With Leading Professionals",
        "ibDes3": "Fully Experienced With Commercial Building Standards",
        "im": "Where To Find Us",
        "ic": "Our Clients",
        "iml1": "Need more information?",
        "iml2": "Please email us and our support staff will contact you back",
        "ifd1": `DP7 DESIGN is a local company
        that operates interior/exterior
        deisgn and production deisgn
        based in the Kingdom of Cambodia`,
        "ifd2": `With many years of experiences in local interior/
        exterior design and production, DP7 brings together
        knowledge with standard quality. We successfully
        completed many projects including retail store,
        office renovation project and furniture productions.
        That because we have the right teams for you`,
        "ifd3": "Get In Touch",
        "ifd4": "Send Your Message"
        

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
        "hsDes3": "រចនាបថដែលផ្ដល់ភាពរស់រវើក​  ហើយនៅ​ DP7 ​ អ្នកនឹងមានអារម្មណ៍ដ៏វិសេសវិសាល​​ ជាមួយការគិតដល់សុវត្ថិភាពជាចំបង នឹងការតបតែងដ៏សំបូរបែប.......",
        "hsTitle4": "ការរចនាប្លង់",
        "hsDes4": `ដូចពាក្យថា​ “ការគ្រងប្លង់ និងតុបតែង​ ផ្ដល់សមូហភាពដល់ជីវិត” ជាមួយពួកយើង ការធានាលើក្រុមគ្រោងប្លង់ដែលលើពីការរំពឹងទុករបស់អតិថិជន.....`,
        "hsTitle5": "សេវាកម្មសាងសង់",
        "hsTitle6": "ការជួសជុលថ្មី",
        "hsTitle7": "ការពង្រើកបន្ថែម",
        "hsTitle8": "ការរៀបប្រព័ន្ធទឹក​និងអគ្គិសនី",
        "hsTitle9": "គ្រឿងសង្ហារឹម",
        "ipTitle": "គម្រោងចុងក្រោយគេរបស់យើង",
        "ipCa": "ការិយាល័យ",
        "ipCb": "ហាងទំនើប",
        "ipCc": "ហាងកាហ្វេ",
        "ipCd": "គ្រឿងសង្ហារឹម",
        "ipCe": "ផ្សេងៗទៀត",
        "ipCe1": "កងទ័ពជើងគោក",
        "ipCe2": "ក្រុមហ៊ុនវឌ្ឍនៈ អ៊ិនវេសមេន",
        "ipCe3": "Deloitte",
        "ipCm": "ច្រើនទៀត",
        "ibTitle": "ហេតុអ្វីបានជាត្រូវជ្រើសរើសពួយើង?",
        "ibDes1": "គុណភាព ការច្នៃប្រឌិត​ នឹងតម្លៃសមរម្យ",
        "ibDes2": "ដៃគូរសហការប្រកបដោយវីជ្ជាជីវះ",
        "ibDes3": "បទពិសោធន៍ស្របតាមស្តង់ដានៃការសាងសង់",
        "im": "ទីតាំងរបស់យើង",
        "ic": "អតិថិជនរបស់យើង",
        "iml1":"ត្រូវការពត័មានបន្ថែម?",
        "iml2":"សូមផ្ញើសារអេឡិចត្រូនិចមកកាន់យើង បុគ្គលិកយើងនឹងទាក់ទងទៅអ្នកវិញ",
        "ifd1":" DP7 Design ជាក្រុមហ៊ុនក្នុងស្រុកដែលផ្ដល់សេវាកម្មដូចជា​ ការតុបតែងខាងក្នុង/ក្រៅ​ នឹងការរចនាផលិតផលដែលមានទីតាំងនៅក្នុងព្រះរាជាណាចក្រកម្ពុជា",
        "ifd2":"ជាមួយបទពិសោធន៍ជាច្រើនឆ្នាំ, DP7 ផ្តល់ជូននៅគុណភាពតាមស្តង់ដាអគារ។​  យើងបានបញ្ជប់គម្រោងជាច្រើន​ រួមមានហាងទំនើបៗ​ ការតុបតែង​ការិយាល័យ​​នឹងការផលិតគ្រឿងសង្ហារឹម​ ដោយមានបុគ្គលិកជំនាញតាមតម្រូវការរបស់លោកអ្នក។",
        "ifd3": "ទទួលបានពត័មានមុនគេពីយើង",
        "ifd4": "ផ្មើសារអេឡិចត្រនិច"


      
    }
}