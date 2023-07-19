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
        image: noImage,
        message: `👋`,
      },
      {
        image: {
          url: "/assets/1440x3400.png",
          width: 1440,
          ratio: 2.361111111111111,
        },
        message: `Hi, thank you for stopping by.
You can explore this web by typing or clicking the commands below:

/help - to see the available commands
        
/about - things about me
/work - some of the works I've done
/contact - how to contact me

/books - the books I have read
/chitchat - a little piece of my mind
/stack - technology that I use/inspiration - web that I can see for my design reference
/logs - progress of this web
/credit - just look, but it doesn't really matter
<b>bold></b> - just a test
godly.website
[title](https://www.example.com)
![1. Apple - design](1)`,
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
