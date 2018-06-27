<?php 

namespace App\Models;

use Runsite\CMF\Models\Dynamic\Dynamic;
use Runsite\CMF\Traits\Constructable;

class Section extends Dynamic
{
	use Constructable;

	public function getFirstNameAttribute()
	{
		$parts = explode(',', $this->name);
		return trim($parts[0]);
	}

	public function getNamesAttribute()
	{
		return explode(',', $this->name);
	}
}
