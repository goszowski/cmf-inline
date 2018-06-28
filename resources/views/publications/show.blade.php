@extends('layouts.app')

@section('content')

<div data-aos="fade" class="aos title-block publication-title-block clearfix text-xs-md-center">
	<div class="inner-block pl-172 pr-172" style="width: auto;">
		<p class="title-block_small-title">{{ $publication->pubdate->format('d.m.Y') }}</p>
		<h1 class="title-block_big-title">{{ $publication->name }}</h1>
		<div class="title-block_descr publications-info">
			{{ $publication->info }}
		</div>
	</div>
</div>

<div class="portfolio-images text-center publication-image">
	<img src="{{ $publication->image->max() }}">
</div>

<div data-aos="fade" class="aos studio-text" style="margin-top: 100px; padding-bottom:0;">
	{!! $publication->content !!}
</div>



@include('partials.block-link')

@endsection

@section('page-scripts')
<script>

	$(document).ready(function(){

		AOS.init({
			duration: 1000,
			offset: 10,
		});

	});


</script>
@endsection
