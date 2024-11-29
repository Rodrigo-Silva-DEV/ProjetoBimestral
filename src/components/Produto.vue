<template>
  <div class="produto">
    <img :src="imagem" alt="Imagem do Produto" />
    <h2>{{ nome }}</h2>
    <p>Preço: R$ {{ preco.toFixed(2) }}</p>
    <button class="button-styled" @click="$emit('adicionar-ao-carrinho', { nome, preco, imagem })">
      Adicionar ao Carrinho
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ['nome', 'preco', 'imagem'],
  data() {
    return {
      produtos: [], // Inicialmente vazio, será preenchido pela API
    };
  },
  methods: {
    // Método para carregar produtos do backend
    async carregarProdutos() {
      try {
        // Requisição GET para buscar os produtos da API
        const response = await axios.get("http://localhost:3001/produtos");
        this.produtos = response.data; // Substitui diretamente os produtos
      } catch (error) {
        console.error("Erro ao carregar produtos:", error); // Tratamento de erro
      }
    },
    // Método para adicionar produto ao carrinho
    adicionarAoCarrinho(produto) {
      this.$emit("adicionar-ao-carrinho", produto); // Emite um evento para adicionar ao carrinho
    },
  },
  mounted() {
    // Chama o método assim que o componente for montado
    this.carregarProdutos();
  },
};
</script>

<style scoped>
.produtos-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  margin: 20px auto;
}

.produto {
  border: 1px solid #ccc;
  padding: 16px;
  text-align: center;
  flex: 1 1 30%;  /* Flexível, cada produto ocupa até 30% da largura disponível */
  max-width: 30%;  /* Limita a largura máxima de cada produto */
  min-width: 250px; /* Garante que o produto não fique menor que 250px */
  border-radius: 8px;
  background-color: #121212;
  color: white;
  border-bottom: 5px solid #800080;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
}

.produto:hover {
  transform: scale(1.03);
}

.produto img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 12px;
}

.produto h2 {
  font-size: 18px;
  margin: 8px 0;
  color: #fff;
}

.produto p {
  font-size: 16px;
  color: #ddd;
  margin-bottom: 16px;
}

.button-styled {
  background: linear-gradient(to right, rgb(132, 0, 255), rgb(90, 0, 170));
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.button-styled:hover {
  transform: scale(1.05);
  background: linear-gradient(to right, rgb(90, 0, 170), rgb(132, 0, 255));
}

.button-styled:active {
  transform: scale(0.95);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
