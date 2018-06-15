var intro = new TypeIt('#element', {
  speed: 100,
  cursor: false
})
.type('mattlyn.co')
.pause(1000)
.type('rdova')
.pause(1000)
.delete()
.pause(100)
.type('Mattlyn Cordova')

var bio = new TypeIt('#bio', {
  speed: 25,
  cursor: false
})
.pause(7500)
.type('Northwestern undergraduate studying Gender and Sexuality, Film and Media, and Latinx Studies')
