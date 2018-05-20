<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdController extends Controller
{
    //
    public function ad_list(){
    	return view('ad.ad-list');
    }
    public function getAdList(){
    	return response()->json([
    		'list'=>[
    			['c1'=>'ccc'],
    			['c2'=>'xxx'],
    		],
    	]);
    }
}
