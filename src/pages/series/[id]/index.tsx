import Container from "@/components/common/container/container";
import SeriesHero from "@/components/singleSeries/seriesHero/seriesHero";
import SeriesSeasonsList from "@/components/singleSeries/seriesSeasonsList/seriesSeasonsList";
import { mockSeries } from "@/mock/mock-series";
import Head from "next/head";

const SingleSeriesPage = () => {
   return (
      <>
         <Head>
            <title>تماشا آنلاین سریال {mockSeries.title_fa} | تلوبیون</title>
            <meta
               name="description"
               content={mockSeries.description}
            />
         </Head>
         <div className="">
            {/* Hero */}
            <SeriesHero {...mockSeries} />

            {/* Seasons */}
            <Container>
               <SeriesSeasonsList
                  seasons={mockSeries.seasons}
                  seriesTitle={mockSeries.title_fa}
               />
            </Container>
         </div>
      </>
   );
};

export default SingleSeriesPage;
