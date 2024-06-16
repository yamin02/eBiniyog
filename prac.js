$(document).ready(function() {
    const allocations = $('.allocation') ;
    const max = Math.max(...allocations.map((_, el) => parseFloat($(el).data('allocation'))).get());
    
    allocations.each(function() {
        const value = parseFloat($(this).data('allocation'));
        $(this).css({
            'border-bottom': '3px solid #337ab7',
            'width': `${(value / max) * 100 + 20}px`
        });
    });
})
    $('#toggle-sectors').on( 'click' ,function() {
        const hiddenItems = $('#fund-sector-list .hidden');
        if (hiddenItems.is(':hidden')) {
            hiddenItems.css('display', 'flex');
            $(this).text('Hide all');
        } else {
            hiddenItems.css('display', 'none');
            $(this).text('View all');
        }
    });

