class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    mostrar(){
        try {
            return this.atributos()
        }catch (erro){
            console.log(erro.stack)

        }
       
    }

    atributos(){
        if (this.nome != "" && this.sobrenome != ""){
            return this.nome + this.sobrenome
        }
        else {
            throw new Error("Ta errado, ta faltando o nome ou sobrenome")
        }
       
       
    }
}

const pessoa = new Pessoa("", "lopes");
console.log(pessoa.mostrar())