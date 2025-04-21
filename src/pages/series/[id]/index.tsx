import Container from "@/components/common/container/container";
import SeriesHero from "@/components/singleSeries/seriesHero/seriesHero";
import SeriesSeasonsList from "@/components/singleSeries/seriesSeasonsList/seriesSeasonsList";
import { mockSeries } from "@/mock/mock-series";
const SingleSeriesPage = () => {
   return (
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
   );
};

export default SingleSeriesPage;
