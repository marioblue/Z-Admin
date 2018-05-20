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
    			['c1'=>'code1','c2'=>'title','c3'=>'sort','c4'=>'pic','c5'=>time(),'c6'=>'state'],
    			['c1'=>'code2','c2'=>'title','c3'=>'sort','c4'=>'pic','c5'=>time(),'c6'=>'state'],
    		],
    	]);
    }
}
