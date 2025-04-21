export type TSeries = {
   id: number;
   title_fa: string;
   title_en: string;
   cover: string;
   logo: string;
   hasNBClogo: boolean;
   satisfaction_rate: number;
   IMDB_rating: number;
   duration: number; //in minutes
   release_year: number;
   last_session_release_date: string;
   isFinished: boolean;
   country: string;
   total_sessions: number;
   total_episodes: number;
   persian_dub: boolean;
   age_restriction: string;
   tags: string[];
   description: string;
   sessions: TSession[];
};

export type TSession = {
   id: number;
   episodes: TEpisode[];
};
export type TEpisode = {
   id: number;
   cover: string;
   duration: number; //in minutes
   title: string;
   rate: number;
};

const mockSessions: TSession[] = [
   {
      id: 1,
      episodes: [
         {
            id: 1,
            cover: "/images/ep-1.png",
            duration: 60,
            title: "Offred",
            rate: 56,
         },
         {
            id: 2,
            cover: "/images/ep-2.png",
            duration: 55,
            title: "Birth Day",
            rate: 56,
         },
      ],
   },
   {
      id: 2,
      episodes: [
         {
            id: 3,
            cover: "/images/ep-1.png",
            duration: 50,
            title: "Late",
            rate: 56,
         },
         {
            id: 4,
            cover: "/images/ep-3.png",
            duration: 53,
            title: "Nolite Te Bastardes Carborundorum",
            rate: 56,
         },
      ],
   },
];

export const mockSeries: TSeries = {
   id: 1,
   title_fa: "سرگذشت ندیمه",
   title_en: "The Handmaid's Tale",
   cover: "/images/hannibal-cover.png",
   logo: "/images/hannibal-logo.png",
   hasNBClogo: true,
   satisfaction_rate: 85,
   IMDB_rating: 8.4,
   duration: 3600, // Total duration in minutes for all episodes
   release_year: 2017,
   last_session_release_date: "2023-12-15",
   isFinished: false,
   country: "USA",
   total_sessions: 5,
   total_episodes: 50,
   persian_dub: true,
   age_restriction: "18+",
   tags: ["Drama", "Sci-Fi", "Thriller"],
   sessions: mockSessions,
   description:
      "In a dystopian future, women are forced into servitude in a theocratic dictatorship. This is the story of one of them.",
};
