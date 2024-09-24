let inventario = [
    { nome: "Teclado", preco: 100, emEstoque: true },
    { nome: "Mouse", preco: 50, emEstoque: false },
    { nome: "Monitor", preco: 600, emEstoque: true },
    { nome: "Fone de Ouvido", preco: 200, emEstoque: true },
    { nome: "Cadeira Gamer", preco: 800, emEstoque: false },
    { nome: "Mousepad", preco: 30, emEstoque: true },
    { nome: "Webcam", preco: 120, emEstoque: false },
    { nome: "Gabinete", preco: 350, emEstoque: true },
    { nome: "Processador", preco: 1500, emEstoque: true },
    { nome: "Placa de Vídeo", preco: 4000, emEstoque: false },
    { nome: "Memória RAM", preco: 400, emEstoque: true },
    { nome: "Fonte", preco: 250, emEstoque: false },
    { nome: "SSD", preco: 500, emEstoque: true },
    { nome: "HD", preco: 350, emEstoque: false },
    { nome: "Placa-mãe", preco: 900, emEstoque: true },
    { nome: "Ventoinha", preco: 70, emEstoque: true },
    { nome: "Microfone", preco: 150, emEstoque: false },
    { nome: "Notebook", preco: 3000, emEstoque: true },
    { nome: "Impressora", preco: 3000, emEstoque: true }
]
inventario.push({ nome: 'Memoria RAM', preco: 400, emEstoque: true });
inventario[0].preco = 120;
inventario[2].emEstoque = false;
for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].emEstoque) {
    console.log(inventario[i].nome + ' está em estoque.');
    }
    }

    let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
console.log(produtosEmEstoque);

