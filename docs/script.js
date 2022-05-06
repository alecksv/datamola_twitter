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
    author: 'Alex',
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
    comments: [
      {
        id: 't-19 c-1',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:05:05'),
        author: 'Boss',
      },
      {
        id: 't-19 c-2',
        text: 'I’m with you! Coffeman let’s go!!!',
        createdAt: new Date('2022-03-10T12:05:05'),
        author: 'Boss',
      },
    ],
  },
  {
    id: 't-20',
    text: '!!!!!!!',
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

const module = (function (arr) {
  let user = 'Alex';
  const skip = 0;
  const top = 10;
  const filterConfigObject = {
    author: 'al',
    dateFrom: new Date('2022-03-10T12:00:05'),
    dateTo: new Date('2022-03-10T12:00:15'),
    // hashtags: '#fa',
    // text: 'go',
  };

  const getTweets = (skip, top, filterConfig) => {
    let filterTweets = arr.concat();

    if (
      filterConfig?.dateFrom ||
      filterConfig?.dateTo ||
      filterConfig?.author ||
      filterConfig?.text ||
      filterConfig?.hashtags
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
        const authorTweets = filterTweets.filter((obj) =>
          obj.author.toUpperCase().includes(filterConfig.author.toUpperCase())
        );
        filterTweets = authorTweets;
        console.log(filterTweets);
      }

      if (filterConfig?.text) {
        const textTweets = filterTweets.filter((obj) =>
          obj.text
            .toUpperCase()
            .includes(filterConfig.text.trim().toUpperCase())
        );
        filterTweets = textTweets;
      }

      if (filterConfig?.hashtags) {
        const hashtagTweets = filterTweets.filter((obj) => {
          const amountHashtags = 0;
          for (let i = 0; i < filterConfig.hashtags.length; i++) {
            return obj.text
              .toUpperCase()
              .includes(filterConfig.hashtags[i].trim().toUpperCase());
          }
        });

        filterTweets = hashtagTweets.filter((obj) => obj.text);
      }

      return filterTweets.slice(skip, skip + top);
    }

    if (!filterConfig?.author) {
      filterTweets.sort(
        (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
      );
      console.log(filterTweets);
      return filterTweets.slice(skip, skip + top);
    }
  };

  const getTweet = (id) => arr.find((obj) => obj.id === id);

  const validateTweet = (tw) => {
    if (!tw) return false;

    return (
      typeof tw.id === 'string' &&
      typeof tw.text === 'string' &&
      tw.createdAt instanceof Object &&
      typeof tw.author === 'string' &&
      tw.comments instanceof Array &&
      typeof tw.comments !== null &&
      typeof tw.createdAt !== null &&
      tw.author.length > 0 &&
      tw.text.length < 280 &&
      tw.text.length > 0
    );
  };

  const addTweet = (text) => {
    const newTweet = {};
    newTweet.id = `t-${Date.now()}`;
    newTweet.text = text;
    newTweet.createdAt = new Date();
    newTweet.author = user;
    newTweet.comments = [];

    if (validateTweet(newTweet)) {
      arr.push(newTweet);
      return true;
    }
  };

  const editTweet = (id, text) => {
    const idTexttweet = arr.filter((obj) => {
      if (obj.id === id) {
        if (text.length < 280 && text.length > 0) {
          obj.text = text;
        }

        return obj;
      }
    });
    return !!(validateTweet(idTexttweet[0]) && idTexttweet.length);
  };

  const removeTweet = (id) => {
    let item;
    const removeTweetitem = arr.filter((obj, i) => {
      if (obj.id === id && obj.author === user) {
        item = i;
        return obj;
      }
    });

    if (removeTweetitem.length > 0) {
      arr.splice(item, 1);
      return true;
    }
    return false;
  };

  const validateComment = (com) => {
    if (!com) return false;

    return (
      typeof com.id === 'string' &&
      typeof com.text === 'string' &&
      com.createdAt instanceof Object &&
      typeof com.author === 'string' &&
      typeof com.createdAt !== null &&
      com.author.length > 0 &&
      com.text.length < 280 &&
      com.text.length > 0
    );
  };

  console.log(validateComment(arr[0]));
  console.log(arr[0]);

  const addComment = (id, text) => {
    const addCommentToTweet = {};
    addCommentToTweet.id = `comment-${Date.now()}`;
    addCommentToTweet.text = text;
    addCommentToTweet.createdAt = new Date();
    addCommentToTweet.author = user;
    console.log(addCommentToTweet);

    if (validateComment(addCommentToTweet)) {
      arr.map((obj) => {
        if (obj.id === id) obj.comments.push(addCommentToTweet);
      });
      return true;
    }
    return false;
  };

  const changeUser = (usr) => {
    return (user = usr);
  };
  console.log(user);
  console.log(changeUser('Boss'));
  console.log(user);

  return {
    getTweets,
    getTweet,
    validateTweet,
    addTweet,
    editTweet,
    removeTweet,
    validateComment,
    addComment,
    changeUser,
  };
})(tweets);
