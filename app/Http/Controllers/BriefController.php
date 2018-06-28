<?php

namespace App\Http\Controllers;

use Runsite\CMF\Http\Controllers\RunsiteCMFBaseController;
use Illuminate\View\View;
use Illuminate\Http\Request;
use App\Mail\Brief as BriefMail;
use Mail;

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

	public function send(Request $request)
	{
		$root = M('root')->first();
		$html = '';
		foreach($request->fields as $group_id=>$fields)
		{
			$group = M('group')->where('node_id', $group_id)->first();

			$html .= '<b>'.$group->name.'</b><br>';

			foreach($fields as $field_id=>$value)
			{
				$field = M('field')->where('node_id', $field_id)->first();

				$html .= $field->name.': ' . $value . '<br>';
			}

			$html .= '<hr>';
		}


		Mail::to($root->contact_email)->send(new BriefMail($html));

		return view('brief.complete');
	}
}
