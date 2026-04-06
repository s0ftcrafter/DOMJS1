let colors = document.querySelectorAll('#palette1 .color-item');
let squares = document.querySelectorAll('.shape1');
let bgColors = document.querySelectorAll('#palette2 .color-item');

colors.forEach((item) => {
  let color = item.getAttribute('data-color');
  item.style.background = color;
  item.addEventListener('click', function() {
    squares.forEach((sq) => {
      sq.style.background = color;
    });
  });
});

bgColors.forEach((item) => {
  let color = item.getAttribute('data-color');
  item.style.background = color;
  item.addEventListener('click', function() {
    document.body.style.background = color;
  });
});
