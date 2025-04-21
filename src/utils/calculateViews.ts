export const calculateViews = (views: number) => {
   if (views < 1000) {
      return views.toString();
   }

   const formatter = new Intl.NumberFormat("fa-IR", {
      maximumFractionDigits: 1,
   });

   if (views < 1_000_000) {
      return `${formatter.format(views / 1000)}هزار`;
   }
   return `${formatter.format(views / 1_000_000)} میلیون`;
};
