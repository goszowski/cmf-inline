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
		$publications = M('publication')->orderBy('pubdate', 'desc')->paginate();

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
