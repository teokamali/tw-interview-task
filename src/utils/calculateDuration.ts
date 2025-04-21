export const calculateDuration = (duration: number): string => {
   if (duration < 60) {
      return `${duration} دقیقه`;
   }

   const hours = Math.floor(duration / 60);
   const minutes = duration % 60;

   if (minutes === 0) {
      return `${hours} ساعت`;
   }

   return `${hours} ساعت و ${minutes} دقیقه`;
};
