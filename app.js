let media = parseInt(prompt('Insira abaixo a média da escola:')); console.log(`A média da escola é ${media}.`);
let nota = parseInt(prompt('Insira abaixo a nota do aluno:')); console.log(`A nota do aluno é ${nota}.`);
if (nota < media) {
    alert('O aluno está de recuperação.');
} else {
    alert('O aluno foi aprovado.');
}