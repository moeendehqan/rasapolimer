import { useState } from "react"
import Header from "../componets/header"

import Footer from "../componets/footer"

const SolutionsPg = () =>{
    const [data,setData] = useState([
        {
            icn:"image/food.svg",img:'image/pg-prd2.png',txtPer:'صنایع غذایی و آشامیدنی',txtEng:'Food & Beverage Industry',
            prag:'بسته‌بندی جعبه‌های میوه، قوطی‌های کنسرو، تتراپک، صنایع شیرینی و شکلات، محصولات گلخانه‌ای و ...            ماشین‌آلات مدرن و اتوماتیک در خط تولید و یا تسمه‌کشی با دستگاه‌های دستی و بادی برای این صنایع قابل استفاده است. تسمه‌های فول اتوماتیک راسا در سایزها و رنگ دلخواه مشتری به همراه تسمه‌های ویبراتوری بهترین راه‌حل در این زمینه هستند.'
        },{
            icn:"image/tile.svg",img:'image/pg-prd1.png',txtPer:'صنعت کاشی و سرامیـک',txtEng:'Tile and Ceramic Industry',
            prag:'ما طیف وسیعی از تسمه‌های فول اتوماتیک و پرسرعت را به صورت تخصصی برای این صنعت بزرگ در کشور تولید می‌کنیم. عرضه‌ی ماشین‌آلات فول اتوماتیک پرسرعت و همچنین تولید محصولات ویژه با گرید A شرایطی را فراهم کرده تا راسا پلیمر انتخاب اول صنایع کاشی و سرامیک در کشور باید. در این صنایع جهت ایمن سازی محصولات بروی پالت، از تسمه‌های ویبراتوری پت نیز استفاده می‌شود.'
        },{
            icn:"image/homeApp.svg",img:'image/pg-prd3.png',txtPer:'لوازم خانگی',txtEng:'Home Appliction',
            prag:'ما در تولید طیف وسیعی از تسمه‌ها برای ماشین‌های تمـام اتوماتیـک تخصص داریم. مهمتریـن تفاوت این تسمه‌ها انحنای نزدیک به صفر است. این تسمه‌ها که با استفاده از امکانات زیرساختی با تکنولوژی بالا طراحی و تولیــد شده‌اند، عملیــات بسته بنــدی بی نقصی در ماشیـــن‌های تمام اتوماتیــک با سرعـت بالا و عملکرد روان ارائه می‌دهند.'
        },{
            icn:"image/cardboard.svg",img:'image/pg-prd6.png',txtPer:'صنعت کارتن‌سازی و مقوا',txtEng:'Cardboard Industry',
            prag:'بسته‌بندی کارتن، صنایع کاغذسازی، صنعت چاپ، لوله‌های مقوایی و ... در حجم کوچک و بزرگ یا بسته‌بندی روی پالت و ...            دستگاه‌های پرسرعت و فول اتوماتیک با تسمه‌های مخصوص برای صنعت سلولزی و مقوا بیشترین استفاده را دارند. کارگاه‌هایی که سرعت تولید پایین‌تری دارند، می‌توانند با محصولات نیمه‌اتوماتیک بسته‌بندی مورد نظر را انجام دهند.'
        },{
            icn:"image/textile.svg",img:'image/pg-prd8.png',txtPer:'صنعت نساجی',txtEng:'Textile Industry',
            prag:'صنایعی مثل گونی بافی، پارچه و منسوجات پلیمری که در رول‌های مقوایی بزرگ روی هم چیده می‌شوند را می‌توان با تسمه‌های فول اتوماتیک راسا در دستگاه‌های فول و مجهز‌ بسته‌بندی کرد. در این صنایع استفاده از دستگاه‌های بادی و دستی نیز رایج است.'
        },{
            icn:"image/mailorder.svg",img:'image/pg-prd7.png',txtPer:'سفارشات پستی',txtEng:'Mail Order & Logistics',
            prag:'استفاده از دستگاه‌های نیمه ‌اتوماتیک با تسمه‌های مقاوم راساپلیمر اطمینان خاطر شما را برای ارسال ایمن محصولات در ادارات پست و پلتفرم‌های فروش اینترنتی فراهم می‌سازد. تسمه‌های نیمه اتوماتیک راسا قابلیت چاپ دقیق و شفاف را دارند.'
        },{
            icn:"image/building.svg",img:'image/pg-prd4.png',txtPer:'مصالح ساختمانی',txtEng:'Building Materials',
            prag:'تسمه‌های یووی(uv) دار راساپلیمر در دو دسته فول اتوماتیک و ویبرایتوری(pet-pp) سازگار با شرایط آب و هوایی نامساعد، نور خورشید و اشعه ماوراء بنفش هستند. این تسمه‌ها بهترین راه‌حل برای بسته‌بندی مصالح ساختمانی مثل کاشی و سرامیک، بلوک سیمانی، موزاییک، کف‌پوش‌های چوبی و ... هستند.'
        },{
            icn:"image/pallet.svg",img:'image/pg-prd4.png',txtPer:'ایمن سازی پالت',txtEng:'Pallet Securing Systems',
            prag:'بهترین راه‌حل برای بسته‌بندی و ایمن‌سازی محصولات با حجم بزرگ بر روی پالت‌های چوبی و پلاستیکی، تسمه‌های مقاوم پت هستند. این محصولات که با دستگاه‌های بادی آپارات می‌شوند در محیط‌های رو باز سازگارند و استحکام خود را در زیر نور خورشید تا مدت طولانی از دست نمی‌دهند .'
        }
    ])

    const [popUp, setPopUp] = useState(null)

    const Decrease = () =>{if (popUp>0) {setPopUp(popUp-1)}}
    const Increase = () =>{if (popUp<7) {setPopUp(popUp+1)}}

    return(
        <>
            <Header />
            <main className="SolutionsPg">
                <div className="hd">
                    <img src="image/Rectangle 47.jpg" alt="End-of-Line Packaging solutions from one source"></img>
                    <div className="conteiner ">
                        <p className="bl3">End-of-Line Packaging solutions</p>
                        <p className="bl4">from one source</p>
                    </div>
                </div>
                <section>

                    {
                        popUp!=null?
                        <div className="popup">
                            <p className="x" onClick={()=>setPopUp(null)}>X</p>
                            <div className="parts">
                                <div className="left" onClick={Decrease}>
                                    {
                                        popUp>0?
                                        <>
                                            <div className="circle"></div>
                                            <img src={data[popUp-1]['icn']} alt={data[popUp-1]['txtPer']}></img>
                                        </>
                                        :null
                                    }

                                </div>
                                <div className="center">
                                    <div className="circle"></div>
                                    <img src={data[popUp]['icn']} alt={data[popUp]['txtPer']}></img>
                                    <h5>{data[popUp]['txtPer']}</h5>
                                    <h5>{data[popUp]['txtEng']}</h5>
                                    <img onClick={Decrease} className="leftleft" src="image/leftleft.svg" alt="left btn"></img>
                                    <img onClick={Increase} className="rightright" src="image/rightright.svg" alt="right btn"></img>
                                </div>
                                <div className="right" onClick={Increase}>
                                    {
                                        popUp<7?
                                        <>
                                            <div className="circle"></div>
                                            <img src={data[popUp+1]['icn']} alt={data[popUp+1]['txtPer']}></img>
                                        </>
                                        :null
                                    }


                                </div>
                            </div>
                            <div className="parg">
                                <img src={data[popUp]['img']}></img>
                                <p>{data[popUp]['prag']}</p>
                            </div>

                        </div>
                        :null
                    }
                    <div className="title">
                        <h2>راه‌حل‌های بسته‌بندی</h2>
                    </div>
                    <div className="bx-cntnr">
                        <div className="bx" onClick={()=>setPopUp(0)}>
                            <img className="line" src="image/line45deg.svg" alt="line"></img>
                            <div className="circle"></div>
                            <img className="icons" src="image/food.svg" alt="food icon"></img>
                            <h4 className="txtPer">صنایع غذایی و آشامیدنی</h4>
                            <h4 className="txtEng">Food & Beverage Industry</h4>
                        </div>
                        <div className="bx" onClick={()=>setPopUp(1)}>
                            <img className="line" src="image/line45deg.svg" alt="line"></img>
                            <div className="circle"></div>
                            <img className="icons" src="image/tile.svg" alt="tile icon"></img>
                            <h4 className="txtPer">صنعت کاشی و سرامیـک</h4>
                            <h4 className="txtEng">Tile and Ceramic Industry</h4>
                        </div>
                        <div className="bx" onClick={()=>setPopUp(2)}>
                            <img className="line" src="image/line45deg.svg" alt="line"></img>
                            <div className="circle"></div>
                            <img className="icons" src="image/homeApp.svg" alt="Home Appliction icon"></img>
                            <h4 className="txtPer">لوازم خانگی</h4>
                            <h4 className="txtEng">Home Appliction</h4>
                        </div>
                        <div className="bx" onClick={()=>setPopUp(3)}>
                            <img className="line" src="image/line45deg.svg" alt="line"></img>
                            <div className="circle"></div>
                            <img className="icons" src="image/cardboard.svg" alt="cardboard icon"></img>
                            <h4 className="txtPer">صنعت کارتن‌سازی و مقوا</h4>
                            <h4 className="txtEng">Cardboard Industry</h4>
                        </div>
                        <div className="bx" onClick={()=>setPopUp(4)}>
                            <img className="line" src="image/line45deg.svg" alt="line"></img>
                            <div className="circle"></div>
                            <img className="icons" src="image/textile.svg" alt="textile icon"></img>
                            <h4 className="txtPer">صنعت نساجی</h4>
                            <h4 className="txtEng">Textile Industry</h4>
                        </div>
                        <div className="bx" onClick={()=>setPopUp(5)}>
                            <img className="line" src="image/line45deg.svg" alt="line"></img>
                            <div className="circle"></div>
                            <img className="icons" src="image/mailorder.svg" alt="mailorder icon"></img>
                            <h4 className="txtPer">سفارشات پستی</h4>
                            <h4 className="txtEng">Mail Order & Logistics</h4>
                        </div>
                        <div className="bx" onClick={()=>setPopUp(6)}>
                            <img className="line" src="image/line45deg.svg" alt="line"></img>
                            <div className="circle"></div>
                            <img className="icons" src="image/building.svg" alt="building icon"></img>
                            <h4 className="txtPer">مصالح ساختمانی</h4>
                            <h4 className="txtEng">Building Materials</h4>
                        </div>
                        <div className="bx" onClick={()=>setPopUp(7)}>
                            <img className="line" src="image/line45deg.svg" alt="line"></img>
                            <div className="circle"></div>
                            <img className="icons" src="image/pallet.svg" alt="pallet icon"></img>
                            <h4 className="txtPer">ایمن سازی پالت</h4>
                            <h4 className="txtEng">Pallet Securing Systems</h4>
                        </div>
                    </div>
                </section>
                <Footer/>
            </main>
        </>
    )
}

export default SolutionsPg