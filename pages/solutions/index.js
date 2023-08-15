import { useState } from "react"
import Header from "../componets/header"

import Footer from "../componets/footer"

const SolutionsPg = () =>{
    const [data,setData] = useState([
        {
            icn:"image/food.svg",img:'image/pg-prd1.png',txtPer:'صنایع غذایی و آشامیدنی',txtEng:'Food & Beverage Industry',
            prag:'ما در تولید طیف وسیعی از تسمه‌ها برای ماشین‌های تمـام اتوماتیـک تخصص داریم. مهمتریـن تفاوت این تسمه‌ها انحنای نزدیک به صفر است. این تسمه‌ها که با استفاده از امکانات زیرساختی با تکنولوژی بالا طراحی و تولیــد شده‌اند، عملیــات بسته بنــدی بی نقصی در ماشیـــن‌های تمام اتوماتیــک با سرعـت بالا و عملکرد روان ارائه می‌دهند.'
        },{
            icn:"image/tile.svg",img:'image/pg-prd2.png',txtPer:'صنعت کاشی و سرامیـک',txtEng:'Tile and Ceramic Industry',
            prag:'ما در تولید طیف وسیعی از تسمه‌ها برای ماشین‌های تمـام اتوماتیـک تخصص داریم. مهمتریـن تفاوت این تسمه‌ها انحنای نزدیک به صفر است. این تسمه‌ها که با استفاده از امکانات زیرساختی با تکنولوژی بالا طراحی و تولیــد شده‌اند، عملیــات بسته بنــدی بی نقصی در ماشیـــن‌های تمام اتوماتیــک با سرعـت بالا و عملکرد روان ارائه می‌دهند.'
        },{
            icn:"image/newspapers.svg",img:'image/pg-prd3.png',txtPer:'روزنامه‌ها و رسانه‌های چاپــی',txtEng:'Newspapers & Print Media',
            prag:'ما در تولید طیف وسیعی از تسمه‌ها برای ماشین‌های تمـام اتوماتیـک تخصص داریم. مهمتریـن تفاوت این تسمه‌ها انحنای نزدیک به صفر است. این تسمه‌ها که با استفاده از امکانات زیرساختی با تکنولوژی بالا طراحی و تولیــد شده‌اند، عملیــات بسته بنــدی بی نقصی در ماشیـــن‌های تمام اتوماتیــک با سرعـت بالا و عملکرد روان ارائه می‌دهند.'
        },{
            icn:"image/cardboard.svg",img:'image/pg-prd4.png',txtPer:'صنعت کارتن‌سازی و مقوا',txtEng:'Cardboard Industry',
            prag:'ما در تولید طیف وسیعی از تسمه‌ها برای ماشین‌های تمـام اتوماتیـک تخصص داریم. مهمتریـن تفاوت این تسمه‌ها انحنای نزدیک به صفر است. این تسمه‌ها که با استفاده از امکانات زیرساختی با تکنولوژی بالا طراحی و تولیــد شده‌اند، عملیــات بسته بنــدی بی نقصی در ماشیـــن‌های تمام اتوماتیــک با سرعـت بالا و عملکرد روان ارائه می‌دهند.'
        },{
            icn:"image/textile.svg",img:'image/pg-prd5.png',txtPer:'صنعت نساجی',txtEng:'Textile Industry',
            prag:'ما در تولید طیف وسیعی از تسمه‌ها برای ماشین‌های تمـام اتوماتیـک تخصص داریم. مهمتریـن تفاوت این تسمه‌ها انحنای نزدیک به صفر است. این تسمه‌ها که با استفاده از امکانات زیرساختی با تکنولوژی بالا طراحی و تولیــد شده‌اند، عملیــات بسته بنــدی بی نقصی در ماشیـــن‌های تمام اتوماتیــک با سرعـت بالا و عملکرد روان ارائه می‌دهند.'
        },{
            icn:"image/mailorder.svg",img:'image/pg-prd1.png',txtPer:'سفارشات پستی',txtEng:'Mail Order & Logistics',
            prag:'ما در تولید طیف وسیعی از تسمه‌ها برای ماشین‌های تمـام اتوماتیـک تخصص داریم. مهمتریـن تفاوت این تسمه‌ها انحنای نزدیک به صفر است. این تسمه‌ها که با استفاده از امکانات زیرساختی با تکنولوژی بالا طراحی و تولیــد شده‌اند، عملیــات بسته بنــدی بی نقصی در ماشیـــن‌های تمام اتوماتیــک با سرعـت بالا و عملکرد روان ارائه می‌دهند.'
        },{
            icn:"image/building.svg",img:'image/pg-prd2.png',txtPer:'مصالح ساختمانی',txtEng:'Building Materials',
            prag:'ما در تولید طیف وسیعی از تسمه‌ها برای ماشین‌های تمـام اتوماتیـک تخصص داریم. مهمتریـن تفاوت این تسمه‌ها انحنای نزدیک به صفر است. این تسمه‌ها که با استفاده از امکانات زیرساختی با تکنولوژی بالا طراحی و تولیــد شده‌اند، عملیــات بسته بنــدی بی نقصی در ماشیـــن‌های تمام اتوماتیــک با سرعـت بالا و عملکرد روان ارائه می‌دهند.'
        },{
            icn:"image/pallet.svg",img:'image/pg-prd3.png',txtPer:'ایمن سازی پالت',txtEng:'Pallet Securing Systems',
            prag:'ما در تولید طیف وسیعی از تسمه‌ها برای ماشین‌های تمـام اتوماتیـک تخصص داریم. مهمتریـن تفاوت این تسمه‌ها انحنای نزدیک به صفر است. این تسمه‌ها که با استفاده از امکانات زیرساختی با تکنولوژی بالا طراحی و تولیــد شده‌اند، عملیــات بسته بنــدی بی نقصی در ماشیـــن‌های تمام اتوماتیــک با سرعـت بالا و عملکرد روان ارائه می‌دهند.'
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
                            <img className="icons" src="image/newspapers.svg" alt="newpapers icon"></img>
                            <h4 className="txtPer">روزنامه‌ها و رسانه‌های چاپــی</h4>
                            <h4 className="txtEng">Newspapers & Print Media</h4>
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