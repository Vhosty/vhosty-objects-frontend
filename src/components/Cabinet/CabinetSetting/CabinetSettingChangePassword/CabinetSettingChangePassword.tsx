import React from "react";
import {Link} from 'react-router-dom';

const CabinetSettingChangePassword: React.FC = () => {
    return (
        <div className="cabinet-block-setting-change-password">
            <Link
                to="#cabinet_setting_change_password"
                className="cabinet-block-setting-change-password__btn"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M21.7381 2.26179C18.7224 -0.753961 13.8157 -0.753914 10.7999 2.26184C8.73998 4.32176 8.02448 7.35743 8.91642 10.1116L0.206016 18.822C0.0741563 18.9539 0 19.1324 0 19.3192V23.2969C0 23.6855 0.314484 24 0.703125 24H4.68084C4.86759 24 5.04614 23.9259 5.17795 23.794L6.17222 22.799C6.32395 22.6473 6.39811 22.4344 6.37341 22.2209L6.2498 21.1525L7.7302 21.0131C8.06667 20.9815 8.33241 20.7157 8.364 20.3793L8.50341 18.8988L9.57183 19.0231C9.77025 19.0499 9.97008 18.9833 10.1205 18.8501C10.2701 18.7162 10.356 18.5253 10.356 18.3248V17.0156H11.6414C11.8281 17.0156 12.0067 16.9415 12.1385 16.8096L13.9416 15.0304C16.695 15.923 19.6782 15.2614 21.7381 13.2001C24.7539 10.1844 24.7539 5.27754 21.7381 2.26179ZM19.749 7.23382C18.9264 8.05643 17.5888 8.05643 16.7662 7.23382C15.9436 6.41121 15.9436 5.07363 16.7662 4.25102C17.5888 3.42841 18.9264 3.42841 19.749 4.25102C20.5716 5.07363 20.5716 6.41121 19.749 7.23382Z" />
                </svg>
                Изменить пароль
            </Link>
        </div>
    );
};

export default CabinetSettingChangePassword;
