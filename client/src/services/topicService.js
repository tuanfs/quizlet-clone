const content = {
  article: {
    title: "Thẻ ghi nhớ, sơ đồ và hướng dẫn học Nghệ thuật và nhân văn",
    subTitle: "Nghệ thuật và nhân văn",
    url: "topic/article",
    sidebar: [
      { title: "Lịch sử nghệ thuật", url: "/" },
      { title: "Khiêu vũ", url: "/" },
      { title: "Tiếng Anh", url: "/" },
      { title: "Phim và truyền hình", url: "/" },
      { title: "Phim và truyền hình", url: "/" },
      { title: "Lịch sử", url: "/" },
      { title: "Âm nhạc", url: "/" },
      { title: "Triết học", url: "/" },
      { title: "Nghệ thuật thị giác", url: "/" },
    ],
    list: [
      { heading: "Học phần Lịch sử nghệ thuật phổ biến", section: [] },
      { heading: "Học phần Khiêu vũ phổ biến", section: [] },
      { heading: "Học phần Tiếng Anh phổ biến", section: [] },
      { heading: "Học phần Phim và truyền hình phổ biến", section: [] },
    ],
  },
  subtree: {
    title:
      "Thẻ ghi nhớ, sơ đồ và hướng dẫn học Nghệ thuật và nhân văn subtreee",
    subTitle: "Subttreee",
    sidebar: [
      { title: "Lịch sử nghệ thuật", url: "/" },
      { title: "Khiêu vũ", url: "/" },
      { title: "Tiếng Anh", url: "/" },
      { title: "Phim và truyền hình", url: "/" },
      { title: "Phim và truyền hình", url: "/" },
      { title: "Lịch sử", url: "/" },
      { title: "Âm nhạc", url: "/" },
      { title: "Triết học", url: "/" },
      { title: "Nghệ thuật thị giác", url: "/" },
    ],
    list: [
      { heading: "Học phần Lịch sử nghệ thuật phổ biến", section: [] },
      { heading: "Học phần Khiêu vũ phổ biến", section: [] },
      { heading: "Học phần Tiếng Anh phổ biến", section: [] },
      { heading: "Học phần Phim và truyền hình phổ biến", section: [] },
    ],
  },
  language: {
    title: "Thẻ ghi nhớ, sơ đồ và hướng dẫn học Ngôn ngữ",
    subTitle: "Ngôn ngữ",
    sidebar: [
      { title: "Tiếng Pháp", url: "/" },
      { title: "Tiếng Đức", url: "/" },
      { title: "Tiếng Anh", url: "/" },
      { title: "Tiếng Latinh", url: "/" },
      { title: "TIếng Lào", url: "/" },
      { title: "Tiếng Campuchia", url: "/" },
      { title: "Tiếng Thái", url: "/" },
    ],
    list: [
      { heading: "Học phần Tiếng Anh phổ biến", section: [] },
      { heading: "Học phần Tiếng Pháp phổ biến", section: [] },
      { heading: "Học phần Tiếng Anh phổ biến", section: [] },
      { heading: "Học phần Tiếng Đức phổ biến", section: [] },
    ],
  },
};

export const getTopicByPath = (path) => {
  return content[path];
};
