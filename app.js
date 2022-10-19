const main_tab_div=document.querySelectorAll('.tab');

main_tab_div.forEach(e=>e.addEventListener('click',()=>{
    removeBottomBorder();
    showTabs(e);
    e.classList.add('tab-border');
}))

function removeBottomBorder(){    
    main_tab_div.forEach(e=>e.classList.remove('tab-border'))
}

function showTabs(e){

    const userClickedTab=document.querySelector(`.tab${e.id}-content-main`);

    let totalTabs=[1,2,3];

    for(let i=1;i<=totalTabs.length;i++){
        const userClickedTablet=document.querySelector(`.tab${i}-content-main`)
        if(userClickedTablet.classList.contains('show')){
            userClickedTablet.classList.remove('show')
        }        
    }
    
    userClickedTab.classList.add('show')
    
}




