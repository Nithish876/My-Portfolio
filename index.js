const themedot = document.querySelectorAll('.theme-dot');
 const maintheme = document.querySelector('#css');
 let themest = localStorage.getItem('themes');
   if(themest == null){
    setthemes('light');
   }
   else{
    setthemes(themest);
   }



 for(let i=0;i<themedot.length;i++){
    themedot[i].addEventListener('click',function(){
  let mode = this.dataset.mode
        console.log('you clicked me '+mode);
        setthemes(mode)
    });
 };
 function setthemes(mode){
   if(mode== 'dark'){
   document.getElementById('css').href = 'styles/theme1.css';
   }
   if(mode== 'light'){
    document.getElementById('css').href = 'styles/main.css';
    }
    if(mode== 'green'){
        document.getElementById('css').href = 'styles/theme2.css';
        }
        if(mode== 'purple'){
            document.getElementById('css').href = 'styles/theme3.css';
            }
            localStorage.setItem('themes', mode);
}
//localStorage.setItem('themes', mode);