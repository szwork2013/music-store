<?php

$arr = array(

    array(
    	"id"=>"0",
		"artist"=>"The Beatles",
		"category"=>"Rock",
		"album"=>"Abbey Road",
		"price"=>"35.5",
        "image" => "http://www.thebeatlesbutchershop.com/ABBEY_ROAD_ROCKBAND_COVER.jpg",
    	"details"=>"The Beatles Abbey Road"
    ),
    array(
    	"id"=>"1",
		"artist"=>"David Guetta",
		"category"=>"Dance",
		"album"=>"Nothing But the Beat",
		"price"=>"35.5",
        "image" => "http://www.josepvinaixa.com/blog/wp-content/uploads/2012/09/David-Guetta-Nothing-But-the-Beat-Ultimate-2012-1500x1500.png",
    	"details"=>	"David Guetta othing But the Beat"
    ),
	array(
		"id"=>"2",
		"artist"=>"Aerosmith",
		"category"=>"Rock",
		"album"=>"Big Ones",
		"price"=>"35.5",
		"image" => "http://musitecadiscos.com/catalogo/img/g/aerosmith_Big-Ones.jpg",
		"details"=>"Aerosmith Big Ones"

	),
	array(
		"id"=>"3",
		"artist"=>"Black Sabbath",
		"category"=>"Heavy metal",
		"album"=>"Heaven and Hell",
		"price"=>"35.5",
		"image" => "https://upload.wikimedia.org/wikipedia/en/f/f8/Black_Sabbath_Heaven_and_Hell.jpg",
		"details"=>"Black Sabbath Heaven and Hell"
	),
	array(
		"id"=>"4",
		"artist"=>"Maroon 5",
		"category"=>"Pop",
		"album"=>"Overexposed",
		"price"=>"35.5",
		"image" => "http://www.whilemusic.com/Content/Album/Album_3340.jpg",
		"details"=>"Maroon 5 Overexposed"
	),
	
	array(
		"id"=>"5",
		"artist"=>"Michael Jackson",
		"category"=>"Pop",
		"album"=>"This is it",
		"price"=>"35.5",
		"image" => "http://ecx.images-amazon.com/images/I/511VOK2kYBL.jpg",
		"details"=>"Michael Jackson ThIS IS IT"
	),
	
	array(
		"id"=>"6",
		"artist"=>"Coldplay",
		"category"=>"Rock-Pop",
		"album"=>"parachutes",
		"price"=>"35.5",
		"image" => "http://static.gigwise.com/artists/parachutes-coldplay.jpg",
		"details"=>"Coldplay parachutes"
	),
	
	
	array(
		"id"=>"7",
		"artist"=>"Nickelback",
		"category"=>"Rock",
		"album"=>"All The Right Reasons",
		"price"=>"35.5",
		"image" => "http://cps-static.rovicorp.com/3/JPG_400/MI0001/537/MI0001537800.jpg?partner=allrovi.com",
		"details"=>"Nickelback All The Right Reasons"
	),
	
	
	array(
		"id"=>"8",
		"artist"=>"Asaf Avidan",
		"category"=>"Rock",
		"album"=>"Different pulses",
		"price"=>"35.5",
		"image" => "https://c1.staticflickr.com/9/8343/8277152164_f9c6058da6.jpg",
		"details"=>"Asaf Avidan Different pulses"
	),
	
	array(
		"id"=>"9",
		"artist"=>"Alliance Morissette",
		"category"=>"Rock-Pop",
		"album"=>"Jagged Little Pill",
		"price"=>"35.5",
		"image" => "http://images1.buymusichere.net/images/w/979/196979.jpg",
		"details"=>"Alliance  Morissette Jagged Little Pill"
	)
	
);

echo json_encode($arr);

?>