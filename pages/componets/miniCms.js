import { useState } from "react"
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md";


const MiniCms = () =>{
    const [contentData, setContentDdata] = useState([
        {img:'Ellipse 21.jpg',title:'تسمه بسته بندی PET\n(PET Polyester Strap)',content:''},
        {img:'Ellipse 20.jpg',title:'تسمه بسته بندی PP\n(تسمه پلی پروپیلن)',content:'تسمه بسته بندی PP دارای کاربردی وسیع در صنعت بسته بندی می باشد و توانسته است جایگزینی ارزان و اقتصادی برای سایر تسمه های بسته بندی با جنس های متفاوت باشد. تسمه بسته بندی PP در ابعاد و ضخامت های مختلف تولید گردیده و قابل استفاده در انواع دستگاه تسمه کش دستی، تسمه کش نیمه اتوماتیک یا تمام اتوماتیک هستند.'},
        {img:'Ellipse 24.png',title:'دربارهٔ صنعت پلی‌پروپیلن\n(PP Polypropylene)',content:''},
    ])
    const [contectSelect,setContectSelect] = useState(1)

    const selector = (num) =>{
        console.log(contectSelect+num)
        if (contectSelect+num <=2 && contectSelect+num>=0) {
            setContectSelect(contectSelect+num)
        }
    }

    return(
        <div className="minicms">
            <div className="hd">
                <div className="conteiner">
                    <p>درباره صنعت بسته‌بندی بیشتر بدانیم</p>
                </div>
            </div>
            <div className="continertContentCms">
                {
                    contectSelect<=0?
                    <div></div>
                    :
                    <div className="contentSide contentWide" onClick={()=>selector(-1)}>
                        <div className="imgCnt">
                            <img src={'image/'+contentData[contectSelect-1].img}></img>
                        </div>
                        <h4>{contentData[contectSelect-1].title}</h4>
                    </div>
                }
                <div className="contentCenter contentSide">
                    <div className="imgCnt">
                        <img src={'image/'+contentData[contectSelect].img}></img>
                    </div>
                    <h4>{contentData[contectSelect].title}</h4>
                    <p>{contentData[contectSelect].content}</p>
                    <span className="arrLeft" onClick={()=>selector(1)}><MdKeyboardDoubleArrowLeft /></span>
                    <span className="arrRight" onClick={()=>selector(-1)}><MdKeyboardDoubleArrowRight /></span>
                </div>
                {
                    contectSelect>=2?
                    <div></div>
                    :
                    <div className="contentSide contentWide" onClick={()=>selector(1)}>
                        <div className="imgCnt">
                            <img src={'image/'+contentData[contectSelect+1].img}></img>
                        </div>
                        <h4>{contentData[contectSelect+1].title}</h4>
                    </div>
                }

            </div>
        </div>
    )
}


export default MiniCms