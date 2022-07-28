import React from "react";
import {Helmet} from "react-helmet";

import {
    HomeMain,
    HomeServices,
    HomeFeedbacks,
    HomeConnect,
    HomePaymentsModels,
    HomeSuccessBusiness,
    HomeSteps,
    HomeCooperation,
    HomeEmail,
} from "../components";

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Vhosty | Главная</title>
            </Helmet>

            <HomeMain />

            <HomeServices />

            {/* <HomeFeedbacks /> */}

            <HomeConnect />

            <HomePaymentsModels />

            <HomeSuccessBusiness />

            <HomeSteps />

			{/* <HomeCooperation /> */}
			
			<HomeEmail />
        </>
    );
};

export default Home;
