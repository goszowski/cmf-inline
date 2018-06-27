<div data-aos="fade" class="aos title-block clearfix text-xs-md-center reverse-block small-block">
	<div class="inner-block pl-172">
		<h2 class="title-block_big-title fz36">
			<span class="element" data-loop="true" data-backdelay="3000" 
				@if($block->wordsArr)
					@foreach ($block->wordsArr as $k=>$word)
						data-text{{ $k }}="{{ trim($word) }}" 
					@endforeach
				@endif
				>
				{{ $block->name }}
			</span>
		</h2>
	</div>
	<div class="inner-block pr-172">
		<div class="oferta-list text-white">
			{!! $block->content !!}
		</div>
		
	</div>
</div>
