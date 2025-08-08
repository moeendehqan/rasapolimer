import { useState } from 'react';
import { useRouter } from 'next/router';
import { RiCloseFill } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

export default function Header() {
  const router = useRouter();
  const [menuHide, setMenuHide] = useState(false);

  // تابع کلی برای اسکرول به بخش مشخص‌شده در صفحه‌ی اصلی
  const scrollToSection = (sectionId) => {
    router.push('/').then(() => {
      // صبر کن تا DOM رندر شه
      setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth',
          });
        }
      }, 100); // زمان کوتاه برای اطمینان از آماده بودن DOM
    });
  };

  return (
    <header>
      <nav className={menuHide ? 'widemenu' : 'widemenu'}>
        <div className='cls-mn'>
          <p onClick={() => setMenuHide(!menuHide)}><RiCloseFill /></p>
        </div>
        <div className='conteinerNav'>
          <div className='infs'>
            <p>04136309551</p>
            <p>info@rasapolymer.com</p>
          </div>
          <div className='btns'>
            <button onClick={() => scrollToSection('about_us')}>درباره‌ی ما</button>
            <button onClick={() => scrollToSection('products')}>محصولات</button>
            <a href="/services">خدمـات</a>
            <a href="/solutions">راه حل ها</a>
            <a href="/machinery">ماشین آلات</a>
            <button onClick={() => scrollToSection('contact_us')}>تماس با ما</button>
          </div>
        </div>
      </nav>

      <nav className='higmenu'>
        <div className='opn-mn'>
          <p onClick={() => setMenuHide(!menuHide)}><HiOutlineMenu /></p>
        </div>
        {
          menuHide &&
          <div className='btns-col'>
            <button onClick={() => scrollToSection('about_us')}>درباره‌ی ما</button>
            <button onClick={() => scrollToSection('products')}>محصولات</button>
            <a href="/services">خدمـات</a>
            <a href="/solutions">راه حل ها</a>
            <a href="/machinery">ماشین آلات</a>
            <button onClick={() => scrollToSection('contact_us')}>تماس با ما</button>
          </div>
        }
      </nav>

      <a href='/'><img src={'/logoPersian.svg'} alt="راسا پلیمر" /></a>
    </header>
  );
}
