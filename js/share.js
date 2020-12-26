	function losefocus(e) {
  		document.getElementById(e).blur();
	}
	document.getElementById('facebookshare').href = "/share.php?host=https://www.facebook.com/sharer.php&location=" + encodeURIComponent(window.location.href);
	document.getElementById('twittershare').href = "/share.php?host=https://twitter.com/intent/tweet&location=" + encodeURIComponent(window.location.href);
	document.getElementById('redditshare').href = "/share.php?host=http://www.reddit.com/submit&location=" + encodeURIComponent(window.location.href);
	document.getElementById('pinterestshare').href = "/share.php?host=http://pinterest.com/pin/create/button/&location=" + encodeURIComponent(window.location.href);

	function copyit(){
		var dummy = document.createElement('input'),
		text = window.location.href;
		document.body.appendChild(dummy);
		dummy.value = text;
		dummy.select();
		document.execCommand('copy');
		document.body.removeChild(dummy);
		//alert("Current url copied to clipboard!");
	}
	function weave(clip,res){
		var cl = clip.split("\n");
		var re = res.split("\n");
		var cindex = 0;
		var rindex = 0;
		var cldate = cl[0].slice(0,15);
		var redate = re[0].slice(0,15);
		var retu = []; //start with nothing
		if (cldate == redate){ //if the start with same date just weave
			//cindex = 0; rindex = 0;
		}else if (cldate == re[1].slice(0,15)){ // see if the res has an extra date so it could be Early Day Draw and 
			   // Night doesn't have results yet then we add Day Draw and work backwards as usual
			retu.push(re[0]);
			//cindex = 0; 
			rindex = 1;
		}else{
			alert("Unable to weave, dates are not in sync!");
			return clip; //return original clipboard so if we overwrite it it's unchanged.
		}
		while (cindex < cl.length){
			cdate = cl[cindex].slice(0,15);
				while ((cindex < cl.length) && (cdate == cl[cindex].slice(0,15))){ //while the date is still good keep reading  4PM 1PM more
						retu.push(cl[cindex]);
						cindex += 1;
				}
				while ((rindex < re.length) && (cdate == re[rindex].slice(0,15))){ //while the date is still good keep reading from results
					retu.push(re[rindex]);
					rindex += 1;
				}
		}
		return retu.join("\n");
	}
	function copyresults(results){
		var dummy = document.createElement('textarea');
		document.body.appendChild(dummy);
		dummy.value = results;
		dummy.select();
		document.execCommand('copy');
		document.body.removeChild(dummy);
		alert("Results Copied!");
	}
	function appendresults(results) {
    	navigator.clipboard.readText()
		  .then(text => {
		    var dummy = document.createElement('textarea');
			document.body.appendChild(dummy);
			dummy.value = text + results;
			dummy.select();
			document.execCommand('copy');
			document.body.removeChild(dummy);
			alert("Results Appended to Clipboard!");
		  })
		  .catch(err => {
		    alert('Failed to read clipboard contents!');
		  });
    	
	}
    function weaveresults(results) {
    	navigator.clipboard.readText()
		  .then(text => {
		    var dummy = document.createElement('textarea');
			document.body.appendChild(dummy);
			dummy.value = weave(text,results);
			dummy.select();
			document.execCommand('copy');
			document.body.removeChild(dummy);
			alert("Results Woven into Clipboard!");
		  })
		  .catch(err => {
		    alert('Failed to weave clipboard contents!');
		  });
    	
	}

	function htmlit(){
		var label = prompt("Please enter link description/label (for html link for current url):", "");
		var dummy = document.createElement('input'),
		text = "<a href=\"" + window.location.href.replace(/\"/g, "\\\"") + "\">"+label+"<\/a>";
		document.body.appendChild(dummy);
		dummy.value = text;
		dummy.select();
		document.execCommand('copy');
		document.body.removeChild(dummy);
		//alert("Current url copied to clipboard!");
	}
	function bbcodeit(){
		var label = prompt("Please enter link description/label (for bbcode link for current url):", "");
		var dummy = document.createElement('input'),
		text = "[url=" + window.location.href + "]"+label+"[/url]";
		document.body.appendChild(dummy);
		dummy.value = text;
		dummy.select();
		document.execCommand('copy');
		document.body.removeChild(dummy);
		//alert("Current url copied to clipboard!");
	}
