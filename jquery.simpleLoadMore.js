/**
 * Simple Load More
 *
 * Version: 1.5.3
 * Author: Zeshan Ahmed
 * Website: https://zeshanahmed.com/
 * Github: https://github.com/zeshanshani/simple-load-more/
 * @license MIT
 */
(function($) {
  $.fn.simpleLoadMore = function( options ) {
    // Settings.
    var settings = $.extend({
      item: '',
      count: 5,
      itemsToLoad: 5,
      cssClass: 'load-more',
      showCounter: false,
      counterText: 'Showing {showing} out of {total}',
      btnHTML: '',
      btnText: 'View More',
      btnWrapper: '',
      btnWrapperClass: '',
      easing: 'fade',
      easingDuration: 400
    }, options);

    // Variables
    var $loadMore = $(this);

    // Run through all the elements.
    $loadMore.each(function(i, el) {

      // Define all settings as variables
      var item            = settings.item,
          count           = settings.count,
          itemsToLoad     = settings.itemsToLoad,
          cssClass        = settings.cssClass,
          showCounter     = settings.showCounter,
          counterText     = settings.counterText,
          btnHTML         = settings.btnHTML,
          btnText         = settings.btnText,
          btnWrapper      = settings.btnWrapper,
          btnWrapperClass = settings.btnWrapperClass;
          // easing          = settings.easing,
          // easingDuration  = settings.easingDuration;


      // Default settings if empty
      if ( ! btnWrapper && btnWrapper !== false ) {
        btnWrapper = '<div class="' + cssClass + '__btn-wrap' + ( btnWrapperClass ? ' ' + btnWrapperClass : '' ) + '"></div>';
      }

      // Variables.
      var $thisLoadMore = $(this),
          $items = $thisLoadMore.find(item),
          $btnHTML,
          $counterHTML = $('<p class="' + cssClass + '__counter">' + counterText + '</p>');

      // If showCounter is true, then append the counter text in the component.
      if ( showCounter ) {
        $thisLoadMore.append( $counterHTML );
      }

      // Default if not available
      if ( ! btnHTML ) btnHTML = '<a href="#" class="' + cssClass + '__btn">' + btnText + '</a>';

      // Set $btnHTML as $btnHTML
      $btnHTML = $(btnHTML);

      // If options.itemsToLoad is not defined, then assign settings.count to it
      if ( ! options.itemsToLoad || isNaN( options.itemsToLoad ) ) {
        settings.itemsToLoad = settings.count;
      }

      // Add classes
      $thisLoadMore.addClass(cssClass);
      $items.addClass(cssClass + '__item');

      // Add button.
      if ( ! $thisLoadMore.find( '.' + cssClass + '__btn' ).length && $items.length > settings.count ) {
        $thisLoadMore.append( $btnHTML );
      }

      // Replace counter with fields
      $btnHTML.add( $counterHTML ).html(function(i, oldHtml) {
        var newHtml = oldHtml.replace('{showing}', '<span class="' + cssClass + '__count ' + cssClass + '__count--showing">' + ( count > $items.length ? $items.length : count ) + '</span>');
        newHtml = newHtml.replace('{total}', '<span class="' + cssClass + '__count ' + cssClass + '__count--total">' + $items.length + '</span>');

        return newHtml
      })

      var $btn = $thisLoadMore.find( '.' + cssClass + '__btn' );

      // Check if button is not present. If not, then attach $btnHTML to the $btn variable.
      if ( ! $btn.length ) {
        $btn = $btnHTML;
      }

      if ( $items.length > settings.count ) {
        $items.slice(settings.count).hide();
      }

      // Wrap button in its wrapper.
      $btn.wrapAll( btnWrapper );

      // Add click event on button.
      $btn.on('click', function(e) {
        e.preventDefault();

        var $thisBtn = $(this);
        var $hiddenItems = $items.filter(':hidden');
        var $updatedItems = $hiddenItems;

        if ( settings.itemsToLoad !== -1 && settings.itemsToLoad > 0 ) {
          $updatedItems = $hiddenItems.slice(0, settings.itemsToLoad);
        }

        // Show the selected elements.
        if ( $updatedItems.length > 0 ) {
          if ( settings.easing === 'fade' ) {
            $updatedItems.fadeIn( settings.easingDuration );
          } else {
            $updatedItems.slideDown( settings.easingDuration );
          }
        }

        // Update the showing items count.
        $thisLoadMore.find('.' + cssClass + '__count--showing').text( $items.filter(':visible').length );

        // Hide the 'View More' button
        // if the elements lenght is less than 5.
        // OR if the settings.itemsToLoad is set to -1.
        if ( $hiddenItems.length <= settings.itemsToLoad || settings.itemsToLoad === -1 ) {
          if ( $thisBtn.parent( '.' + cssClass + '__btn-wrap' ) ) {
            $thisBtn.parent().remove();
          } else {
            $thisBtn.remove();
          }
        }
      });
    });
  }
}( jQuery ));
