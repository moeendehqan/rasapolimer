import React, { useEffect } from 'react';
import Header from '../componets/header';
import SimpleMap from '../componets/map';
const Contact_us = () =>{


    const redirectToEmailClient = () => {
        const mailtoLink = 'mailto:info@rasapolymer';
        window.location.href = mailtoLink;
      };
      const redirectToTellClient = () => {
        const tell = 'tel:04136309699'
        window.location.href = tell;
      };

      const redirectToLocationClient = () => {
        const location = 'https://goo.gl/maps/YQM7fCHuiRdSMa9Y7'
        window.location.href = location;
      };
    return(
        <>
        <Header />
        <div className="contact_us" name='contact_us' id='contact_us'>
            <div className="hd">
                <img src="image/contactus.jpg" alt="محصولات"></img>
                <div className="conteiner">
                    <p>You can get exactly:</p>
                    <p>What you need   /   Wherever you are   /   Very quickly</p>
                </div>
            </div>
            <section>
                <div className="formCntinr">
                    <form>
                        <input placeholder="نام شما *"></input>
                        <input placeholder="نام شرکت *"></input>
                        <input placeholder="سمت شغلی *"></input>
                        <textarea placeholder="درخواست خود را بنویسید *"></textarea>
                        <input placeholder="شماره تماس *"></input>
                        <button>ثبت درخواست</button>

                    </form>
                    <div className="imgCntinr">
                        <img src="image/callcenter.svg" alt="تسمه بسته بندی"></img>
                        <p>درخواست و اطلاعات تماس خود را برای ما ارسال کنید تا کارشناسان فروش راساپلیمر در اولین فرصت با شما تماس گرفته و راهنمایی حرفه‌ای در اختیارتان قرار دهند</p>
                    </div>
                </div>
                <img src='image/map.jpg' alt='نقشه' onClick={redirectToLocationClient}></img>

            </section>
            <footer>
            <div className='infCrd' onClick={redirectToEmailClient}>
                <div className='imgCnt'>
                    <img src='image/email.svg' alt='ایمیل'></img>
                </div>
                <div className='txtcnt'>
                    <p>info@rasapolymer.com</p>
                </div>
            </div>
            <div className='infCrd' onClick={redirectToTellClient}>
                <div className='imgCnt'>
                    <img src='image/phone.svg' alt='تلفن'></img>
                </div>
                <div className='txtcnt'>
                    <div className="phoneConteiner">
                        <p>041</p>
                        <p>3630</p>
                        <p>9699</p>
                    </div>
                    <div className="phoneConteiner">
                        <p>041</p>
                        <p>3630</p>
                        <p>9589</p>
                    </div>
                    <div className="phoneConteiner">
                        <p>041</p>
                        <p>3630</p>
                        <p>9551</p>
                    </div>
                </div>
            </div>
            <div className='infCrd' onClick={redirectToLocationClient}>
                <div className='imgCnt'>
                    <img src='image/loction.svg' alt='موقعیت'></img>
                </div>
                <div className='txtcnt'>
                    <p>تبریــــز، جـــاده تبریـــز - تهــران</p>
                    <p>شهــرک صنعتی عالــی نســــب</p>
                    <p>انتهـــــای خیابــــان صنعـــت ۴</p>
                </div>
            </div>
        </footer>

        </div>
        </>
    )
}

export default Contact_us