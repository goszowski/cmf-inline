<?php

namespace App\Http\Controllers;

use Runsite\CMF\Http\Controllers\RunsiteCMFBaseController;
use Illuminate\View\View;

class PublicationsController extends RunsiteCMFBaseController
{
	/**
	 * Display a listing of the news.
	 */
	public function index(): View
	{
		$skip = request('skip') ?: 0;
		$publications = M('publication')->orderBy('pubdate', 'desc')->skip($skip)->take(30)->get();

		return $this->view('publications.index', compact('publications'));
	}

	/**
	 * Display the specified news item.
	 */
	public function show(): View
	{

		return $this->view('publications.show');
	}
}
