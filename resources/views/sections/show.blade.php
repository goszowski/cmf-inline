@extends('layouts.app')

@section('content')

<div data-aos="fade" class="aos title-block clearfix text-xs-md-center">
	<div class="inner-block pl-172">
		<p class="title-block_small-title">{{ $section->sub_title }}</p>
		<h1 class="title-block_big-title">
			<span class="element" data-loop="true" data-backdelay="3000" 
				@foreach ($section->wordsArr as $k=>$word)
					data-text{{ $k }}="{{ trim($word) }}" 
				@endforeach
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

<div class="blocks">
	@foreach($blocks as $block)
		<div id="block-{{ $block->node->id }}">
			@include('partials.blocks.'.$block->block_option->template)
		</div>
	@endforeach
</div>

@include('partials.block-link')

@endsection

@section('page-scripts')
<script>

	$(document).ready(function(){

		$('h1 .element').typed({
			strings: [
				@foreach($section->wordsArr as $k=>$word)
					$('.element').data('text{{ $k }}'), 
				@endforeach
			],
			loop: $('h1 .element').data('loop') ? $('h1 .element').data('loop') : false ,
			backDelay: $('h1 .element').data('backdelay') ? $('h1 .element').data('backdelay') : 2000 ,
			typeSpeed: 10,
		});

		@foreach($blocks as $block)
			@if($block->wordsArr)
				$('.blocks #block-{{ $block->node->id }} .element').typed({
					strings: [
						@foreach($block->wordsArr as $k=>$word)
							$('.blocks #block-{{ $block->node->id }} .element').data('text{{ $k }}'), 
						@endforeach
					],
					loop: $('.blocks #block-{{ $block->node->id }} .element').data('loop') ? $('.blocks #block-{{ $block->node->id }} .element').data('loop') : false ,
					backDelay: $('.blocks #block-{{ $block->node->id }} .element').data('backdelay') ? $('.blocks #block-{{ $block->node->id }} .element').data('backdelay') : 2000 ,
					typeSpeed: 10,
				});
			@endif
		@endforeach

		AOS.init({
			duration: 1000,
			offset: 10,
		});
	});

</script>
@endsection
