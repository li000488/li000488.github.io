var prev = document.getElementById("prev"),
    next = document.getElementById('next'),
    container = document.getElementById("container")


prev.addEventListener('click', function() {
  var classList = container.classList;
  if(classList.contains('show1')){
    classList.remove('show1');
    classList.add('show4');
  }else if(classList.contains('show2')){
    classList.remove('show2');
    classList.add('show1')
  }else if(classList.contains('show3')){
    classList.remove('show3');
    classList.add('show2')
  }else if(classList.contains('show4')){
    classList.remove('show4');
    classList.add('show3')
  }
})

next.addEventListener('click', function() {
  var classList = container.classList;
  if(classList.contains('show1')){
    classList.remove('show1');
    classList.add('show2');
  }else if(classList.contains('show2')){
    classList.remove('show2');
    classList.add('show3')
  }else if(classList.contains('show3')){
    classList.remove('show3');
    classList.add('show4')
  }else if(classList.contains('show4')){
    classList.remove('show4');
    classList.add('show1')
  }
})
