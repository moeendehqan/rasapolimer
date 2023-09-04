



const Footer = () =>{
    return(
        <footer>
            <div className='infCrd'>
                <div className='imgCnt'>
                    <img src='image/email.svg' alt='ایمیل'></img>
                </div>
                <div className='txtcnt'>
                    <p>info@rasapolymer.com</p>
                </div>
            </div>
            <div className='infCrd'>
                <div className='imgCnt'>
                    <img src='image/phone.svg' alt='تلفن'></img>
                </div>
                <div className='txtcnt'>
                    <div className="phoneConteiner">
                        <p>۰۴۱</p>
                        <p>۳۶۳۰</p>
                        <p>۹۶۹۹</p>
                    </div>
                    <div className="phoneConteiner">
                        <p>۰۴۱</p>
                        <p>۳۶۳۰</p>
                        <p>۹۵۸۹</p>
                    </div>
                    <div className="phoneConteiner">
                        <p>۰۴۱</p>
                        <p>۳۶۳۰</p>
                        <p>۹۵۵۱</p>
                    </div>
                </div>
            </div>
            <div className='infCrd'>
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

    )
}


export default Footer