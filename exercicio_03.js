class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}

class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  mostrarAtributos(){
    try {
      return this.atributos();
    } catch (error) {
      return error
    }
  } 

  atributos() {
    if (this.estudante != ""){
      return {
        estudante: this.estudante,
        cosplay: this.cosplay,
        nota_cosplay: this.nota_cosplay
      };
    } else {
      throw new MeuErro("Esta faltando algum atributo.");
    }
  }
}

const aluno = new NerdIF("João", "Homem-Aranha", 9.5);
console.log(aluno.retornarAtributos())

/*
console.log(atributos.estudante); 
console.log(atributos.cosplay);   
console.log(atributos.nota_cosplay);
*/
