import { useState } from "react"
import Header from "../componets/header"
import Footer from "../componets/footer"
import { BsDownload , BsPlayCircleFill} from "react-icons/bs";

const MachineryPg = () =>{
    const [boxStatus, setBoxStatus] = useState({
        'HighSpeed':false,
        'SideSeal':false,
        'FullAutomatic':false,
        'SemiAutomatic':false,
        'Manual':false,
        'Pneumatic':false
    })

    const [Player, setPlayer] = useState({src:'',title:'',play:false})

    const [videosState, setVideoState] = useState([
        {src:'IMG_7450.MP4',title:'دستگاه فول اتومات high speed  صنعت کارتن‌سازی'},
        {src:'IMG_7458.MP4',title:'دستگاه اتوماتیک - صنعت لوازم خانگی'},
        {src:'IMG_7451.MP4',title:'دستگاه اتوماتیک - صنعت کارتن‌سازی'},
        {src:'IMG_7452.MP4',title:'دستگاه تسمه‌کش اتوماتیک - صنعت کاشی و سرامیک'},
        {src:'IMG_7453.MP4',title:'دستگاه تسمه‌کش اتوماتیک - صنعت لوازم خانگی'},
        {src:'IMG_7455.MP4',title:'دستگاه فول اتوماتیک - صنعت کارتن‌سازی'},
        {src:'IMG_7456.MP4',title:'دستگاه فول اتوماتیک - صنعت کارتن‌سازی'},
        {src:'IMG_7457.MP4',title:'دستگاه پنوماتیک دستی - صنعت مصالح ساختمانی'},
        {src:'IMG_7459.MP4',title:'دستگاه فول اتوماتیک - صنعت لوازم خانگی'},
        {src:'IMG_7460.MP4',title:'دستگاه فول اتوماتیک - صنعت لوازم خانگی'},
        {src:'IMG_7461.MOV',title:'دستگاه فول اتوماتیک - صنعت لوازم خانگی'},
        {src:'IMG_7462.MP4',title:'دستگاه فول اتوماتیک - صنعت کارتن‌سازی'},
        {src:'IMG_7463.MOV',title:'دستگاه بغل‌زن فول اتوماتیک - صنعت مواد غذایی'},
    ])

    const changeStatus = (boxName) => {
        setBoxStatus(prevStatus => ({
          ...prevStatus,
          [boxName]: !prevStatus[boxName]
        }));
      }

    

    return(
        <>
            <Header />
            <main className="MachineryPg">
                <div className="hd">
                    <img src="image/Untitled-1 1.png" alt="Strape Packaging Machines"></img>
                    <div className="conteiner ">
                        <p className="bl5">Strape Packaging</p>
                        <p className="bl6">Machines</p>
                    </div>
                </div>
                <section>
                    <div className="title">
                    </div>
                    <div className="brands">
                        <img className="brd" src="logo.svg" alt="راساپلیمر"/>
                        <img className="brd" src="image/trastpack.svg" alt="تراست پک" />
                        <div className="flag">
                            <img src="image/taiwanFlag.png" />
                            <img src="image/iranFlag.png" />
                        </div>
                        <p>در طول یک دهه فعالیت در صنعت بسته‌بندی کشور، با برندهای مطرح دنیا در زمینه تأمین ماشین‌آلات تسمه‌کشی و توزیع قطعات همکاری داشته و از نمایندگان مهم کمپانی ترانس‌پک تایوان در ایران هستیم.</p>
                    </div>
                    <div className={boxStatus.HighSpeed?"dropbox dropboxOpen":"dropbox dropboxClose"}>
                        <div className="btn" onClick={()=>changeStatus('HighSpeed')}>
                            <img src="image/arrow.svg" />
                            <p>ماشین‌آلات تسمه‌کش High Speed</p>
                        </div>
                        <div className={boxStatus.HighSpeed?"cards":"cards close"}>
                            <div className="card">
                                <div className="img-cntinr">
                                    <img alt="transpak" src="image/mark.png"></img>
                                    <img src="image/42.png" alt="  High Speed ماشین‌آلات تسمه‌کش High Speed Strapping Machines"></img>
                                </div>
                                <div className="dtil">
                                    <span>TP-702C</span>
                                </div>
                                <div className="parg">
                                    <h3>ماشین‌آلات تسمه‌کش High Speed</h3>
                                    <h3>High Speed Strapping Machines</h3>
                                    <ul>
                                        <li>Robust & compact mechanical strapping head</li>
                                        <li>With pneumatic press</li>
                                        <li>Free access to strap guides (patents registered)</li>
                                        <li>Diverse strapping patterns</li>
                                        <li>Variable conveyor speed between 10 - 60 mtr/min</li>
                                        <li>Easy bundle flow direction change</li>
                                        <li>Good to strap small package</li>
                                        <li>Siemens HMI (touch panel)</li>
                                        <li>Light tower with low strap sensor</li>
                                        <li>Foot pedal switch</li>
                                        <li>Strapping cycle counter</li>
                                        <li>Without press bar</li>
                                        <li>Uplifted support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img-cntinr">
                                    <img alt="transpak" src="image/mark.png"></img>
                                    <img src="image/0033 1.png" alt="  High Speed ماشین‌آلات تسمه‌کش High Speed Strapping Machines"></img>
                                </div>
                                <div className="dtil">
                                    <span>TP-702CCQ</span>
                                </div>
                                <div className="parg">
                                    <h3>High Speed ماشین‌آلات تسمه‌کش</h3>
                                    <h3>High Speed Strapping Machines</h3>
                                    <ul>
                                        <li>Waist-high auto strap feeding</li>
                                        <li>Free access to strap guides (patents registered)</li>
                                        <li>Electronic tension control</li>
                                        <li>Auto strap ejector</li>
                                        <li>Hinged top plates</li>
                                        <li>Multiple strap function</li>
                                        <li>Easy bundle flow direction change</li>
                                        <li>Good for heavy packages</li>
                                        <li>Siemens HMI (touch panel)</li>
                                        <li>Light tower with low strap sensor</li>
                                        <li>Foot pedal switch</li>
                                        <li>Strapping cycle counter</li>
                                        <li>Squaring plate extension for bundle length up to 1520mm</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="download">
                                <a target="_blank" href='pdf/01 High Speed (09_2021).pdf'>دانلود کاتالوگ ماشین‌آلات high-speed <span><BsDownload/></span></a>
                            </div>
                        </div>
                    </div>

                    <div className={boxStatus.SideSeal?"dropbox dropboxOpen":"dropbox dropboxClose"}>
                        <div className="btn" onClick={()=>changeStatus('SideSeal')}>
                            <img src="image/arrow.svg" />
                            <p>ماشین‌آلات تسمه‌کش Side-Seal</p>
                        </div>
                        <div className={boxStatus.SideSeal?"cards":"cards close"}>
                            <div className="card">
                                <div className="img-cntinr">
                                    <img alt="transpak" src="image/mark.png"></img>
                                    <img src="image/0030 1.png" alt="Side-Seal ماشین‌آلات تسمه‌کش Side-Seal Strapping Machines"></img>
                                </div>
                                <div className="dtil">
                                    <span>TP-733H</span>
                                    <span>Castor III</span>
                                    <span>Pallet Strapping</span>
                                    <span>Machine</span>
                                </div>
                                <div className="parg">
                                    <h3>Side-Seal ماشین‌آلات تسمه‌کش</h3>
                                    <h3>Side-Seal Strapping Machines</h3>
                                    <ul>
                                        <li>ARES TP-733-SH strapping head</li>
                                        <li>Strap guide arm</li>
                                        <li>Safety rack</li>
                                        <li>Friction weld sealing technology</li>
                                        <li>Siemens PLC and HMI</li>
                                        <li>Free access to strap guides</li>
                                        <li>Adjustable sealing and cooling time</li>
                                        <li>Strap end ejector</li>
                                        <li>Preprogram setting</li>
                                        <li>Easy to replace strapping head</li>
                                        <li>Free standing operation desk (3M)</li>
                                        <li>Lower tension range (200 - 1200 N)</li>
                                        <li>Maximum package height up to 2700 mm</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img-cntinr">
                                    <img alt="transpak" src="image/mark.png"></img>
                                    <img src="image/041 1.png" alt="Side-Seal ماشین‌آلات تسمه‌کش Side-Seal Strapping Machines"></img>
                                </div>
                                <div className="dtil">
                                    <span>TP-601YPT</span>
                                    <span>Automatic</span>
                                    <span>machine</span>
                                </div>
                                <div className="parg">
                                    <h3>Side-Seal ماشین‌آلات تسمه‌کش</h3>
                                    <h3>Side-Seal Strapping Machines</h3>
                                    <p>is an automatic side-seal strapping machine for PP and PET strapping (9 mm, 12 mm, 15.5 mm)</p>
                                    <ul>
                                        <li>Friction weld sealing technology</li>
                                        <li>Siemens PLC</li>
                                        <li>Electronic tension control</li>
                                        <li>Tension up to 1500 N (150 kg)</li>
                                        <li>Auto Strap Refeed</li>
                                        <li>Up and down stream interlock with photo-eye control</li>
                                        <li>Emergency stop switch</li>
                                        <li>Foot pedal switch</li>
                                        <li>With adjustable free roller table (TP-601YPT-T)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="download">
                                <a target="_blank" href='02 Side-Seal (11_2021).pdf'>دانلود کاتالوگ ماشین‌آلات side-seal <span><BsDownload/></span></a>
                            </div>
                        </div>
                    </div>

                    <div className={boxStatus.FullAutomatic?"dropbox dropboxOpen":"dropbox dropboxClose"}>
                        <div className="btn" onClick={()=>changeStatus('FullAutomatic')}>
                            <img src="image/arrow.svg" />
                            <p>ماشین آلات تسمه‌کش فول اتوماتیک</p>
                        </div>
                        <div className={boxStatus.FullAutomatic?"cards":"cards close"}>
                            <div className="card">
                                <div className="img-cntinr">
                                    <img alt="transpak" src="image/mark.png"></img>
                                    <img src="image/0036 1.png" alt="ماشین آلات تسمه‌کش فول اتوماتیک Full Automatic Strapping Machines"></img>
                                </div>
                                <div className="dtil">
                                    <span>TP-601DS</span>
                                </div>
                                <div className="parg">
                                    <h3>ماشین آلات تسمه‌کش فول اتوماتیک</h3>
                                    <h3>Full Automatic Strapping Machines</h3>
                                    <ul>
                                        <li>Electronic tension control</li>
                                        <li>Auto strap feeding</li>
                                        <li>Auto strap ejector</li>
                                        <li>Short feed sensor</li>
                                        <li>Auto strap refeed</li>
                                        <li>Multiple methods of cycle initiation</li>
                                        <li>Table without free roller</li>
                                        <li>Stainless steel Frame SUS 304</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card">
                                <div className="img-cntinr">
                                    <img alt="transpak" src="image/mark.png"></img>
                                    <img src="image/0037 1.png" alt="ماشین آلات تسمه‌کش فول اتوماتیک Full Automatic Strapping Machines"></img>
                                </div>
                                <div className="dtil">
                                    <span>TP-6000 </span>
                                </div>
                                <div className="parg">
                                    <h3>ماشین آلات تسمه‌کش فول اتوماتیک</h3>
                                    <h3>Full Automatic Strapping Machines</h3>
                                    <ul>
                                        <li>Lubrication free strapping head</li>
                                        <li>External mechanical tension control</li>
                                        <li>Multiple methods of cycle initiation</li>
                                        <li>Smoke exhaust system with carbon filter</li>
                                        <li>Table without  free roller</li>
                                        <li>PU casters (2 free and 2 with brake)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="download">
                                <a target="_blank" href='03 Fully Automatic (01_2021).pdf'>دانلود کاتالوگ ماشین‌آلات فول اتوماتیک <span><BsDownload/></span></a>
                            </div>
                        </div>
                    </div>

                    <div className={boxStatus.SemiAutomatic?"dropbox dropboxOpen":"dropbox dropboxClose"}>
                        <div className="btn" onClick={()=>changeStatus('SemiAutomatic')}>
                            <img src="image/arrow.svg" />
                            <p>ماشین آلات تسمه‌کش نیمه اتوماتیک</p>
                        </div>
                        <div className={boxStatus.SemiAutomatic?"cards":"cards close"}>
                            <div className="card">
                                <div className="img-cntinr">
                                    <img alt="transpak" src="image/mark.png"></img>
                                    <img src="image/0032 1.png" alt="ماشین آلات تسمه‌کش نیمه اتوماتیک Semi-automatic Strapping Machines"></img>
                                </div>
                                <div className="dtil">
                                    <span>TP-202</span>
                                </div>
                                <div className="parg">
                                    <h3>ماشین آلات تسمه‌کش نیمه اتوماتیک</h3>
                                    <h3>Semi-automatic Strapping Machines</h3>
                                    <ul>
                                        <li>Engineering standard and simple design</li>
                                        <li>Easy operation, simple maintenance</li>
                                        <li>Hinged stainless steel top plate</li>
                                        <li>Rigid castors with brake</li>
                                        <li>Energy efficient, motor only runs as needed</li>
                                        <li>Affordable for every budget</li>
                                        <li>Proven quality</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card">
                                <div className="img-cntinr">
                                    <img alt="transpak" src="image/mark.png"></img>
                                    <img src="image/0034 1.png" alt="ماشین آلات تسمه‌کش نیمه اتوماتیک Semi-automatic Strapping Machines"></img>
                                </div>
                                <div className="dtil">
                                    <span>TP-501</span>
                                </div>
                                <div className="parg">
                                    <h3>ماشین آلات تسمه‌کش نیمه اتوماتیک</h3>
                                    <h3>Semi-automatic Strapping Machines</h3>
                                    <ul>
                                        <li>Compact mechanical strapping head</li>
                                        <li>Electronic tension control</li>
                                        <li>Jog switch</li>
                                        <li>Adjustable weld-cooling time</li>
                                        <li>Adjustable table height between 780 mm and 950 mm</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="download">
                                <a target="_blank" href='04 Semi Automatic.pdf'>دانلود کاتالوگ ماشین‌آلات نیمه اتوماتیک <span><BsDownload/></span></a>
                            </div>
                        </div>
                    </div>

                    <div className={boxStatus.Manual?"dropbox dropboxOpen":"dropbox dropboxClose"}>
                        <div className="btn" onClick={()=>changeStatus('Manual')}>
                            <img src="image/arrow.svg" />
                            <p>ملزومات تسمه‌کشی دستی</p>
                        </div>
                        <div className={boxStatus.Manual?"cards":"cards close"}>
                            <div className="card">
                                <div className="img-cntinr">
                                    <img src="image/0026.png" alt="ملزومات تسمه‌کشی دستی"></img>
                                </div>
                                <div className="dtil">
                                </div>
                                <div className="parg">
                                    <h3></h3>
                                    <h3>Tensioner for PET & heavy duty PP strapping</h3>
                                    <ul>
                                        <li>Strap width: 12 mm-19 mm</li>
                                        <li>20 pcs / carton</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img-cntinr">
                                    <img src="image/0024.png" alt="ملزومات تسمه‌کشی دستی"></img>
                                </div>
                                <div className="dtil">
                                </div>
                                <div className="parg">
                                    <h3></h3>
                                    <h3>Sealer for PET & heavy duty PP strapping</h3>
                                    <ul>
                                        <li>Offset grip</li>
                                        <li>For use with serrated seals</li>
                                        <li>Handle length 460 mm</li>
                                        <li>Strap width: 12 mm, 16 mm</li>
                                        <li>10 pcs / carton</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img-cntinr">
                                    <img src="image/0023.png" alt="ملزومات تسمه‌کشی دستی"></img>
                                </div>
                                <div className="dtil">
                                </div>
                                <div className="parg">
                                <h3></h3>
                                    <h3>Strap dispenser for plastic and steel strapping</h3>
                                    <ul>
                                        <li>For both plastic and oscillated wound steel strapping</li>
                                        <li>Robust design for heavy duty use</li>
                                        <li>Strap core I.D. 406 mm</li>
                                        <li>Face 75 mm or 150 mm</li>
                                        <li>1 pc / carton</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={boxStatus.Pneumatic?"dropbox dropboxOpen":"dropbox dropboxClose"}>
                        <div className="btn" onClick={()=>changeStatus('Pneumatic')}>
                            <img src="image/arrow.svg" />
                            <p> تسمه‌کش‌های ویبراتوری دستی</p>
                        </div>
                        <div className={boxStatus.Pneumatic?"cards":"cards close"}>
                            <div className="card card2">
                                <div className="img-cntinr">
                                    <img src="image/0027.png" alt=" تسمه‌کش‌های ویبراتوری دستی"></img>
                                </div>
                                <div className="dtil">
                                </div>
                                <div className="parg2">
                                    <h3>BATTERY POWERED TOOL FOR PLASTIC STRAPPING</h3>
                                    <p>Kronos H-46 is a world-class battery powered strapping tool with superior features and performance. It can meet most of the strapping requirements for every application. Kronos H-46 is equipped with German-made brushless DC motor to provide the highest level of accuracy and reliability. </p>
                                </div>
                            </div>
                            <img className="att-card2" src="image/0028 1.png" alt="Pneumatic Strapping Devices"/>
                        </div>
                    </div>

                </section>
                <div className="videoContnr">
                    <h2>راه‌اندازی دستگاه‌های تسمه‌کش در صنعت‌های مختلف توسط راسا پلیمر</h2>
                    <div className="videos">
                        {
                            videosState.map(i=>{
                                return(
                                    <div className="video" onClick={()=>setPlayer({src:i.src,title:i.title,play:true})}>
                                        <h6>{i.title}</h6>
                                        <span><BsPlayCircleFill/></span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        Player.play?
                        <div className="PopPlay">
                            <div className="closer" onClick={()=>setPlayer({...Player,play:false})}>
                            </div>
                            <div className="videoPlayer">
                                <video autoPlay src={"video/"+Player.src}></video>

                            </div>

                        </div>
                        :null
                    }
                </div>
                <Footer/>
            </main>
        </>
    )
}

export default MachineryPg