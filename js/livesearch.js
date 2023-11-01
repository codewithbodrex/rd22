jQuery(document).ready(function($){
    var $productListItems = $('.product-list li');

    $productListItems.each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });

    var $projectListItem = $('.project-list div');

    $projectListItem.each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });

    $('.search').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();

        $productListItems.each(function(){
            var $productListItem = $(this);
            var dataSearchTerm = $productListItem.attr('data-search-term');

            if (dataSearchTerm.includes(searchTerm) || searchTerm.length < 1) {
                $productListItem.show();
            } else {
                $productListItem.hide();
            }
        });
        $projectListItem.each(function(){
            var $projectListItem = $(this);
            var dataSearchTerm = $projectListItem.attr('data-search-term');

            if (dataSearchTerm.includes(searchTerm) || searchTerm.length < 1) {
                $projectListItem.show();
            } else {
                $projectListItem.hide();
            }
        });
    });
});