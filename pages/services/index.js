import Header from "../componets/header"
import Footer from "../componets/footer"


const Services = () =>{
    return(
        <>
            <Header />
            <div className="services" name='services'>
                <div className="hd">
                    <img src="image/Rectangle 39.jpg" alt="خدمات"></img>
                    <div className="conteiner">
                        <p>Diagnosis   /   Providing Original Parts   /   Professional Repair Services</p>
                    </div>
                </div>
                <section>
                    <div className="iconic">
                        <img src="image/Layer_1.jpg"></img>
                        <p>خدمات پس از فروش</p>
                    </div>
                    <div className="cntxt">
                        <img src="image/Rectangle 33.jpg"></img>
                        <div className="prg">
                            <p>راساپلیمر در راستای پایبندی به ارزش‌های کسب و کار خود و آرامش خاطـر مشتریــان، خدمــــات پــــس از فـــروش ویـــژه‌ای بــه شمـــا ارائـه می‌نماید.</p>
                            <p>ما با بهره از مهندسین متخصص و امکان تأمین قطعات اورجینال، نیازهای مشتری را شناسایی کرده و در سریـع‌ترین زمان ممکن در جهـت عیب‌یابی و تعمیر دستگاه‌های شمـا اقدام خواهیم کرد.</p>
                            <p>راسا پلیمر مانند یک شریک مطمئن برای مشتریـان است. ما علاوه بر مشاوره قبل از فروش، در صورت بروز مشکل یا خرابی دستگاه در کوتاه‌ترین زمان ممکن در جهت رفع نیازهای مشتریان اقدام خواهیم کرد. ارتباط نزدیک با مشتریــان، کلید یک همکاری موفق است.</p>
                        </div>
                        <div className="imgcntr">
                            <img src="image/qte.png"></img>
                            <img src="image/Rectangle 83.jpg"></img>

                        </div>
                    </div>
                    <div className="panevisa">
                        <p>تشخیص عیب  /  تأمین قطعات اورجینال  /  تعمیرات تخصصی </p>
                        <p>انواع ماشین‌آلات فول و نیمه اتوماتیک و پرتابـل</p>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    )
}


export default Services