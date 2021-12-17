(function( $ ) {
	const container = $( '#wpdb' );
	const nav = container.find( '.subnav' );

	function toggle_nav( type ) {
		$( '#wpdb .subnav a' ).removeClass( 'active' );
		$( '#wpdb .subnav a[data-type="' + type + '"]' ).addClass( 'active' );

		const visibleClass = type + '-content';
		container.find( 'fieldset' ).hide();
		container.find( '.' + visibleClass ).show();

		history.replaceState(null, null, ' ');
		if ( type !== 'backup') {
			window.location.hash = type;
		} else {
			$( '.wp-db-backup-schedule-updated').remove();
		}
	}

	nav.on( 'click', 'a', function( e ) {
		e.preventDefault();
		toggle_nav( $( this ).attr( 'href' ).substr( 1 ) );
	} );

	$( document ).on( 'ready', function() {
		var type = window.location.hash.substr( 1 );
		if ( type.length && ['backup', 'schedule'].includes( type ) ) {
			toggle_nav( type );
		}
	} );

})( jQuery );