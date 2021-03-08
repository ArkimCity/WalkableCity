export default class SearchRandom {
  constructor({ $target, onSearch }) {
    const $searchRandom = document.createElement("button");
    this.$searchRandom = $searchRandom;
    this.$searchRandom.innerText = "랜덤검색해보세요.|";

    $searchRandom.className = "SearchRandom";
    $target.appendChild($searchRandom);


    $searchRandom.addEventListener("click", () => {
      onSearch();
    });

    console.log("searchRandom created.", this);
  }
  render() {}
}
