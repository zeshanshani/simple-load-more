# Simple Load More
This jQuery function will add a functionality to load 5 (or custom) more items. Best for lists that are long and you want to hide all except first 5 (or custom) and then show a "Load More" button. When that button is clicked, it loads another 5 (or custom) items.

*Note: this is not AJAX based. It just hides all the items except the first 5 (or custom) and shows another 5 (or custom) when button is clicked.*

<a href="https://zeshanshani.github.io/simple-load-more/demo.html" target="_blank">View Demo</a>

## Options

* `Count`: Set the number of items to show at first and load after the button is clicked
* `btnHTML`: Set a custom button here.
* `item`: Set the class of the actual items this plugin should take in count.

## Usage

``` JS
$('.some-element').zaLoadMore({
  item: '.element-item',
  count: 5,
  // btnHTML: '<a href="#" class="load-more__btn">View More <i class="fas fa-angle-down"></i></a>'
});
```