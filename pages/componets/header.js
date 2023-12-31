
import { useEffect, useRef, useState } from 'react';
import { Link, } from 'react-scroll';
import { useRouter } from 'next/router';
import { RiCloseFill } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
export default function Header(){

    const router = useRouter()

    const [menuHide, setMenuHide] = useState(false)



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

      const handleContact_us = () => {
        // تغییر روت به صفحه‌ی اصلی
        router.push('/')
        
        // اسکرول به بخش محصولات
        window.location.hash = 'contact_us';
  
        // انجام اسکرول با تابع scrollTo
        setTimeout(() => {
          window.scrollTo({
            top: document.getElementById('contact_us').offsetTop,
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
        <header>

            <nav className={menuHide?'widemenu':'widemenu'}>
                <div className='cls-mn'>
                  <p onClick={()=>setMenuHide(!menuHide)}><RiCloseFill /></p>
                </div>
                <div className='conteinerNav'>
                  <div className='infs'>
                    <p>04136309551</p>
                    <p>info@rasapolymer.com</p>
                  </div>
                  <div className='btns'>
                    <button onClick={handleAbout_usClick}>درباره‌ی ما</button >
                    <button onClick={handleProductsClick}>محصولات</button >
                    <a href="/services">خدمـات</a>
                    <a href="/solutions">راه حل ها</a>
                    <a href="/machinery">ماشین آلات</a>
                    <button onClick={handleContact_us}>تماس با ما</button >
                  </div>
                </div>
            </nav>
            <nav className='higmenu'>
              <div className='opn-mn'>
                <p onClick={()=>setMenuHide(!menuHide)}><HiOutlineMenu/></p>
              </div>
                {
                  menuHide?
                  <div className='btns-col'>
                      <button onClick={handleAbout_usClick}>درباره‌ی ما</button >
                      <button onClick={handleProductsClick}>محصولات</button >
                      <a href="/services">خدمـات</a>
                      <a href="/solutions">راه حل ها</a>
                      <a href="/machinery">ماشین آلات</a>
                      <button onClick={handleContact_us}>تماس با ما</button >
                  </div>
                  :null
                }

            </nav>

            <a href='/'><img src={'/logoPersian.svg'} alt="راسا پلیمر"></img></a>
        </header>
    )
}


