import React from 'react';
import Footer from '../../../Component/Footer/footer';
import NavBarNew from '../../../Component/NavBar New/navBarNew';
import Sidebar from '../../../Component/Sidebar/sidebar';
import ReferCand from '../../UserPersonalInfo/ReferalCand/referalCand';

export default function userReferal() {

    const referralProgram = () => {
        window.open("/referralInfo", "_blank");
    }
    return (
        <>
            <NavBarNew />
            <div style={{ backgroundColor: "#eeeeee" }}>

                <div className="d-flex justify-content-center">
                    <div className='referral-reward-section'>
                        <div className='container'>
                            <div className='referral-reward'>
                                <span><b>Referral Reward</b> </span><span> - </span><span onClick={referralProgram} style={{ textDecoration: 'underline', cursor: 'pointer', fontWeight: '500' }}>Click here to know more</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container' >
                    <div className='row'>
                        <div className="col-lg-4 pt-lg-4">
                            <Sidebar />
                        </div>

                        <div className="col-lg-8 pt-lg-4">
                            <ReferCand />
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        </>
    )
}