document.addEventListener('DOMContentLoaded', function() {
    var carrusel = document.getElementById('carrusel');
    var marginLeft = 0;
    var carruselWidth = carrusel.scrollWidth;
    var containerWidth = carrusel.parentElement.offsetWidth;
    var itemWidth = carrusel.querySelector('li').offsetWidth;
    var maxMarginLeft = -(carruselWidth - containerWidth);
  
    document.addEventListener('mousedown', startSwipe);
    document.addEventListener('touchstart', startSwipe);
  
    function startSwipe(e) {
      var startX = e.clientX || e.touches[0].clientX;
      var moveX = 0;
  
      document.addEventListener('mousemove', swipe);
      document.addEventListener('touchmove', swipe);
      document.addEventListener('mouseup', endSwipe);
      document.addEventListener('touchend', endSwipe);
  
      function swipe(e) {
        var x = e.clientX || e.touches[0].clientX;
        moveX = startX - x;
        var newMarginLeft = marginLeft - moveX;
  
        if (newMarginLeft > 0) {
          newMarginLeft = maxMarginLeft;
        } else if (newMarginLeft < maxMarginLeft) {
          newMarginLeft = 0;
        }
  
        carrusel.style.transform = 'translateX(' + newMarginLeft + 'px)';
      }
  
      function endSwipe() {
        if (moveX < -50) {
          marginLeft -= itemWidth;
          if (marginLeft < maxMarginLeft) {
            marginLeft = 0;
          }
        } else if (moveX > 50) {
          marginLeft += itemWidth;
          if (marginLeft > 0) {
            marginLeft = maxMarginLeft;
          }
        }
  
        carrusel.style.transform = 'translateX(' + marginLeft + 'px)';
  
        document.removeEventListener('mousemove', swipe);
        document.removeEventListener('touchmove', swipe);
        document.removeEventListener('mouseup', endSwipe);
        document.removeEventListener('touchend', endSwipe);
      }
    }
  });
  
  
