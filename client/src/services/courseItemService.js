const listItem = [
  {
    name: 'Voca 1',
    author: 'Le Van Tuan',
    total: 0,
    idCard: 1,
    idFolder: [1, 2],
    card: [
      {
        term: 'explain to me why',
        defination: 'hãy giải thích cho tôi tại sao',
        idCardItem: 1,
        choice: [
          { term: 'just for fun', defination: 'đùa chút thôi' },
          { term: 'how com', defination: 'dạo này sao rồi' },
          { term: 'do as i say', defination: 'làm theo lời tôi' },
          {
            term: 'explain to me why',
            defination: 'hãy giải thích to tôi tại sao',
          },
        ],
      },
      {
        term: 'Stop joking',
        defination: 'Đừng đùa nữa',
        idCardItem: 2,
        choice: [
          { term: 'just for fun', defination: 'đùa chút thôi' },
          { term: 'stop joking', defination: 'đừng đùa nữa' },
          { term: 'do as i say', defination: 'làm theo lời tôi' },
          {
            term: 'explain to me why',
            defination: 'hãy giải thích to tôi tại sao',
          },
        ],
      },

      {
        term: 'What are you doing',
        defination: 'Bạn đang làm gì vậy',
        idCardItem: 3,
        choice: [
          { term: 'just for fun', defination: 'đùa chút thôi' },
          { term: 'how come', defination: 'dạo này sao rồi' },
          { term: 'do as i say', defination: 'làm theo lời tôi' },
          { term: 'What are you doing', defination: 'Bạn đang làm gì vậy' },
        ],
      },
      {
        term: 'How come',
        defination: 'Dạo này ra sao rồi',
        idCardItem: 4,
        choice: [
          { term: 'just for fun', defination: 'đùa chút thôi' },
          { term: 'how come', defination: 'dạo này sao rồi' },
          { term: 'do as i say', defination: 'làm theo lời tôi' },
          {
            term: 'explain to me why',
            defination: 'hãy giải thích to tôi tại sao',
          },
        ],
      },

      {
        term: 'Theater',
        defination: 'nhà hát',
        idCardItem: 5,
        choice: [
          { term: 'typee', defination: 'kiểuu' },
          { term: 'walk', defination: 'đi bộ' },
          { term: 'pear', defination: 'quả lê' },
          { term: 'theater', defination: 'nhà hát' },
        ],
      },
      {
        term: 'peach',
        defination: 'quả đào',
        idCardItem: 6,
        choice: [
          { term: 'typee', defination: 'kiểuu' },
          { term: 'walk', defination: 'đi bộ' },
          { term: 'pear', defination: 'quả lê' },
          { term: 'peach', defination: 'quả đào' },
        ],
      },
      {
        term: 'walk ',
        defination: 'đi bộ',
        idCardItem: 7,
        choice: [
          { term: 'typee', defination: 'kiểuu' },
          { term: 'walk', defination: 'đi bộ' },
          { term: 'pear', defination: 'quả lê' },
          { term: 'peach', defination: 'quả đào' },
        ],
      },
      {
        term: 'pear',
        defination: 'quả lê',
        idCardItem: 8,
        choice: [
          { term: 'typee', defination: 'kiểuu' },
          { term: 'walk', defination: 'đi bộ' },
          { term: 'pear', defination: 'quả lê' },
          { term: 'peach', defination: 'quả đào' },
        ],
      },
    ],
  },
  {
    name: 'E Voca 2',
    author: 'Le Van Anh',
    idCard: 2,
    total: 0,
    idFolder: [1],
    card: [
      {
        term: 'What do you do',
        defination: 'Bạn làm việc gì',
        idCardItem: 1,
        choice: [
          { term: 'what do you do', defination: 'bạn làm việc gì' },
          { term: 'how com', defination: 'dạo này sao rồi' },
          { term: 'do as i say', defination: 'làm theo lời tôi' },
          {
            term: 'explain to me why',
            defination: 'hãy giải thích to tôi tại sao',
          },
        ],
      },
      {
        term: 'Do as i say',
        defination: 'Làm theo lời tôi',
        idCardItem: 2,
        choice: [
          { term: 'just for fun', defination: 'đùa chút thôi' },
          { term: 'how com', defination: 'dạo này sao rồi' },
          { term: 'do as i say', defination: 'làm theo lời tôi' },
          {
            term: 'explain to me why',
            defination: 'hãy giải thích to tôi tại sao',
          },
        ],
      },

      {
        term: 'Just for fun',
        defination: 'Đùa chút thôi',
        idCardItem: 3,
        choice: [
          { term: 'just for fun', defination: 'đùa chút thôi' },
          { term: 'how com', defination: 'dạo này sao rồi' },
          { term: 'do as i say', defination: 'làm theo lời tôi' },
          {
            term: 'explain to me why',
            defination: 'hãy giải thích to tôi tại sao',
          },
        ],
      },
      {
        term: 'None of your business',
        defination: 'Không phải việc của bạn',
        idCardItem: 4,
        choice: [
          { term: 'just for fun', defination: 'đùa chút thôi' },
          { term: 'how com', defination: 'dạo này sao rồi' },
          { term: 'do as i say', defination: 'làm theo lời tôi' },
          {
            term: 'None of your business',
            defination: 'Không phải việc của bạn',
          },
        ],
      },
      {
        term: 'Type',
        defination: 'kiểu',
        idCardItem: 5,
        choice: [
          { term: 'type', defination: 'kiểu' },
          { term: 'walk', defination: 'đi bộ' },
          { term: 'pear', defination: 'quả lê' },
          { term: 'peach', defination: 'quả đào' },
        ],
      },
    ],
  },
  {
    name: 'Voca 3',
    author: 'Le Van Tuan 2',
    idCard: 3,
    total: 0,
    idFolder: [3],
    card: [
      {
        term: 'What do you do',
        defination: 'Bạn làm việc gì',
        idCardItem: 1,
        choice: [
          { term: 'what do you do', defination: 'bạn làm việc gì' },
          { term: 'how com', defination: 'dạo này sao rồi' },
          { term: 'do as i say', defination: 'làm theo lời tôi' },
          {
            term: 'explain to me why',
            defination: 'hãy giải thích to tôi tại sao',
          },
        ],
      },
      {
        term: 'Type',
        defination: 'kiểu',
        idCardItem: 5,
        choice: [
          { term: 'type', defination: 'kiểu' },
          { term: 'walk', defination: 'đi bộ' },
          { term: 'pear', defination: 'quả lê' },
          { term: 'peach', defination: 'quả đào' },
        ],
      },
      {
        term: 'pear',
        defination: 'quả lê',
        idCardItem: 8,
        choice: [
          { term: 'typee', defination: 'kiểuu' },
          { term: 'walk', defination: 'đi bộ' },
          { term: 'pear', defination: 'quả lê' },
          { term: 'peach', defination: 'quả đào' },
        ],
      },
    ],
  },
  {
    name: 'A Voca 3',
    author: 'Le Van Tuan 2',
    idCard: 3,
    total: 0,
    idFolder: [1, 2, 3],
    card: [
      {
        term: 'What do you do',
        defination: 'Bạn làm việc gì',
        idCardItem: 1,
        choice: [
          { term: 'what do you do', defination: 'bạn làm việc gì' },
          { term: 'how com', defination: 'dạo này sao rồi' },
          { term: 'do as i say', defination: 'làm theo lời tôi' },
          {
            term: 'explain to me why',
            defination: 'hãy giải thích to tôi tại sao',
          },
        ],
      },
      {
        term: 'Type',
        defination: 'kiểu',
        idCardItem: 5,
        choice: [
          { term: 'type', defination: 'kiểu' },
          { term: 'walk', defination: 'đi bộ' },
          { term: 'pear', defination: 'quả lê' },
          { term: 'peach', defination: 'quả đào' },
        ],
      },
      {
        term: 'pear',
        defination: 'quả lê',
        idCardItem: 8,
        choice: [
          { term: 'typee', defination: 'kiểuu' },
          { term: 'walk', defination: 'đi bộ' },
          { term: 'pear', defination: 'quả lê' },
          { term: 'peach', defination: 'quả đào' },
        ],
      },
    ],
  },
];
const listFolder = [
  {
    name: 'Communicate',
    describe: 'Tiếng anh giao tiếp',
    idFolder: 1,
    author: 'Le Van Tuan 1',
    userId: 2,
  },
  {
    name: 'Voca-popular',
    describe: 'Từ vựng thông dụng',
    idFolder: 2,
    author: 'Le Van Tuan 2',
    userId: 2,
  },
  {
    name: 'Voca-toeic',
    describe: 'Từ vựng luyện thi toeic',
    idFolder: 3,
    author: 'Le Van Tuan 3',
    userId: 2,
  },
];

export const createCardService = (formValue) => {
  if (formValue) {
    return true;
  } else {
    return false;
  }
};

export const getCardByIdFolderService = (folderId) => {
  const listNew = listItem.filter((item) =>
    item.idFolder.includes(Number(folderId))
  );
  const newArr = [];
  listNew.forEach((item) => {
    const card = item.card;
    newArr.push(...card);
  });
  return {
    listItem: newArr,
    countItem: newArr.length,
  };
};
export const createClassService = (formValue) => {
  if (formValue) {
    return true;
  } else {
    return false;
  }
};

export const getAllFolderByUserId = (userId) => {
  const listFolderNew = listFolder.filter(
    (item) => item.userId === Number(userId)
  );
  return listFolderNew;
};

export const createFolderService = (formValue) => {
  if (formValue) {
    return true;
  } else {
    return false;
  }
};

export const getFolderService = (id) => {
  const folderItem = listFolder.find((item) => item.idFolder === Number(id));
  const cardList = listItem.filter((item) =>
    item.idFolder.includes(Number(id))
  );
  console.log(folderItem);
  return {
    folderItem: folderItem,
    countItem: cardList.length,
    cardList: cardList,
  };
};

export const getCourseItemService = (id) => {
  const listNew = listItem.find((item) => item.idCard === Number(id));
  return {
    listItem: listNew,
    countItem: listNew.card.length,
  };
};

export const getAllCourseService = () => {
  listItem.forEach((item) => {
    item.total = item.card.length;
  });

  return listItem;
};
