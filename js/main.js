requirejs.config(
	{
	    paths: {
			jquery: 'jquery-1.10.2', 
			sticky: 'jquery.sticky', 
			jquery_nav: 'jquery.nav',
			scrollTo: 'jquery.scrollTo',
			flexslider: 'jquery.flexslider',
			easing:'jquery.easing.1.3',
			shuffle:'jquery.shuffle',
			bootstrap : 'bootstrap',
            bundle : 'bundle',
	        script:'script'
	    }
	}
);

requirejs(['jquery', 'sticky', 'jquery_nav', 'scrollTo', 'flexslider', 'easing', 'shuffle', 'bootstrap', 'bundle', 'script'], function () {
    
});
