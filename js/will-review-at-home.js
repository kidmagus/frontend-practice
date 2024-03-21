const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab => {
    tab.addEventListener('click',(event) => {
        const target = document.querySelector(event.target.dataset.tabTarget)
        tabs.forEach(tab => {
         tab.classList.remove('active')
        })
        event.target.classList.add('active');

        tabContents.forEach(tabContent => {
         tabContent.classList.remove('active')
        })
        target.classList.add('active')
    })
})