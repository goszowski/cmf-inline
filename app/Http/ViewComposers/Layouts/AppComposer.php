<?php

namespace App\Http\ViewComposers\Layouts;

use Illuminate\View\View;
use LaravelLocalization;

class AppComposer
{
	protected $locales;
	protected $currentLocale;
	protected $mainMenuItems;
	protected $footerMenuItems;
	protected $socialMenuItems;
	protected $rootNode;

	public function __construct()
	{
		// Localizations
		foreach(LaravelLocalization::getSupportedLocales() as $locale=>$data)
		{
			$this->locales[$locale] = (object) [
				'short_name' => mb_strtoupper(str_limit($data['native'], 2, '')),
				'full_name' => title_case($data['native']),
			];

			if($locale == LaravelLocalization::getCurrentLocale())
			{
				$this->currentLocale = $this->locales[$locale];
			}
		}

		$this->mainMenuItems = M('menu_item')->where('parent_id', 73)->ordered()->get();
		$this->footerMenuItems = M('menu_item')->where('parent_id', 74)->ordered()->get();
		$this->socialMenuItems = M('network')->where('parent_id', 75)->ordered()->get();

		$this->rootNode = M('root')->first();
	}

	public function compose(View $view)
	{
		$view->with('locales', $this->locales)
		->with('currentLocale', $this->currentLocale)
		->with('mainMenuItems', $this->mainMenuItems)
		->with('footerMenuItems', $this->footerMenuItems)
		->with('socialMenuItems', $this->socialMenuItems)
		->with('rootNode', $this->rootNode);
	}
}
