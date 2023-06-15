function produtos(produto, qtde, preco) {
  return {
    nomeProduto: produto.toUpperCase(),
    qtde,
    preco,
    total: qtde * preco
  }
}

const itemVenda = produtos("Pen-drive", 2, 19.90);

console.log(itemVenda.nomeProduto + " qtde: "+itemVenda.qtde+" preço: "+itemVenda.preco + " total - R$ "+itemVenda.total);