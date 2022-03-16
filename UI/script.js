"use strict";
const tweets = [
  {
    id: "t-1",
    text: "Let’s have a break! Go out for #coffee !",
    createdAt: new Date("2022-03-09T09:01:01"),
    author: "Anna",
    comments: [
      {
        id: "t-1 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-09T09:01:05"),
        author: "Boss",
      },
      {
        id: "t-1 c-2",
        text: "Please, bring me latte and cookies. Deadline and Smith are killing me!!!",
        createdAt: new Date("2022-03-09T209:01:06"),
        author: "Neo",
      },
    ],
  },
  {
    id: "t-2",
    text: "Let’s have a break! Go out for #coffee !",
    createdAt: new Date("2022-03-10T09:02:10"),
    author: "Boss",
    comments: [
      {
        id: "t-2 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T09:02:15"),
        author: "Alex",
      },
      {
        id: "t-2 c-2",
        text: "Yeahhhh!!!",
        createdAt: new Date("2022-03-09T10:00:16"),
        author: "Tom",
      },
    ],
  },
  {
    id: "t-3",
    text: " Go out for #coffee !",
    createdAt: new Date("2022-03-10T10:00:01"),
    author: "Tom",
    comments: [
      {
        id: "t-3 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T10:00:05"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-4",
    text: " Go out for #coffee !",
    createdAt: new Date("2022-03-10T11:00:01"),
    author: "Alex",
    comments: [
      {
        id: "t-4 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T11:00:05"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-5",
    text: " Go out for #coffee !",
    createdAt: new Date("2022-03-10T12:00:01"),
    author: "Anna",
    comments: [
      {
        id: "t-5 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:00:05"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-6",
    text: " Go out for #coffee !",
    createdAt: new Date("2022-03-10T12:00:10"),
    author: "Boss",
    comments: [
      {
        id: "t-6 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:00:15"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-7",
    text: " Go out for #coffee !",
    createdAt: new Date("2022-03-10T12:00:11"),
    author: "Alex",
    comments: [
      {
        id: "t-7 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:00:25"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-8",
    text: " Go out for #coke !",
    createdAt: new Date("2022-03-10T12:00:12"),
    author: "Alex",
    comments: [
      {
        id: "t-8 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:00:35"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-9",
    text: " Go out for #coffee !",
    createdAt: new Date("2022-03-10T12:00:13"),
    author: "Bob",
    comments: [
      {
        id: "t-9 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:00:45"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-10",
    text: " Go out for #sprite !",
    createdAt: new Date("2022-03-10T12:00:14"),
    author: "Alex",
    comments: [
      {
        id: "t-10 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:00:46"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-11",
    text: " Go out for #coffee !",
    createdAt: new Date("2022-03-10T12:00:15"),
    author: "Alex",
    comments: [
      {
        id: "t-11 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:00:47"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-12",
    text: " Go out for #fanta !",
    createdAt: new Date("2022-03-10T12:00:16"),
    author: "Alex",
    comments: [
      {
        id: "t-12 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:00:48"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-13",
    text: " Go out for #fanta !",
    createdAt: new Date("2022-03-10T12:00:19"),
    author: "Bob",
    comments: [
      {
        id: "t-13 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:00:55"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-14",
    text: " Go out for #coffee !",
    createdAt: new Date("2022-03-10T12:00:20"),
    author: "Anna",
    comments: [
      {
        id: "t-14 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:00:56"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-15",
    text: " Go out for #sprite !",
    createdAt: new Date("2022-03-10T12:01:10"),
    author: "Neo",
    comments: [
      {
        id: "t-15 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:01:15"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-16",
    text: " Go out for #tea !",
    createdAt: new Date("2022-03-10T12:02:15"),
    author: "Anna",
    comments: [
      {
        id: "t-16 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:02:25"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-17",
    text: " Go out for #coffee !",
    createdAt: new Date("2022-03-10T12:03:01"),
    author: "Alex",
    comments: [
      {
        id: "t-17 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:03:05"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-18",
    text: " Go out for #coffee !",
    createdAt: new Date("2022-03-10T12:04:01"),
    author: "Neo",
    comments: [
      {
        id: "t-18 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:04:05"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-19",
    text: "coffee Go out for #tea !",
    createdAt: new Date("2022-03-10T12:05:01"),
    author: "Tom",
    comments: [
      {
        id: "t-19 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:05:05"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-20",
    text: " Yeahhhh #coffee !",
    createdAt: new Date("2022-03-10T12:06:20"),
    author: "Alex",
    comments: [
      {
        id: "t-20 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:06:25"),
        author: "Boss",
      },
    ],
  },
];

const module = (function (arr) {
  let user = "Alex";
  let skip = 0;
  let top = 10;
  let filterConfigObject = {
    author: "name",
    dateFrom: "2022-03-10T12:00:05",
    hashtags: "#coffee",
    text: "Coffeman let’s go",
  };

  const getTweets = (skip, top, filterConfig) => {
    // let arrClone = JSON.parse(JSON.stringify(arr));
    let arrClone = arr.concat();

    if (filterConfig.dateFrom) {
      let searchTweetToDate = arrClone.filter((obj) => {
        let startDatePoint = Date.parse(filterConfig.dateFrom);
        let checkDateCreatingTweet = Date.parse(obj.createdAt);
        if (checkDateCreatingTweet > startDatePoint) {
          return obj;
        }
      });
      arrClone = searchTweetToDate;
      // console.log(arrClone);
    }
    if (filterConfig.author) {
      let filterAuthor = arrClone.filter((obj) => {
        if (obj.author.indexOf(filterConfig.author) != -1) return obj;
      });
      arrClone = filterAuthor;
      // console.log(arrClone);
    }
    if (filterConfig.text) {
      let filterText = arrClone.filter((obj) => {
        if (obj.text.indexOf(filterConfig.text.trim()) != -1) {
          return obj;
        }
      });
      arrClone = filterText;
      // console.log(filterText);
    }
    if (filterConfig.hashtags) {
      let filterHashtag = arrClone.filter((obj) => {
        if (obj.text.indexOf(filterConfig.hashtags.trim()) != -1) {
          return obj;
        }
      });
      arrClone = filterHashtag;
      // console.log(arrClone);
    }
    // console.log(arrClone);
    arrClone = arrClone.slice(skip, top);
    console.log(arrClone);
  };
  // ********************* test geTweets *************************
  getTweets(skip, top, {
    author: "lex",
    // text: " coff",
    dateFrom: "2022-03-10T11:00:05",
    // hashtags: " #fanta",
  });

  // ***************************************************************************************
  const validateTweet = (tw) => {
    console.log();
  };
  validateTweet();

  const addTweet = (text) => {
    console.log();
  };
  addTweet();

  const editTweet = (id, text) => {
    console.log();
  };
  editTweet();
})(tweets);
