
// Variable for the each divs and li //
const tabTarget = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-nav]');


//For Loop // Get Attri of each target ..
tabTarget.forEach(tabTargets => {
    const target = tabTargets.getAttribute('data-tab-target');
    const targetContent = document.querySelector(`[data-nav="${target}"]`);
   
  
// Function for Displaying the Content
    tabTargets.addEventListener("click", () => {

        tabTarget.forEach(t => {
            t.classList.remove('active')

        }); 
          
       
        tabContents.forEach(c => {
            c.classList.remove('active');
        });


    
        targetContent.classList.add('active');
        tabTargets.classList.add('active');
        
    })
})


