
import { useEffect, useState } from 'react';
import { Link, } from 'react-scroll';


export default function Header(){

    const [scrolled, setScrolled] = useState(false);
    console.log(scrolled)

    useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      return(
        <header className={`${scrolled ? 'headerScrolled' : ''}`}>
            <nav>
                <Link to="About_us" smooth={true} duration={500}>
                    <button >درباره‌ی ما</button >
                </Link>
                <Link to="products" smooth={true} duration={500}>
                    <button >محصولات</button >
                </Link>
                <Link to="services" smooth={true} duration={500}>
                    <button >خدمـات</button >
                </Link>
                <a href="/solutions">راه حل ها</a>
                <a href="/machinery">ماشین آلات</a>
                <Link to="contact_us" smooth={true} duration={500}>
                    <button >تماس با ما</button >
                </Link>
            </nav>
            <img src={`${scrolled ? 'fullLogoBlack.svg' : '/fullLogo.svg'}`} alt="راسا پلیمر"></img>
        </header>
    )
}


