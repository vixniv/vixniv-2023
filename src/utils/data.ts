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
        message: `Hi! thank you for stopping by ✨
You can explore this web by **typing or clicking** the commands below:

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
        message: `It's a little strange to tell about myself without being in a conversation. but my name is Yoram, a.k.a Vixniv as my pseudonym. I am a UX Designer and Software Engineer based in mostly sunny ☀ Jakarta, ID. 
        
Currently I am designing and developing web for clients around the world. So if you have any offer, feel free to /contact me.`,
      },
    ],
  },
  {
    command: "/work",
    response: [
      {
        image: noImage,
        message: `List of work:
![1. Nike - web development](1) Lorem ipsum blabla
![2. Apple - design](2)`,
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
        message: `or if you want to follow me on twitter [@vixniv](https://twitter.com/vixniv) even though I’m no longer use social media since pandemic.`,
      },
    ],
  },
  {
    command: "/books",
    response: [
      {
        image: noImage,
        message: `I often borrow books at the national library in my town, so these are the books I have read as far I remember:
1. Deep Work by Cal Newport
2. Digital Minimalism by Cal Newport`,
      },
    ],
  },
  {
    command: "/stack",
    response: [
      {
        image: noImage,
        message: `This is the tech stack that I use: Javascript, Typescript, ReactJs, Redux, NextJs, MongoDB, PostgreSQL, GraphQL, NodeJs, ExpressJs, HTML, CSS, Tailwinds, Git, Golang (currently learning).`,
      },
    ],
  },
  {
    command: "/inspiration",
    response: [
      {
        image: noImage,
        message: `These are the web that I think is really good to provide the best quality of design: [godly.website](https://godly.website/)  [land-book](https://land-book.com/)  [awwwards](https://awwwards.com/)  [uijar](https://uijar.com/)  [mobbin](https://mobbin.com/)  [curated.design](https://curated.design/)  [savee.it](https://savee.it/)  [dribbble](https://dribbble.com/).`,
      },
    ],
  },
  {
    command: "/logs",
    response: [
      {
        image: noImage,
        message: `20/07/2023 - The first deployed of the web`,
      },
    ],
  },
  {
    command: "/credit",
    response: [
      {
        image: noImage,
        message: `© Made in 2023 using [T3 Stack](https://create.t3.gg/) to replace my old web, although I haven't used all the features yet.`,
      },
      {
        image: noImage,
        message: `My motivation to make this we actually to submit it to [godly.website](https://godly.website/)`,
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
        image: noImage,
        message: `testing...`,
      },
    ],
  },
];
