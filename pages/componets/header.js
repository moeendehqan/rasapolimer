
import { useEffect, useRef, useState } from 'react';
import { Link, } from 'react-scroll';
import { useRouter } from 'next/router';
import { RiCloseFill } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
export default function Header(){

    const [scrolled, setScrolled] = useState(false);
    const router = useRouter()
    const productsSectionRef = useRef(null);
    const [menuHide, setMenuHide] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    

      const handleProductsClick = () => {
        // تغییر روت به صفحه‌ی اصلی
        router.push('/')
        
        // اسکرول به بخش محصولات
        window.location.hash = 'products';
  
        // انجام اسکرول با تابع scrollTo
        setTimeout(() => {
          window.scrollTo({
            top: document.getElementById('products').offsetTop,
            behavior: 'smooth'
          });
        }, 800);
      };

      const handleAbout_usClick = () => {
        // تغییر روت به صفحه‌ی اصلی
        router.push('/')
        
        // اسکرول به بخش محصولات
        window.location.hash = 'about_us';
  
        // انجام اسکرول با تابع scrollTo
        setTimeout(() => {
          window.scrollTo({
            top: document.getElementById('about_us').offsetTop,
            behavior: 'smooth'
          });
        }, 800);
      };


      return(
        <header className={`${scrolled ? 'headerScrolled' : ''}`}>
            <div className='opn-mn'>
              <p onClick={()=>setMenuHide(!menuHide)}><HiOutlineMenu/></p>
            </div>
            <nav className={menuHide?'widemenu show':'widemenu hide'}>
                <div className='cls-mn'>
                  <p onClick={()=>setMenuHide(!menuHide)}><RiCloseFill /></p>
                </div>
                <button onClick={handleAbout_usClick}>درباره‌ی ما</button >
                <button onClick={handleProductsClick}>محصولات</button >
                <a href="/services">خدمـات</a>
                <a href="/solutions">راه حل ها</a>
                <a href="/machinery">ماشین آلات</a>
                <a href="/contactus">تماس با ما</a>
            </nav>
            <a href='/'><img src={`${scrolled ? 'fullLogoBlack.svg' : '/fullLogo.svg'}`} alt="راسا پلیمر"></img></a>
        </header>
    )
}


