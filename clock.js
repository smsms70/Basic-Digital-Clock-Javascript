const uno = document.querySelectorAll('#h_uno');
const dos = document.querySelectorAll('#h_dos');
const tres = document.querySelectorAll('#h_tres');
const cuatro = document.querySelectorAll('#h_cuatro');
const cinco = document.querySelectorAll('#h_cinco');
const seis = document.querySelectorAll('#h_seis');
const siete = document.querySelectorAll('#h_siete');

const clean = a =>{
	uno[a].style.background = '#e54';
	dos[a].style.background = '#e54';
	tres[a].style.background = '#e54';
	cuatro[a].style.background = '#e54';
	cinco[a].style.background = '#e54';
	seis[a].style.background = '#e54';
	siete[a].style.background = '#e54';
}
const one = a =>{
	clean(a);

	dos[a].style.background = '#aaa';
	tres[a].style.background = '#aaa';
	cuatro[a].style.background = '#aaa';
	cinco[a].style.background = '#aaa';
	siete[a].style.background = '#aaa';
}
const two = a =>{
	clean(a);

	cuatro[a].style.background = '#aaa';
	seis[a].style.background = '#aaa';
}
const three = a =>{
	clean(a);

	cuatro[a].style.background = '#aaa';
	cinco[a].style.background = '#aaa';
}
const four = a =>{
	clean(a);

	tres[a].style.background = '#aaa';
	cinco[a].style.background = '#aaa';
	siete[a].style.background = '#aaa';
}
const five = a =>{
	clean(a);

	uno[a].style.background = '#aaa';
	cinco[a].style.background = '#aaa';
}
const six = a =>{
	clean(a);

	uno[a].style.background = '#aaa';
}
const seven = a =>{
	clean(a);

	dos[a].style.background = '#aaa';
	cuatro[a].style.background = '#aaa';
	cinco[a].style.background = '#aaa';
	siete[a].style.background = '#aaa';
}
const eight = a =>{
	clean(a);
}
const nine = a =>{
	clean(a);

	cinco[a].style.background = '#aaa';
	siete[a].style.background = '#aaa';
}
const cero = a =>{
	clean(a);

	dos[a].style.background = '#aaa';
}

