export default class Loading {
    $loading = null;
  
    constructor({ $target }) {
      const $loading = document.createElement("div");
      $loading.className = "Loading";
      this.$loading = $loading;
      $target.appendChild($loading);
  
  
      this.render();
    }
  
    setState() {
      this.render();
    }
  
    render() {
      this.$loading.innerHTML = `로딩중`;
      this.$loading.style.display = "none";
    }
  }
  