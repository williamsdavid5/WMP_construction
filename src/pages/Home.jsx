import './styles/home.css'
import InstagramLogo from '../assets/instagram.png'
import WhatsappLogo from '../assets/whatsapp.png'
import MailLogo from '../assets/e-mail.png'
import WMPlogo from '../assets/WMPlogo.svg'

import { useState, useEffect } from 'react';

export default function Home() {

    const [imagens, setImagens] = useState([]);

    useEffect(() => {
        // Vite específico: import.meta.glob
        const modules = import.meta.glob('../assets/fotos/*.{jpeg,jpg,png,gif}', {
            eager: true, // Carrega imediatamente
        });

        const imagensCarregadas = Object.entries(modules).map(([path, module]) => ({
            id: path,
            src: module.default,
            alt: path.split('/').pop().replace(/\.[^/.]+$/, "")
        }));

        setImagens(imagensCarregadas);
    }, []);

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
                <section className='secao2'>
                    <div className='esquerda'>
                        <h2>Qualidade técnica e cuidado com os detalhes</h2>
                        <h3>Transformamos projetos em realidade com mão de obra qualificada.</h3>
                        <p>Oferecemos soluções completas para transformar e valorizar o seu imóvel com máxima eficiência. Nossa expertise abrange desde a infraestrutura crítica, como instalações elétricas e hidráulicas, até o refinamento estético de acabamentos em gesso, estuque e cerâmicas. Seja em áreas internas ou externas, nosso compromisso é entregar um serviço de alto padrão, com acabamentos impecáveis e dedicação total em cada etapa da sua obra.</p>
                    </div>
                    <div className='direita'>
                        <div className='blocoServiços'>
                            <h2>Comprometimento com Prazos</h2>
                            <hr />
                            <p>Entendemos que tempo é fundamental em qualquer obra. Planejamos cada etapa do cronograma com rigor para garantir que a entrega seja feita dentro do prazo estabelecido, sem comprometer a organização do seu cronograma pessoal.</p>
                        </div>

                        <div className='blocoServiços'>
                            <h2>Qualidade Técnica Superior</h2>
                            <hr />
                            <p>Nossa equipe utiliza materiais de primeira linha e segue rigorosamente as normas técnicas de segurança e construção. Esse cuidado garante resultados duráveis, evitando gastos extras com manutenções corretivas no futuro.</p>
                        </div>

                        <div className='blocoServiços'>
                            <h2>Acabamento de Alto Padrão</h2>
                            <hr />
                            <p>Acreditamos que os detalhes fazem toda a diferença na valorização do imóvel. Dedicamos atenção especial ao refino estético, garantindo que superfícies, junções e instalações tenham um visual impecável e profissional.</p>
                        </div>
                    </div>
                </section>
                <section className='secao3'>
                    <div className='auxBlocosServicos'>
                        <div className='blocoServiços'>
                            <h2>Reformas de Banheiros e Cozinhas</h2>
                            <hr />
                            <p>Realizamos reformas completas focadas em funcionalidade e estética. Cuidamos da substituição de louças, metais e da impermeabilização necessária para garantir que seu ambiente seja moderno, prático e livre de infiltrações.</p>
                        </div>

                        <div className='blocoServiços'>
                            <h2>Jardinagem e Paisagismo</h2>
                            <hr />
                            <p>Transformamos quintais e jardins em verdadeiros refúgios. Oferecemos desde a manutenção regular até a criação de novos espaços verdes, garantindo harmonia visual e o bem-estar da sua família.</p>
                        </div>

                        <div className='blocoServiços'>
                            <h2>Rebaixamento de Teto e Gesso</h2>
                            <hr />
                            <p>Especialistas em forros de gesso e sancas que transformam a iluminação do ambiente. Trabalhamos com rebaixamento técnico para esconder fiações e estruturas, proporcionando um acabamento liso e sofisticado.</p>
                        </div>

                        <div className='blocoServiços'>
                            <h2>Estuque e Reboco Fino</h2>
                            <hr />
                            <p>Utilizamos técnicas de estucagem para garantir superfícies perfeitamente niveladas e prontas para a pintura. O foco é a eliminação de imperfeições, entregando um toque aveludado e alta durabilidade ao revestimento.</p>
                        </div>

                        <div className='blocoServiços'>
                            <h2>Cerâmicas e Porcelanatos</h2>
                            <hr />
                            <p>Assentamento de pisos e revestimentos com rigoroso controle de nível e esquadro. Seja em cerâmica clássica ou grandes formatos de porcelanato, garantimos paginações limpas e juntas perfeitas.</p>
                        </div>

                        <div className='blocoServiços'>
                            <h2>Instalações Elétricas e Hidráulicas</h2>
                            <hr />
                            <p>Executamos toda a infraestrutura de tubulações, fiações e quadros de energia seguindo as normas de segurança. Evite dores de cabeça futuras com sistemas instalados por quem entende de manutenção.</p>
                        </div>
                    </div>
                </section>
                <div className='intermediaria3-4'>
                    <h1>Galeria de serviço</h1>
                </div>
                <section className='secao4'>
                    {imagens.map((imagem) => {
                        return (
                            <img src={imagem.src} alt="" className='imagensServicos' key={imagem.id} />
                        )
                    })}
                </section>
            </main>
        </>
    )
}