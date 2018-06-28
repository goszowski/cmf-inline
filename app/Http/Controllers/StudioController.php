<?php

namespace App\Http\Controllers;

use Runsite\CMF\Http\Controllers\RunsiteCMFBaseController;
use Illuminate\View\View;

class StudioController extends RunsiteCMFBaseController
{

	/**
	 * Display the specified section.
	 */
	public function show(): View
	{
		$blocks = M('block')->where('parent_id', $this->node->id)->ordered()->get();
		$logos = M('logo')->ordered()->get();
		return $this->view('studio.show', compact('blocks', 'logos'));
	}
}
