window.addEventListener('DOMContentLoaded', () => {
    'use strict';

//    ===================timer=========================

    const countTimer = (deadline) => {
        let timeHours = document.querySelector('#timer-hours'),
            timeMinutes = document.querySelector('#timer-minutes'),
            timeSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining(){

            let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining, hours, minutes, seconds};

        }

        const updateClock = setInterval(function(){
            let timer = getTimeRemaining();    
            
                timer.hours >= 10 ? timeHours.textContent = timer.hours : timeHours.textContent = `0${timer.hours}  `;
                timer.minutes >= 10 ? timeMinutes.textContent = timer.minutes : timeMinutes.textContent = `0${timer.minutes}`;
                timer.seconds >= 10 ? timeSeconds.textContent = timer.seconds : timeSeconds.textContent = `0${timer.seconds}`;
                
                if(timer.timeRemaining < 0){
                
                    timeHours.textContent = '00';
                    timeMinutes.textContent = '00';
                    timeSeconds.textContent = '00';
                    clearInterval(updateClock);

                }
        }, 1000);
        
    };

    countTimer('24 february 2021');

  //  =====================scroll==========================

    const pageScroll = (link) => {

        let target = link.getAttribute('href').substring(1);
        const scrollTo = document.getElementById(target);

               if(scrollTo !== null){ 
                   const elemPosition = scrollTo.getBoundingClientRect().top;

                window.scrollBy({
                    top: elemPosition,
                    behavior: "smooth"
                });
            }else{
                    return;
                }

    };


    // =====================menu==========================
    
    const toggleMenu = () => {
        const menu = document.querySelector('menu'),
        menuItems = menu.querySelectorAll('ul>li>a'),
        body = document.querySelector('body');
        
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };      

        body.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if(target.closest('.close-btn') || target.closest('.menu')){

                handlerMenu();
                
            }else if(!target.closest('menu')){
                menu.classList.remove('active-menu');

            }else if(target.closest('img[src="images/scroll.svg"]')){
                pageScroll(target.parentNode);
            }

            menuItems.forEach(item => {

                if(item === target){
                    handlerMenu();
                    pageScroll(item);

                }  
            });

        });
        
    };
    
    toggleMenu();


    //  =====================popUp==========================
    
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
        popupContent = popup.querySelector('.popup-content'),
        popupBtn = document.querySelectorAll('.popup-btn');

                
        function getAnimation(){
            let left = window.innerWidth - window.innerWidth;
            popupContent.style.left = `${left}px`;
            const timer = setInterval(() => {
                
                left += 25;
                popupContent.style.left = `${left}px`;
                
                if(left >= (40 + window.innerWidth - popupContent.offsetWidth) / 2){
                    
                    clearTimeout(timer);
                }
            }, 8);
            
        }
        
        popupBtn.forEach((elem) => {
            
            elem.addEventListener('click', () => {
           
                if(window.innerWidth > 768){
                    
                    popup.style.display = 'block';
                    getAnimation();
                    
                }else{
                    
                    popup.style.display = 'block';
                }
            });
            
        });
        
        popup.addEventListener('click', (event) => {
            let target = event.target;
            if(target.classList.contains('popup-close')){
                
                popup.style.display = 'none';
                }else{

                    target = target.closest('.popup-content');
                    if(!target){
                        popup.style.display = 'none';
                    }
                }
        });
        
    };
    
    togglePopUp();
    
    //  =====================tabs==========================

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
              tab = tabHeader.querySelectorAll('.service-header-tab'),
              tabContent = document.querySelectorAll('.service-tab');

              const toggleTabContent = (index) => {
                  for(let i = 0; i < tabContent.length; i++){
                      if(index === i){
                          tab[i].classList.add('active');
                          tabContent[i].classList.remove('d-none');
                        }else{
                          tab[i].classList.remove('active');
                          tabContent[i].classList.add('d-none');
                      }
                  }
              }

              tabHeader.addEventListener('click', (event) => {
                  let target = event.target;

                        target = target.closest('.service-header-tab');

                        if(target){

                            tab.forEach((item, index) => {

                            if(item === target){

                                toggleTabContent(index);

                            }
                        });
                    }
                
            });

    };

    tabs();
});
