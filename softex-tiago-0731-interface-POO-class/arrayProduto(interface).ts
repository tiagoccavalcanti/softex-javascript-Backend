// interface usada para caracterizar produtos (os produtos devem obrigatorioamente seguir esse padrao de descrição)
interface Producto {

    id:number;
    nome:string;
    preco:number;
    categoria:string;
}

const produtos: Producto[] = [
    {id: 1, nome: "produto1", preco: 100, categoria: "categoria1"},
    {id: 2, nome: "produto2", preco: 200, categoria: "categoria2"},
]
/* console.log(produtos)
// usando o metodo .push() podemos adicionar ao final de um vetor um novo item
// para o caso de adicionar um item do tipo "Produto" precisamos adicionar todas as suas "caracteristicas" e sao diferenciadas(juntas) por chave
produtos.push({id: 3, nome: "produto3", preco: 300, categoria: "categoria3"})
console.log(produtos)

produtos.unshift({id: 4, nome: "produto4", preco: 400, categoria: "categoria4"})
console.log(produtos)
// atraves da navegação de pontos podemos navegar pelas variaveis modificando-as
produtos[0].nome = "bananinha"
console.log(produtos) */

// usando uma função
function addProduto(produto: Producto): Producto{
    produtos.push(produto);
    // para essa função em especifico o return nao tem uso nenhum
    return produto;
}
// esse console.log tem como unica função testar a utilidade do retrun da função
console.log(addProduto({id: 3, nome: "produto3", preco: 300, categoria: "categoria3\n"}))

addProduto({id: 3, nome: "produto3", preco: 300, categoria: "categoria3\n"});
console.log(produtos);

addProduto({id: 4, nome: "produto4", preco: 400, categoria: "categoria4\n"})
console.log(produtos)