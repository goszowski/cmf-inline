@extends('layouts.resources')

@section('app')
<header class="@yield('header-class', 'black-objects')">
	<a href="/" class="logo">
		<span class="logo-default-state"></span>
		<span class="logo-hover-state"></span>
	</a>

	<button type="button" class="menu-toggler">
		<span class="menu-toggler__default-state"></span>
		<span class="menu-toggler__hover-state"></span>
	</button>

	<div id="navigation">
		<div class="navigation-inner">
			<button type="button" class="btn-transp menu-close">
				<span></span>
			</button>
			<nav class="main-nav">
				<ul>
					@foreach($mainMenuItems as $menu_item)
						<li>
							<a class="" href="{{ lPath($menu_item->link->node->path->name) }}">{{ $menu_item->name }}</a>
						</li>
					@endforeach
				</ul>
			</nav>

			<div class="contact-info">
				<div class="contact-info_top">
					{!! $rootNode->address !!}
				</div>
				<div class="contact-info_bottom">
					{!! $rootNode->contact !!}
				</div>
			</div>
			
			<nav class="footer-nav">
				<ul class="footer-nav_left">
					@foreach($footerMenuItems as $menu_item)
						<li>
							<a class="" href="{{ lPath($menu_item->link->node->path->name) }}">{{ $menu_item->name }}</a>
						</li>
					@endforeach
				</ul>

				<ul class="footer-nav_right">
					@foreach($socialMenuItems as $menu_item)
						<li>
							<a rel="nofollow" target="_blank" href="{{ $menu_item->link }}"><i class="fa fa-{{ str_slug($menu_item->name) }}"></i></a>
						</li>
					@endforeach
				</ul>
			</nav>
		</div>
	</div>
</header>

<main>
	@yield('content')
</main>

{{-- Footer --}}
<footer  data-aos="fade" class="aos pl-172 pr-172">

	<div class="footer-top-line clearfix">
		<div class="inner-block">
			<div class="contact-info">
				<div class="contact-info_top">
					{!! $rootNode->address !!}
				</div>
				<div class="contact-info_bottom">
					{!! $rootNode->contact !!}
				</div>
			</div>
		</div>
		<div class="inner-block text-right">
			<span id="up" class="has-icon-btn text-uppercase transform-btn white-btn fz10 to-top">TO TOP<img src="/assets/dist/images/arrow_w.svg" alt="d"></span>
		</div>
	</div>
	
	<div class="footer-bottom-line clearfix">
		<div class="inner-block">
			<ul class="footer-nav_left">
					@foreach($footerMenuItems as $menu_item)
						<li>
							<a class="" href="{{ lPath($menu_item->link->node->path->name) }}">{{ $menu_item->name }}</a>
						</li>
					@endforeach
				</ul>
		</div>
		<div class="inner-block text-right">
			<ul class="footer-nav_right">
				@foreach($socialMenuItems as $menu_item)
					<li>
						<a rel="nofollow" target="_blank" href="{{ $menu_item->link }}"><i class="fa fa-{{ str_slug($menu_item->name) }}"></i></a>
					</li>
				@endforeach
			</ul>
		</div>
	</div>


</footer>
{{-- / Footer --}}

@endsection
