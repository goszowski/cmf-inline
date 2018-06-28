<?php 

namespace App\Models;

use Runsite\CMF\Models\Dynamic\Dynamic;
use Runsite\CMF\Traits\Constructable;

class Section extends Dynamic
{
	use Constructable;

	public function getWordsArrAttribute()
	{
		if(! $this->words)
		{
			return null;
		}
		
		return explode(',', $this->words);
	}
}
