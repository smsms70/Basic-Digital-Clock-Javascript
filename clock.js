const uno = document.querySelectorAll('#h_uno');
const dos = document.querySelectorAll('#h_dos');
const tres = document.querySelectorAll('#h_tres');
const cuatro = document.querySelectorAll('#h_cuatro');
const cinco = document.querySelectorAll('#h_cinco');
const seis = document.querySelectorAll('#h_seis');
const siete = document.querySelectorAll('#h_siete');
const arr = [uno, dos, tres, cuatro, cinco, seis, siete];
let draw_arr = [];

const clean = a => arr.forEach(e => e[a].style.background = numbersColor())

const erraser = (array, a) => {
	clean(a);
	draw_arr = array;
	draw_arr.forEach(e => e[a].style.background = backgroundColor());
}

const one = a => erraser([dos, tres, cuatro, cinco, siete], a);
const two = a => erraser([cuatro, seis], a);
const three = a => erraser([cuatro, cinco], a);
const four = a => erraser([tres, cinco, siete], a);
const five = a => erraser([uno, cinco], a);
const six = a => erraser([uno], a);
const seven = a => erraser([dos, cuatro, cinco, siete], a);
const eight = a => clean(a); 
const nine = a => erraser([cinco, siete], a);
const cero = a => erraser([dos], a);