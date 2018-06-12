let geef = document.querySelector('.lb_geef');
let mij = document.querySelector('.lb_mij');
let flink = document.querySelector('.lb_flink');
let wat = document.querySelector('.lb_wat');
let knaken = document.querySelector('.lb_knaken');
let ballon = document.querySelector('.lb_ballon');
let geld = document.querySelector('.lb_geld');
let geld2 = document.querySelector('.lb_geld2');

const ani = () => {
  setTimeout( () => {geef.classList.remove('lb--uit')}, 400);
  setTimeout( () => {mij.classList.remove('lb--uit')}, 800);
  setTimeout( () => {flink.classList.remove('lb--uit')}, 1200);
  setTimeout( () => {wat.classList.remove('lb--uit')}, 1600);
  setTimeout( () => {knaken.classList.remove('lb--uit')}, 2010);
  setTimeout( () => {ballon.classList.remove('lb--uit')}, 2000);
  setTimeout( () => {geld.classList.remove('lb--uit')}, 2400);
  setTimeout( () => {geld2.classList.remove('lb--uit')}, 5555);
  setTimeout( () => back(), 4000);
}

const back = () => {
  geef.classList.add('lb--uit');
  mij.classList.add('lb--uit');
  flink.classList.add('lb--uit');
  wat.classList.add('lb--uit');
  knaken.classList.add('lb--uit');
  ballon.classList.add('lb--uit');
  geld.classList.add('lb--uit');
  geld2.classList.add('lb--uit');
}


setInterval( () => ani(), 5000);


ani();
