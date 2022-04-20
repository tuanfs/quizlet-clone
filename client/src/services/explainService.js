const content = [
  {
    id: 1,
    title: "Atkins Physical Chemistry",
    url: "https://d2nchlq0f2u6vy.cloudfront.net/cache/f7/c3/f7c34b102a814375b766b8350b8c9da7.jpg",
    category: "chemistry",
  },
  {
    id: 2,
    title: "Calculus Early Transcendentals",
    url: "https://d2nchlq0f2u6vy.cloudfront.net/cache/70/68/7068f7f268c8bc6646abfa2dbf981949.jpg",
    category: "calculus",
  },
  {
    id: 3,
    title: "Advanced Engineering Mathematics",
    url: "https://d2nchlq0f2u6vy.cloudfront.net/cache/9b/70/9b7028ce0801ff0d018c1917ef1a1a50.jpg",
    category: "engineering",
  },
  {
    id: 4,
    title: "Linear Algebra and Its Applications",
    url: "https://d2nchlq0f2u6vy.cloudfront.net/cache/4b/c5/4bc5d888cb83c5d48591a19eeea08915.jpg",
    category: "algebra",
  },
  {
    id: 5,
    title: "Physics: Principles and Problems",
    url: "https://d2nchlq0f2u6vy.cloudfront.net/cache/7b/bb/7bbb7b74dab853824a15dd4c949d2089.jpg",
    category: "physics",
  },
  {
    id: 6,
    title: "Biology",
    url: "https://d2nchlq0f2u6vy.cloudfront.net/cache/f1/bb/f1bb7656fe953c49c272562046468bf5.jpg",
    category: "biology",
  },
  {
    id: 7,
    title: "language",
    url: "https://d2nchlq0f2u6vy.cloudfront.net/cache/14/1f/141f01deaebeb965fd1211d40ee02598.jpg",
    category: "languages",
  },
  {
    id: 8,
    title: "Business Management for the IB Diploma Coursebook",
    url: "https://d2nchlq0f2u6vy.cloudfront.net/cache/7c/e0/7ce08dcc74097c80235e428ff3b4b313.jpg",
    category: "business",
  },
];

export const getExplainContent = (category) => {
  const result = content.filter((item) => item.category === category);
  return result;
};
