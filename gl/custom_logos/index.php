<?php
if ($handle = opendir('.')) {
   while (false !== ($file = readdir($handle))) {
       //if ($file != "." && $file != ".." && stristr($file, ".".$filetype)) $files[]=$file;
	   if ($file != "." && $file != ".." && stristr($file, ".png")) $files[]=$file;
	   if ($file != "." && $file != ".." && stristr($file, ".jpg")) $files[]=$file;
	   if ($file != "." && $file != ".." && stristr($file, ".gif")) $files[]=$file;
   }
   closedir($handle);
}
echo '<a href="https://gimplearn.net/">GIMP LEARN forum</a>\'s random logos contributed by members.<br/>';
echo 'You can help <a href="https://gimplearn.net/viewtopic.php?f=12&t=115">contribute to GIMP LEARN\'s logos</a>.<br/>';

$count = 0;
foreach ($files as $file){
	$count += 1;
	echo '<a href="'.$file.'">'.$count.'. '.$file.'<br/><img src="'.$file.'"/></a><br/>';
}
?>
