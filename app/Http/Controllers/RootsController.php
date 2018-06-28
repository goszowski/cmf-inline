<?php

namespace App\Http\Controllers;

use Runsite\CMF\Http\Controllers\RunsiteCMFBaseController;
use Illuminate\View\View;

class RootsController extends RunsiteCMFBaseController
{
	/**
	 * Display the specified root.
	 */
	public function show(): View
	{
		$slides = M('slide')->ordered()->get();
		$words = explode(',', $this->fields->words);
		$projects = M('project')->ordered()->take(4)->get();
		$services = M('block')->where('parent_id', 17)->where('show_on_home_page', true)->ordered()->get();
		return $this->view('roots.show', compact('slides', 'words', 'projects', 'services'));
	}
}
