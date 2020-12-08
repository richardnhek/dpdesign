new Vue({
    el: '#ap1',
    data: {
       defaultLang: 'en',
       langs: [ {id: 'en', name: 'ENGLISH'}, {id: 'kh', name: 'KHMER'}],
       text: {
        en: {
           navHome: 'Home',
           navAbout: 'ABOUT',
           navWWA:'Who We Are',
           navWWA1: 'WHO WE ARE',
           navOT: 'Our Team',
           navOT1: 'OUR TEAM',
           navOP: 'Our Partners',
           navOP1: 'OUR PARTNERS',
           navService: 'Services',
           navWork: 'Work',
           navClient: 'Clients',
           navContact: 'Contact',
           navTip: 'Tips',

           ct1: 'DP7DESIGN is a local construction company based in The Kingdom of Cambodia',
           ct2: 'We provide services such as full turnkey service, interior/exterior design, architectural service, construction service, renovation service, expansion service, MEP service and furnitures/production design.',
           ct3: 'Possessing many years of experiences in local interior/ exterior design and production, DP7 brings together extensive knowledge related standard quality.',
           ct4: 'We have successfully completed many projects including retail store renovation, office renovation projects and furniture productions.',
           ct5: 'All our projects was, are and will always be successfully completed with passion and perfection because we have the right teams for all our clients.',
           ct6: 'WHY CHOOSE US ? ',
           ct7: 'Our clients tell us we are unique for a variety of important reasons including:',
           ct8: 'Many Years Of Experience In The Industry',
           ct9: 'Have The Right Teams For You ',
           ct10: 'Lots Of Close Partnerships With Leading Professionals In The Industry',
           ct11: 'Full Of Dedicated, Skilled & Highly Experienced Employees',
           ct12: 'Carefully Select The Finest Materials From Both Local & Global Brands',
           ct13: `Reputed For Delivering Amazing Results Among Both Public & Private Sector Clients`,

           mt1: 'High Quality',
           mt2: 'Innovative',
           mt3: 'Cost Effective',
           
           fad1: 'Project Management',
           fat1: 'Excelled in project management, we are able to finish all projects with ease, on time and with high quality. Thus, most of our clients usually trust us in completing multiple projects at a time.',
           fad2: 'Coordination Process',
           fat2: 'We only deploy highly experienced personnels on site together with top notch project managers who can coordinate all the staffs on-site. Furthermore, our clients will always be updated about the progress of the project.',
           fad3: 'Cost Reporting',
           fat3: 'We are reputed amongst our clients for our cost-effective and high quality methods. It is possible only because we always keep our customers updated with all cost incurrences.',
           fad4: 'Monthly Project Performance Reviews',
           fat4: 'Each month we perform review and feedback sessions with our clients regarding the progress and our performance. As a result, we have never gotten any complaints or bad reviews for our work.',
           
           tt1: `DP7 Design's highly creative, innovative and passionate team`,
           tt2: 'DP7 Design is packed with passion-driven professionals who believe in providing the best for their clients.',
           tt3: 'We deploy only exceptionally experienced personnels on-site who can coordinate all the processes and utilize all the resources in-hand efficiently',
           
           pt1: `DP7 Design's partnered with many leading professionals in the construction industry`,
           pt2: 'Our professionals range from those who can provide top-notch materials for production to those who can provide top of the line tools for us to construct buildings',
           
           brochure: 'Download Brochures',

           map: 'Where To Find Us',
           client: 'Our Clients',
           mail1: 'Need more information?',
           mail2: 'Please email us and our support staff will contact you back',

           footTitle: 'about us',
           foot1: `DP7 DESIGN is a local company
           that provides services such as interior/exterior
           design and production design. We're
           based in the Kingdom of Cambodia.`,
           foot2: `Possessing many years of experiences in local interior/
           exterior design and production, DP7 brings together
           extensive knowledge related standard quality. We have successfully
           completed many projects including retail store renovation,
           office renovation projects and furniture productions.
           All our projects was, are and will always be successfully completed with 
           passion and perfection because we have the right teams for all our clients.`,
           foot3: 'Get In Touch',
           foot4: 'Send Your Message'
        },
        kh: {
           navHome: 'ទំព័រដើម',
           navAbout: 'អំពីយើង',
           navWWA:'តើពួកយើងជាអ្នកណា',
           navWWA1: 'តើពួកយើងជាអ្នកណា',
           navOT: 'សមាជិករបស់យើង',
           navOT1: 'សមាជិករបស់យើង',
           navOP: 'ដៃគូរបស់យើង',
           navOP1:'ដៃគូរបស់យើង',
           navService: 'សេវាកម្ម',
           navWork: 'ការងារ',
           navClient: 'អតិថិជន',
           navContact: 'ទំនាក់ទំនង',
           navTip: 'ចំណេះដឹង',

           ct1: 'DP7DESIGN ជាក្រុមហ៊ុនសាងសងដែលមានទីតាំងនៅព្រះរាជាណាចក្រកម្ពុជា',
           ct2: 'ពួកយើងផ្ដល់សេវាកម្មជាកញ្ជប់​ ការតុបតែងខាងក្នុង​ ការតុបតែងខាងក្រៅ​ ការរចនាប្លង់​ សេវាកម្មសាងសង់​ ការជួសជុលថ្មី​ ការពង្រើកបន្ថែម​ ការរៀបប្រព័ន្ធទឹក​និងអគ្គិសនី គ្រឿងសង្ហារឹម',
           ct3: 'ដោយបទពិសោធន៍ជាច្រើនឆ្នាំ​ ក្នុងការរចនាផ្នែកខាងក្នុង​ និងខាងក្រៅ,​ DP7Design ក៏នាំយកនូវស្តង់ដាដែលអាចទុកចិត្តបាន',
           ct4: 'ពួកយើងបានជោគជ័យរួចមកហើយ​ នៅគម្រោងជាច្រើនដូចជា​     ការិយាល័យ  ហាងប្រណិត ហាងកាហ្វេ គ្រឿងសង្ហារឹម',
           ct5: 'គម្រោងរបស់ពួកយើងតែងតែធ្វើយ៉ាងម៉ត់ចត់​ ប្រកបទៅដោយភាពពេញចិត្ត​ នឹងល្អឥតខ្ជោះ​ ព្រោះយើងមានអ្នកចំនាញសម្រាប់អតិថិជន',
           ct6: 'ហេតុអ្វីជ្រើសរើសពួកយើង? ',
           ct7: 'អតិថិជនរបស់យើងប្រាប់យើងថា​ ពួកយើងគឺមានចំនុចពិសេសលើហេតុផលជាច្រើនដូចជា:',
           ct8: 'បទពិសោធន៍ជាច្រើនឆ្នាំក្នុងវិសិយសាងសង់',
           ct9: 'មានវិស្វករចំនេញៗសម្រាប់ការសាងសង់ ',
           ct10: 'មានដៃគូសហការណ៍ជាច្រើនប្រកបដោយវិជ្ជាជី​វ ក្នុងវិស័យសាងសង់',
           ct11: 'ពោពេញទៅដោយការអត់ធ្មត់, ជំនេញ នឹងបុគ្គលិកជំនេញ',
           ct12: 'សម្រិតសម្រាំងយ៉ាង់ម៉ត់ចត់ គ្រប់គ្រឿងបរិក្ខា ទាំងក្នុងស្រុកនឹងក្រៅស្រុក',
           ct13: `តែងតែផ្ដល់នៅលទ្ធផលយ៉ាង់ពេញចិត្តដល់អតិថិជន​ ទាំងឯកជននឹងសាធារណៈ`,

           mt1: 'គុណភាពខ្ពស់',
           mt2: 'ភាពច្នៃប្រឌិត់' ,
           mt3: 'សន្សំសំចៃ',
           
           fad1: 'ការគ្រប់គ្រោងគម្រោង',
           fat1: 'លើកពីការគ្រប់គ្រោងគម្រោង, យើងតែងតែបញ្ចប់ដោយម៉ត់ចត់ តាមពេលកំណត់និងគុណភាពខ្ពស់។​ ដុូច្នេះហើយ យើងទទួលបានការជឿទុកចិត្តខ្លាំងពីអតិថិជនលើការសម្រេចគម្រោងនីមួយៗឲ្យត្រូវពេល ។',
           fad2: 'គោលដៅ ប្រតិបត្តិការ',
           fat2: 'យើងផ្ដល់ជូនបុគ្គលិកដែលមានបទពិសោធន៍ជាមួយអ្នកគ្រប់គ្រងដែលដឹកនាំកម្មករគ្រប់ជំនាញ។ បន្ថែមពីនេះទៅទៀត, អតិថិជនរបស់យើងត្រូវបានបញ្ជូនស្ថានភាពនៃការសាងសង់គម្រោង។',
           fad3: 'ការរាយការណ៍លើតម្លៃ',
           fat3: 'អតិថិជនរបស់យើងតែងតែ​ ជឿទុកចិត្តលើការសន្សំសំចៃនឹងផលិតផលមានគុណភាព។ វាកើតឡើងព្រោះពួកយើងតែងតែរាយការណ៍ជាមួយតម្លៃនៃផលិតផល។',
           fad4: 'ការវិនិឆ្ឆ័យគម្រោងប្រចាំខែ',
           fat4: 'ជារៀងរាល់ខែ ពួកយើងវិនិឆ្ឆ័យ និងមានការស្រង់មតិយោបលពីអតិថិជនលើដំណើរការគម្រោងរបស់យើង។ ជាលិទ្ធផលទទួលបានការមិនពេញចិត្តពីអតិថិជនឡើយ។',

           tt1: 'DP7 Design ភ្ជាប់មកជាមួយភាពច្នៃប្រឌិត,​ ការបង្កើតថ្មី​ និងការពេញចិត្តជាមួយការងារ',
           tt2: 'DP7 Design ផ្ដល់នូវបុគ្គលិកដែលមានការពេញចិត្តក្នុងការធ្វើការប្រកប​ដោយវិជ្ជាជីវ​​ ដែលអាចផ្ដល់ភាពល្អឥតខ្ជោះដល់អតិថិជន',
           tt3: 'យើងផ្ដល់ជូនបុគ្គលិកដែលមានបទពិសោធន៍ជាមួយអ្នកគ្រប់គ្រងដែលដឹកនាំកម្មករគ្រប់ជំនាញ នឹងប្រើប្រាស់បរិក្ខាឲ្យអស់ពីសមត្ថិភាព',
          
           pt1: `DP7 Design បានសហការណ៍ជាមួយដៃគូរដៃលល្បីក្នុងការផ្គត់ផ្គង់សម្ភារៈសំណង់`,
           pt2: 'យើងតែងតែធ្វើឲ្យអតិថិជនពេញចិត្ត ព្រោះយើងផ្ដល់នូវគ្រឿងបរិក្ខាយា៉ងទំនើប​ និងមានគុណភាព',
           

           brochure: 'ទាញយកខិត្តប័ណ្ណ',

           map: 'ទីតាំងរបស់យើង',
           client: 'អតិថិជនរបស់យើង',
           mail1: 'ត្រូវការពត័មានបន្ថែម?',
           mail2: 'សូមផ្ញើសារអេឡិចត្រូនិចមកកាន់យើង បុគ្គលិកយើងនឹងទាក់ទងទៅអ្នកវិញ',

           footTitle: 'អំពីយើង',
           foot1: `DP7 Design ជាក្រុមហ៊ុនក្នុងស្រុកដែលផ្ដល់សេវាកម្មដូចជា​ ការតុបតែងខាងក្នុង/ក្រៅ​ នឹងការរចនាផលិតផលដែលមានទីតាំងនៅក្នុងព្រះរាជាណាចក្រកម្ពុជា`,
           foot2: `ជាមួយបទពិសោធន៍ជាច្រើនឆ្នាំ, DP7 ផ្តល់ជូននៅគុណភាពតាមស្តង់ដាអគារ។​  យើងបានបញ្ជប់គម្រោងជាច្រើន​ រួមមានហាងទំនើបៗ​ ការតុបតែង​ការិយាល័យ​​នឹងការផលិតគ្រឿងសង្ហារឹម​ ដោយមានបុគ្គលិកជំនាញតាមតម្រូវការរបស់លោកអ្នក។`,
           foot3: 'ទទួលបានពត័មានមុនគេពីយើង',
           foot4: 'ផ្មើសារអេឡិចត្រនិច',
           

        }
      }
   }
})