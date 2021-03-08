import api from './api.js'
import ImageInfo from './ImageInfo.js'
import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import SearchRandom from './SearchRandom.js'
import Loading from './Loading.js'

console.log("app is running!");

export default class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        api.fetchCats(keyword).then(({ data }) => this.setState(data));
      }
    });
    
    this.searchRandom = new SearchRandom({
      $target,
      onSearch: () => {
        api.fetchRandomCats().then(({ data }) => this.setState(data));
      }
    })

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        this.imageInfo.setState({
          visible: true,
          image
        });
      }
    });

    this.loading = new Loading({
      $target
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
