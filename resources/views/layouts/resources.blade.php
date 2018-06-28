<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" prefix="og: http://ogp.me/ns#">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	@if(isset($seo))
		{{-- Base meta tags --}}
		<title>{{ $seo->title }}</title>
		<meta name="description" content="{{ $seo->description }}">
		<meta name="robots" content="index, follow">
		<meta name="author" content="{{ $seo->author }}">
		{{-- Base meta tags END --}}

		{{-- Open Graph --}}
		<meta name="og:title" content="{{ $seo->title }}">
		<meta name="og:type" content="website">

		@if($seo->image)
			<meta name="og:image" content="{{ $seo->image }}">
		@endif

		<meta name="og:description" content="{{ $seo->description }}">
		<meta name="og:site_name" content="{{ $seo->author }}">
		{{-- Open Graph END --}}
	@else
		<title>{{ config('app.name') }}</title>
	@endif

	<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,700&amp;subset=latin-ext" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
	<link rel="stylesheet" href="{{ asset('assets/vendor/font-awesome/css/font-awesome.min.css') }}">

	<link rel="stylesheet" href="{{ asset('assets/vendor/pace/pace.css') }}">
	<link rel="stylesheet" href="{{ asset('assets/vendor/animate.css/animate.css') }}">
	<link rel="stylesheet" href="{{ asset('assets/vendor/aos/dist/aos.css') }}">
	<link rel="stylesheet" href="{{ asset('assets/dist/css/style.min.css') }}">

	<style>
		.text-white {color: #fff;}
		.studio-text img {
			padding: 0;
			margin-left: -100px;
			margin-right: -100px;
			width: calc(100% + 200px);
			max-width: calc(100% + 200px);
		}

		.publications-info {
			font-size: 24px;
			line-height: 35px;
			padding-top: 50px;
		}
		
		.publication-image {
			margin-bottom: 0;
		}

		.publication-image img {
			width: 100%;
		}

		.publication-title-block {
			padding-bottom: 70px;
		}
	</style>

	{{-- APP STYLES END --}}
</head>
<body>
	@yield('app')

	{{-- APP SCRIPTS --}}
	{!! Minify::javascript([

	]) !!}
	{{-- APP SCRIPTS END --}}

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="/assets/vendor/aos/dist/aos.js"></script>
	<script src="/assets/vendor/pace/pace.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
	<script src="{{ asset('assets/vendor/typed.js') }}"></script>

	<script>

	$(document).ready(function(){

		$('.main-nav a').hover(function(event){
		var link = event.target;
		$(this).addClass('link-hover');
		}, function(){
			$(this).removeClass('link-hover');
		});

	});

	var color = 0;

	$(function(){
		if($('header').hasClass('black-objects')) {
			color = 1;
		}
	});

	$('.menu-toggler').on('click', function(){
		if($('header').hasClass('white-objects')) {
			if($('header').hasClass('scrolled')) {
				$('#navigation').addClass('open');
				$('body').addClass('navigation-is-open');
				$('html').addClass('ovf-hidd');
			}
			else {
				$('#navigation').addClass('open');
				$('body').addClass('navigation-is-open');
				$('html').addClass('ovf-hidd');
				setTimeout(function() {
					$('header').removeClass('white-objects').addClass('black-objects');
				}, 700);
			}
		}
		else {
			if($('header').hasClass('scrolled')) {
				$('#navigation').addClass('open');
				$('body').addClass('navigation-is-open');
				$('html').addClass('ovf-hidd');
			}
			else {
				$('#navigation').addClass('open');
				$('body').addClass('navigation-is-open');
				$('html').addClass('ovf-hidd');
			}
		}

	});

	$('.menu-close').on('click', function(){
		if (color == 0) {
			if($('header').hasClass('scrolled')) {
				$('#navigation').removeClass('open');
				$('body').removeClass('navigation-is-open');
				$('html').removeClass('ovf-hidd');
			}
			else {
				$('#navigation').removeClass('open');
				$('body').removeClass('navigation-is-open');
				$('html').removeClass('ovf-hidd');
				$('header').removeClass('black-objects').addClass('white-objects');
			}
		}
		else {
			if($('header').hasClass('scrolled')) {
				$('#navigation').removeClass('open');
				$('body').removeClass('navigation-is-open');
				$('html').removeClass('ovf-hidd');
			}
			else {
				$('#navigation').removeClass('open');
				$('body').removeClass('navigation-is-open');
				$('html').removeClass('ovf-hidd');
			}
		}

	});

	$(document).ready(function(){

		setTimeout(function(){
			$('body').removeClass('pace-running');
		}, 3000);

		$('#up').click(function() {
			$('html, body').animate({scrollTop: 0},700);
			return false;
		});

		var header = $("header");
		var header_h = header.height() + 22;
		var scrollPrev = 0;
	
		$(window).scroll(function() {
			var scrolled = $(window).scrollTop();
			var firstScrollUp = false;
			var firstScrollDown = false;

			if ( scrolled > 0 ) {
				if ( scrolled > scrollPrev ) {
					firstScrollUp = false;
					if ( scrolled < header.height() + header.offset().top ) {
						if ( firstScrollDown === false ) {
							var topPosition = header.offset().top;
							header.css({
								"top": topPosition + "px"
							});
							firstScrollDown = true;
						}
						header.css({
							"position": "absolute"
						});
				} else {
						header.css({
							"position": "fixed",
							"top": "-" + header_h + "px"
						});
					}
			} else {
					firstScrollDown = false;
					if ( scrolled > header.offset().top ) {
						if ( firstScrollUp === false ) {
							var topPosition = header.offset().top;
							header.css({
								"top": topPosition + "px"
							});
							if(color == 0) {
								$(header).removeClass('white-objects').addClass('black-objects').addClass('scrolled');
							}
							else {
								$(header).addClass('scrolled');
							}
							firstScrollUp = true;
						}
						header.css({
							"position": "absolute"
						});
					} else {
						header.removeAttr("style");
						header.css({
							"background-color": "#fff"
						});
					}
				}
				scrollPrev = scrolled;
			}
			if(scrolled == 0) {
				header.css({
					"background-color": "transparent"
				});
				if(color == 0) {
					$(header).removeClass('black-objects').removeClass('scrolled').addClass('white-objects');
				} else {
					$(header).removeClass('scrolled');
				}
			}
		});
	});
	</script>

	@yield('page-scripts')
</body>
</html>

