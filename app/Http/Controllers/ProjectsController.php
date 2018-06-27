<?php

namespace App\Http\Controllers;

use Runsite\CMF\Http\Controllers\RunsiteCMFBaseController;
use Illuminate\View\View;

class ProjectsController extends RunsiteCMFBaseController
{
	/**
	 * Lista projektów
	 */
	public function index(): View
	{
		$section = null;
		if($this->node->model->name != 'section')
		{
			// Jak nie jesteśmy na liście a jesteśmy w kategorii to musimy wczytać sekcje z listą projektów,
			// żeby wyświetlić nagłówki i opisy. czyli wczytujemy ojcowską kategorię.
			$section = M('section')->where('node_id', $this->node->parent_id)->first();
		}

		$projects = M('project')
			->when($this->node->model->name == 'project_category', function($q) {
				// Jeżeli to jest kategoria a nie lista wszystkiech projektów to dajemy join aby wybrać 
				// projekty tylko z tej kategorii.
				$q->join('rs_node_relations', 'rs_node_relations.node_id', '=', 'rs_nodes.id')
					->where('rs_node_relations.field_id', 32) // 32 to jest ID filda (project_ctegories)
					->where('rs_node_relations.related_node_id', $this->node->id)
					->groupBy('rs_nodes.id');
			})
			->orderBy('position', 'desc')
			->paginate();

		$categories = M('project_category')->ordered()->get();

		return $this->view('projects.index', compact('projects', 'categories', ($section ? 'section' : null)));
	}

	/**
	 * Wyświetlanie projektu
	 */
	public function show(): View
	{
		$images = M('project_image')->where('parent_id', $this->node->id)->ordered()->get();

		// Poprzedni projekt.
		$prev = M('project')->where('position', '>', $this->node->position)->orderBy('position', 'asc')->first();
		if(! $prev)
		{
			// Jak nie ma poprzedniego to dajemy ostatni w liscie (kółko)
			$prev = M('project')->orderBy('position', 'asc')->first();
		}

		// Następny projekt.
		$next = M('project')->where('position', '<', $this->node->position)->orderBy('position', 'desc')->first();
		if(! $next)
		{
			// Jak nie ma następnego to dajemy pierwszy w liscie (kółko)
			$next = M('project')->orderBy('position', 'desc')->first();
		}
		return $this->view('projects.show', compact('images', 'prev', 'next'));
	}
}
