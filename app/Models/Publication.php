<?php 

namespace App\Models;

use Runsite\CMF\Models\Dynamic\Dynamic;
use Runsite\CMF\Traits\Constructable;

class Publication extends Dynamic
{
	use Constructable;

	protected $dates = ['pubdate'];
}
