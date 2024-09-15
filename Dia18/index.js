class Livro {
    Titulo
    Autor
    Editora
    AnoPublicacao
    Disponibilidade = true;

    constructor (titulo, autor, editora, anoPublicacao){
        this.Titulo = titulo;
        this.Autor = autor;
        this.Editora = editora;
        this.AnoPublicacao = anoPublicacao;
    }
}

let livros = [];

livros.push(new Livro ("Abelha", "Vyni", "Portugal", 2020));
livros.push(new Livro ("Mel", "Carol", "Brasil", 2022));
livros.push(new Livro ("Vai Xandao", "Lucas", "Portugal", 2024));

class Biblioteca {
    Nome
    Endereco
    Telefone
    AcervoDeLivros

    constructor (nome, endereco, telefone){
        this.Nome = nome;
        this.Endereco = endereco;
        this.Telefone = telefone;
        this.AcervoDeLivros = livros;
    }
    BuscarLivro(titulo){
        for (let i = 0; i < livros.length; i++){
            if(titulo === livros[i].Titulo){
                console.log(livros[i]);
            }
        }
    }

    EmprestimoLivro(titulo){
        for (let i = 0; i < livros.length; i++){
            if (titulo === livros[i].Titulo){
                if(livros[i].Disponibilidade === true){
                    console.log("Livro está disponível, empréstimo de livro feito com sucesso."); 
                    livros[i].Disponibilidade = false;
                } else {
                    console.log("O livro não está disponível no momento.")
                    return false;
                }
            }
        }
    }

    DevolucaoDeLivro(titulo){
        for (let i = 0; i < livros.length; i++){
            if(titulo === livros[i].Titulo){
                console.log("Livro devolvido com sucesso.");
                livros[i].Disponibilidade = true;
            }
        }
    }
}

let biblioteca = new Biblioteca ("Póvoa", "Rua dos Cafés", 2232-6010)

biblioteca.BuscarLivro("Abelha");
biblioteca.EmprestimoLivro("Vai Xandao");
biblioteca.DevolucaoDeLivro("Vai Xandao");