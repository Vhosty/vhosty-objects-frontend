import React from "react";
import {NavLink} from "react-router-dom";

const CabinetMenu: React.FC = () => {
    const sections: {title: string; icon: React.ReactNode; to: string}[] = [
        {
            title: "Главная",
            icon: (
                <svg
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M21.125 7.00878V18.7678C21.1244 19.3941 20.8872 19.9946 20.4653 20.4374C20.0435 20.8803 19.4716 21.1294 18.875 21.13H16.5C16.1022 21.13 15.7206 20.9641 15.4393 20.6687C15.158 20.3734 15 19.9729 15 19.5552V15.2245C15 15.0157 15 15.2245 15 14.6677C15 14.1445 15.1989 14.1732 15 14.1732V11.5485C14.8011 11.5485 7 11.5485 7 11.5485C7 11.5485 7 15.0142 7 15.2231V19.5538C7 19.9714 6.84196 20.372 6.56066 20.6673C6.27936 20.9626 5.89782 21.1286 5.5 21.1286L3.125 21.13C2.52845 21.1294 1.9565 20.8803 1.53467 20.4374C1.11284 19.9946 0.875596 19.3941 0.875 18.7678V7.00878C0.875561 6.73684 0.942869 6.46965 1.07043 6.23297C1.19799 5.9963 1.3815 5.79813 1.60325 5.6576L10.2282 0.224542C10.4614 0.077615 10.7282 0 11.0002 0C11.2721 0 11.539 0.077615 11.7721 0.224542L20.3971 5.6576C20.6188 5.79818 20.8022 5.99637 20.9297 6.23304C21.0572 6.46971 21.1245 6.73688 21.125 7.00878Z" />
                </svg>
            ),
            to: "main",
        },

        {
            title: "Аккаунт",
            icon: (
                <svg
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M20.7138 8.4801L18.4805 7.81344C18.3261 7.27431 18.1137 6.7535 17.8471 6.2601L18.9405 4.21344C18.9815 4.13618 18.9965 4.04776 18.9833 3.96129C18.9701 3.87482 18.9294 3.79492 18.8671 3.73344L17.2738 2.13344C17.2123 2.07121 17.1324 2.03048 17.0459 2.01727C16.9595 2.00406 16.8711 2.01908 16.7938 2.0601L14.7605 3.14677C14.2622 2.86721 13.7346 2.64363 13.1871 2.4801L12.5205 0.273436C12.4923 0.192113 12.439 0.121835 12.3683 0.0727166C12.2976 0.0235985 12.2132 -0.00182616 12.1271 0.000102112H9.8738C9.78723 0.000505162 9.70304 0.0285251 9.6335 0.0800842C9.56396 0.131643 9.51268 0.204051 9.48713 0.286769L8.82047 2.48677C8.26848 2.64942 7.73631 2.87302 7.2338 3.15344L5.2338 2.07344C5.15655 2.03241 5.06812 2.01739 4.98166 2.0306C4.89519 2.04381 4.81528 2.08455 4.7538 2.14677L3.1338 3.72677C3.07158 3.78825 3.03084 3.86815 3.01763 3.95462C3.00442 4.04109 3.01944 4.12951 3.06047 4.20677L4.14047 6.20677C3.86051 6.70716 3.63692 7.23707 3.4738 7.78677L1.26714 8.45344C1.18442 8.47898 1.11201 8.53026 1.06045 8.5998C1.00889 8.66935 0.980872 8.75353 0.980469 8.8401V11.0934C0.980872 11.18 1.00889 11.2642 1.06045 11.3337C1.11201 11.4033 1.18442 11.4546 1.26714 11.4801L3.48713 12.1468C3.65203 12.6873 3.87559 13.2082 4.1538 13.7001L3.06047 15.7934C3.01944 15.8707 3.00442 15.9591 3.01763 16.0456C3.03084 16.1321 3.07158 16.212 3.1338 16.2734L4.72713 17.8668C4.78862 17.929 4.86852 17.9697 4.95499 17.9829C5.04146 17.9961 5.12988 17.9811 5.20713 17.9401L7.26713 16.8401C7.75444 17.1031 8.26848 17.3131 8.80047 17.4668L9.46713 19.7134C9.49268 19.7962 9.54395 19.8686 9.6135 19.9201C9.68304 19.9717 9.76723 19.9997 9.8538 20.0001H12.1071C12.1937 19.9997 12.2779 19.9717 12.3474 19.9201C12.417 19.8686 12.4683 19.7962 12.4938 19.7134L13.1605 17.4601C13.6879 17.3057 14.1974 17.0956 14.6805 16.8334L16.7538 17.9401C16.8311 17.9811 16.9195 17.9961 17.0059 17.9829C17.0924 17.9697 17.1723 17.929 17.2338 17.8668L18.8271 16.2734C18.8894 16.212 18.9301 16.1321 18.9433 16.0456C18.9565 15.9591 18.9415 15.8707 18.9005 15.7934L17.7938 13.7268C18.0587 13.2419 18.271 12.7301 18.4271 12.2001L20.6738 11.5334C20.7565 11.5079 20.8289 11.4566 20.8805 11.3871C20.932 11.3175 20.9601 11.2333 20.9605 11.1468V8.87344C20.9644 8.79054 20.9429 8.70842 20.8988 8.63811C20.8547 8.5678 20.7901 8.51266 20.7138 8.4801ZM11.0005 13.6668C10.2753 13.6668 9.56636 13.4517 8.96338 13.0488C8.3604 12.6459 7.89043 12.0733 7.61291 11.4033C7.33539 10.7333 7.26278 9.99604 7.40426 9.28477C7.54573 8.57351 7.89495 7.92017 8.40774 7.40738C8.92053 6.89459 9.57387 6.54537 10.2851 6.40389C10.9964 6.26241 11.7336 6.33502 12.4036 6.61254C13.0736 6.89007 13.6463 7.36003 14.0492 7.96301C14.4521 8.56599 14.6671 9.2749 14.6671 10.0001C14.6671 10.9726 14.2808 11.9052 13.5932 12.5928C12.9056 13.2805 11.9729 13.6668 11.0005 13.6668Z" />
                </svg>
            ),
            to: "setting",
        },

        {
            title: "Объекты",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M6.30801 10.4517C5.14758 9.29117 5.03981 7.47065 5.98457 6.1875H2.73437C1.67467 6.1875 0.8125 7.04967 0.8125 8.10937V22.0781C0.8125 23.1378 1.67467 23.9999 2.73437 23.9999H9.67184C10.7315 23.9999 11.5937 23.1378 11.5937 22.0781V14.5443C10.7814 14.503 10.0235 14.1671 9.44412 13.5878L6.30801 10.4517Z" />
                    <path d="M23.1804 18.3924L22.7804 16.1869L21.2235 15.4137L20.8746 14.2811L19.742 13.9322L19.3932 12.7997L18.2606 12.4508L17.9117 11.3183L16.1935 9.60007C16.2209 9.53698 16.2462 9.47323 16.2705 9.4092L16.8353 8.84445C17.5675 8.11222 17.5675 6.92502 16.8353 6.19279L13.6992 3.05672C13.2002 2.55774 12.49 2.39911 11.8565 2.58019C12.2811 3.32414 12.524 4.18458 12.524 5.10079C12.524 5.90479 12.3319 6.70597 11.9686 7.41767C11.8443 7.66109 11.5975 7.8012 11.3418 7.80125C11.2342 7.80125 11.125 7.7765 11.0226 7.72419C10.6767 7.54761 10.5395 7.1241 10.7161 6.77825C10.9825 6.25626 11.1177 5.69188 11.1177 5.10084C11.1177 4.48851 10.9671 3.91097 10.7023 3.40195L7.29917 6.80511C6.56694 7.53734 6.56694 8.72454 7.29917 9.45677L10.4353 12.5929C11.1675 13.3251 12.3547 13.3251 13.0869 12.5929L13.6517 12.0281C13.7158 12.0038 13.7795 11.9785 13.8426 11.9511L20.4295 18.538L22.6356 18.9375C22.9576 18.9957 23.2388 18.7145 23.1804 18.3924V18.3924Z" />
                    <path d="M11.8587 2.58084C10.9797 1.04062 9.32152 0 7.42477 0C4.71084 0 2.48545 2.13023 2.33203 4.80638C2.4637 4.79044 2.59748 4.7813 2.73338 4.7813H3.74428C3.90722 2.89322 5.49511 1.40625 7.42477 1.40625C8.84995 1.40625 10.0884 2.2178 10.7046 3.40256L11.0498 3.05737C11.283 2.82412 11.5625 2.6655 11.8587 2.58084V2.58084Z" />
                </svg>
            ),
            to: "objects",
        },

        // {
        //     title: "Сообщения",
        //     icon: (
        //         <svg
        //             viewBox="0 0 24 24"
        //             fill="none"
        //             xmlns="http://www.w3.org/2000/svg"
        //         >
        //             <path d="M19.3455 22.7305C19.5512 22.7305 19.7543 22.8088 19.9087 22.9579C20.8961 23.9114 22.3364 24.2289 23.6168 23.8315C22.7928 22.1148 22.6786 20.1481 23.3172 18.3272C24.1096 16.0616 24.3082 13.7907 23.4063 11.5132C22.614 9.51246 21.0849 7.85022 19.1498 6.90234C19.2688 7.53704 19.3288 8.18373 19.3288 8.83725C19.3289 11.6112 18.2622 14.2202 16.3254 16.1837C14.3884 18.1474 11.7919 19.2516 9.01429 19.2929C8.49823 19.301 7.98448 19.2706 7.47656 19.2037C9.00312 21.8795 11.8822 23.6222 15.0459 23.6691C16.4299 23.6905 17.7587 23.4006 18.9963 22.8096C19.1077 22.7563 19.2271 22.7305 19.3455 22.7305Z" />
        //             <path d="M9.03549 0.00176341C4.10801 -0.0960782 0.0119079 3.89018 2.67186e-05 8.81659C-0.00288417 10.0202 0.232066 11.1872 0.698403 12.2852C0.705175 12.3012 0.711472 12.3174 0.717175 12.3338C1.35573 14.1548 1.24161 16.1214 0.417532 17.8381C1.69803 18.2353 3.13815 17.918 4.12559 16.9645C4.36886 16.7295 4.73284 16.6703 5.03807 16.8162C6.27543 17.4072 7.60446 17.698 8.98838 17.6758C13.8773 17.6032 17.7069 13.7213 17.7069 8.83834C17.7069 4.06192 13.8169 0.0978822 9.03549 0.00176341ZM4.13094 10.1583C3.423 10.1583 2.84908 9.58537 2.84908 8.87861C2.84908 8.17186 3.423 7.59889 4.13094 7.59889C4.83888 7.59889 5.4128 8.17186 5.4128 8.87861C5.41274 9.58537 4.83888 10.1583 4.13094 10.1583ZM8.85347 10.1583C8.14553 10.1583 7.57161 9.58537 7.57161 8.87861C7.57161 8.17186 8.14553 7.59889 8.85347 7.59889C9.56141 7.59889 10.1353 8.17186 10.1353 8.87861C10.1353 9.58537 9.56141 10.1583 8.85347 10.1583ZM13.5761 10.1583C12.8681 10.1583 12.2942 9.58537 12.2942 8.87861C12.2942 8.17186 12.8681 7.59889 13.5761 7.59889C14.284 7.59889 14.8579 8.17186 14.8579 8.87861C14.8579 9.58537 14.284 10.1583 13.5761 10.1583Z" />
        //         </svg>
        //     ),
        //     to: "messages",
        // },

        {
            title: "Бронирования",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M21.414 1.50623H20.8875V3.71564C20.8875 4.10395 20.5727 4.41877 20.1844 4.41877C19.7961 4.41877 19.4813 4.10395 19.4813 3.71564V1.50623V0.703125C19.4813 0.314812 19.1664 0 18.7781 0C18.3898 0 18.075 0.314812 18.075 0.703125V1.50623H16.3688V3.71564C16.3688 4.10395 16.0539 4.41877 15.6656 4.41877C15.2773 4.41877 14.9625 4.10395 14.9625 3.71564V1.50623V0.703125C14.9625 0.314812 14.6477 0 14.2594 0C13.8711 0 13.5563 0.314812 13.5563 0.703125V1.50623H11.85V3.71564C11.85 4.10395 11.5352 4.41877 11.1469 4.41877C10.7586 4.41877 10.4438 4.10395 10.4438 3.71564V1.50623V0.703125C10.4438 0.314812 10.1289 0 9.74063 0C9.35231 0 9.0375 0.314812 9.0375 0.703125V1.50623H7.33125V3.71564C7.33125 4.10395 7.01644 4.41877 6.62812 4.41877C6.23981 4.41877 5.925 4.10395 5.925 3.71564V1.50623V0.703125C5.925 0.314812 5.61019 0 5.22188 0C4.83356 0 4.51875 0.314812 4.51875 0.703125V1.50623H2.58591C1.16006 1.50623 0 2.6663 0 4.09219V6.02498H24V4.09219C24 2.6663 22.8399 1.50623 21.414 1.50623Z" />
                    <path d="M0 21.4125C0 22.8384 1.16006 23.9985 2.58591 23.9985H21.414C22.8399 23.9985 24 22.8384 24 21.4125V7.42969H0V21.4125ZM14.2094 19.5297C14.2094 19.918 13.8945 20.2328 13.5062 20.2328H10.4937C10.1054 20.2328 9.79055 19.918 9.79055 19.5297V16.5172C9.79055 16.1289 10.1054 15.8141 10.4937 15.8141H13.5062C13.8945 15.8141 14.2094 16.1289 14.2094 16.5172V19.5297ZM16.1922 10.4922C16.1922 10.1039 16.507 9.78909 16.8953 9.78909H19.9078C20.2961 9.78909 20.6109 10.1039 20.6109 10.4922V13.5047C20.6109 13.893 20.2961 14.2078 19.9078 14.2078H16.8953C16.507 14.2078 16.1922 13.893 16.1922 13.5047V10.4922ZM16.1922 16.5172C16.1922 16.1289 16.507 15.8141 16.8953 15.8141H19.9078C20.2961 15.8141 20.6109 16.1289 20.6109 16.5172V19.5297C20.6109 19.918 20.2961 20.2328 19.9078 20.2328H16.8953C16.507 20.2328 16.1922 19.918 16.1922 19.5297V16.5172ZM9.90525 11.5013C10.1798 11.2267 10.625 11.2267 10.8996 11.5013L11.4675 12.0692L13.1004 10.4363C13.375 10.1617 13.8202 10.1616 14.0948 10.4363C14.3694 10.7108 14.3694 11.156 14.0948 11.4306L11.9648 13.5608C11.8329 13.6926 11.6541 13.7667 11.4676 13.7667C11.2811 13.7667 11.1023 13.6927 10.9704 13.5608L9.9053 12.4956C9.63066 12.2211 9.63066 11.7758 9.90525 11.5013ZM3.38902 10.4922C3.38902 10.1039 3.70383 9.78909 4.09214 9.78909H7.1047C7.49302 9.78909 7.80783 10.1039 7.80783 10.4922V13.5047C7.80783 13.893 7.49302 14.2078 7.1047 14.2078H4.09214C3.70383 14.2078 3.38902 13.893 3.38902 13.5047V10.4922ZM3.38902 16.5172C3.38902 16.1289 3.70383 15.8141 4.09214 15.8141H7.1047C7.49302 15.8141 7.80783 16.1289 7.80783 16.5172V19.5297C7.80783 19.918 7.49302 20.2328 7.1047 20.2328H4.09214C3.70383 20.2328 3.38902 19.918 3.38902 19.5297V16.5172Z" />
                </svg>
            ),
            to: "reserv",
        },

        {
            title: "Финансы",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M21.414 1.50623H20.8875V3.71564C20.8875 4.10395 20.5727 4.41877 20.1844 4.41877C19.7961 4.41877 19.4813 4.10395 19.4813 3.71564V1.50623V0.703125C19.4813 0.314812 19.1664 0 18.7781 0C18.3898 0 18.075 0.314812 18.075 0.703125V1.50623H16.3688V3.71564C16.3688 4.10395 16.0539 4.41877 15.6656 4.41877C15.2773 4.41877 14.9625 4.10395 14.9625 3.71564V1.50623V0.703125C14.9625 0.314812 14.6477 0 14.2594 0C13.8711 0 13.5563 0.314812 13.5563 0.703125V1.50623H11.85V3.71564C11.85 4.10395 11.5352 4.41877 11.1469 4.41877C10.7586 4.41877 10.4438 4.10395 10.4438 3.71564V1.50623V0.703125C10.4438 0.314812 10.1289 0 9.74063 0C9.35231 0 9.0375 0.314812 9.0375 0.703125V1.50623H7.33125V3.71564C7.33125 4.10395 7.01644 4.41877 6.62812 4.41877C6.23981 4.41877 5.925 4.10395 5.925 3.71564V1.50623V0.703125C5.925 0.314812 5.61019 0 5.22188 0C4.83356 0 4.51875 0.314812 4.51875 0.703125V1.50623H2.58591C1.16006 1.50623 0 2.6663 0 4.09219V6.02498H24V4.09219C24 2.6663 22.8399 1.50623 21.414 1.50623Z" />
                    <path d="M0 21.4125C0 22.8384 1.16006 23.9985 2.58591 23.9985H21.414C22.8399 23.9985 24 22.8384 24 21.4125V7.42969H0V21.4125ZM14.2094 19.5297C14.2094 19.918 13.8945 20.2328 13.5062 20.2328H10.4937C10.1054 20.2328 9.79055 19.918 9.79055 19.5297V16.5172C9.79055 16.1289 10.1054 15.8141 10.4937 15.8141H13.5062C13.8945 15.8141 14.2094 16.1289 14.2094 16.5172V19.5297ZM16.1922 10.4922C16.1922 10.1039 16.507 9.78909 16.8953 9.78909H19.9078C20.2961 9.78909 20.6109 10.1039 20.6109 10.4922V13.5047C20.6109 13.893 20.2961 14.2078 19.9078 14.2078H16.8953C16.507 14.2078 16.1922 13.893 16.1922 13.5047V10.4922ZM16.1922 16.5172C16.1922 16.1289 16.507 15.8141 16.8953 15.8141H19.9078C20.2961 15.8141 20.6109 16.1289 20.6109 16.5172V19.5297C20.6109 19.918 20.2961 20.2328 19.9078 20.2328H16.8953C16.507 20.2328 16.1922 19.918 16.1922 19.5297V16.5172ZM9.90525 11.5013C10.1798 11.2267 10.625 11.2267 10.8996 11.5013L11.4675 12.0692L13.1004 10.4363C13.375 10.1617 13.8202 10.1616 14.0948 10.4363C14.3694 10.7108 14.3694 11.156 14.0948 11.4306L11.9648 13.5608C11.8329 13.6926 11.6541 13.7667 11.4676 13.7667C11.2811 13.7667 11.1023 13.6927 10.9704 13.5608L9.9053 12.4956C9.63066 12.2211 9.63066 11.7758 9.90525 11.5013ZM3.38902 10.4922C3.38902 10.1039 3.70383 9.78909 4.09214 9.78909H7.1047C7.49302 9.78909 7.80783 10.1039 7.80783 10.4922V13.5047C7.80783 13.893 7.49302 14.2078 7.1047 14.2078H4.09214C3.70383 14.2078 3.38902 13.893 3.38902 13.5047V10.4922ZM3.38902 16.5172C3.38902 16.1289 3.70383 15.8141 4.09214 15.8141H7.1047C7.49302 15.8141 7.80783 16.1289 7.80783 16.5172V19.5297C7.80783 19.918 7.49302 20.2328 7.1047 20.2328H4.09214C3.70383 20.2328 3.38902 19.918 3.38902 19.5297V16.5172Z" />
                </svg>
            ),
            to: "finance",
        },
    ];

    return (
        <div className="cabinet-menu">
            {sections.map((item, index) => (
                <NavLink
                    to={`/cabinet/${item.to}`}
                    className={({isActive}) =>
                        `cabinet-menu-item ${isActive ? "active" : ""}`
                    }
                    key={`cabinet-menu-item-${index}`}
                >
                    <div className="cabinet-menu-item-icon">{item.icon}</div>

                    <p className="cabinet-menu-item__title">{item.title}</p>
                </NavLink>
            ))}
        </div>
    );
};

export default CabinetMenu;
