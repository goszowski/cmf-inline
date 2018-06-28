@extends('layouts.app')

@section('content')

<div data-aos="fade" class="aos title-block clearfix text-xs-md-center">
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

{!! Form::open(['url'=>lPath('/brief'), 'method'=>'post']) !!}
	{!! app('captcha')->render(); !!}
	@foreach($groups as $group)
	<div class="contact-form clearfix">
		<p class="title-block_small-title">{{ $group->name }}</p>
		<div class="row">

			@foreach($fields as $field)
				@if($field->parent_id == $group->id)
					@include('partials.fields.' . $field->field_type->template)
				@endif
			@endforeach

		</div>
	</div>
	@endforeach

	<div class="contact-form clearfix">
		<label>
			<input required type="checkbox" name="accept" id="accept"> {{ t('Wyrażam zgodę na przetwarzanie moich danych osobowych') }}
		</label>
	</div>
	



	@include('partials.block-btn')
{!! Form::close() !!}

@endsection

@section('page-scripts')
<script>

	$(document).ready(function(){

		@if($section->wordsArr)
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
		@endif

		AOS.init({
			duration: 1000,
			offset: 10,
		});
	});

</script>
@endsection
