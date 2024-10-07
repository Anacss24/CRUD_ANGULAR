import { Injectable } from "@angular/core";
import { Produto } from "./models/produto.models";

@Injectable ({
    providedIn: 'root'
})


export class ProdutoService {

    constructor(){}

    private produtos: Produto[] = [
        {id: 1, nome: 'Produto A', quantidade: 10, preco: 15.5},
        {id: 2, nome: 'Produto B', quantidade: 20, preco: 30.0},
        {id: 3, nome: 'Produto C', quantidade: 5, preco: 50.0}
    ];

    getProdutos(): Produto[]{
        return this.produtos
    }

    getProdutoById(id: number): Produto | undefined {
        return this.produtos.find(produto => produto.id === id);
    }

    addProduto(produto: Produto): void {
        this.produtos.push(produto)
    }

    updateProduto(produto: Produto): void {
        const index = this.produtos.findIndex(prod => prod.id === produto.id);
        if (index !== -1) {
            this.produtos[index] = produto
        }

    }

    deleteProduto(id: number): void {
        this.produtos = this.produtos.filter(produto => produto.id !== id)
    }


    
}