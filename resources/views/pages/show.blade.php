@extends('layouts.app')

@section('content')
	<div class="container">
		<h1>Node: {{ $page->node->id }}; Is Active: {{ $page->is_active }}</h1>
	</div>
@endsection
