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
      {
        id: "t-19 c-2",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:05:05"),
        author: "Boss",
      },
    ],
  },
  {
    id: "t-20",
    text: "Yeahhhh #coffee !",
    createdAt: new Date("2022-03-10T12:06:20"),
    author: "Alex",
    comments: [
      {
        id: "t-20 c-1",
        text: "I’m with you! Coffeman let’s go!!!",
        createdAt: new Date("2022-03-10T12:06:25"),
        author: "Boss",
      },
      {
        id: "t-20 c-2",
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
    // author: "al",
    dateFrom: new Date("2022-03-10T12:00:05"),
    dateTo: new Date("2022-03-10T12:03:05"),
    hashtags: "#fa",
    // text: "go",
  };

  const getTweets = (skip, top, filterConfig) => {
    let arrClone = arr.concat();

    if (filterConfig.dateFrom) {
      arrClone = arrClone.filter((obj) => {
        let startDatePoint = Date.parse(filterConfig.dateFrom);
        let checkDateCreatingTweet = Date.parse(obj.createdAt);
        let endDatePoint = Date.parse(filterConfig.dateTo);

        return (
          (checkDateCreatingTweet > startDatePoint &&
            endDatePoint > checkDateCreatingTweet) ||
          (!endDatePoint && checkDateCreatingTweet > startDatePoint)
        );
      });
    }
    if (filterConfig.author) {
      arrClone = arrClone.filter((obj) => {
        return obj.author
          .toUpperCase()
          .includes(filterConfig.author.toUpperCase());
      });
    }
    if (filterConfig.text) {
      arrClone = arrClone.filter((obj) => {
        return obj.text
          .toUpperCase()
          .includes(filterConfig.text.trim().toUpperCase());
      });
    }
    if (filterConfig.hashtags) {
      arrClone = arrClone.filter((obj) => {
        return obj.text
          .toUpperCase()
          .includes(filterConfig.hashtags.trim().toUpperCase());
      });
    }
    arrClone = arrClone.slice(skip, skip + top);
  };

  getTweets(skip, top, filterConfigObject);

  // ***************************************************************************************
  const getTweet = (id) => {
    return arr.filter((obj) => {
      return obj.id === id;
    });
  };
  getTweet("t-12");
  // ************************************************************************************
  const validateTweet = (tw) => {
    if (!tw) return false;
    let arrId = arr.filter((obj) => {
      return obj.id === tw.id;
    });
    return (
      typeof tw.id === "string" &&
      arrId.length > 0 &&
      tw.text.length < 280 &&
      typeof tw.text === "string" &&
      typeof tw.createdAt === "object" &&
      typeof tw.author === "string" &&
      typeof tw.comments === "object"
    );
  };
  // ********************************************************************************
  const addTweet = (text) => {
    let newTweet = {};
    newTweet.id = "t-" + Date.now();
    newTweet.text = text;
    newTweet.createdAt = new Date();
    newTweet.author = user;
    newTweet.comments = [];

    if (validateTweet(newTweet)) {
      arr.push(newTweet);
      return true;
    }
  };
  addTweet("let add tweet");
  // *****************************************************************************
  const editTweet = (id, text) => {
    let idTexttweet = arr.filter((obj) => {
      if (obj.id === id && obj.author === user) {
        obj.text = text;
        return obj;
      }
    });
    return validateTweet(idTexttweet[0]) && idTexttweet.length ? true : false;
  };
  editTweet("t-20", "OMG!!!");

  // ****************************************************************************
  const removeTweet = (id) => {
    let item;
    let removeTweetitem = arr.filter((obj, i) => {
      if (obj.id === id && obj.author === user) {
        item = i;
        return obj;
      }
    });

    if (removeTweetitem.length > 0) {
      arr.splice(item, 1);
      return true;
    } else {
      return false;
    }
  };
  console.log(removeTweet("t-20"));
  // *************************************************************************
  const validateComment = (com) => {
    if (!com) return false;

    return (
      typeof com.id === "string" &&
      com.text.length < 280 &&
      typeof com.text === "string" &&
      typeof com.createdAt === "object" &&
      typeof com.author === "string"
    );
  };

  console.log(validateComment(arr[18]["comments"][3]));
  // ****************************************************************************
  const addComment = (id, text) => {
    let addCommentToTweet = {};
    addCommentToTweet.id = id;
    addCommentToTweet.text = text;
    addCommentToTweet.createdAt = new Date();
    addCommentToTweet.author = user;
    console.log(addCommentToTweet);

    if (validateComment(addCommentToTweet)) {
      arr.map((obj) => {
        if (obj.id === id) obj.comments.push(addCommentToTweet);
      });
      return true;
    } else {
      return false;
    }
  };

  console.log(addComment("t-18", "Wa wa wa!!!"));
  console.log(arr[17]);

  return {
    getTweets,
    getTweet,
    validateTweet,
    addTweet,
    editTweet,
    removeTweet,
    validateComment,
    addComment,
  };
})(tweets);
