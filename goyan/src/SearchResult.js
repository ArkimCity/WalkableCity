export default class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    try {
      if (this.data.length > 0) {
        this.$searchResult.innerHTML = this.data
          .map(
            cat => `
              <div class="item">
                <img src=${cat.url} alt=${cat.name} />
              </div>
            `
          )
          .join("");
    
        this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
          $item.addEventListener("click", () => {
            this.onClick(this.data[index]);
          });
        });
      } else {
        this.$searchResult.innerHTML = '검색 결과가 존재하지 않습니다'
      }
    } catch (error) {
      this.$searchResult.innerHTML = '오류가 발생했습니다 다시 시도해주세요.';
    }
  }
}
