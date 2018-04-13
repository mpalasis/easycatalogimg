EasyCatalogImages
=================
EasyCatalogImages - module that shows category listing of the specified parent category.
It's very helpful to improve browsing experience in categories with a lot of
child categories.

See more info on http://tmhub.github.io


(WIP) jcarousel Widget
======================
Adds a jcarousel widget template for categories.
Can be placed anywhere you want to indicate relation to the carousel's category
(ie. 'related categories'). Same powerful filtering option as default widget.

Note, current skinning is in-house.

Designed on Magento's RWD theme.
(WIP) displays accomodated:
- < 480px mobile vertical 
- regular Desktop (assumes >700px but allows fallback to max-width:100%).
- TODO: mobile horizontal (~640px) needs some tweaking to look good.
 
Restrictions: html uses div Ids and css/js selectors use div Ids, so can only use one widget per page and keep HTML valid.
(if you need multiple of these in any one page, then you need to modify where appropriate. It'll look bad though)



jcarousel needs to be loaded seperately
================================
get it here
jcarousel:
https://github.com/jsor/jcarousel
and jcarouselSwipe:
https://github.com/snake-345/jcarouselSwipe
