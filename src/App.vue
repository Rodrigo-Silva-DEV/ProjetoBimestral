<template>
  <NavbarMain :logo="logo_src" :alt="app_name"/>
  <router-view/>
  <FooterMain/>
</template>

<script>
import FooterMain from './components/FooterMain.vue';
import NavbarMain from './components/NavbarMain.vue';

  export default{
  components:{
    NavbarMain,
    FooterMain
  },
  data(){
    return{
      logo_src: "/img/logo.png",
      app_name: "Pele&Pluma"
    }
  }
  }
</script>

<style>
* {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .main-container{
      margin: 50px;
      min-height: 500px;
    }

    h1{
      text-align: center;
      font-size: 42px;
      margin-bottom: 30px;
    }

    /* Botão Estilizado */
.button-styled {
  background: linear-gradient(to right, rgb(132, 0, 255), rgb(90, 0, 170)); /* Degradê */
  color: white; /* Texto branco */
  border: none;
  padding: 10px 20px; /* Tamanho do botão */
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px; /* Arredondamento */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s; /* Animações */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Sombra */
}

.button-styled:hover {
  transform: scale(1.05); /* Efeito de leve zoom */
  background: linear-gradient(to right, rgb(90, 0, 170), rgb(132, 0, 255)); /* Inverte o degradê */
}

.button-styled:active {
  transform: scale(0.95); /* Efeito ao clicar */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Reduz a sombra */
}

</style>
