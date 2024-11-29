<template>
  <div class="main-container">
    <!-- Contêiner para produtos -->
    <div class="produtos-container">
      <Produto
        v-for="produto in produtos"
        :key="produto.id"
        :nome="produto.nome"
        :preco="produto.preco"
        :imagem="produto.imagem"
        @adicionar-ao-carrinho="adicionarProduto"
        @editar-produto="editarProduto"
        @remover-produto="removerProduto"
      />
    </div>

    <!-- Formulário para adicionar ou editar produto -->
    <div class="form-produto">
      <h2>{{ isEdit ? 'Editar Produto' : 'Adicionar Produto' }}</h2>
      <input v-model="produtoForm.nome" placeholder="Nome do produto" />
      <input v-model="produtoForm.preco" placeholder="Preço do produto" type="number" />
      <input v-model="produtoForm.imagem" placeholder="URL da imagem" />
      <button @click="isEdit ? atualizarProduto() : criarProduto()">
        {{ isEdit ? 'Atualizar Produto' : 'Criar Produto' }}
      </button>
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
      produtos: [], // Lista de produtos
      carrinho: [], // Carrinho de compras
      produtoForm: {
        nome: '',
        preco: 0,
        imagem: '',
      },
      isEdit: false, // Flag para determinar se é criação ou edição
      produtoEditado: null, // Produto sendo editado
    };
  },
  methods: {
    // Carregar produtos da API
    async carregarProdutos() {
      try {
        const response = await axios.get('http://localhost:3001/produtos');
        this.produtos = response.data; // Atualiza a lista de produtos
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    },

    // Adicionar produto ao carrinho
    adicionarProduto(produto) {
      if (!this.carrinho.some(item => item.id === produto.id)) {
        this.carrinho.push(produto);
        console.log('Produto adicionado ao carrinho:', produto);
      }
    },

    // Criar um novo produto
    async criarProduto() {
      try {
        const response = await axios.post('http://localhost:3001/produtos', this.produtoForm);
        this.produtos.push(response.data); // Adiciona o produto na lista
        this.resetForm();
        console.log('Produto criado com sucesso:', response.data);
      } catch (error) {
        console.error('Erro ao criar produto:', error);
      }
    },

    // Editar um produto
    editarProduto(produto) {
      this.produtoForm = { ...produto }; // Preenche o formulário com os dados do produto
      this.isEdit = true;
      this.produtoEditado = produto; // Guarda o produto para atualização
    },

    // Atualizar produto na API
    async atualizarProduto() {
      try {
        const response = await axios.put(`http://localhost:3001/produtos/${this.produtoEditado.id}`, this.produtoForm);
        const index = this.produtos.findIndex(p => p.id === this.produtoEditado.id);
        if (index !== -1) {
          this.produtos[index] = response.data; // Atualiza o produto na lista
        }
        this.resetForm();
        this.isEdit = false;
        console.log('Produto atualizado com sucesso:', response.data);
      } catch (error) {
        console.error('Erro ao atualizar produto:', error);
      }
    },

    // Remover produto da API
    async removerProduto(produto) {
      try {
        await axios.delete(`http://localhost:3001/produtos/${produto.id}`);
        this.produtos = this.produtos.filter(p => p.id !== produto.id); // Remove o produto da lista
        console.log('Produto removido com sucesso:', produto);
      } catch (error) {
        console.error('Erro ao remover produto:', error);
      }
    },

    // Resetar o formulário
    resetForm() {
      this.produtoForm = { nome: '', preco: 0, imagem: '' };
    },
  },
  mounted() {
    this.carregarProdutos(); // Carrega os produtos assim que o componente é montado
  },
};
</script>

<style scoped>
/* Estilos para o formulário de adicionar/editar produto */
.form-produto {
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.form-produto input {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.form-produto button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-produto button:hover {
  background-color: #45a049;
}
</style>
