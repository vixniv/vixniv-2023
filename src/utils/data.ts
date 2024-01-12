const noImage = {
  url: "",
  width: 0,
  ratio: 0,
};

export const commands = [
  {
    command: "/start",
    response: [
      {
        image: {
          url: "/assets/patrick-say-hi.gif",
          width: 480,
          ratio: 0.75,
        },
        message: ``,
      },
      {
        image: noImage,
        message: `Hi! thank you for stopping by 🍪
You can explore this web by **typing** or **clicking** the commands below:

/help - to see the available commands
/back - back to previous state
        
/about - things about me
/work - some of the works I've done
/contact - how to contact me

/books - the books I have read
/stack - technology that I use
/inspiration - web that I can see for my design reference
/logs - progress of this web
/credit - a little story of this web`,
      },
    ],
  },
  {
    command: "/help",
    response: [
      {
        image: noImage,
        message: `these are the available commands:

/help - to see the available commands
/back - back to previous state
        
/about - things about me
/work - some of the works I've done
/contact - how to contact me

/books - the books I have read
/stack - technology that I use
/inspiration - web that I can see for my design reference
/logs - progress of this web
/credit - a little story of this web`,
      },
    ],
  },
  {
    command: "/back",
    response: [
      {
        image: {
          url: "/assets/i-am-back.gif",
          width: 480,
          ratio: 0.75,
        },
        message: ``,
      },
    ],
  },
  {
    command: "/about",
    response: [
      {
        image: {
          url: "/assets/nice-to-meet-you.gif",
          width: 320,
          ratio: 0.7625,
        },
        message: ``,
      },
      {
        image: noImage,
        message: `It's a little strange to tell about myself without being in a conversation. But my name is Yoram, a.k.a Vixniv as my pseudonym. I am a UX Designer and Software Engineer based in mostly sunny ☀ Jakarta, ID. 
        
Currently I am designing and developing web for clients around the world. So if you have any offer, feel free to /contact me`,
      },
    ],
  },
  {
    command: "/work",
    response: [
      {
        image: noImage,
        message: `Since some of my works are under the NDA agreement, these are some of my works that are allowed to be published:
![1. UTItreatment (2023) - 🔮 Design](1)
![2. ThriftHouse (2022) - 📦 Development](2)
![3. AGM Table Service Guest Management System (2022) - 🔮 Design](3)
![4. Promised (2022) - 📦 Development](4)
![5. FeedIn (2022) - 🔮 Design](5)
![6. Laura Dahrendorf (2022) - 🔮 Design](6)
![7. Headsets (2022) - 🔮 Design](7)
![8. Denali Strength (2020) - 🔮 Design](8)

For more design and development works, you can check my [Dribbble](https://dribbble.com/vixniv), [Savee.it](https://savee.it/vixniv) or [Github](https://github.com/vixniv)
`,
      },
      {
        image: noImage,
        message: `If you have done seeing my works, use command /back to run another commands`,
      },
    ],
  },
  {
    command: "/contact",
    response: [
      {
        image: noImage,
        message: `If you have questions or project offers, you can contact me at hello@vixniv.com`,
      },
      {
        image: noImage,
        message: `or you just want to follow me on [X (twitter)](https://twitter.com/vixniv) even though I&apos;m no longer use social media since pandemic`,
      },
    ],
  },
  {
    command: "/books",
    response: [
      {
        image: noImage,
        message: `I often borrow books at the national library in my town, so these are the books I have read as far I remember:
1. **Deep Work** by Cal Newport
2. **Digital Minimalism** by Cal Newport
3. **The Psychology of Money** by Morgan Housel
4. **Atomic Habits** by James Clear
5. **How to Win Friends and Influence People** by Dale Carnegie
6. **The Power of Habit** by Charles Duhigg
7. **How to Live 24 Hours a Day** by Arnold Bennett
8. **Rich Dad Poor Dad** by Robert T. Kiyosaki
9. **Think and Grow Rich** by Napoleon Hill
10. **Fix Your Bad Habits** by Retno D. N.
11. **Sapiens** by Yuval Noah Harari
12. **The Subtle Art of Not Giving a F\*ck** by Mark Manson
13. **Everything is F*cked** by Mark Manson
14. **The 4-Hour Workweek** by Timothy Ferriss
15. **GRIT** by Angela Duckworth
16. **The 5 Second Rule** by Mel Robbins
17. **Eat That Frog** by Brian Tracy
`,
      },
    ],
  },
  {
    command: "/stack",
    response: [
      {
        image: noImage,
        message: `This is the tech stack that I use: Javascript, Typescript, ReactJs, Redux, NextJs, MongoDB, PostgreSQL, GraphQL, NodeJs, ExpressJs, HTML, CSS, Tailwinds, Git, Golang (currently learning)`,
      },
    ],
  },
  {
    command: "/inspiration",
    response: [
      {
        image: noImage,
        message: `These are the web that I think is really good to provide the best quality of design: [godly.website](https://godly.website/)  [land-book](https://land-book.com/)  [awwwards](https://awwwards.com/)  [uijar](https://uijar.com/)  [mobbin](https://mobbin.com/)  [curated.design](https://curated.design/)  [savee.it](https://savee.it/)  [dribbble](https://dribbble.com/)`,
      },
    ],
  },
  {
    command: "/logs",
    response: [
      {
        image: noImage,
        message: `23/07/2023 - The first deployed of the web
12/01/2024 - Touched the code again because I found some bugs`,
      },
    ],
  },
  {
    command: "/credit",
    response: [
      {
        image: noImage,
        message: `© Made in 2023 using [T3 Stack](https://create.t3.gg/) to replace my old web, although I haven't used all the features yet 😭`,
      },
      {
        image: noImage,
        message: `My motivation to make this web was actually to submit it to the website on /inspiration`,
      },
      {
        image: noImage,
        message: `😬😬`,
      },
    ],
  },
];

export const workList = [
  {
    id: 1,
    response: [
      {
        image: {
          url: "/assets/UTItreatment.png",
          width: 1440,
          ratio: 2.4340277777777777,
        },
        message: `UTItreatment is a Telehealth business where patients who have UTIs can come to them (only females) and get a prescription sent to their local pharmacy for pick up.
        
As a solo designer, the goal is to modernize the website but still maintain the femininity of the design.`,
      },
    ],
  },
  {
    id: 2,
    response: [
      {
        image: {
          url: "/assets/ThriftHouse-1.png",
          width: 1440,
          ratio: 2.5875,
        },
        message: `With 3 frontend engineers, 4 backend engineers, and 4 ux designers, we create a marketplace that connects sellers and buyers of used goods with the fashion goods market segmentation.

The technologies used in this project are Java and React.`,
      },
      {
        image: {
          url: "/assets/ThriftHouse-2.png",
          width: 1440,
          ratio: 2.3777777777777778,
        },
        message: ``,
      },
    ],
  },
  {
    id: 3,
    response: [
      {
        image: {
          url: "/assets/AGM-1.png",
          width: 1366,
          ratio: 0.7496339677891655,
        },
        message: `AGM is used for table service guest management system. Following with the ionic framework, the task to simplified the old design with the minimal and clean looks.`,
      },
      {
        image: {
          url: "/assets/AGM-2.png",
          width: 1500,
          ratio: 1.53,
        },
        message: `The visualised concept`,
      },
    ],
  },
  {
    id: 4,
    response: [
      {
        image: {
          url: "/assets/Promised-1.png",
          width: 1440,
          ratio: 3.1131944444444444,
        },
        message: `Holding a wedding is a very confusing and exhausting thing. We have to arrange everything needed in marriage down to the smallest detail. Therefore, we created a website that helps couples who want to get married easily. We connect couples and vendors to hold the wedding of their dreams.
        
Promised is a wedding event organizer app that built with Javascript, Jquery, HTML and CSS by 5 Software Engineer and 3 UX designer.`,
      },
      {
        image: {
          url: "/assets/Promised-2.png",
          width: 1440,
          ratio: 1.5784722222222223,
        },
        message: ``,
      },
      {
        image: {
          url: "/assets/Promised-3.png",
          width: 1440,
          ratio: 2.032638888888889,
        },
        message: ``,
      },
    ],
  },
  {
    id: 5,
    response: [
      {
        image: {
          url: "/assets/FeedIn.png",
          width: 1440,
          ratio: 2.1277777777777778,
        },
        message: `FeedIn is a survey company with various target audiences from companies, organizations, and brands that are interested in what the consumer feel and think about their products.
        
The target for the design is to make it easy to use and have some gamification feature.`,
      },
    ],
  },
  {
    id: 6,
    response: [
      {
        image: {
          url: "/assets/Laura-Dahrendorf.png",
          width: 1440,
          ratio: 2.9784722222222224,
        },
        message: `The personal website for a photographer in Berlin, Germany. The modern and nice layout photography to help her to show and promote her works.`,
      },
    ],
  },
  {
    id: 7,
    response: [
      {
        image: {
          url: "/assets/Headsets.png",
          width: 1440,
          ratio: 3.1972222222222224,
        },
        message: `The company sell office headsets to B2B customers with the target audience is anyone who talks on the phone at work. The website has a new product line-up and need a design to increase the marketing of the new headset.`,
      },
    ],
  },
  {
    id: 8,
    response: [
      {
        image: {
          url: "/assets/Denali-Strength.png",
          width: 1440,
          ratio: 3.1958333333333333,
        },
        message: `Denali Strength is a community, subscription service with a low monthly cost to increase accessibility and transform lives.
        
The goal of the design is to elaborate the mission into the design and guide the potensial user to subscribe to the service.`,
      },
    ],
  },
];
