@extends('layouts.app')

@section('header-class', 'white-objects')

@section('content')

<div class="portfolio-inner-head">
	<img src="{{ $project->image->max() }}" alt="{{ $project->name }}">
	<a href="/portfolio" class="back-to-portfolio has-icon-btn text-uppercase">powrót</a>
</div>

<div class="title-block clearfix text-xs-md-center">
	<div class="inner-block pl-172">
		<p class="title-block_small-title">
			@foreach($project->project_categories as $k=>$category)
				{{ $category->name . (++$k < count($project->project_categories) ? ', ' : null) }}
			@endforeach
		</p>
		<h2 class="title-block_big-title">{{ $project->name }}</h2>
	</div>
	<div class="inner-block pr-172">
		<div class="title-block_descr">
			{!! $project->content !!}
		</div>
	</div>
</div>

<div class="portfolio-images text-center">
	@foreach($images as $image)
		<img src="{{ $image->image->max() }}">
	@endforeach
</div>


<div class="image-links portfolio-inner_nav">
	<div class="image-links_line clearfix">
		@if($prev)
			<div class="inner-block">
				<a href="{{ lPath($prev->node->path->name) }}" class="inner-block_link portfolio-nav-left">
					<img src="{{ $prev->image->size(850) }}" alt="{{ $prev->name }}">
					<div class="inner-block_link__descr">
						<div class="pos-relative">
							<h3 class="inner-block_link__big-title">{{ $prev->name }}</h3>
							<p class="inner-block_link__small-title">
								@foreach($prev->project_categories as $k=>$prev_category_item)
									{{ $prev_category_item->name . (++$k < count($prev->project_categories) ? ', ' : null) }}
								@endforeach
							</p>
						</div>
					</div>
				</a>
			</div>
		@endif
		
		@if($next)
			<div class="inner-block">
				<a href="{{ lPath($next->node->path->name) }}" class="inner-block_link portfolio-nav-right">
					<img src="{{ $next->image->size(850) }}" alt="{{ $next->name }}">
					<div class="inner-block_link__descr">
						<div class="pos-relative">
							<h3 class="inner-block_link__big-title">{{ $next->name }}</h3>
							<p class="inner-block_link__small-title">
								@foreach($next->project_categories as $k=>$prev_category_item)
									{{ $prev_category_item->name . (++$k < count($next->project_categories) ? ', ' : null) }}
								@endforeach
							</p>
						</div>
					</div>
				</a>
			</div>
		@endif
	</div>
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
