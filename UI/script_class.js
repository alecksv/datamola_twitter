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
    text: ' Go out for #coffee #fanta #sprite !',
    createdAt: new Date('2022-03-10T12:03:01'),
    author: 'Boss',
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
    text: 'coffee Go out for #tea #coffee !',
    createdAt: new Date('2022-03-10T12:05:01'),
    author: 'Boss',
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
  #author;

  #id;

  #createdAt;

  constructor(id, createdAt, text, author, comments) {
    this.#id = id;
    this.#createdAt = createdAt;
    this.#author = author;
    this.comments = [];
    this.text = text;
  }

  get id() {
    return this.#id;
  }

  get author() {
    return this.#author;
  }

  get createdAt() {
    return this.#createdAt;
  }

  static validate(tw) {
    if (!tw) return false;

    return (
      typeof tw.id === 'string'
      && typeof tw.text === 'string'
      && tw.createdAt instanceof Object
      && typeof tw.author === 'string'
      && tw.comments instanceof Array
      && typeof tw.comments !== null
      && typeof tw.createdAt !== null
      && tw.author.length > 0
      && tw.text.length < 280
      && tw.text.length > 0
    );
  }
}

const oneMoreTweet = new Tweet(
  `tweet-${Date.now()}`,
  new Date(),
  'hi!',
  'Alex',
);

// ********************************* comment *****************************
// *************************************************************************

class Comment {
  #id;

  #author;

  #createdAt;

  constructor(id, createdAt, text, author) {
    this.#id = id;
    this.#createdAt = createdAt;
    this.#author = author;
    this.text = text;
  }

  get id() {
    return this.#id;
  }

  get createdAt() {
    return this.#createdAt;
  }

  get author() {
    return this.#author;
  }

  static validate(com) {
    if (!com) return false;

    return (
      typeof com.id === 'string'
      && typeof com.text === 'string'
      && com.createdAt instanceof Object
      && typeof com.author === 'string'
      && typeof com.createdAt !== null
      && com.author.length > 0
      && com.text.length < 280
      && com.text.length > 0
    );
  }
}

const oneMoreComment = new Comment(
  `comment-${Date.now()}`,
  new Date(),
  'Matrix! Morphius!',
  'Neo',
);
console.log(oneMoreComment);
console.log(Comment.validate(tweets[19].comments[1]));
console.log(tweets[18].comments);

// ********************************************* TweetCollection************
// *************************************************************************

class TweetCollection {
  constructor(tweets = []) {
    this._tweets = tweets;
  }

  getPage(filterConfig, skip = 0, top = 10) {
    let filterTweets = this._tweets;

    if (
      filterConfig?.dateFrom
      || filterConfig?.dateTo
      || filterConfig?.author
      || filterConfig?.text
      || filterConfig?.hashtags
    ) {
      let checkDateCreatingTweet;
      const startDatePoint = Date.parse(filterConfig?.dateFrom);
      const endDatePoint = Date.parse(filterConfig?.dateTo);
      let dateFromTweets;
      let dateFromFlag = false;
      let dateToFlag = false;

      if (filterConfig?.dateFrom) {
        dateFromFlag = true;

        dateFromTweets = filterTweets.filter((obj) => {
          checkDateCreatingTweet = Date.parse(obj.createdAt);

          return checkDateCreatingTweet > startDatePoint;
        });
        filterTweets = dateFromTweets;
        console.log(filterTweets);
      }

      if (filterConfig?.dateTo) {
        dateToFlag = true;

        const dateToTweets = filterTweets.filter((obj) => {
          checkDateCreatingTweet = Date.parse(obj.createdAt);
          return endDatePoint > checkDateCreatingTweet;
        });
        console.log(dateToTweets);

        filterTweets = dateToTweets;
        console.log(filterTweets);
      }

      if (filterConfig?.author) {
        const authorTweets = filterTweets.filter((obj) => obj.author.toUpperCase().includes(filterConfig.author.toUpperCase()));
        filterTweets = authorTweets;
        console.log(filterTweets);
      }

      if (filterConfig?.text) {
        const textTweets = filterTweets.filter((obj) => obj.text
          .toUpperCase()
          .includes(filterConfig.text.trim().toUpperCase()));
        filterTweets = textTweets;
      }

      if (filterConfig?.hashtags) {
        console.log(filterConfig?.hashtags);
        const hashtagTweets = filterTweets.filter((obj) => {
          for (let i = 0; i < filterConfig.hashtags.length; i++) {
            return obj.text
              .toUpperCase()
              .includes(filterConfig.hashtags[i].trim().toUpperCase());
          }
        });

        filterTweets = hashtagTweets;
      }

      return filterTweets.slice(skip, skip + top);
    }

    if (!filterConfig?.author) {
      filterTweets.sort(
        (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt),
      );
      console.log(filterTweets);
      return filterTweets.slice(skip, skip + top);
    }
  }

  get(id) {
    return this._tweets.find((obj) => obj.id === id);
  }

  add(text, _user) {
    const newTweet = new Tweet(`t-${Date.now()}`, new Date(), text, _user, {});
    if (Tweet.validate(newTweet)) {
      this._tweets.push(newTweet);
      return true;
    }
  }

  edit(id, text) {
    const idTextTweet = this._tweets.filter((obj) => {
      if (obj.id === id) {
        if (text.length < 280 && text.length > 0) {
          obj.text = text;
        }
        return obj;
      }
    });
    console.log(idTextTweet);

    return !!(Tweet.validate(idTextTweet[0]) && idTextTweet[0].text.length);
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
    const addCommentToTweet = new Comment(
      `comment-${Date.now()}`,
      new Date(),
      _user,
      text,
    );
    if (Comment.validate(addCommentToTweet)) {
      this._tweets.map((obj) => {
        if (obj.id === id) {
          obj.comments.push(addCommentToTweet);
        }
      });
      return true;
    }
    return false;
  }

  addAll() {
    const nonValidTweets = [];

    if (this._tweets.length === 0) return nonValidTweets;
    this._tweets.filter((tw) => {
      if (Tweet.validate(tw)) {
        this._tweets.push(tw);
      }
      return nonValidTweets.push(tw);
    });
    return nonValidTweets;
  }

  clear() {
    this._tweets = [];
  }
}
const filterConfigObject = {
  // author: 'alex',
  // dateFrom: new Date('2022-03-10T12:00:05'),
  // dateTo: new Date('2022-03-10T12:00:15'),
  hashtags: ['#spr', '#fan'],
  // text: ' ',
};
const twCol = new TweetCollection(tweets);
console.log(twCol);
// console.log(twCol.getPage(filterConfigObject, 0, 10));
console.log(twCol.addAll());
// console.log(twCol.getPage(filterConfigObject, 0, 10));
console.log(twCol.addComment('t-17', 'TRex', 'King of dinosaurus'));
console.log(twCol.remove('t-18', 'Neo'));
