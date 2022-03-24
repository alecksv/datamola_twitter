/* eslint-disable [no-underscore-dangle] */
const newTweets = [];
const tweets = [
  {
    id: 't-1',
    text: 'Let’s have a break! Go out for #coffee !',
    createdAt: new Date('2022-03-09T09:01:01'),
    author: 'Anna',
    comments: [
      {
        id: 't-1 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-09T09:01:05'),
        author: 'Boss',
      },
      {
        id: 't-1 c-2',
        text: 'Please, bring me latte and cookies. Deadline and Smith are killing me!!!',
        createdAt: new Date('2022-03-09T209:01:06'),
        author: 'Neo',
      },
    ],
  },
  {
    id: 't-2',
    text: 'Let’s have a break! Go out for #coffee !',
    createdAt: new Date('2022-03-10T09:02:10'),
    author: 'Boss',
    comments: [
      {
        id: 't-2 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T09:02:15'),
        author: 'Alex',
      },
      {
        id: 't-2 c-2',
        text: 'Yeahhhh!!!',
        createdAt: new Date('2022-03-09T10:00:16'),
        author: 'Tom',
      },
    ],
  },
  {
    id: 't-3',
    text: ' Go out for #coffee !',
    createdAt: new Date('2022-03-10T10:00:01'),
    author: 'Tom',
    comments: [
      {
        id: 't-3 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T10:00:05'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-4',
    text: ' Go out for #coffee !',
    createdAt: new Date('2022-03-10T11:00:01'),
    author: 'Alex',
    comments: [
      {
        id: 't-4 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T11:00:05'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-5',
    text: ' Go out for #coffee !',
    createdAt: new Date('2022-03-10T12:00:01'),
    author: 'Anna',
    comments: [
      {
        id: 't-5 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:00:05'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-6',
    text: ' Go out for #coffee !',
    createdAt: new Date('2022-03-10T12:00:10'),
    author: 'Boss',
    comments: [
      {
        id: 't-6 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:00:15'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-7',
    text: ' Go out for #coffee !',
    createdAt: new Date('2022-03-10T12:00:11'),
    author: 'Alex',
    comments: [
      {
        id: 't-7 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:00:25'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-8',
    text: ' Go out for #coke !',
    createdAt: new Date('2022-03-10T12:00:12'),
    author: 'Alex',
    comments: [
      {
        id: 't-8 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:00:35'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-9',
    text: ' Go out for #coffee !',
    createdAt: new Date('2022-03-10T12:00:13'),
    author: 'Bob',
    comments: [
      {
        id: 't-9 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:00:45'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-10',
    text: ' Go out for #sprite !',
    createdAt: new Date('2022-03-10T12:00:14'),
    author: 'Alex',
    comments: [
      {
        id: 't-10 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:00:46'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-11',
    text: ' Go out for #coffee !',
    createdAt: new Date('2022-03-10T12:00:15'),
    author: 'Alex',
    comments: [
      {
        id: 't-11 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:00:47'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-12',
    text: ' Go out for #fanta !',
    createdAt: new Date('2022-03-10T12:00:16'),
    author: 'Alex',
    comments: [
      {
        id: 't-12 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:00:48'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-13',
    text: ' Go out for #fanta !',
    createdAt: new Date('2022-03-10T12:00:19'),
    author: 'Bob',
    comments: [
      {
        id: 't-13 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:00:55'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-14',
    text: ' Go out for #coffee !',
    createdAt: new Date('2022-03-10T12:00:20'),
    author: 'Anna',
    comments: [
      {
        id: 't-14 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:00:56'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-15',
    text: ' Go out for #sprite !',
    createdAt: new Date('2022-03-10T12:01:10'),
    author: 'Neo',
    comments: [
      {
        id: 't-15 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:01:15'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-16',
    text: ' Go out for #tea !',
    createdAt: new Date('2022-03-10T12:02:15'),
    author: 'Anna',
    comments: [
      {
        id: 't-16 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:02:25'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-17',
    text: ' Go out for #coffee !',
    createdAt: new Date('2022-03-10T12:03:01'),
    author: 17,
    comments: [
      {
        id: 't-17 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:03:05'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-18',
    text: ' Go out for #coffee !',
    createdAt: new Date('2022-03-10T12:04:01'),
    author: 'Neo',
    comments: [
      {
        id: 't-18 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:04:05'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-19',
    text: 'coffee Go out for #tea !',
    createdAt: new Date('2022-03-10T12:05:01'),
    author: 'Tom',
    comments: [],
  },
  {
    id: 't-20',
    text: 'Yeahhhh #coffee !',
    createdAt: new Date('2022-03-10T12:06:20'),
    author: 'Alex',
    comments: [
      {
        id: 't-20 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:06:25'),
        author: 'Boss',
      },
      {
        id: 't-20 c-2',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:06:25'),
        author: 'Boss',
      },
    ],
  },
];
// ******************************** tweet ******
// *********************************************

class Tweet {
  constructor(id, text, createdAt, author, comments) {
    this._id = id;
    this._createdAt = createdAt;
    this._author = author;
    this.text = text;
    this.comments = comments;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    if (value !== this._id) {
      throw new Error(`id ${value} is not correct`);
    }
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (value !== this._author) {
      throw new Error(`Author ${value} is not correct`);
    }
  }

  get createdAt() {
    return new Date();
  }

  set createdAt(value) {
    if (value !== this._createdAt) {
      throw new Error(`CreatedAt ${value} is not correct`);
    }
  }

  static validate(tw) {
    if (!tw) return false;
    return (
      typeof tw.id === 'string' &&
      tw.text.length < 280 &&
      typeof tw.text === 'string' &&
      typeof tw.createdAt === 'object' &&
      typeof tw.author === 'string' &&
      typeof tw.comments === 'object'
    );
  }
}

const oneMoreTweet = new Tweet(
  `t-${Date.now()}`,
  'hi!',
  new Date(),
  'Alex',
  {}
);
console.log(oneMoreTweet);
console.log(Tweet.validate(tweets[0]));

// ********************************* comment *****************************
// *************************************************************************

class Comment {
  constructor(id, createdAt, author, text) {
    this._id = id;
    this._author = author;
    this._createdAt = createdAt;
    this.text = text;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    if (value !== this._id) {
      throw new Error(`id ${value} is not correct`);
    }
  }

  get createdAt() {
    return new Date();
  }

  set createdAt(value) {
    if (value !== this._createdAt) {
      throw new Error(`CreatedAt ${value} is not correct`);
    }
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (value !== this._author) {
      throw new Error(`Author ${value} is not correct`);
    }
  }

  static validate(com) {
    if (!com) return false;

    return (
      typeof com.id === 'string' &&
      com.text.length < 280 &&
      typeof com.text === 'string' &&
      typeof com.createdAt === 'object' &&
      typeof com.author === 'string'
    );
  }
}

const oneMoreComment = new Comment(
  `t-${Date.now()}`,
  new Date(),
  'Neo',
  'Matrix!'
);
console.log(oneMoreComment);
console.log(Comment.validate(tweets[0].comments[17]));
console.log(tweets[18].comments);

// ********************************************* TweetCollection************
// *************************************************************************
class TweetCollection {
  constructor(tweets = []) {
    this._tweets = tweets;
  }

  getPage(skip, top, filterConfig) {
    if (filterConfig.dateFrom) {
      this._tweets.filter((obj) => {
        const startDatePoint = Date.parse(filterConfig.dateFrom);
        const checkDateCreatingTweet = Date.parse(obj.createdAt);
        const endDatePoint = Date.parse(filterConfig.dateTo);

        return (
          (checkDateCreatingTweet > startDatePoint &&
            endDatePoint > checkDateCreatingTweet) ||
          (!endDatePoint && checkDateCreatingTweet > startDatePoint)
        );
      });
    }
    if (filterConfig.author) {
      this._tweets.filter((obj) =>
        obj.author.toUpperCase().includes(filterConfig.author.toUpperCase())
      );
    }
    if (filterConfig.text) {
      this._tweets.filter((obj) =>
        obj.text.toUpperCase().includes(filterConfig.text.trim().toUpperCase())
      );
    }
    if (filterConfig.hashtags) {
      this._tweets.filter((obj) =>
        obj.text
          .toUpperCase()
          .includes(filterConfig.hashtags.trim().toUpperCase())
      );
    }
    return this._tweets.slice(skip, skip + top);
  }

  get(id) {
    return this._tweets.filter((obj) => obj.id === id);
  }

  add(text, _user) {
    const newTweet = new Tweet(`t-${Date.now()}`, text, new Date(), _user, {});
    if (Tweet.validate(newTweet)) {
      this._tweets.push(newTweet);
      return true;
    }
  }

  edit(id, text, _user) {
    const idTextTweet = this._tweets.filter((obj) => {
      if (obj.id === id && obj.author === _user) {
        obj.text = text;
        return obj;
      }
    });
    return !!(Tweet.validate(idTextTweet[0]) && idTextTweet.length);
  }

  remove(id, _user) {
    let item;
    const removeTweetItem = this._tweets.filter((obj, i) => {
      if (obj.id === id && obj.author === _user) {
        item = i;
        return obj;
      }
    });

    if (removeTweetItem.length > 0) {
      this._tweets.splice(item, 1);
      return true;
    }
    return false;
  }

  addComment(id, _user, text) {
    const addCommentToTweet = new Comment(id, new Date(), _user, text);
    if (Comment.validate(addCommentToTweet)) {
      this._tweets.map((obj) => {
        if (obj.id === id) obj.comments.push(addCommentToTweet);
      });
      return true;
    }
    return false;
  }

  addAll(arr) {
    let nonValidTweets = [];

    if (arr.length === 0) return (nonValidTweets = []);
    arr.filter((tw) => {
      if (
        typeof tw.id === 'string' &&
        tw.text.length < 280 &&
        typeof tw.text === 'string' &&
        typeof tw.createdAt === 'object' &&
        typeof tw.author === 'string' &&
        typeof tw.comments === 'object'
      ) {
        arr.push(tw);
      } else {
        nonValidTweets.push(tw);
      }
    });
    return nonValidTweets;
  }

  clear() {
    this._tweets.length = 0;
  }
}
const filterConfigObject = {
  // author: "al",
  // dateFrom: new Date("2022-03-10T12:00:05"),
  // dateTo: new Date("2022-03-10T12:03:05"),
  // hashtags: "#fa",
  // text: "go",
};
const twCol = new TweetCollection(tweets);
console.log(twCol.add('cooooool', "'Alex'"));
console.log(twCol);
twCol.clear();
console.log(twCol);
