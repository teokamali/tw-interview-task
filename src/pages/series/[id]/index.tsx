import SeriesHero from "@/components/singleSeries/seriesHero/seriesHero";
import { mockSeries } from "@/mock/mock-series";
const SingleSeriesPage = () => {
   return (
      <div className="min-h-screen">
         {/* Hero */}
         <SeriesHero {...mockSeries} />

         {/* Sessions */}
      </div>
   );
};

export default SingleSeriesPage;
