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
            navOT: 'Our Team',
            navOP: 'Our Partners',
            navService: 'Services',
            navWork: 'Work',
            navClient: 'Clients',
            navContact: 'Contact',
            navTip: 'Tips',

            offerTittle: 'Our Services',
            read: 'Read More',
            offerFTS: 'FULL TURNKEY SERVICE',
            fts: 'We provide a full turnkey design service, which offers a complete management of the entire project from conception to completion. Based on careful planning....',
            ffts: `We provide a full turnkey design service, which offers a complete management of the entire project from conception to completion. Based on careful planning, powerful project coordination from our highly trained and experienced team, we've successfully finished many full turnkey projects.`,
            offerID: 'INTERIOR DESIGN',
            id: 'Our interior design team is packed with highly creative and passionate individuals and by working with our carefully selected partnered suppliers and contractors....',
            fid: `Our interior design team is packed with highly creative and passionate individuals and by working with our carefully selected partnered suppliers and contractors we are able utilize all the high quality products and tools to fulfil our clients' needs and earn their utmost satisfaction.`,
            offerED: 'EXTERIOR DESIGN',
            ed: 'Exterior design is what gives life to your buildings and here at DP7, we consider first impressions to be of the highest value while we highly prioritize your safety and well-being....',
            fed:`Exterior design is what gives life to your buildings and here at DP7, we consider first impressions to be of the highest value while we highly prioritize your safety and well-being above all. Besides that, we always go to a great length to make sure that our works fit with the clients' visions.`,
            offerAS: 'ARCHITECTURAL SERVICE',
            as: `As the saying goes "Architecture and Design can help bring balance to people's lives" and with us, we guarantee that our architecture team will exceed your expectations and....`,
            fas:`As the saying goes "Architecture and Design can help bring balance to people's lives" and with us, we guarantee that our architecture team will exceed your expectations and bring balance to your life. On that note, we always take our time ensuring the best and possibly perfect outcome.`,
            offerCS: 'CONSTRUCTION SERVICE',
            cs: 'We provide the best construction service you can find because we deploy highly trained and experienced personnels on site. Furthermore, we only use and utilize top of the line products.....',
            fcs:'We provide the best construction service you can find because we deploy highly trained and experienced personnels on site. Furthermore, we only use and utilize top of the line products and the best of the best tools because we believe in giving it our all and our best for our clients.',
            offerR: 'RENOVATION',
            r: 'Renovation has never been more budget-friendly and efficient with DP7Design because we understand and have gone through the same struggle many building owners face....',
            fr: 'Renovation has never been more budget-friendly and efficient with DP7Design because we understand and have gone through the same struggle many property owners face when renovating their property which are huge cost, unsatisfied results and miscommunications. ',
            offerE: 'EXPANSION',
            e: `Expansion happens when a space is too small and needed to be expanded but the best expansion happens with DP7Design because it's more than an expansion for us....`,
            fe: `Expansion happens when a space is too small and needed to be expanded but the best expansion happens with DP7Design because it's more than an expansion for us because we consider all spaces belong to our clients of high value and of utmost importance and we will perfect all those spaces.`,
            offerMS: 'MEP SERVICE',
            ms: ' MEP or Mechanical, Electrical and Plumbing is like the veins of the building since it is what allows the building to function properly and DP7Design will establish those veins....',
            fms: `MEP or Mechanical, Electrical and Plumbing is like the veins of the building since it is what allows the building to function properly and DP7Design will establish those veins with many layers of protection both internally and externally to make sure they are all connected and stronger than ever.`,
            offerFP: 'FURNITURES PRODUCTION',
            fp: 'Every house needs to be decorated and fully furnished so that both the house and the person residing in it are both happy and DP7Design has many partners with high quality products....',
            ffp: `Every house needs to be decorated and fully furnished so that both the house and the person residing in it are both happy and DP7Design has many partners with high quality products together with a team of exceptionally creative professionals who can turn all those products into our clients' pride and joy.`,

            pTitle: 'Our Latest Projects',
            pt1: 'Offices',
            pt2: 'Shops & Retail Stores',
            pt3: 'Cafes',
            pt4: 'Furnitures',
            pt5: 'Others',

            fp1: 'Royal Cambodian Army',
            fp2: 'Vattanac Investment Ltd',
            fp3: 'Deloitte',
            more: 'More',

            bTitle: 'Why Us?',
            bd1: 'High Quality, Innovative and Cost Effective',
            bt1: 'DP7Design is staffed with highly creative, innovative and passionate individuals who strongly believe in providing clients with the best and most cost effective method. Furthermore......',
            bd2: 'Many Close Partnerships With Leading Professionals',
            bt2: 'DP7Design has many partnerships with leading professionals in the construction industry who are able to provide us with incredibly high quality products and powerful tools to build......',
            bd3: 'Fully Experienced With Commercial Building Standards',
            bt3: 'DP7Design possesses and utilizes all the information related to commercial building standards and over the years, we have built and guaranteed many structures for our valuable clients.... ',

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
            foot4: 'Send Your Message', 

            v1: 'Provide',
            v2: 'high quality',
            v3: 'innovative',
            v4: 'cost effective',
            v5: 'solutions',
            v6: 'Our Services',
            v7: 'Learn More',
            v8: 'IN-DEPTH',
            v9: '& EXPERIENCED',
            V10:'Years Of Experience In Local Interior/Exterior Design',
            v11: '& Production',
            v12: 'Get Quote ',

            work: 'OUR WORK',
            blog: 'Welcome to our blog',
            client: 'Our Clients'


         },
         kh: {
            navHome: 'ទំព័រដើម',
            navAbout: 'អំពីយើង',
            navWWA:'តើពួកយើងជាអ្នកណា',
            navOT: 'សមាជិករបស់យើង',
            navOP: 'ដៃគូរបស់យើង',
            navService: 'សេវាកម្ម',
            navWork: 'ការងារ',
            navClient: 'អតិថិជន',
            navContact: 'ទំនាក់ទំនង',
            navTip: 'ចំណេះដឹង',

            offerTittle: 'សេវាកម្មរបស់យើង',
            read: 'អានបន្ត',
            offerFTS: 'សេវាកម្ម ជាកញ្ជប់',
            fts: 'យើង​ផ្តល់គម្រោងសេវាកម្មជាកញ្ជប់​ ដែលផ្តល់ការគ្រប់គ្រោងពេញលេញ​ លើគម្រោង ​ចាប់តាំងពី​ការរចនាប្លង់​ រហូតដល់បញ្ជប់គម្រោង​។​ ផ្អែកលើការគ្រងទុក​យ៉ាងយកចិត្តទុកដាក់​.....',
            ffts: `យើង​ផ្តល់គម្រោងសេវាកម្មជាកញ្ជប់​ ដែលផ្តល់ការគ្រប់គ្រោងពេញលេញ​ លើគម្រោង ​ចាប់តាំងពី​ការរចនាប្លង់​ រហូតដល់បញ្ជប់គម្រោង​។​ ផ្អែកលើការគ្រងទុក​យ៉ាងយកចិត្តទុកដាក់​,ដោយអ្នកដឹកនាំដែលមានស្ទត់ជំនាញ នឹងបុគ្គលិនពេញទៅដោយបទពិសោធន៍។ យើងបានបញ្ជប់សេវាកម្មជាកញ្ជប់ជាច្រើនមកហើយ។`,
            offerID: 'ការតុបតែងខាងក្នុង',
            id: 'ក្រុមអ្នករចនារបស់យើង​ត្រូវបានពោពេញដោយភាពច្នៃប្រឌិតខ្ពស់​​​ ស្របតាមចំណង់ចំណូលចិត្តរបស់អតិថិជន​​ ជាមួយសភ្ភារះមានគុណភាពល្អ​ នឹងជាងមានជំនាញ​......​',
            fid: 'ក្រុមអ្នករចនារបស់យើង​ត្រូវបានពោពេញដោយភាពច្នៃប្រឌិតខ្ពស់​​​ ស្របតាមចំណង់ចំណូលចិត្តរបស់អតិថិជន​​ ជាមួយសភ្ភារះមានគុណភាពល្អ​ នឹងជាងមានជំនាញ​ដែលអាចប្រើប្រាស់គ្រឿងបរិក្ខាដើម្បីបំពេញតាមចិត្តអតិថិជន ក៏ដូចជាផ្ដល់នូវសេចក្តីពេញចិត្តដល់ភ្ញៀវ។',
            offerED: 'ការតុបតែងខាងក្រៅ',
            ed: 'រចនាបថដែលផ្ដល់ភាពរស់រវើក​  ហើយនៅ​ DP7 ​ អ្នកនឹងមានអារម្មណ៍ដ៏វិសេសវិសាល​​ ជាមួយការគិតដល់សុវត្ថិភាពជាចំបង នឹងការតបតែងដ៏សំបូរបែប.......',
            fed: 'រចនាបថដែលផ្ដល់ភាពរស់រវើក​  ហើយនៅ​ DP7 ​ អ្នកនឹងមានអារម្មណ៍ដ៏វិសេសវិសាល​​ ជាមួយការគិតដល់សុវត្ថិភាពជាចំបង នឹងការតបតែងដ៏សំបូរបែបឈានមុខគេ។ លើសពីនេះទៅទៀត យើងតែធ្វើអ្វីបន្ថែម​ ដើម្បីប្រកដថាយើងបំពេញការរំពឹងអតិថិជន។',
            offerAS: 'ការរចនាប្លង់',
            as: `ដូចពាក្យថា​ “ការគ្រងប្លង់ និងតុបតែង​ ផ្ដល់សមូហភាពដល់ជីវិត” ជាមួយពួកយើង ការធានាលើក្រុមគ្រោងប្លង់ដែលលើពីការរំពឹងទុករបស់អតិថិជន.....`,
            fas: 'ដូចពាក្យថា​ “ការគ្រងប្លង់ និងតុបតែង​ ផ្ដល់សមូហភាពដល់ជីវិត” ជាមួយពួកយើង ការធានាលើក្រុមគ្រោងប្លង់ដែលលើពីការរំពឹងទុករបស់អតិថិជន និងវិសមភាពនៃជីវិត។​ ក្នុងចំនុចនេះដែរ, យើងតែងតែយកពេលវេលារបស់យើងដើម្បីធានា លើការរំពឹងទុក្ខរបស់ភ្ញៀវ។',
            offerCS: 'សេវាកម្មសាងសង់',
            cs: 'ពួកយើងផ្ដល់សេវាកម្មសាងសង់ដែលល្អជាងគេ ដោយវិស្វករដែលប្រកបដោយជំនាញ និងបទពិសោធន៍។ បន្ថែមជាងនេះទៀត ពួកយើងប្រើប្រាស់ និងបំពាក់ដោយឧបករណ៍ឈានមុខគេ.....',
            fcs: 'ពួកយើងផ្ដល់សេវាកម្មសាងសង់ដែលល្អជាងគេ ដោយវិស្វករដែលប្រកបដោយជំនាញ និងបទពិសោធន៍។ បន្ថែមជាងនេះទៀត ពួកយើងប្រើប្រាស់ និងបំពាក់ដោយឧបករណ៍ឈានមុខគេ នឹងឧបករណ៍ទំនើប ដើម្បីផ្ដល់ដល់អតិថិជនយ៉ាងឥតខ្ជោះ។',
            offerR: 'ការជួសជុលថ្មី',
            r: 'ការជួសជុលជាថ្មី នឹងមិនលើសពីកញ្ជប់ថវិកា ហើយមានប្រសិទ្ធភាព ជាមួយ DP7​Design ព្រោះពួកយើងយល់និង ដឹងពីអ្វីដែលម្ចាស់អាគារជួបប្រទះ....',
            fr: 'ការជួសជុលជាថ្មី នឹងមិនលើសពីកញ្ជប់ថវិកា ហើយមានប្រសិទ្ធភាព ជាមួយ DP7​Design ព្រោះពួកយើងយល់និង ដឹងពីអ្វីដែលម្ចាស់អាគារជួបប្រទះ នៅពេលជួសជុលម្ដងៗ ដោយចំណាយច្រើន, មិនដូចការរំពឹងទុក និងមានការមិនស្របគ្នា។',
            offerE: 'ការពង្រើកបន្ថែម',
            e: `ការពង្រើកបន្ថែមកើតឡើងពេលដែលទំហំទំនេរគឺតូចពេក​ នឹងតម្រូវការពង្រីកបន្ថែម តែការពង្រើកបន្ថែមដល់ល្អជាមួយ DP7Design មិនត្រឹមតែជាការពង្រើកបន្ថែម....`,
            fe: 'ការពង្រើកបន្ថែមកើតឡើងពេលដែលទំហំទំនេរគឺតូចពេក​ នឹងតម្រូវការពង្រីកបន្ថែម តែការពង្រើកបន្ថែមដល់ល្អជាមួយ DP7Design មិនត្រឹមតែជាការពង្រើកបន្ថែម​ ព្រោះយើងបំពេញចិត្តអតិថិជន នូវអ្វីដែលពិសេស ហើយយើងនឹងរៀបចំយ៉ាងម៉ត់ចត់។',
            offerMS: 'ការរៀបប្រព័ន្ធទឹក​និងអគ្គិសនី',
            ms: 'MEP or Mechanical, Electrical and Plumbing ជាសរសៃរឈាមនៃអាគារទាំងមូល ដែលធ្វើឲ្យអាគារទំាងមូលដំណើរការទៅយ៉ាងរលូន ជាមួយការរួមបញ្ជូលនៃការរៀបចំរបស់ DP7Design....',
            fms: 'MEP or Mechanical, Electrical and Plumbing ជាសរសៃរឈាមនៃអាគារទាំងមូល ដែលធ្វើឲ្យអាគារទំាងមូលដំណើរការទៅយ៉ាងរលូន ជាមួយការរួមបញ្ជូលនៃការរៀបចំរបស់ DP7Design ដោយមានការការពារយ៉ាងមំាមួនទាំងផ្នែកខាងក្នុង នឹងខាងក្រៅ ក៏ធានានៅការតភ្ជាប់ផងដែរ។',
            offerFP: 'គ្រឿងសង្ហារឹម',
            fp: 'គ្រប់ផ្ទះត្រូវការការតុបតែងមួយដែលប្រណិត ដើម្បីរស់នៅដោយសុភមង្គល ជាមួយ DP7Design​ មានដៃគូរដែលមានផលិតផងប្រកបដោយគុណភាព......',
            ffp: 'គ្រប់ផ្ទះត្រូវការការតុបតែងមួយដែលប្រណិត ដើម្បីរស់នៅដោយសុភមង្គល ជាមួយ DP7Design​ មានដៃគូរដែលមានផលិតផងប្រកបដោយគុណភាព នឹងបុគ្គលិកជំនេញដែលពោពេញទៅដោយភាពឆ្នៃប្រឌិត នឹងធ្វើឲ្យអតិថិជនរស់នៅដោយមានសប្យាយ និងសុភមង្គល។',

            pTitle: 'គម្រោងចុងក្រោយរបស់យើង',
            pt1: 'ការិយាល័យ',
            pt2: 'ហាងប្រណិត',
            pt3: 'ហាងកាហ្វេ',
            pt4: 'គ្រឿងសង្ហារឹម',
            pt5: 'ផ្សេងៗ',

            fp1: 'កងទ័ពជើងគោក',
            fp2: 'Vattanac Investment Ltd',
            fp3: 'Deloitte',
            more: 'បន្ថែមទៀត',

            bTitle: 'ហេតុអ្វីជ្រើសរើសពួកយើង',
            bd1: 'គុណភាពខ្ពស់, ការច្នៃប្រឌិត និង សន្សំសំចៃ',
            bt1: 'DP7Desing​ ពោពេញដោយបុគ្គល មានការច្នៃប្រឌិតខ្ពស់ ការបង្កើតថ្មី នឹងតាមចំណង់ចំនូលចិត្តដោយផ្តល់ដល់អតិថិជនជាមួយនឹងភាពឥតខ្ជោះ។ បន្ថែមពីនេះទៅទៀត.......',
            bd2: 'ដៃគូសហការណ៍យ៉ាងជិតស្និទ្ធិ និងវីជ្ជាជីវ​',
            bt2: 'DP7Design មានដៃគូសហការណ៍ជាច្រើនប្រកបដោយវិជ្ជាជី​វ ក្នុងវិស័យសាងសង់ ដែលអាចផ្ដល់នូវគុណភាពខ្ពស់ និងឧបករណ៍ទំនើប.....',
            bd3: 'បទពិសោធន៍លើការសង់សង់តាមស្តង់ដា',
            bt3: 'DP7Design ប្រើប្រាស់ពត័មានដែលទាក់ទងនឹងស្ដង់ដានៃការសាងសង់ ហើយក្នុងរយះពេលប៉ុន្មានឆ្នាំនេះ យើងបានសាងសង់នៅគម្រោង ដល់អតិថិជន........',
            
            
            map: 'ទីតាំងរបស់យើង',
            client: 'អតិថិជនរបស់យើង',
            mail1: 'ត្រូវការពត័មានបន្ថែម?',
            mail2: 'សូមផ្ញើសារអេឡិចត្រូនិចមកកាន់យើង បុគ្គលិកយើងនឹងទាក់ទងទៅអ្នកវិញ',

            footTitle: 'អំពីយើង',
            foot1: `DP7 Design ជាក្រុមហ៊ុនក្នុងស្រុកដែលផ្ដល់សេវាកម្មដូចជា​ ការតុបតែងខាងក្នុង/ក្រៅ​ នឹងការរចនាផលិតផលដែលមានទីតាំងនៅក្នុងព្រះរាជាណាចក្រកម្ពុជា`,
            foot2: `ជាមួយបទពិសោធន៍ជាច្រើនឆ្នាំ, DP7 ផ្តល់ជូននៅគុណភាពតាមស្តង់ដាអគារ។​  យើងបានបញ្ជប់គម្រោងជាច្រើន​ រួមមានហាងទំនើបៗ​ ការតុបតែង​ការិយាល័យ​​នឹងការផលិតគ្រឿងសង្ហារឹម​ ដោយមានបុគ្គលិកជំនាញតាមតម្រូវការរបស់លោកអ្នក។`,
            foot3: 'ទទួលបានពត័មានមុនគេពីយើង',
            foot4: 'ផ្មើសារអេឡិចត្រនិច',
            
            v1: 'ផ្តល់',
            v2: 'គុណភាពខ្ពស់',
            v3: 'ការច្នៃប្រឌិត',
            v4: 'សន្សំសំចៃ',
            v5: 'ដំណោះស្រាយ',
            v6: 'សេវាកម្មរបស់យើង',
            v7: 'ពត័មានបន្ថែម',
            v8: 'ស៊ីជម្រៅ',
            v9: 'និង បទពិសោធន៍',
            V10:' ជាច្រើនឆ្នាំក្នុងការតុបតែង​ ផ្នែកខាងក្នុង​​​​​​ និិងខាងក្រៅ',
            v11: 'និង សមតិ្ថផល',
            v12: 'សាកសួរ​​ តម្លៃ ',

            work: 'ការងាររបស់យើង',
            blog: 'ស្វាគមន៍មកកាន់ទំព័ររបស់យើង',
            client: 'អតិថិជនរបស់យើង'
         }
       }
    }
})