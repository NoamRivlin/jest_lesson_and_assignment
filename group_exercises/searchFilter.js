const urlArray = [
  { id: 1, url: "https://www.url1.dev" },
  { id: 2, url: "https://www.url2.dev" },
  { id: 3, url: "https://www.link3.dev" },
];

function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter((arrayElement) => {
    return arrayElement.url.match(searchTerm);
  });
}
filterByTerm(urlArray, "link");

module.exports = { filterByTerm };
