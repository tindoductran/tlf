<?php 
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

if ($handle = opendir('.')) {
   while (false !== ($file = readdir($handle))) {
       //if ($file != "." && $file != ".." && stristr($file, ".".$filetype)) $files[]=$file;
	   if ($file != "." && $file != ".." && stristr($file, ".png")) $files[]=$file;
	   if ($file != "." && $file != ".." && stristr($file, ".jpg")) $files[]=$file;
	   if ($file != "." && $file != ".." && stristr($file, ".gif")) $files[]=$file;
   }
   closedir($handle);
}
if ($files) {
    $timestamp = time();
	$index = intval($timestamp/30) % sizeof($files);
    $imagenr = $index;
    #$imagenr = rand(0, sizeof($files)-1);
	fopen($files[$imagenr], 'rb');
	header('Location: https://media9.gimplearn.net/styles/prosilver/theme/images/custom_logos/'.$files[$imagenr]); exit();
}
?>
