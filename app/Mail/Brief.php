<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Brief extends Mailable
{
    use Queueable, SerializesModels;

    protected $html;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($html)
    {
        $this->html = $html;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('brief.mail')->with('html', $this->html);
    }
}
