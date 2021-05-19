$( document ).ready(function() {
class App {
  constructor() {
   this.$body = document.querySelector('body')
   this.$closeIcon = document.querySelector('.close-icon')
   this.$itemDesktopNav = document.querySelector('.item-desktop-nav')
   this.$frame = document.querySelector('#myCarousel')
   this.$comment = document.querySelector('.comment')
   this.$carouselTools = document.querySelector('.carousel-tools')
   this.$inspect = document.querySelector('.inspect')
   this.$imageAccessClose = document.querySelector('.image-access-close')
   this.$bordern = document.querySelector('.border-n')
   this.$bordere = document.querySelector('.border-e')
   this.$borders = document.querySelector('.border-s')
   this.$borderw = document.querySelector('.border-w')
   this.$context = document.querySelector('.context')
   this.$item = document.querySelector('.item')
   this.$itemDesktopNav = document.querySelector('.item-desktop-nav')
   this.$imageAaccessHero = document.querySelector('.image-access-hero')
   this.$containerForm = document.querySelector('.commentForm')
   this.$frameForm = document.querySelector('.active-form')
   this.$carouselInner = document.querySelector('.carousel-inner') 
   this.$close = document.querySelector('.context')
   this.$draggable = document.querySelector('[data-draggable]')
   this.$carouselTools = document.querySelector('.carousel-tools')
   this.$screens = document.querySelector('.screens')
   this.$screensViewportCard = document.querySelector('.screens-viewport-card')
   this.$containerScreens = document.querySelector('.container-screens')
   this.$screenCardOverlay = document.querySelector('.screen-card-overlay')
   this.$containerScreensDisplay = document.querySelector('.container-screens')
   this.addEventListeners();
  }

  addEventListeners() {
     document.body.addEventListener("click", event => { 
        this.hideScreensViewport(event);
        this.drawFrame(event);
        this.openFormComment(event);        
     });

     this.$close.addEventListener("click", event => {  
        this.eraseFrame(event); 
        this.closeFormComment(event);   
    });

     this.$carouselInner.addEventListener("click", event => { 
       this.openFormComment(event);
     });

     this.$inspect.addEventListener("click", event => {
      this.openFormAccess(event);
     })

      this.$screens.addEventListener('click', event => {
          this.showScreensViewport(event);
      })

     this.$comment.addEventListener('mouseover', event => {
        this.showComment(event);
     })

      this.$comment.addEventListener('mouseleave', event => {
        this.hideComment(event);
     })

      this.$inspect.addEventListener('mouseover', event => {
        this.showComment(event);
     })

      this.$inspect.addEventListener('mouseleave', event => {
        this.hideComment(event);
     })

      this.$screens.addEventListener('mouseover', event => {
         this.showComment(event);
      })
      
      this.$screens.addEventListener('mouseleave', event => {
          this.hideComment(event);
      })

      this.$imageAccessClose.addEventListener('click', event => {
        this.hideAccessForm(event);
     })

      this.$close.addEventListener('click', event => {
        this.hideScreensViewport(event);
     })

      this.$screenCardOverlay.addEventListener('click', event => {
         this.hideScreensViewport(event);
      })

  }    

  drawFrame(){ 
   const isCommentClicked = this.$comment.contains(event.target);
   

   if(isCommentClicked){
      this.$body.classList.add('frameIsVisible')
      this.toogleForm();
   }
 }

   eraseFrame(event){ 
   const isCloseClicked = this.$close.contains(event.target);
   
   if(isCloseClicked){
     this.$body.classList.remove('frameIsVisible')
     this.toogleForm();
   }
 }

  toogleForm(){
   this.$bordern.classList.toggle('active')
   this.$bordere.classList.toggle('active')
   this.$borders.classList.toggle('active')
   this.$borderw.classList.toggle('active')
   this.$context.classList.toggle('active')
   this.$itemDesktopNav.classList.toggle('crosshairActive')
   this.$item.classList.toggle('crosshairActive')
  }

   openFormComment(event){ 
    const isFormClicked = this.$item.contains(event.target) || this.$itemDesktopNav.contains(event.target);   

    if(isFormClicked && this.$body.classList.contains('frameIsVisible')) {
    this.$containerForm.classList.remove('closed-form');
    this.$containerForm.classList.add('active-form');
    var x = event.clientX;
    var y = event.clientY;
    
    this.$containerForm.style.left = `${x}px`
    this.$containerForm.style.top = `${y}px` 
    }else{
    this.closeFormComment()
    }     
  }

  closeFormComment(){  
    this.$containerForm.classList.remove('active-form');
    this.$containerForm.classList.add('closed-form');
  }

  showComment(){
    const isCommentShow = this.$comment.contains(event.target)
    const isInspectShow = this.$inspect.contains(event.target)
    const isScreenShow = this.$screens.contains(event.target)
    
    if(isCommentShow){
          this.$carouselTools.classList.add('opacity-comment')
          this.$comment.style.width = "120px"
    }else if(isInspectShow){
          this.$carouselTools.classList.add('opacity-comment')
          this.$inspect.style.width = "98px"
    }else if(isScreenShow){
          this.$carouselTools.classList.add('opacity-comment')
          this.$screens.style.width = "108px"
    }

  }

  hideComment(){
     const isCommentHide = this.$comment.contains(event.target)
     const isInspectHide = this.$inspect.contains(event.target)
     const isScreenHide = this.$screens.contains(event.target)

     if(isCommentHide){
        this.$carouselTools.classList.remove('opacity-comment') 
        this.$comment.style.width = "44px"
     }else if(isInspectHide){
       this.$carouselTools.classList.remove('opacity-comment') 
       this.$inspect.style.width = "44px"
    }else if(isScreenHide){
          this.$carouselTools.classList.remove('opacity-comment')
          this.$screens.style.width = "44px"
    }
  }

  openFormAccess(){
    const isVisibleAccess = this.$inspect.contains(event.target)
    const toolsTop = this.$carouselTools.offsetTop;
  
    if(isVisibleAccess){
      this.$imageAaccessHero.classList.toggle('active-form')
    }
    var y = toolsTop - 80;
    
    this.$imageAaccessHero.style.top = `${y}px` 


  }

  hideAccessForm(){
    const isCloseClick = this.$imageAccessClose.contains(event.target)
    const isCloseIcon = this.$close.contains(event.target)

    if(isCloseClick){
      this.$imageAaccessHero.classList.remove('active-form')     
    }else if(isCloseIcon){
      this.$containerScreensDisplay.classList.remove('active')
    }
  }

  showScreensViewport(){
    const isScreenVisible = this.$screens.contains(event.target)

    if(isScreenVisible){
      this.$containerScreensDisplay.classList.toggle('active')
    }
  }

  hideScreensViewport(){
      const isScreenHide = this.$closeIcon.contains(event.target)
      const isScreenHidden = this.$screenCardOverlay.contains(event.target)

    if(isScreenHide || isScreenHidden){
      this.$containerScreensDisplay.classList.remove('active')
    }
  }


}
new App();


});