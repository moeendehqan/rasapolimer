import { useState } from "react"
import Header from "../componets/header"

import Footer from "../componets/footer"

const MachineryPg = () =>{

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
                        <h2>ماشین آلات</h2>
                    </div>
                    <div className="cards">
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
                    </div>
                </section>
                <Footer/>
            </main>
        </>
    )
}

export default MachineryPg