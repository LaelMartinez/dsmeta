import logo from '../../assets/img/logo.svg';
function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DsMeta"/>
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://www.linkedin.com/in/lael-siqueira-martinez-junior-99363435/?originalSubdomain=br" target="_blank">LaelMartinez</a>
                    </p>
            </div>
        </header>
    )
}

export default Header