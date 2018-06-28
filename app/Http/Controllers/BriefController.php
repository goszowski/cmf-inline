<?php

namespace App\Http\Controllers;

use Runsite\CMF\Http\Controllers\RunsiteCMFBaseController;
use Illuminate\View\View;

class BriefController extends RunsiteCMFBaseController
{
	/**
	 * Display the specified section.
	 */
	public function show(): View
	{
		$groups = M('group')->ordered()->get();
		$fields = M('field')->ordered()->get();

		return $this->view('brief.show', compact('groups', 'fields'));
	}
}
