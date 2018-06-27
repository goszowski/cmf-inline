<?php 

namespace App\Models;

use Runsite\CMF\Models\Dynamic\Dynamic;
use Runsite\CMF\Traits\Constructable;

class Service extends Dynamic
{
	use Constructable;

	public function getWordsArrAttribute()
	{
		return explode(',', $this->words);
	}
}
