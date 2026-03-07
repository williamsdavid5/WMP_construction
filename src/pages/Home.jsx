import './styles/home.css'
import InstagramLogo from '../assets/instagram_logo.png'
import WhatsappLogo from '../assets/whatsapp_logo.png'

export default function Home() {
    return (
        <>
            <main className="mainHome">
                <header className='menuSuperior'>
                    <div className='divAuxLogoSuperior'>
                        logo
                    </div>
                    <div className='divAuxRedes'>
                        <a href="" className='redesSociaisLink'>
                            <img src={InstagramLogo} alt="" className='redeSocialLogo' />
                        </a>
                        <a href="" className='redesSociaisLink'>
                            <img src={WhatsappLogo} alt="" className='redeSocialLogo' />
                        </a>
                    </div>
                </header>
            </main>
        </>
    )
}