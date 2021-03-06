@extends('layouts.app')

@section('content')

@if(! request('ajax'))
<div data-aos="fade" class="aos title-block title-block_portfolio clearfix text-xs-md-center">
	<div class="inner-block pl-172">
		<p class="title-block_small-title">{{ $section->sub_title }}</p>
		<h1 class="title-block_big-title">
			<span class="element" data-loop="true" data-backdelay="3000" 
				@if($section->wordsArr)
					@foreach ($section->wordsArr as $k=>$word)
						data-text{{ $k }}="{{ trim($word) }}" 
					@endforeach
				@endif
				>
				{{ $section->name }}
			</span>
		</h1>
	</div>
	<div class="inner-block pr-172">
		<div class="title-block_descr">
			{!! $section->content !!}
		</div>
	</div>
</div>

<div class="p-nav-container">
	<div class="header">
			<input class="nav-burger__checkbox hidden-md" type="checkbox" id="burger">
			<label class="nav-burger hidden-md" for="burger">Menu</label>
		<nav class="p-nav portfolio-nav">
			<ul>
				<li class="{{ !isset($project_category) ? 'active' : null }}">
					<a class="nav__item" href="{{ lPath('/portfolio') }}">{{ t('Wszystkie') }}</a>
				</li>
				@foreach($categories as $category)
					<li class="{{ (isset($project_category) and $project_category->node->path->name == $category->node->path->name) ? 'active' : null }}"><a href="{{ lPath($category->node->path->name) }}" class="nav__item">{{ $category->name }}</a></li>
				@endforeach
			</ul>
		</nav>
	</div>
</div>

<div  data-aos="fade"  data-aos-offset="50" class="aos image-links">
	<div class="image-links_line clearfix" id="projects-list">@endif

		@foreach($projects as $k=>$project)

			@if($k and $k%2 === 0)
				</div><div class="image-links_line clearfix">
			@endif

			<div class="inner-block">
				<a href="{{ lPath($project->node->path->name) }}" class="inner-block_link portfolio-link">
					<img src="{{ $project->image->size(850) }}" alt="ff">
					<div class="inner-block_link__descr">
						<h3 class="inner-block_link__big-title">{{ $project->name }}</h3>
						<p class="inner-block_link__small-title">
							@foreach($project->project_categories as $k=>$project_category_item)
								{{ $project_category_item->name . (++$k < count($project->project_categories) ? ', ' : null) }}
							@endforeach
						</p>
					</div>
				</a>
			</div>

		@endforeach

	@if(! request('ajax'))</div>

	<div id="post-projects-list"></div>
</div>

@include('partials.block-link')

@endif
@endsection

@if(! request('ajax'))
	@section('page-scripts')
	<script>

		$(document).ready(function(){

			var skip = 0;
			var request_is_runing = false;
			$(window).on('scroll', function() {
				var scrollTop = $(window).scrollTop();
				var offsetTop = $('#post-projects-list').offset().top;

				if(scrollTop >= (offsetTop - $(window).height()) && !request_is_runing)
				{
					request_is_runing = true;
					skip = skip + 30;
					$.get('{{ lPath('/portfolio') }}?ajax=true&skip='+skip, function(data) {
						request_is_runing = false;
						$('#projects-list').append(data);
					});
				}
			});

			@if($section->wordsArr)
				$('.element').typed({
					strings: [
						@foreach($section->wordsArr as $k=>$word)
							$('.element').data('text{{ $k }}'), 
						@endforeach
					],
					loop: $('.element').data('loop') ? $('.element').data('loop') : false ,
					backDelay: $('.element').data('backdelay') ? $('.element').data('backdelay') : 2000 ,
					typeSpeed: 10,
				});
			@endif

			AOS.init({
				duration: 1000,
				offset: 10,
			});
		});

	</script>
	@endsection
@endif

