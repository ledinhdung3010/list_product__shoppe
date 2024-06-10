// show mode brands
$('.btn-show-more__brands').click(function(){
    $('.btn-show-more__brands').remove()
    $('.sidebar .shopee-brands-filter').append('<div class="shopee-checkbox-filter form-check">\
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">\
                                                    <label class="form-check-label" for="defaultCheck1">\
                                                        TLEE JEWELRY\
                                                    </label>\
                                                </div>\
                                                <div class="shopee-checkbox-filter form-check">\
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">\
                                                    <label class="form-check-label" for="defaultCheck1">\
                                                        TLEE JEWELRY\
                                                    </label>\
                                                </div>\
    ')
   
})
// show mode category
$('.btn-show-more__facet').click(function(){
    $('.btn-show-more__facet').remove()
    $('.sidebar .shopee-facet-filter').append('<div class="shopee-checkbox-filter form-check">\
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">\
                                                    <label class="form-check-label" for="defaultCheck1">\
                                                        TLEE JEWELRY\
                                                    </label>\
                                                </div>\
                                                <div class="shopee-checkbox-filter form-check">\
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">\
                                                    <label class="form-check-label" for="defaultCheck1">\
                                                        TLEE JEWELRY\
                                                    </label>\
                                                </div>\
    ')
   
})
// selected page
$('.page-item').on('click', function() {
    $('.page-item').removeClass('selected');
    $(this).addClass('selected');
});
//btn-prev
$('.btn-prev').on('click', function() {
    var selectedBtn = $('.page-item.selected');
    var prevBtn = selectedBtn.prev('.page-item');
    if (prevBtn.length > 0) {
        selectedBtn.removeClass('selected');
        prevBtn.addClass('selected');
    }
});
//btn-next
$('.btn-next').on('click', function() {
    var selectedBtn = $('.page-item.selected');
    var nextBtn = selectedBtn.next('.page-item');
    if (nextBtn.length > 0) {
        selectedBtn.removeClass('selected');
        nextBtn.addClass('selected');
    }
});
