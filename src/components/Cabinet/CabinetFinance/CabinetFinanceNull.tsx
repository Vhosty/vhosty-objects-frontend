import React from "react";
import {Link} from "react-router-dom";

interface CabinetFinanceNullProps {
    title: string;
    link?: string;
}

const CabinetFinanceNull: React.FC<CabinetFinanceNullProps> = ({
    title,
    link,
}) => {
    return (
        <div className="cabinet-block-finance-null">
            <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M62.2222 0H7.77778C3.5 0 0 3.5 0 7.77778V62.2222C0 66.5 3.5 70 7.77778 70H62.2222C66.5 70 70 66.5 70 62.2222V7.77778C70 3.5 66.5 0 62.2222 0ZM38.8889 15.9444L43.1667 11.6667L48.6111 17.1111L54.0556 11.6667L58.3333 15.9444L52.8889 21.3889L58.3333 26.8333L54.0556 31.1111L48.6111 25.6667L43.1667 31.1111L38.8889 26.8333L44.3333 21.3889L38.8889 15.9444ZM12.4444 18.2778H31.8889V24.1111H12.4444V18.2778ZM33.0556 50.5556H25.2778V58.3333H19.4444V50.5556H11.6667V44.7222H19.4444V36.9444H25.2778V44.7222H33.0556V50.5556ZM58.3333 55.2222H38.8889V49.3889H58.3333V55.2222ZM58.3333 45.8889H38.8889V40.0556H58.3333V45.8889Z"
                    fill="#00A0A0"
                    fill-opacity="0.2"
                />
            </svg>

            <p className="cabinet-block-finance-null__title">{title}</p>

            {link ? (
                <Link to="/" className="btn-line cabinet-block-finance-null__link">
                    {link}
                </Link>
            ) : null}
        </div>
    );
};

export default CabinetFinanceNull;
