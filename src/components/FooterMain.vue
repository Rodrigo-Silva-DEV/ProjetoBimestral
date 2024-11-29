<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-column">
          <h3>Institucional</h3>
          <ul>
            <li>Sobre a empresa</li>
            <li>Como comprar</li>
            <li>Segurança</li>
            <li>Envio</li>
            <li>Pagamento</li>
            <li>Tempo de garantia</li>
            <li>Trocas e devoluções</li>
            <li>Fale conosco</li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Atendimento</h3>
          <ul>
            <li>Compre por telefone: (11) 4002-8922</li>
            <li>Fale no WhatsApp: 11 999999999</li>
            <li>Envie um e-mail: tatoo@pelepluma.com</li>
            <li>Segunda a Sexta das 8:30h às 18:00</li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Formas de Pagamento</h3>
          <div class="payment-icons">
            <img src="/img/visa.png" alt="Visa" />
            <img src="/img/mastercard.png" alt="Mastercard" />
            <img src="/img/elo.png" alt="Elo" />
          </div>
        </div>
        <div class="footer-column">
          <h3>Selo de Segurança</h3>
          <img src="/img/lojaProtegida.png" alt="Selo de Segurança" width="80" height="30"/>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Pele&Pluma. Todos os direitos reservados.</p>
        <div class="social-icons">
          <a href="https://www.instagram.com/pelepluma" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/pelepluma" target="_blank">
            <i class="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterMain',
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
  
  /* Estilos para o footer */
  .footer {
    background-color: black;
    color: rgb(132, 0, 255); /* Cor do texto */
    padding: 40px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-top: 4px solid rgb(132, 0, 255); /* Borda superior roxa */
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .footer-column {
    width: 23%; /* Ajuste para distribuir bem as colunas */
  }
  
  .footer-column h3 {
    margin-bottom: 10px;
    color: rgb(132, 0, 255);
  }
  
  .footer-column ul {
    list-style-type: none;
    color: rgb(132, 0, 255);
  }
  
  .footer-column ul li {
    margin-bottom: 8px;
  }
  
  .payment-icons img {
    width: 50px;
    height: auto;
    margin-right: 10px;
  }
  
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    color: rgb(132, 0, 255);
  }
  
  .social-icons a {
    margin-right: 15px;
    color: rgb(132, 0, 255);
    font-size: 24px;
    transition: color 0.3s ease;
  }
  
  .social-icons a:hover {
    color: aliceblue;
  }
  </style>
  