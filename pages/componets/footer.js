



const Footer = () =>{

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

    )
}


export default Footer