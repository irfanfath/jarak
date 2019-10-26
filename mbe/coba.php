<html>
<head>
<script type="text/javascript">

function c () {

/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}


var R = 6371; 
var lat1 = 6.1745; // koordinat latitude jakarta
var lon1 = 106.8227; // koordinat longitude jakarta
var lat2 = 6.315703; // koordinat latitude cikarang
var lon2 = 107.1701049; // koordinat longitude cikarang

var lat1rad = lat1.toRad();
var lat2rad = lat2.toRad();
var tatac = (lat2-lat1).toRad();
var lontac = (lon2-lon1).toRad();

var a = Math.sin(tatac/2) * Math.sin(tatac/2) +
        Math.cos(lat1rad) * Math.cos(lat2rad) *
        Math.sin(lontac/2) * Math.sin(lontac/2);
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

var d = R * c;


alert("Jarak antara JAKARTA dan CIKARANG : " + d);

}

</script>
</head>

<body>
 <button value="click it" onclick="c()">click</button>
</body>
</html>