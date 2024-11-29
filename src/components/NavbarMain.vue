    <template>
        <div id="nav">
            <!-- Logo -->
            <router-link to="/" id="logo-url">
                <img :src="logo" :alt="alt" id="logo">
            </router-link>

            <!-- Links de navegação -->
            <div class="nav-links">
                <router-link to="/">
                    <div class="dropdown">
                        <div class="central-container">
                            <span>Home</span>
                            <span>Pele&Pluma</span>
                        </div>
                    </div>
                </router-link>
                <!-- Central de Atendimento -->
                <div class="dropdown">
                    <div class="central-container">
                        <span class="central-top">Central de</span>
                        <span class="central-bottom">Atendimento</span>
                    </div>
                    <div class="dropdown-content">
                        <router-link to="/">E-mail <img src="/img/email.png" alt="email" width="15" height="10"></router-link>
                        <router-link to="/">Telefone <img src="/img/telefone.png" alt="telefone" width="15" height="15"></router-link>
                        <router-link to="/">Endereço </router-link>
                    </div>
                </div>
                <!-- Sobre o Grupo-->
                <div class="dropdown">
                    <div class="central-container">
                        <span>Sobre</span>
                        <span>Nós</span>
                    </div>
                    <div class="dropdown-content">
                        <router-link to="/Administrar">
                            <p>Felipy Souza</p>
                        </router-link>
                        <router-link to="/JoaoPedro">
                            <p>João Pedro</p>
                        </router-link>
                        <router-link to="/RodrigoSilva">
                            <p>Rodrigo Silva</p>
                        </router-link>
                        <router-link to="/RodrigoSouza">
                            <p>Rodrigo Souza</p>
                        </router-link>
                    </div>
                </div>
                <!-- Login/Cadastrar -->
                <div class="dropdown">
                    <div class="central-container">
                        <span>Olá, bem-vindo(a)</span>
                        <span>Login/Cadastrar</span>
                    </div>
                    <div class="dropdown-content">
                        <router-link to="/">
                            <button>Cadastrar</button>
                        </router-link>
                        <router-link to="/">
                            <button>Logar</button>
                        </router-link>
                    </div>
                </div>

                <router-link to="/ComprarProduto">
                    <img src="/img/carrinho.png" alt="Carrinho" width="30" height="30">
                </router-link>

            </div>
        </div>
    </template>

    <script>
    export default {
        name: "NavbarMain",
        props: ["logo", "alt"]
    }
    </script>

    <style scoped>
    /* CSS Global */
    * {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    #nav {
        display: flex;
        background-color: black;
        color: rgb(132, 0, 255);
        width: 100%;
        height: 50px;
        border-bottom: 4px solid rgb(132, 0, 255);
        padding: 15px 50px;
        align-items: center;
        justify-content: space-between;
        position: fixed; /* Fixa a barra no topo */
        top: 0;
        left: 0;
        z-index: 1000; /* Garante que fique acima de outros elementos */
    }

    #logo-url {
        margin-right: auto;
    }

    #logo {
        width: 40px;
        height: 40px;
    }

    .nav-links {
        display: flex;
        gap: 30px; /* Aumentei o espaçamento entre os itens */
        align-items: center;
    }

    #nav a {
        color: blueviolet;
        text-decoration: none;
        transition: 0.5s;
        position: relative;
    }

    #nav a:hover {
        color: aliceblue;
    }

    /* Estilo para "Central de Atendimento" */
    .central-container {
        display: flex;
        flex-direction: column; /* Empilha "Central de" e "Atendimento" */
        text-align: center;
        color: blueviolet;
        font-weight: bold;
        cursor: pointer;
    }

    .central-top {
        font-size: 14px; /* Menor para "Central de" */
    }

    .central-bottom {
        font-size: 16px; /* Maior para "Atendimento" */
    }

    /* Estilo para o menu suspenso */
    .dropdown {
        position: relative; /* Referência para o menu suspenso */
    }

    .dropdown-content {
        display: none; /* Esconde o menu inicialmente */
        position: absolute;
        top: 100%; /* Aparece logo abaixo do texto */
        left: 0;
        background-color: black; /* Fundo preto */
        min-width: 150px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        border: 1px solid #ccc;
        border-radius: 5px;
        border-bottom: 2px solid rgb(132, 0, 255); /* Borda roxa embaixo */
        padding: 10px 0; /* Adiciona espaçamento interno */
    }

    .dropdown-content a {
        color: white; /* Texto branco */
        padding: 10px 15px;
        text-decoration: none;
        display: block;
        transition: background-color 0.3s;
        margin: 5px 0; /* Aumenta o espaçamento entre os links */
    }

    .dropdown-content a:hover {
        background-color: rgba(132, 0, 255, 0.1); /* Fundo roxo claro ao passar o mouse */
    }

    .dropdown:hover .dropdown-content {
        display: block; /* Mostra o menu ao passar o mouse */
    }

    /* Botão com degradê */
    button {
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

    button:hover {
        transform: scale(1.05); /* Efeito de leve zoom */
        background: linear-gradient(to right, rgb(90, 0, 170), rgb(132, 0, 255)); /* Inverte o degradê */
    }

    button:active {
        transform: scale(0.95); /* Efeito ao clicar */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Reduz a sombra */
    }

    </style>
