@extends('layouts.app')

@section('content')


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


<div  data-aos="fade"  data-aos-offset="50" class="aos image-links">
	<div class="image-links_line clearfix">

		@foreach($publications as $k=>$publication)

			@if($k and $k%2 === 0)
				</div><div class="image-links_line clearfix">
			@endif

			<div class="inner-block">
				<a href="{{ lPath($publication->node->path->name) }}" class="inner-block_link portfolio-link">
					<img src="{{ $publication->image->size(850) }}" alt="ff">
					<div class="inner-block_link__descr">
						<h3 class="inner-block_link__big-title">{{ $publication->name }}</h3>
						<p class="inner-block_link__small-title">
							{{ $publication->pubdate->format('d.m.Y') }}
						</p>
					</div>
				</a>
			</div>

		@endforeach

	</div>
</div>

@include('partials.block-link')


@endsection

@section('page-scripts')
<script>

	$(document).ready(function(){

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
