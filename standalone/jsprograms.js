function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function binpad(dec,n){
    var r = (dec >>> 0).toString(2);
    r = "000000000" + r;
    r = r.slice(-n);
    return r;
}
//ie. binary_patterns("HL",3) for High/Low Patterns for Pick_3
function binary_patterns(binvalues,len){
  var patterns_c = Math.pow(2,len);
    var r = [];
    for (var i=0;i<patterns_c;i++){
      bin = binpad(i,len);
        var pattern = bin.replace(/0/g,binvalues[0]);
        pattern = pattern.replace(/1/g,binvalues[1]);
        r.push(pattern);
    }
    return r;
}
function ridofdates(input){
  r = input.replace(/(\,)[\s]*([A-Za-z]{1})/g,'\$1\$2'); //get of space between dayofweek & month
    r = r.replace(/(\,)([A-Za-z]{3})[\s]*([0-9]{1,2})/g,'\$1\$2\$3');//space between month and date
    r = r.replace(/(\,)([A-Za-z]{3})([0-9]{1,2})(\,)[\s]*([0-9]{4})/g,'\$1\$2\$3\$4\$5');//space betweendate &year
    r = r.replace(/([A-z]{1}[^\s]*)/g,'');
  return r;
}
function ridofwords(input){
  r = input.replace(/([^0-9- \n]+)/g,''); //replace all non-digits-non
  r = r.replace(/( [0-9] )/g,''); //replace single digits with nothing
  r = r.replace(/([0-9]{3})/g,'');
  r = r.replace(/([0-9])-([0-9])-([0-9])-([0-9])-([0-9])/g,'\$1\$2\$3\$4\$5');
  r = r.replace(/([0-9])-([0-9])-([0-9])-([0-9])/g,'\$1\$2\$3\$4');
  r = r.replace(/([0-9])-([0-9])-([0-9])/g,'\$1\$2\$3');
  r = r.replace(/[-]/g,' ');
  return r;
}


  //https://stackoverflow.com/questions/39927452/recursively-print-all-permutations-of-a-string-javascript
  function permut(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i=0; i<string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue;           // skip it this time

        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS

        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;
  }
  function clean(s){
    r = s.replace(/\D/g,' ');
    r = r.replace(/\s\s+/g, ' ');
    return r;
  }
  function zpadlen(n,len){
    return ("00000"+n).slice(-len);
  }
  function zpad(n){
    return ("0000"+n).slice(-4);
  }
  function zpad2(n){
    return ("0000"+n).slice(-2);
  }
  function zpad3(n){
    return ("0000"+n).slice(-3);
  }
  function zpad4(n){
    return ("0000"+n).slice(-4);
  }
  function sumstr(s){
    r = 0;
    for (i=0;i<s.length;i++){
      r += parseInt(s[i]);
    }
    return r;
  }
  function rootstr(s){
    n = parseInt(s);
    while (n > 9){
      n = sumstr(n+"") + "";
      n = parseInt(n);
    }
    return n;
  }
  function tablerow(row){
    r = "<tr>";
    for (i=0;i<row.length;i++){
      r += "<td align='center' onmouseover='test(this);'>"+row[i]+"</td>";
    }
    r += "</tr>";
    return r;
  }
  function tablerowcolor(row,color){
    r = "<tr>";
    for (i=0;i<row.length;i++){
      v = row[i];
      if (v.constructor === Array){ // it's an array make it with colspan
        r += "<td colspan='"+v[1]+"' align='center' bgcolor='"+color+"'>"+v[0]+"</td>";
      }else {
        r += "<td align='center' bgcolor='"+color+"'>"+v+"</td>";
      }
    }
    r += "</tr>";
    return r;
  }
  function tablerowcolor2(row,color,fontcolor){
    r = "<tr>";
    for (i=0;i<row.length;i++){
      v = row[i];
      if (v.constructor === Array){ // it's an array make it with colspan
        r += "<td colspan='"+v[1]+"' align='center' bgcolor='"+color+"' style='border-color:white;'><font color='"+fontcolor+"'>"+v[0]+"</font></td>";
      }else {
        r += "<td align='center' bgcolor='"+color+"' style='border-color:white;'><font color='"+fontcolor+"'>"+v+"</font></td>";
      }
    }
    r += "</tr>";
    return r;
  }
  function tablerowcolor3(row,color,fontcolor,bordercolor){
    r = "<tr>";
    for (i=0;i<row.length;i++){
      v = row[i];
      if (v.constructor === Array){ // it's an array make it with colspan
        r += "<td colspan='"+v[1]+"' align='center' bgcolor='"+color+"' style='border-color:"+bordercolor+";'><font color='"+fontcolor+"'>"+v[0]+"</font></td>";
      }else {
        r += "<td align='center' bgcolor='"+color+"' style='border-color:"+bordercolor+";'><font color='"+fontcolor+"'>"+v+"</font></td>";
      }
    }
    r += "</tr>";
    return r;
  }
  function tablerowhighlight(row,switches){
   r = "<tr>";
    for (i=0;i<row.length;i++){
      if (switches[i] == 1){
        r += "<td align='center' bgcolor='yellow'>"+row[i]+"</td>";
      }else{
        r += "<td align='center'>"+row[i]+"</td>";
      }
    }
    r += "</tr>";
    return r; 
  }
  function tablerowhighlightvalue(row,v,color){
    r = "<tr>";
    for (var i=0;i<row.length;i++){
      if (row[i] == v){
        r += "<td align='center' bgcolor='"+color+"'>"+row[i]+"</td>";
      }else{
        r+="<td align='center'>"+row[i]+"</td>";
      }
    }
    r += "</tr>";
    return r;
  }
  function tablerowhighlight2value(row,v1,v2,color1,color2){
    r = "<tr>";
    for (var i=0;i<row.length;i++){
      if (row[i] == v1){
        r += "<td align='center' bgcolor='"+color1+"'><font color='black'>"+row[i]+"</font></td>";
      }else if (row[i] == v2){
        r += "<td align='center' bgcolor='"+color2+"'><font color='black'>"+row[i]+"</font></td>";
      }else{
        r+="<td align='center'>"+row[i]+"</td>";
      }
    }
    r += "</tr>";
    return r;
  }

  function addstr(s1,s2){
    r = "";
    for (i=0;i<s1.length;i++){
      r+= "" + ((parseInt(s1[i]) + parseInt(s2[i]))%10);
    }
    return r;
  }
  function lmsubone(s1){
    r = "";
    for (i=0;i<s1.length;i++){
      r+= "" + (((parseInt(s1[i])+10))%10);
    }
    return r;
  }
  function lmaddone(s1){
    r = "";
    for (i=0;i<s1.length;i++){
      r+= "" + (((parseInt(s1[i])+1))%10);
    }
    return r;
  }
  function subarr(a1,a2){
    r = [];
    for (i=0;i<a1.length;i++){
      r.push(parseInt(a1[i]) - parseInt(a2[i]));
    }
    return r;
  }
  function addarr(a1, a2){
   r = [];
    for (i=0;i<a1.length;i++){
      r.push(parseInt(a1[i]) + parseInt(a2[i]));
    }
    return r; 
  }
  function bracket_if_match(str,n){
    r = [];
    for (var i=0;i<str.length;i++){
      if (parseInt(str[i]) == parseInt(n)){
        r.push("(" + str[i] + ")");
      }else{
        r.push(str[i]);
      }
    }
    return r;
  }
  
  function mirror(n){
    n = "" + n;
    r = "";
    for (var i=0;i<n.length;i++){
      r += ((parseInt(n[i])+5)%10) + "";
    }
    return r;
  }
  function mirrorarr(ar){
    var r = [];
    for (var i=0;i<ar.length;i++){
      r.push(mirror(ar[i]));
    }
    return r;
  }

  function intarr(ar){
    var re = [];
    for (var i=0;i<ar.length;i++){
      re.push(parseInt(ar[i]));
    }
    return re;
  }
  function lotmat(ar){
    re = 0;
    for (i=0;i<ar.length;i++){
      re += parseInt(ar[i]);
    }
    re = re % 10;
    return re;
  }
  function charpad(str,ch,n){ //character pad string charpad("OM","K",5) => "KKKOM";
    r = ch+ch+ch+ch+ch+str;
    r = r.slice(-n);
    return r;
  }
  function absdiff(s1,s2){
    if ((((parseInt(s1)+10 - parseInt(s2))%10)==1) || (((parseInt(s2)+10 - parseInt(s1))%10)==1)){
      return 1;
    }
    return 0;
  }
  function istripple(s1){
    return (s1[0]==s1[1] && s1[1]==s1[2]);
  }
  function isdouble(s1){
    return (s1[0]==s1[1] || s1[1]==s1[2] || s1[0]==s1[2]);
  }
  function oneoffs(s1){
    digit1 = s1[0];
    digit2 = s1[1];
    digit3 = s1[2];
    res = [];
    if ((digit1 == digit2) || (digit2 == digit3)){
      digit1s = [lmaddone(digit1),lmsubone(digit1)];
      digit2s = [digit2];
      digit3s = [lmsubone(digit3),lmaddone(digit3)];
    }else if (digit1 == digit3){
      digit1s = [lmaddone(digit1),lmsubone(digit1)];
      digit2s = [lmsubone(digit2),lmaddone(digit2)];
      digit3s = [digit3];
    }else{
      return res;
    }
    for (var a=0;a<digit1s.length;a++){
    for (var b=0;b<digit2s.length;b++){
          for (var c=0;c<digit3s.length;c++){
          res.push(digit1s[a]+digit2s[b]+digit3s[c]); //add to our result
        }
      } 
    }
    return res;
  }

  consecutive_str = "0123456789 019 089"; //anything that matches these patterns in order are considered 
  function isconsecutive(s1){ //return true if it's consecutive in both order upward and downward.
    ordered = s1.split("").sort().join("");
    return (consecutive_str.includes(ordered));
    //return ((s1[1] == lmaddone(s1[0]) && s1[2] == lmaddone(s1[1])) || (s1[1] == lmsubone(s1[0]) && s1[2] == lmsubone(s1[1]))
    //  || (s1[1] == lmsubone(s1[0]) && s1[2] == lmsubone(s1[1])));

  }

  function ispartial(s1){
    return ((s1[1]==lmaddone(s1[0])) || (s1[1]==lmsubone(s1[0])) || (s1[2]==lmaddone(s1[1])) || (s1[2]==lmsubone(s1[1])) || 
            (s1[2]==lmaddone(s1[0])) || (s1[2]==lmsubone(s1[0])));
  }

  function iscombo(s1,s2){ //is a combo if sorted values are the same.
    s1o = s1.split("").sort().join("");
    s2o = s2.split("").sort().join("");
    return (s1o==s2o);
  }
  function containscombo(arr,s1){
    for (var i=0;i<arr.length;i++){
      if (iscombo(arr[i],s1)){
        return true;
      }
    }
    return false;
  }
  function sum(str){
    res = 0;
    for (var i=0;i<str.length;i++){
      res += parseInt(str[i]);
    }
    return res;
  }
  function createRandomLanguage(){
    lang = "0123456789";
    lang = lang.split("").sort(function (a,b){return Math.random()-0.5;}).join("");
    document.getElementById('language').value = lang;
  }
  function strsort(value){
    return value.split("").sort().join("");
  }
  function getvalues(num){ //if pick-3 get pairs, pick-4 then get triads
    var values = [strsort(num)];
    if (num.length == 2){
      for (var x=0;x<num.length;x++){
          pair = strsort(num[x]);
          if (!values.includes(pair)){ //if the sort pair is not in out list of values add it
            values.push(pair);
          }
      }
    }  
    else if (num.length == 3){
      for (var x=0;x<num.length-1;x++){
        for (var y=x+1;y<num.length;y++){
          pair = strsort(num[x] + num[y]);
          if (!values.includes(pair)){ //if the sort pair is not in out list of values add it
            values.push(pair);
          }
        }
      }
    }else if(num.length == 4){
      for (var x=0;x<num.length-2;x++){
        for (var y=x+1;y<num.length-1;y++){
          for (var z=y+1;z<num.length;z++){
            triad = strsort(num[x] + num[y] + num[z]);
            if (!values.includes(triad)){ //if the sort pair is not in out list of values add it
              values.push(triad);
            }
          } 
        }
      }
    }else if(num.length == 5){
      for (var x=0;x<num.length-3;x++){
        for (var y=x+1;y<num.length-2;y++){
          for (var z=y+1;z<num.length-1;z++){
            for (var a=z+1;a<num.length;a++){
              triad = strsort(num[x] + num[y] + num[z] + num[a]);
              if (!values.includes(triad)){ //if the sort pair is not in out list of values add it
                values.push(triad);
              }
            }  
          } 
        }
      }
    }
    return values;
  }
  function addvalues(master,values){ //add values to master list if not already in there
    var value = "";
    for (var i=0;i<values.length;i++){
      value = values[i];
      if (!master.includes(value)){
        master.push(value);
      }
    }
    return master;
  }
  function comparenames(a,b){
    var arr = [a,b];
    arr.sort();
    return arr.indexOf(a) - arr.indexOf(b);
  }
  //Fri, Aug 16, 2019 Tennessee Cash 3 Midday 0-6-9, Lucky Sum: 15
  function gametime(gamestring){
    if (gamestring.includes("Midday")){
      return "Midday";
    }else if (gamestring.includes("Daily")){
      return "Daily";
    }else if (gamestring.includes("Day")){
      return "Day"; 
    }else if (gamestring.includes("Quotidienne")){
      return "Daily";
    }else if (gamestring.includes("Evening")){
      return "Evening";
    }else if (gamestring.includes("Noche")){
      return "Night";
    }else if (gamestring.includes("Night")){
      return "Night";
    }else if (gamestring.includes("Morning")){
      return "Morning";
    }else if (gamestring.includes("Día")){
      return "Day";
    }else{
      return gamestring;
    }
  }
  var weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var weeks = [1,2,3,4,5];
  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };
  var fullmonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  function containsFullmonth(text){
    for (var x=0;x<fullmonths.length;x++){
      if (text.includes(fullmonths[x])){
        return true;
      }
    }
    return false;
  }
  function I(n){
    return parseInt(n);
  }
  function SLR(num){
    ret = [];
    sum = (I(num[0]) + I(num[1]) + I(num[2])) + "";
    ldr = sum.slice(-1);
    roots = rootstr(sum);
    ret = [sum,ldr,roots];
    return ret;
  }
  function HiLo(num){
    HL = "LLLLLHHHHH"; //High Low values
    ret = [];
    HL1 = HL[I(num[0])];
    HL2 = HL[I(num[1])];
    HL3 = HL[I(num[2])];
    ret = [HL1,HL2,HL3];
    return ret;
  }
  function OdEv(num){
    EO = "EOEOEOEOEO"; //Odd Even values
    ret = [];
    EO1 = EO[I(num[0])];
    EO2 = EO[I(num[1])];
    EO3 = EO[I(num[2])];
    ret = [EO1,EO2,EO3];
    return ret;
  }
  function LMH(num){
    V = "LLLMMMMHHH"; //Low Med High
    ret = [];
    V1 = V[I(num[0])];
    V2 = V[I(num[1])];
    V3 = V[I(num[2])];
    ret = [V1,V2,V3];
    return ret;
  }
  function OCS(num){ //Open/Close/Straight
    V = "CSOOSOCSCC"; 
    ret = [];
    V1 = V[I(num[0])];
    V2 = V[I(num[1])];
    V3 = V[I(num[2])];
    ret = [V1,V2,V3];
    return ret;
  }
  function Spike(num){ //Spike/Trough Gausss
    V = "TTSSSSSSTT"; 
    ret = [];
    V1 = V[I(num[0])];
    V2 = V[I(num[1])];
    V3 = V[I(num[2])];
    ret = [V1,V2,V3];
    return ret;
  }

  function Vtrac(num){ //Spike/Trough Gausss
    V = [1,2,3,4,5,1,2,3,4,5]; //Odd Even values
    ret = [];
    V1 = V[I(num[0])];
    V2 = V[I(num[1])];
    V3 = V[I(num[2])];
    ret = [V1,V2,V3,V1+V2+V3];
    return ret;
  }
  function V(num){
    VC = [1,2,3,4,5,1,2,3,4,5]; 
    return VC[num];
  }
  
  function ldr(num){
    n = num+"";
    sum = 0;
    for (var i=0;i<n.length;i++){
      sum += I(n[i])
    }
    return sum % 10;
  }

  function createZeroCounters(lastdraws,digits){
    ret = [];
    for (var i=0;i<lastdraws.length;i++){
      row = [];
      for (var j=0;j<digits.length;j++){
        row.push(0);
      }
      ret.push(row);
    }
    return ret;
  }
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
    }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  function colorsFromValues(nums){
    snums = [];
    for (var x=0;x<nums.length;x++){
      if (!snums.includes(nums[x])){ //if it's not in list add it
        snums.push(nums[x]);
      }
    }
    snums.sort(key=function (a,b){return a-b;}); //sort unique values
    values = snums.length;
    divisions = Math.max(values-1,1);
    startcolor = [255,64,62]; //Red
    endcolor = [36,182,91]; //Green
    colors = [];
    for (var x=0;x<=divisions;x++){
      currentR = (endcolor[0] - startcolor[0])/divisions * x + startcolor[0];
      currentG = (endcolor[1] - startcolor[1])/divisions * x + startcolor[1];
      currentB = (endcolor[2] - startcolor[2])/divisions * x + startcolor[2];
      color = rgbToHex(I(currentR+""),I(currentG+""),I(currentB+""));
      colors.push(color);
    }
    return [snums,colors];
  }
   function combo(num){
      var n = num + "";
      n = n.split("").sort().join("");
      return n;
   }
   function paircombos(){
      pairs = [];
      for (var i=0;i<100;i++){
        pair = combo(zpad2(i));
        if (!pairs.includes(pair)){
          pairs.push(pair);
        }
      }
      return pairs;
   }
   function createPairsCount(pairs){
      ret = []
      for (var i=0;i<pairs.length;i++){
        ret.push([pairs[i],0,99999]) //[pair,count,draws not seen
      }
      return ret;
   }

   function allEVEN(n){
     if ((I(n[0])%2 == 0) && (I(n[1])%2 == 0) && (I(n[2])%2 == 0)){
      return true;
     }else{
      return false;
     }
   }
   function unique(n){ //make sure digits are all unique
    if ( (I(n[0])!=I(n[1])) && (I(n[0])!=I(n[2])) && (I(n[1])!=I(n[2]))){
      return true;
    }else{
      return false;
    }
   }
   function allEVENX(n){
     if (allEVEN(n) && unique(n)){
      return true;
     }else{
      return false;
     }
   }
   function allODD(n){
     if ((I(n[0])%2 == 1) && (I(n[1])%2 == 1) && (I(n[2])%2 == 1)){
      return true;
     }else{
      return false;
     }
   }
   function allODDX(n){
     if (allODD(n) && unique(n)){
      return true;
     }else{
      return false;
     }
   }
   function allHIGH(n){
     H = "56789";
     if (H.includes(n[0]) && H.includes(n[1]) && H.includes(n[2])){
      return true;
     }else{
      return false;
     }
   }
   function allHIGHX(n){
     if (allHIGH(n) && unique(n)){
      return true;
     }else{
      return false;
     }
   }
   function allLOW(n){
     L = "01234";
     if (L.includes(n[0]) && L.includes(n[1]) && L.includes(n[2])){
      return true;
     }else{
      return false;
     }
   }
   function allLOWX(n){
     if (allLOW(n) && unique(n)){
      return true;
     }else{
      return false;
     }
   }
   function allCON(n){
     v = combo(n);
     if (
        ((I(v[1])-I(v[0]) == 1) && (I(v[2])-I(v[1]) == 1)) || //ordered 
        ((I(v[0])==0 && I(v[2])==9) && (I(v[1])==8 || I(v[1])==1)) //wrap around 089, 019
        ){
      return true;
     }else{
      return false;
     }
   }
   function allCONEVEN(n){
     v = combo(n);
     if (allEVEN(n) &&
        (((I(v[1])-I(v[0]) == 2) && (I(v[2])-I(v[1]) == 2)) || //ordered 
        ((I(v[0])==0 && I(v[2])==8) && (I(v[1])==6 || I(v[1])==2)) //wrap around 068,028
        )
        ){
      return true;
     }else{
      return false;
     }
   }
   function allCONODD(n){
     v = combo(n);
     if (allODD(n) &&
        (((I(v[1])-I(v[0]) == 2) && (I(v[2])-I(v[1]) == 2)) || //ordered 
        ((I(v[0])==0 && I(v[2])==9) && (I(v[1])==7 || I(v[1])==3)) //wrap around 179,139
        )
        ){
      return true;
     }else{
      return false;
     }
   }
   
   function DOUBLE(n){
     v = combo(n);
     if ((v[0] == v[1]) || (v[1] == v[2])){
      return true;
     }else{
      return false;
     }
   }
   function DOUBLEEVEN(n){
     v = combo(n);
     if (DOUBLE(v) && allEVEN(v)){
      return true;
     }else{
      return false;
     }
   }
   function DOUBLEODD(n){
     v = combo(n);
     if (DOUBLE(v) && allODD(v)){
      return true;
     }else{
      return false;
     }
   }
   function WAY6(n){
    return unique(n);
   }
   function TRIPLE(n){
    if ((n[0]==n[1]) && (n[1]==n[2])) {
      return true;
    }else{
      return false
    }
   }

   /*
   Miscellaneous (#draws)
All EVEN
All EVEN (no double/triple)
All ODD
All ODD (no double/triple)
All HIGH
All HIGH (no double/triple)
All LOW
All LOW (no double/triple)
3 Consecutive digits
3 Consec digits all EVEN
3 Consec digits all ODD
Doubles
Doubles all EVEN
Doubles all ODD
6-way
Triple*/

   function stat(arr){
     maxskips = 99; //maximum 50 skips to show last
     seenat = 0; //last seen at
     hits = 0;
     curskip = 0;
     avskip = 0;
     skips = [];
     for (var x=0;x<arr.length;x++){
        if (arr[x]){
          hits += 1; //increment hits
          skip = x-seenat; //so if it's found continuously then skip is zero
          seenat = x+1;
          skips.push(skip);
        }
     }
     if (skips.length > 0){
      avskip = Math.round(((skips.reduce((a, b) => a + b, 0)) / skips.length));
      curskip = skips[0];
      skips = skips.slice(0,maxskips);
     }else{
      avskip = arr.length;
      curskip = arr.length;
     }
     return [hits,curskip,avskip,skips];
   }
   function tablerowskip(title,hits,curskip,avskip,skips){
     ret = "<tr>";
     ret += "<td align='left' bgcolor='blue' style='border-color:white;'><font color='white'>" + title +"</font></td>";
     ret += "<td align='right'>&nbsp;&nbsp;" + hits +"</td>";
     ret += "<td align='right'>&nbsp;&nbsp;" + curskip +"</td>";
     ret += "<td align='right'>&nbsp;&nbsp;" + avskip +"</td>";
     colors = colorsFromValues(skips);
     skipcontent = "";
     for (var x=0;x<skips.length;x++){
       colorindex = colors[0].indexOf(skips[x]);
       color = colors[1][colorindex];
       skipcontent += "<span style='background:"+color+";'><b>&nbsp;"+skips[x]+"&nbsp;</b></span>&nbsp;";
       if ((x+1) % 40==0){
        skipcontent += "<br/>";
       }
     }
     ret += "<td align='left'>" + skipcontent +"</td>";
     ret += "</tr>";
     return ret;
   }
   function hasPair(num,pair,pos){ //pos 0 any postion, pos 1 front pair, pos 2 back pair, pos 3 split pair
     n = combo(num);
     n1 = n[0]; n2 = n[1]; n3 = n[2];
     front = n1+n2;
     back = n2+n3;
     split = n1+n3;
     if (pos==0){ //any position
       if ((front == pair) || (back==pair) || (split==pair)){
        return true;
       }
     }else if((pos==1) && (front == pair)){ //front pair
        return true;
     }else if((pos==2) && (back == pair)){ //back pair
        return true;
     }else if((pos==3) && (split == pair)){ //split pair
        return true;
     }
     return false; //if we get here, just return false
   }