import React from "react";

interface CabinetNullTitle {
    title: string;
}

const CabinetNull: React.FC<CabinetNullTitle> = ({title}) => {
    return (
        <div className="cabinet-block-null">
            <div className="cabinet-block-null-icon">
                <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M77.3438 25.3906C75.7258 25.3906 74.4141 24.0789 74.4141 22.4609V0H32.4219C27.5756 0 23.6328 3.94277 23.6328 8.78906V41.5408C24.598 41.4533 25.5748 41.4062 26.5625 41.4062C36.5484 41.4062 45.4877 45.9719 51.4035 53.125H83.2031C84.8211 53.125 86.1328 54.4367 86.1328 56.0547C86.1328 57.6727 84.8211 58.9844 83.2031 58.9844H55.2633C57.0945 62.5578 58.2754 66.5166 58.6545 70.7031H83.2031C84.8211 70.7031 86.1328 72.0148 86.1328 73.6328C86.1328 75.2508 84.8211 76.5625 83.2031 76.5625H58.6545C57.7783 86.2381 52.6088 94.6926 45.0699 100H91.0156C95.8619 100 99.8047 96.0572 99.8047 91.2109V25.3906H77.3438ZM83.2031 41.4062H40.2344C38.6164 41.4062 37.3047 40.0945 37.3047 38.4766C37.3047 36.8586 38.6164 35.5469 40.2344 35.5469H83.2031C84.8211 35.5469 86.1328 36.8586 86.1328 38.4766C86.1328 40.0945 84.8211 41.4062 83.2031 41.4062Z"
                        fill="#00A0A0"
                        fillOpacity="0.2"
                    />
                    <path
                        d="M80.2734 1.71582V19.5316H98.0881L80.2734 1.71582Z"
                        fill="#00A0A0"
                        fillOpacity="0.2"
                    />
                    <path
                        d="M26.5625 47.2656C12.0236 47.2656 0.195312 59.0939 0.195312 73.6328C0.195312 88.1717 12.0236 100 26.5625 100C41.1014 100 52.9297 88.1717 52.9297 73.6328C52.9297 59.0939 41.1014 47.2656 26.5625 47.2656ZM37.423 80.3504C38.5672 81.4943 38.5672 83.3494 37.423 84.4936C36.8512 85.0654 36.1014 85.3516 35.3516 85.3516C34.6018 85.3516 33.852 85.0654 33.2801 84.4934L26.5625 77.776L19.8449 84.4936C19.273 85.0654 18.5232 85.3516 17.7734 85.3516C17.0236 85.3516 16.2738 85.0654 15.702 84.4934C14.5578 83.3494 14.5578 81.4943 15.702 80.3502L22.4193 73.6328L15.7018 66.9152C14.5576 65.7713 14.5576 63.9162 15.7018 62.7721C16.8457 61.6281 18.7008 61.6281 19.8449 62.7721L26.5625 69.4896L33.2801 62.7721C34.424 61.6281 36.2791 61.6281 37.4232 62.7721C38.5674 63.916 38.5674 65.7711 37.4232 66.9152L30.7057 73.6328L37.423 80.3504Z"
                        fill="#00A0A0"
                        fillOpacity="0.2"
                    />
                </svg>
            </div>
            <p className="cabinet-block-null__text">{title}</p>
        </div>
    );
};

export default CabinetNull;
