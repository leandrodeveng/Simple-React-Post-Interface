import React from 'react';

function Header() {
  return (
        <header id = "headerContainer">
          <div class = "content">
            <div>
              <img id = "logoimg" src = "https://sm.ign.com/ign_br/screenshot/default/videoyahoofinancecom13830bf4-746a-3a29-840a-21efbc_17wv.jpg"/>
              <input type = "text" placeholder = "Pesquisar" id = "buscar"/>
            </div>
            <div>
              <img id = "menuimg" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjZbNbSavCny0Y9Ztsq43CaTL5kiqv5-meOgOl2ESslHvrrONH" />
              <a id = "menulink" href = "">Meu Perfil</a>
            </div>
          </div>
        </header>
      
)
}

export default Header;
