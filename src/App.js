import React from 'react';
import './css/pure-min.css';
import './css/layout.css';

function App() {
  return (
    <fragment>
      <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
          <a className="pure-menu-heading" href="#">Ondas Card</a>

          <ul className="pure-menu-list">
            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Galeria</a></li>
            <li className="pure-menu-item"><a href="#sobre" className="pure-menu-link">Sobre</a></li>
            <li className="pure-menu-item"><a href="#convenios" className="pure-menu-link">Convênios</a></li>
            <li className="pure-menu-item"><a href="#contato" className="pure-menu-link">Contato</a></li>
          </ul>
        </div>
      </div>

      <div className="splash-container">
        <div className="splash">
          <h1 className="splash-head">Ondas card turismo club</h1>
          <p className="splash-subhead">
            Rio de Janeiro é a cidade maravilhosa e a Ondas Card Turismo Club é o clube perfeito para você aproveitar todas estas maravilhas em todos os lugares da Cidade Maravilhosa e do Brasil.
        </p>
        </div>
      </div>

      <div className="content-wrapper">
        <div id="convenios" className="content">
          <h2 className="content-head is-center">Convênios</h2>

          <div className="pure-g">
            <div className="convenios-box l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
              <h3 className="content-subhead">
                Faculdades
                </h3>
              <p>
                Descontos de 80% nas faculdades: simonsen, cândido mendes e são judas tadeu.
                </p>
            </div>

            <div className="convenios-box l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
              <h3 className="content-subhead">
                Riofrigera
                </h3>
              <p>
                Manutenção - Venda - Instalação
                </p>
              <p>
                de ar condicionado split, geladeiras frossfree e máquinas de lavar.
              </p>
              <small>98827-8503</small>
            </div>
            <div className="convenios-box l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
              <h3 className="content-subhead">
                Kunha indicações
                </h3>
              <p>
                Reduza dreasticamente sua conta de energia e tenha benefícios fiscais.
                </p>
              <p>Garantia de vida útil por mais de 25 anos.</p>
              <small>7824-0030 / 3126-3841</small>
            </div>
            <div className="convenios-box l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
              <h3 className="content-subhead">
                Albert flores
                </h3>
              <p>
                Bouquet de noiva e damas, guirlanda para daminhas, lapela para noivos, decorações em geral, casamentos, 15 anos e bodas.
                </p>
              <small>96449-5879 / 2595-7562</small>
            </div>
          </div>
        </div>

        <div id="sobre" className="ribbon l-box-lrg pure-g">
          <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
            <img width="300" alt="File Icons" className="pure-img-responsive" src="img/logo.png" />
          </div>
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

            <h2 className="content-head content-head-ribbon">Um pouco sobre a Ondas card.</h2>

            <p>
              Ondas card turismo club é uma agência de turismo que está no mercado a 12 anos.
            </p>
            <p>
              Ondas Card Turismo Club é o club perfeito para você aproveitar todas as maravilhas em todos os lugares da Cidade Maravilhosa e em todos os municípios do Rio de Janeiro e do Brasil.
            </p>
            <p>
              Você pode contar com o menor preço em hospedagem pacotes aéreos excursões rodoviárias e cruzeiros.
            </p>
            <p>
              O menor preço em hotéis, pousadas, casas, chalés, apartamentos, conjugados, quitinetes, camping, fazendas e muitos mais.
            </p>
          </div>
        </div>

        <div id="contato" className="content">
          <h2 className="content-head is-center">Contato</h2>

          <div className="pure-g">
            <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
              <form className="pure-form pure-form-stacked">
                <fieldset>

                  <label for="name">Nome</label>
                  <input id="name" type="text" placeholder="Seu nome" />


                  <label for="email">Email</label>
                  <input id="email" type="email" placeholder="Seu Email" />

                  <label for="message">Mensagem</label>
                  <textarea id="message" type="text" placeholder="Escreva aqui"></textarea>

                  <button type="submit" className="pure-button">Enviar</button>
                </fieldset>
              </form>
            </div>

            <div className="contato-info-box l-box-lrg pure-u-1 pure-u-md-3-5">
              <h4>Entre em contato</h4>
              <p>
                Você pode entrar em contato conosco através de nossos telefones ou de nossas redes sociais.
                </p>

              <h4>Horario de atendimento telefônico</h4>
              <p>
                De segunda a sexta feira de 9:00(AM) às 18:00.
                </p>
              <p>Sábados de 9:00(AM) à 12:00.</p>
            </div>
          </div>

        </div>

        <div className="footer l-box is-center">
          Para mais informações, (021) - 9 6422 0109
    </div>

      </div>

    </fragment>

  );
}

export default App;
