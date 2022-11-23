screen_width = 0;
screen_height = 0;
apple = 0;
speak_data: 0;
to_number: 0;

for (var i = 1; i <= to_number; i++) {
  x = Math.floor(Math.random() * 700);
  x = Math.floor(Math.random() * 400);
  image(apple, x, y, 50, 50);
}
