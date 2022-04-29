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
| btnText | string | `View More` | Set button's custom text here. Use placeholders `{showing}` and `{total}` for showing items counter. Where `{showing}` shows the current number of items displaying and `{total}` shows the total items one instance has. |
| cssClass | string | `load-more` | Set the custom CSS class for the instance. Do not include dot in the class name, e.g., `new-class`  |
| showCounter | boolean | false | Shows the counter in a separate tag. By default enabling this option will show a text `Showing X out of X` before the load more button. <a href="https://zeshanshani.github.io/simple-load-more/demos/demo.html" target="_blank">View Demo</a> for the example. |
| counterText | string | `Showing {showing} out of {total}` | Set custom counter text here. Use placeholders `{showing}` and `{total}` in the text. Where `{showing}` shows the current number of items displaying and `{total}` shows the total items one instance has. |
| btnWrapper | string (html) \\| boolean | `<div class="load-more__btn-wrap"></div>` | Wrap custom HTML tag around the 'Load More' button. Or set this to `false` to completely remove the wrapper |
| btnWrapperClass | string | null | Add a custom CSS class to the button wrapper. |
| easing | string | `fade` | This property determines how the items should load when the button is clicked. You can set it to `fade` or `slide`. |
| easingDuration | string | `400` | Defines how long it should take to load next items. The value is in milliseconds. |

## Changelog

#### 1.5.3

- Bugfix: typo in variable declaration of using ; instead of ,
- Bugfix: incorrect counter fix so when count is greater than total items length, then show items length instead.

#### 1.5.2

- Improvement: remove button wrapper as well when all items have been loaded.

#### 1.5.0

- Feature: ability to set a custom button wrapper and wrapper class
- Feature: ability to change easing to 'slide'. Default is 'fade'
