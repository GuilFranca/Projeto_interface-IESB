const header = document.querySelector('header');
let pontoEndereco;

if (window.location.pathname.split('/').pop() === 'index.html') {
    pontoEndereco = '.';
} else {
    pontoEndereco = '..';
}

header.innerHTML = `
        <div class="logo">
            <a href="${pontoEndereco}/index.html">
                <h1 class="logo__text">GL<span class="logo__text__span">OSS</span></h1>
            </a>
        </div>

        <nav class="nav__bar">
            <ul class="nav__bar__ul">
                <li><a href="${pontoEndereco}/pages/galeria.html">Galeria</a></li>
                <li><a href="${pontoEndereco}/pages/tabelas.html">Tabelas</a></li>
                <li><a href="${pontoEndereco}/pages/audiovisual.html">Audiovisual</a></li>
            </ul>
        </nav>
`