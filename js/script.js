// Con Vue, stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data.

var app = new Vue(
 {
 el: '#root',
 data: {
   message: "Hello World, this is my first project with Vue :D",
   imageMessage: "My first img with Vue",
   image: "https://miro.medium.com/max/10000/0*hPVHCGVgepguJt8I"
 }
 }
);
