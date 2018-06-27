<?php

namespace App\Http\Controllers;

use Runsite\CMF\Http\Controllers\RunsiteCMFBaseController;
use Illuminate\View\View;

class SectionsController extends RunsiteCMFBaseController
{
	/**
	 * Display a listing of the sections.
	 */
	public function index(): View
	{
		$sections = M('section')
			->where('parent_id', $this->node->id) // Only child items of current node
			->ordered() // Order by position asc
			->paginate();

		return $this->view('sections.index', compact('sections'));
	}

	/**
	 * Display the specified section.
	 */
	public function show(): View
	{
		$blocks = M('block')->where('parent_id', $this->node->id)->ordered()->get();
		return $this->view('sections.show', compact('blocks'));
	}
}
