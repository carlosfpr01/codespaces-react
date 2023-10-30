import './Rodape.css'

const Rodape = () => {
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.facebook.com/tskilauea" target="blank">
                        <img src='/imagens/fb.png' alt=''/>
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section className='logo'>
            <a href="https://www.escoteiros.org.br/" target="blank">
                <img  src="/imagens/logo.png" alt="" />
            </a>
        </section>
        <section>
            <p>
                
            </p>
        </section>
    </footer>)
}

export default Rodape