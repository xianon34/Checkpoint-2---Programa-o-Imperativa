class Aluno {
  constructor(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
  }

  calcularMedia() {
    const somaNotas = this.notas.reduce((total, nota) => total + nota, 0);
    return somaNotas / this.notas.length;
  }

  faltas() {
    this.faltas++;
  }
}

const aluno1 = new Aluno("José", 3, [7, 8, 9]);
const aluno2 = new Aluno("Maria", 1, [7, 8, 9]);
const aluno3 = new Aluno("João", 3, [6, 7, 8]);

const curso = {
  nome: "Programação",
  notaAprovacao: 7,
  faltasMaximas: 3,
  estudantes: [aluno1, aluno2, aluno3],

  adicionarAluno(aluno) {
    this.estudantes.push(aluno);
  },

  verificarAprovacao(aluno) {
    const media = aluno.calcularMedia();
    const faltas = aluno.faltas;
    const notaAprovacao = this.notaAprovacao;
    const faltasMaximas = this.faltasMaximas;

    if ((faltas === faltasMaximas && media >= notaAprovacao * 1.1) || (faltas < faltasMaximas && media >= notaAprovacao)) {
      return true;
    } else {
      return false;
    }
  },

  listarAprovados() {
    return this.estudantes.map(aluno => this.verificarAprovacao(aluno));
  }
}
/*Testes*/
console.log(curso.estudantes);

curso.adicionarAluno(new Aluno("Lucas", 2, [8, 9, 7]));
console.log(curso.estudantes);


console.log(curso.verificarAprovacao(aluno1)); 
console.log(curso.verificarAprovacao(aluno2)); 
console.log(curso.verificarAprovacao(aluno3)); 

console.log(curso.listarAprovados()); 
