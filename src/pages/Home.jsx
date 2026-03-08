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
                <div className='barraSuperiorContato'>
                    <select name="" id="">
                        <option value="" selected>Português</option>
                        <option value="" selected>English</option>
                        <option value="" selected>Nederlands</option>
                    </select>
                    <p>Call Us:(353) 087 124 4886</p>
                    <div className='divAuxRedes'>
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
                </div>
                <section className='secao1'>
                    <div className='esquerda'>
                        <img src={WMPlogo} alt="" className='logoWMP' />
                    </div>
                    <div className='direita'>
                        <h1 className='titulo archivo-black-regular '>
                            Transformamos o seu espaço com qualidade e confiança
                        </h1>
                        <h2 className='subtitulo'>
                            Cuidamos de cada detalhe da sua obra ou reforma
                        </h2>
                        <p>Sua obra em boas mãos. Atuamos com transparência e profissionais qualificados para garantir que sua reforma seja sinônimo de satisfação e durabilidade.</p>
                    </div>
                </section>
                {/* <div className='divisaoSecao1'>
                    <h2>Alguns de nossos serviços</h2>
                </div> */}
                <div className='secao2'>
                    <div className='imagemLonga'>
                        <h1 className='tituloSecao2'>Transformamos projetos em realidade com mão de obra qualificada</h1>
                        <h2 className='textoServios'>Renove seu espaço com quem prioriza a qualidade e o cumprimento de prazos. Contamos com uma equipe pronta para atender demandas de construção, reformas de interiores e manutenção predial completa. De projetos de jardinagem ao assentamento técnico de porcelanatos, proporcionamos segurança e beleza para sua residência ou comércio através de soluções integradas e um acabamento verdadeiramente profissional.</h2>
                        {/* <img src={ImagemLonga} alt="" /> */}
                    </div>
                    <div className='direita'>
                        {/* <h2 className='subtituloSecao2'>Nossos principais serviços incluem:</h2> */}
                        <div className='blocoItemServico'>
                            <img src={Secao2_1} alt="" />
                            <div className='textoBloco'>
                                <p className='pBlocoServico'><b>Instalação Elétrica Predial e Industrial</b><br />
                                    Executamos toda a infraestrutura de tubulações, fiações e quadros de energia seguindo as normas de segurança.
                                </p>
                            </div>
                        </div>
                        <div className='blocoItemServico'>
                            <div className='auxImagem'>
                                <img src={Secao2_2} alt="" />
                            </div>
                            <p className='pBlocoServico'><b>Áreas externas e Paisagismo</b></p>
                        </div>
                        <div className='blocoItemServico'>
                            <div className='auxImagem'>
                                <img src={Secao2_3} alt="" />
                            </div>
                            <p className='pBlocoServico'><b>Iluminação com Dimmer</b></p>
                        </div>
                        <div className='blocoItemServico'>
                            <div className='auxImagem'>
                                <img src={Secao2_4} alt="" />
                            </div>
                            <p className='pBlocoServico'><b>Acabamento de Paredes</b></p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}