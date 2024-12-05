<template>
  <div class="main-container">
    <div class="produtos-container">
      <Produto
        v-for="produto in produtos"
        :key="produto.id"
        :name="produto.nome"
        :preco="produto.preco"
        :imagem="produto.imagem"
        @adicionar-ao-carrinho="adicionarProduto"
        @editar-produto="abrirEdicaoProduto"
        @remover-produto="removerProduto"
      />
    </div>

    <!-- Formulário para adicionar ou editar produto -->
    <div class="form-produto">
      <h2>{{ modoEdicao ? 'Editar Produto' : 'Adicionar Produto' }}</h2>
      <input v-model="formularioProduto.nome" placeholder="Nome do produto" />
      <input v-model="formularioProduto.preco" placeholder="Preço do produto" type="number" />
      <input v-model="formularioProduto.imagem" placeholder="URL da imagem" />
      <button @click="modoEdicao ? atualizarProduto() : criarProduto()">
        {{ modoEdicao ? 'Atualizar Produto' : 'Criar Produto' }}
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
      produtos: [],
      formularioProduto: {
        name: '',
        preco: 0,
        imagem: ''
      },
      modoEdicao: false,
      produtoEmEdicao: null
    };
  },
  methods: {
    // Método para abrir a edição de um produto
    abrirEdicaoProduto(produto) {
      // Preenche o formulário com os dados do produto selecionado
      this.formularioProduto = { 
        name: produto.name, 
        preco: produto.preco, 
        imagem: produto.imagem 
      };
      
      // Marca que estamos em modo de edição
      this.modoEdicao = true;
      
      // Guarda o produto original para referência
      this.produtoEmEdicao = produto;
    },

    // Método para atualizar o produto
    async atualizarProduto() {
      try {
        // Verifica se há um produto em edição
        if (!this.produtoEmEdicao) {
          console.error('Nenhum produto selecionado para edição');
          return;
        }

        // Faz a requisição PUT para atualizar o produto
        const response = await axios.put(
          `http://localhost:3001/produtos/${this.produtoEmEdicao.id}`, 
          this.formularioProduto
        );

        // Encontra o índice do produto na lista
        const index = this.produtos.findIndex(
          p => p.id === this.produtoEmEdicao.id
        );

        // Atualiza o produto na lista
        if (index !== -1) {
          this.produtos[index] = response.data;
        }

        // Reseta o formulário e sai do modo de edição
        this.resetarFormulario();
      } catch (error) {
        console.error('Erro ao atualizar produto:', error);
      }
    },

    // Método para resetar o formulário
    resetarFormulario() {
      this.formularioProduto = {
        name: '',
        preco: 0,
        imagem: ''
      };
      this.modoEdicao = false;
      this.produtoEmEdicao = null;
    },

    // Outros métodos existentes (criarProduto, carregarProdutos, etc.)
    async criarProduto() {
      try {
        const response = await axios.post('http://localhost:3001/produtos', this.formularioProduto);
        this.produtos.push(response.data);
        this.resetarFormulario();
      } catch (error) {
        console.error('Erro ao criar produto:', error);
      }
    },

    // Método para carregar produtos
    async carregarProdutos() {
      try {
        const response = await axios.get('http://localhost:3001/produtos');
        this.produtos = response.data;
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    }
  },
  mounted() {
    this.carregarProdutos();
  }
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