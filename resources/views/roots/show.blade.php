@extends('layouts.app')

@section('content')
	<div class="container">
		<h1>Node: {{ $root->node->id }}; Is Active: {{ $root->is_active }}</h1>
	</div>
@endsection
