<div data-aos="fade" class="aos studio-text" style="margin-top: 100px; padding-bottom:0;">
	<h3>
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
	{!! $block->content !!}
</div>
