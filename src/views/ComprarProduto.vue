<template>
  <div class="main-container">
    <Produto
  v-for="produto in produtos"
  :key="produto.id"
  :nome="produto.nome"
  :preco="produto.preco"
  :imagem="produto.imagem"
  @adicionar-ao-carrinho="adicionarProduto"
/>
  </div>
</template>

<script>
import Produto from '@/components/Produto.vue';
import axios from 'axios';

export default {
  components: { Produto },
  data() {
    return {
      produtos: [],
      carrinho: [],
    };
  },
  methods: {
    async carregarProdutos() {
      try {
        const response = await axios.get('http://localhost:3001/produtos');
        this.produtos = response.data;
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    },
    adicionarProduto(produto) {
      this.carrinho.push(produto);
      console.log('Produto adicionado ao carrinho:', produto);
    },
  },
  mounted() {
    this.carregarProdutos();
  },
};
</script>

<style scoped>
.produtos-container {
  display: flex;
  flex-wrap: wrap;  /* Permite que os produtos se movam para a próxima linha se não houver espaço */
  gap: 20px;        /* Espaço entre os produtos */
  justify-content: space-between;  /* Distribui os produtos de forma uniforme */
  margin: 20px auto;
  width: 100%;      /* Garante que o contêiner ocupe toda a largura disponível */
}

.produto {
  border: 1px solid #ccc;
  padding: 16px;
  text-align: center;
  flex: 1 1 30%;  /* Os produtos terão 30% da largura, podendo ajustar dependendo do espaço */
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

</style>