
const produtos = [
        {id: 1, nome: 'camisa'},
        {id: 2, nome: 'calça'},
        {id: 3, nome: 'sandalias'}
];

function encontraProdutoPorId(id) {
    const produtoEncontrado = produtos.find((produto) => produto.id == id);
    if(!produtoEncontrado){
        return "produto nao listado";
    }
    return produtoEncontrado.nome;
};

console.log(encontraProdutoPorId(2));
