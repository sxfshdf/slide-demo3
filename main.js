let $buttons = $('#buttons>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let $firstCopy = $images.eq(0).clone(true)
let $lastCopy = $images.eq($images.length-1).clone(true)

$slides.append($firstCopy)
$slides.prepend($lastCopy)

$slides.css({transform:'translateX(-480px)'})

let current = 0

$buttons.eq(0).on('click',function(){
  if(current == 2){
    $slides.css({transform:'translateX(-1920px)'})
      .one('transitionend',function(){
        $slides.hide().offset()
        $slides.css({transform:'translateX(-480px)'})
        .show()
      })
  }else{
    $slides.css({transform:'translateX(-480px)'})
  }
  current = 0
})
$buttons.eq(1).on('click',function(){
  $slides.css({transform:'translateX(-960px)'})
  current = 1
})
$buttons.eq(2).on('click',function(){
  if(current == 0){
    $slides.css({transform:'translateX(0px)'})
    .one('transitionend',function(){
      $slides.hide().offset()
      $slides.css({transform:'translateX(-1440px)'})
      .show()
    })
  }else{
    $slides.css({transform:'translateX(-1440px)'})
  }
  current = 2
})
