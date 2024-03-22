// const tabs = document.querySelectorAll('[data-tab-target]')
// const tabContents = document.querySelectorAll('[data-tab-content]')
// // tabs.forEach(tab => {
// //     tab.addEventListener('click',(event) => {
// //         const target = document.querySelector(event.target.dataset.tabTarget)
// //         tabs.forEach(tab => {
// //          tab.classList.remove('active')
// //         })
// //         event.target.classList.add('active');

// //         tabContents.forEach(tabContent => {
// //          tabContent.classList.remove('active')
// //         })
// //         target.classList.add('active')
// //     })
// // })


// tabs.forEach(tab => {
//     const targetContent = tab.getAttribute(tabContents);

//     targetContent.forEach(item => {
        
//     })

//     tab.addEventListener('click', (event) =>{
//         tabContents.classList.remove('active')
//         tabs.classList.remove('active')
//     })
// })

// const tabs = document.querySelectorAll('[data-tab-target]');
// const tabContents = document.querySelectorAll('[data-tab-content]');

// tabs.forEach(tab => {


//     target.addEventListener('click', (event)=>{
        
        
        
//     } )
    // tab.addEventListener('click', (event) => {
        
        
    //     tabs.forEach(item => {
    //       tabs.classList.remove('active'); 
    //       tabContents.classList.remove('active');
    //     })
       
    //     tabContents.classList.add('active');   
    //     tabs.classList.add('active');
    // });
// });



// const tabs = document.querySelectorAll('[data-tab-target]');
// const tabContents = document.querySelectorAll('[data-tab-content]');


// tabs.forEach(tab => {
//     const targetName = tab.getAttribute(tabContents);
//     const targetContent = tab.querySelector(targetName);
    
//     tab.addEventListener('click', ()=> {
//         tabs.forEach(t =>{
//             t.classList.remove('active')
//         })

//         tabContents.forEach(c => {
//             c.classList.remove('active')
//         })

//         targetContent.classList.add('active');
//         tab.classList.add('active');
//     })
// });



const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');



tabs.forEach(tab  => {
    const targetName = tab.getAttribute('data-tab-target');
    const targetContent = document.querySelector(`[data-tab-content="${targetName}"]`);


    console.log(targetName)
    console.log(targetContent)
    
    
    tab.addEventListener('click', () => {
        
        tabs.forEach(t => {
            t.classList.remove('active')
        });
          
       
        tabContents.forEach(c => {
            c.classList.remove('active');

        });


        
        targetContent.classList.add('active');

        
       
    });

   
});


// const tabs = document.querySelectorAll('[data-tab-target]')
// const tabContents = document.querySelectorAll('[data-tab-content]')
// // tabs.forEach(tab => {
// //     tab.addEventListener('click',(event) => {
// //         const target = document.querySelector(event.target.dataset.tabTarget)
// //         tabs.forEach(tab => {
// //          tab.classList.remove('active')
// //         })
// //         event.target.classList.add('active');

// //         tabContents.forEach(tabContent => {
// //          tabContent.classList.remove('active')
// //         })
// //         target.classList.add('active')
// //     })
// // })
