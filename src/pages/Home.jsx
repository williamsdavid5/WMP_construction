import './styles/home.css'
import InstagramLogo from '../assets/instagram_logo.png'
import WhatsappLogo from '../assets/whatsapp_logo.png'
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
                <section className='secao1'>
                    <div className='esquerda'>
                        <img src={WMPlogo} alt="" className='logoWMP' />
                    </div>
                    <div className='direita'>
                        <h1 className='titulo'>
                            Transformamos o seu espaço com qualidade e confiança
                        </h1>
                        <h2 className='subtitulo'>
                            Cuidamos de cada detalhe da sua obra ou reforma
                        </h2>
                    </div>
                </section>
                <div className='divisaoSecao1'>
                    <h2>Alguns de nossos serviços</h2>
                </div>
                <div className='secao2'>
                    <div className='imagemLonga'>
                        <img src={ImagemLonga} alt="" />
                    </div>
                    <div className='direita'>
                        <div className='blocoItemServico'>
                            <div className='auxImagem'>
                                <img src={Secao2_1} alt="" />
                            </div>
                            <p><b>Instalação Elétrica Predial e Industrial</b></p>
                        </div>
                        <div className='blocoItemServico'>
                            <div className='auxImagem'>
                                <img src={Secao2_2} alt="" />
                            </div>
                            <p><b>Áreas externas e Paisagismo</b></p>
                        </div>
                        <div className='blocoItemServico'>
                            <div className='auxImagem'>
                                <img src={Secao2_3} alt="" />
                            </div>
                            <p><b>Iluminação com Dimmer</b></p>
                        </div>
                        <div className='blocoItemServico'>
                            <div className='auxImagem'>
                                <img src={Secao2_4} alt="" />
                            </div>
                            <p><b>Acabamento de Paredes</b></p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}