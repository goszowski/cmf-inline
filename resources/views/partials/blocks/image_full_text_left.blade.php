<div data-aos="fade" class="aos studio-inner-block bg-reverse clearfix pl-172 pr-172">
	<img src="{{ $block->image->max() }}" alt="{{ $block->name }}">
	<div class="studio-inner-block_descr">
		<h3 class="inner-block_link__big-title fz36">
			<span class="element" data-loop="true" data-backdelay="3000" 
				@if($block->wordsArr)
					@foreach ($block->wordsArr as $k=>$word)
						data-text{{ $k }}="{{ trim($word) }}" 
					@endforeach
				@endif
				
				>
				{{ $block->name }}
			</span>
		</h3>
		<p class="inner-block_link__small-title">{{ $block->sub_title }}</p>
		<div class="title-block_descr">
			{!! $block->content !!}
		</div>
	</div>
</div>
