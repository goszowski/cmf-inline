<div data-aos="fade" class="aos title-block clearfix text-xs-md-center has-img reverse-block img-right block-relative">
	<div class="inner-block pl-172">
		<div class="oferta-inner-block_descr">
			<p class="title-block_small-title">{{ $block->sub_title }}</p>
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
			<div class="title-block_descr">
				{!! $block->content !!}
			</div>
		</div>
	</div>

	<div class="inner-block">
		<img src="{{ $block->image->max() }}" alt="{{ $block->name }}">
	</div>
</div>
