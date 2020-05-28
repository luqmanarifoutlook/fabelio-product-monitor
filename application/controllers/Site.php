<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Site extends CI_Controller {

    public function index()
    {
        $this->load->view('index');
    }

    public function action_set()
    {
        $this->load->view('index');
    }

    public function listing()
    {
        $this->load->view('listing');
    }

    public function detail()
    {
        $this->load->view('detail');
    }
}
