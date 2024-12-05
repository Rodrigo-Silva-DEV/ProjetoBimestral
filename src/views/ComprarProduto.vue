<template>
  <div class="main-container">
    <div class="produtos-container">
      <Produto
      v-for="produto in produtos"
      :key="produto.id"
      :id="produto.id"
      :nome="produto.nome"
      :preco="produto.preco"
      :imagem="produto.imagem"
      @adicionar-ao-carrinho="adicionarProduto"/> 
    </div>
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
