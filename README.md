# Simple Load More
This jQuery plugin will add a functionality to load 5 (or custom) more items. Best for lists that are long and you want to hide all except first 5 (or custom) and then show a "Load More" button. When that button is clicked, it loads another 5 items.

*Note: this is not AJAX based. It just hides all the items except the first 5 (or custom) and shows another 5 when button is clicked.*

<a href="https://zeshanshani.github.io/simple-load-more/demos/demo.html" target="_blank">View Demo</a>

## Downlaod

### Via NPM

Download this plugin using this NPM commend.

```
npm i simple-load-more
```

### Regular

Simply close this repository or download it as zip. After that, include the `jquery.simpleLoadMore.js` file in the head or footer of your HTML page.

``` HTML
<script src="/js/jquery.simpleLoadMore.js"></script>
```

You can also use the minified version, which is: `jquery.simpleLoadMore.min.js`

## Usage

``` JS
$('.some-element').simpleLoadMore({
  item: '.element-item',
  count: 5,
  // itemsToLoad: 10,
  // btnHTML: '<a href="#" class="load-more__btn">View More <i class="fas fa-angle-down"></i></a>'
});
```

## Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| item | string (jQuery Selector) | null | Set the class of the actual items this plugin should take in count. |
| count | integer | 5 | Set the number of items to show at first and load after the button is clicked (if `itemsToLoad` is not set) |
| itemsToLoad | integer | value of `count` | set the number of items to load. Set to -1 to load all at once. |
| btnHTML | string (html) | `<a href="#" class="load-more__btn">View More <i class="fas fa-angle-down"></i></a>` | Set a custom button here. |
