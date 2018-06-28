@extends('layouts.app')

@section('header-class', 'white-objects')

@section('content')

<div class="block-relative">
	<ul class="home-slider owl-carousel">

		@foreach($slides as $slide)
			<li class="home-slider__item">
				<span class="home-slider__item__title">
					<span class="home-slider__item__title_little">{{ $slide->description }}</span>
					<span class="home-slider__item__title_detail">{{ $slide->name }}</span>
				</span>
				<img src="{{ $slide->image->max() }}" alt="The title of the slide">
			</li>
		@endforeach

	</ul>
	
	<div class="mouse">
		<img src="{{ asset('assets/dist/images/mause_w.svg') }}" alt="mouse">
	</div>
</div>


<div data-aos="fade" data-aos-duration="2000" class="aos title-block clearfix text-xs-md-center">
	<div class="inner-block pl-172">
		<p class="title-block_small-title">{{ $root->name }}</p>
			<h2 class="title-block_big-title">
				<span class="element"
				@foreach($words as $k=>$word)
					data-text{{ $k }}="{{ $word }}" 
				@endforeach
				 data-loop="true" data-backdelay="3000">
					{{ isset($words[0]) ? trim($words[0]) : null }}
				</span>
				<span class="typed-cursor"></span>
			</h2>
	</div>
	<div class="inner-block pr-172">
		<div class="title-block_descr">
			{!! $root->content !!}
		</div>
	</div>
</div>

<div data-aos="fade" class="aos image-links">

	<div class="image-links_line clearfix">
		@foreach($projects as $k=>$project)

			@if($k and $k%2 === 0)
				</div><div class="image-links_line clearfix">
			@endif

			<div class="inner-block">
				<a href="{{ lPath($project->node->path->name) }}" class="inner-block_link portfolio-link">
					<img src="{{ $project->image->size(850) }}" alt="{{ $project->name }}">
					<div class="inner-block_link__descr">
						<h3 class="inner-block_link__big-title">{{ $project->name }}</h3>
						<p class="inner-block_link__small-title">
							@foreach($project->project_categories as $k=>$category)
								{{ $category->name . (++$k < count($project->project_categories) ? ', ' : null) }}
							@endforeach
						</p>
					</div>
				</a>
			</div>
		@endforeach
	</div>
</div>

<div class="all-portfolio_btn__wrapp">
	<a href="{{ lPath('/portfolio') }}" class="all-portfolio_btn"><img src="{{ asset('assets/dist/images/arrow_b.svg') }}" alt="arrow"></a>
</div>

<div data-aos="fade" class="aos bottom_links-wrapp pl-172 pr-172">
	<p class="title-block_small-title">{{ t('Nasza kompleksowa oferta') }}</p>
	<h2 class="title-block_big-title">{{ t('Kompetencje') }}</h2>

	<div class="bottom_links clearfix">
		<div class="inner-block">
			<ul class="links">

				@foreach($services as $k=>$service)

					@if($k and $k%3 == 0)
						</ul></div><div class="inner-block"><ul class="links">
					@endif

					<li><a href="#" class="bottom-link">{{ $service->name }}</a></li>
				@endforeach
				
			</ul>
		</div>
	</div>

</div>

@include('partials.block-link')

@endsection

@section('page-scripts')
<script>


	$(function() {
		var homeSliderAutoplayTimeout = 6000; 
		var homeSlider = $('.home-slider'); 
		var homeSliderRunProgress = function() {
			var dot = $('.home-slider .owl-dot.active .progress');
			dot.stop();
			dot.css('width', '0%');
			dot.animate({'width': '100%'}, homeSliderAutoplayTimeout);
		} 

		homeSlider.on('initialized.owl.carousel', function(event) {
			setTimeout(function() {
				$('.home-slider .owl-dot').append('<div class="line"></div><div class="progress"></div>');
				homeSliderRunProgress();
			}, 50);
		}); 

		var homeSlider = homeSlider.owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			autoplay: true,
			autoplayTimeout: homeSliderAutoplayTimeout,
			autoplaySpeed: 800,
			navSpeed: 800,
			dotsSpeed: 800,
		}); 

		homeSlider.on('change.owl.carousel', function(event) {
			setTimeout(homeSliderRunProgress, 50);
			$('.home-slider__item__title').removeClass('animation-start');
		});

		$('.element').typed({
			strings: [
				@foreach($words as $k=>$word)
					$('.element').data('text{{ $k }}'), 
				@endforeach
			],
			loop: $('.element').data('loop') ? $('.element').data('loop') : false ,
			backDelay: $('.element').data('backdelay') ? $('.element').data('backdelay') : 2000 ,
			typeSpeed: 10,
		});

		
		
	});

	$(document).ready(function(){

		AOS.init({
			duration: 1000,
			offset: 10,
		});

		$('.bottom-link').hover(function(event){
			var link = event.target;
			$(this).addClass('link-hover');
		}, function(){
			$(this).removeClass('link-hover');
		});


	});
	

	</script>
@endsection
