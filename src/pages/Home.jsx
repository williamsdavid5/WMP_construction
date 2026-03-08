import './styles/home.css'
import InstagramLogo from '../assets/instagram.png'
import WhatsappLogo from '../assets/whatsapp.png'
import MailLogo from '../assets/e-mail.png'
import ImagemLonga from '../assets/fotos/jardinNoite.jpeg'
import WMPlogo from '../assets/WMPlogo.svg'
import Secao2_1 from '../assets/fotos/secao2-1.jpeg'
import Secao2_2 from '../assets/fotos/secao2-2.jpeg'
import Secao2_3 from '../assets/fotos/secao2-3.jpeg'
import Secao2_4 from '../assets/fotos/secao2-4.jpeg'

export default function Home() {
    return (
        <>
            <main className="mainHome">
                <header className='menuSuperior'>
                    <select name="" id="">
                        <option value="">Português</option>
                        <option value="">English</option>
                        <option value="">Nederlands</option>
                    </select>
                    <p>Call Us:(353) 087 124 4886</p>
                    <div className='auxRedes'>
                        <a href="">
                            <img src={InstagramLogo} alt="" />
                        </a>
                        <a href="">
                            <img src={WhatsappLogo} alt="" />
                        </a>
                        <a href="">
                            <img src={MailLogo} alt="" />
                        </a>
                    </div>
                </header>
                <section className='secao1'>
                    <div className='background'>
                        <div className='esquerda'>
                            <img src={WMPlogo} className='logoPrincipal' alt="" />
                        </div>
                        <div className='direita'>
                            <h1>Transformamos o seu espaço com qualidade e confiança</h1>
                            <h3>Sua obra em boas mãos. Atuamos com transparência e profissionais qualificados para garantir que sua reforma seja sinônimo de satisfação e durabilidade.</h3>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}