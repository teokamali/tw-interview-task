export type TSeries = {
   id: number;
   title_fa: string;
   title_en: string;
   cover: string;
   mobileCover: string;
   logo: string;
   hasNBClogo: boolean;
   satisfaction_rate: number;
   IMDB_rating: number;
   duration: number; //in minutes
   release_year: number;
   last_session_release_year: number;
   isFinished: boolean;
   country: string[];
   total_sessions: number;
   total_episodes: number;
   persian_dub: boolean;
   age_restriction: string;
   tags: string[];
   description: string;
   seasons: TSeason[];
};

export type TSeason = {
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

const mockSessions: TSeason[] = [
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
   title_fa: "هانیبال",
   title_en: "Hannibal",
   cover: "/images/hannibal-cover.png",
   mobileCover: "/images/hannibal-cover-mobile.png",
   logo: "/images/hannibal-logo.png",
   hasNBClogo: true,
   satisfaction_rate: 85,
   IMDB_rating: 8.4,
   duration: 45,
   release_year: 2017,
   last_session_release_year: 2020,
   isFinished: true,
   country: ["آمریکا"],
   total_sessions: 5,
   total_episodes: 50,
   persian_dub: true,
   age_restriction: "مناسب برای بالای ۱۸ سال",
   tags: ["روانشناسی", "وحشت", "علمی تخیلی", "دلهره‌آور"],
   seasons: mockSessions,
   description:
      "ویل گراهام ، یک متخصص جنایی FBI ، توانایی غیرقابل انکار و همدردی با دکتر هانیبال لکر ، روانپزشک پزشکی قانونی را دارد. با این حال ، او از این که آدمخوار است آگاهی ندارد و ویل گراهام",
};
