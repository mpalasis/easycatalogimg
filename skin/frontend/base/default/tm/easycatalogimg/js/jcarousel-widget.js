$j(document).ready(function () {

//jcarousel
  $j('#easycatalogimg-jcarousel #categories-carousel')
          // Bind first
//          .on('jcarousel:reload jcarousel:create', function () {
//            if (window.innerWidth <= 480) {
//              //disable preview for non-desktop users
//              jQuery("#easycatalogimg-jcarousel a.preview").off("mouseenter mouseleave");
//            }
//          })
          // Initialize at last step
          .jcarousel({
            scroll: 1,
            wrap: 'circular'
          })
          .jcarouselSwipe({
            perSwipe: 1 // by default 1
          });

  $j('#easycatalogimg-jcarousel .jcarousel-control-prev')
          .jcarouselControl({
            target: '-=1'
          });

  $j('#easycatalogimg-jcarousel .jcarousel-control-next')
          .jcarouselControl({
            target: '+=1'
          });

  $j('#easycatalogimg-jcarousel .jcarousel-pagination')
          .on('jcarouselpagination:active', 'a', function () {
            $j(this).addClass('active');
          })
          .on('jcarouselpagination:inactive', 'a', function () {
            $j(this).removeClass('active');
          })
          .on('click', function (e) {
            e.preventDefault();
          })
          .jcarouselPagination({
            perPage: 1,
            item: function (page) {
              return '<a href="#' + page + '">' + page + '</a>';
            }
          });

});
