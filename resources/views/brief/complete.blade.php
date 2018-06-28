@extends('layouts.app')

@section('content')
<div style="padding-top: 250px;">
	@include('partials.block-complete')
</div>

@endsection

@section('page-scripts')
<script>

	$(document).ready(function(){

		$('.element').typed({
			strings: [
				$('.element').data('text0'), 
				$('.element').data('text1'), 
			],
			loop: $('.element').data('loop') ? $('.element').data('loop') : false ,
			backDelay: $('.element').data('backdelay') ? $('.element').data('backdelay') : 1000 ,
			typeSpeed: 10,
		});

		AOS.init({
			duration: 1000,
			offset: 10,
		});
	});

</script>
@endsection
