let $buttons = $('#buttons>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()
$slides.css({transform:'translateX(-480px)'})
bindEvents()
$(next).on('click',function(){
  goToSlide(current+1)
})
$(previous).on('click',function(){
  goToSlide(current-1)
})

let timer = setInterval(function(){
  goToSlide(current+1)
},2000)
$('.container').on('mouseenter',function(){
  window.clearInterval(timer)
})
$('.container').on('mouseleave',function(){
  timer = setInterval(function(){
    goToSlide(current+1)
  },2000)
})

function goToSlide(index){
  if(index>$buttons.length-1){
    index = 0
  }else if(index<0){
    index = $buttons.length-1
  }
  if(current === $buttons.length-1 && index === 0){
    // 最后一张到第一张
    $slides.css({transform:`translateX(${-($buttons.length+1)*480}px)`})
      .one('transitionend',function(){
        $slides.hide().offset()
        $slides.css({transform:'translateX(-480px)'})
        .show()
      })
  }else if(current === 0 && index === $buttons.length-1){
    // 第一张到最后一张
    $slides.css({transform:'translateX(0px)'})
      .one('transitionend',function(){
        $slides.hide().offset()
        $slides.css({transform:`translateX(${-(index+1)*480}px)`})
        .show()
      })
  }else{
    $slides.css({transform:`translateX(${-(index+1)*480}px)`})
  }
  current = index
}

function makeFakeSlides(){
  let $firstCopy = $images.eq(0).clone(true)
  let $lastCopy = $images.eq($images.length-1).clone(true)

  $slides.append($firstCopy)
  $slides.prepend($lastCopy)
}
function bindEvents(){  
  $('#buttons').on('click','button',function(e){
    let $button = $(e.currentTarget)
    let index = $button.index()
    goToSlide(index)
    // if(current === $buttons.length-1 && index === 0){
    //   // 最后一张到第一张
    //   $slides.css({transform:`translateX(${-($buttons.length+1)*480}px)`})
    //     .one('transitionend',function(){
    //       $slides.hide().offset()
    //       $slides.css({transform:'translateX(-480px)'})
    //       .show()
    //     })
    // }else if(current === 0 && index === $buttons.length-1){
    //   // 第一张到最后一张
    //   $slides.css({transform:'translateX(0px)'})
    //     .one('transitionend',function(){
    //       $slides.hide().offset()
    //       $slides.css({transform:`translateX(${-(index+1)*480}px)`})
    //       .show()
    //     })
    // }else{
    //   $slides.css({transform:`translateX(${-(index+1)*480}px)`})
    // }
    // current = index
  })
  // $buttons.eq(0).on('click',function(){
  //   if(current == 2){
  //     $slides.css({transform:'translateX(-1920px)'})
  //       .one('transitionend',function(){
  //         $slides.hide().offset()
  //         $slides.css({transform:'translateX(-480px)'})
  //         .show()
  //       })
  //   }else{
  //     $slides.css({transform:'translateX(-480px)'})
  //   }
  //   current = 0
  // })
  // $buttons.eq(1).on('click',function(){
  //   $slides.css({transform:'translateX(-960px)'})
  //   current = 1
  // })
  // $buttons.eq(2).on('click',function(){
  //   if(current == 0){
  //     $slides.css({transform:'translateX(0px)'})
  //     .one('transitionend',function(){
  //       $slides.hide().offset()
  //       $slides.css({transform:'translateX(-1440px)'})
  //       .show()
  //     })
  //   }else{
  //     $slides.css({transform:'translateX(-1440px)'})
  //   }
  //   current = 2
  // })
}