jQuery(function($) {
    const container = $('#wpdb');
    const nav = container.find('.subnav');

    nav.on( 'click', 'a', function (e) {
        e.preventDefault();

        nav.find('a').removeClass('active');
        $(this).addClass('active');

        const visibleClass = $(this).attr('href').substr(1) + '-content';
        container.find('fieldset').hide();
        container.find('.' + visibleClass).show();
    });
});