<?php

namespace App\Http\Controllers;

use Runsite\CMF\Http\Controllers\RunsiteCMFBaseController;
use Illuminate\View\View;

class ServiceController extends RunsiteCMFBaseController
{
	/**
	 * Lista oferty
	 */
	public function index(): View
	{
		$blocks = M('block')->where('parent_id', $this->node->id)->ordered()->get();
		return $this->view('service.index', compact('blocks'));
	}
}
