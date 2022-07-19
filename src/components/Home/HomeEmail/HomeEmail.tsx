import React from "react";
import {useDispatch} from "react-redux";

import {HomeEmailForm} from "../../";

import HomeEmailBg from "../../../assets/images/main-email-bg.jpg";

import {sendRequestRegisterSupport} from "../../../redux/actions/request_register";

const HomeEmail: React.FC = () => {
    const dispatch = useDispatch();

    const onSubmit = (data: any) => {
        dispatch(sendRequestRegisterSupport(data) as any);
    };

    return (
        <section
            className="home-email"
            style={{backgroundImage: `url('${HomeEmailBg}')`}}
        >
            <div className="container">
                <div className="home-email-wrapper">
                    <HomeEmailForm onSubmit={onSubmit} />
                </div>
            </div>
        </section>
    );
};

export default HomeEmail;
