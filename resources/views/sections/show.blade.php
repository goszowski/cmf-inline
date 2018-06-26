@extends('layouts.app')

@section('content')
	<div class="container">
		<h1>Node: {{ $section->node->id }}; Is Active: {{ $section->is_active }}</h1>
	</div>
@endsection
