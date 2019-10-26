var jsonString =
    '{"Anggota A":{"Position":{"Longitude":9.96233,"Latitude":49.80404}},"Anggota B":{"Position":{"Longitude":6.11499,"Latitude":50.76891}},"Anggota C":{"Position":{"Longitude":6.80592,"Latitude":51.53548}},"Anggota D":{"Position":{"Longitude":9.50523,"Latitude":51.31991}},"Anggota E":{"Position":{"Longitude":9.66089,"Latitude":48.70158}},"Anggota F":{"Position":{"Longitude":9.93368,"Latitude":53.55608}},"Anggota G":{"Position":{"Longitude":11.56122,"Latitude":48.14496}},"Anggota H":{"Position":{"Longitude":13.34253,"Latitude":52.5319}},"Anggota I":{"Position":{"Longitude":6.11327,"Latitude":50.77715}},"Anggota J":{"Position":{"Longitude":13.36671,"Latitude":52.54344}}}';

var myData = JSON.parse(jsonString);

$(document).ready(function () {

    var distanceObj = [],
        i = 0;

    $.each(myData, function (a, b) {
        distanceObj[i] = { distance: hesapla(9.9608999, 49.7222842, b.Position.Longitude, b.Position.Latitude), location: a };
        ++i;
    });

    distanceObj.sort(function(a,b) {
        return parseInt(a.distance) - parseInt(b.distance)
    });

    $.each(distanceObj, function(a, b) {
        $('#groups').append('<li>' + b.location + ': ' + b.distance + 'Meter</li>');
    });
    
    console.log(distanceObj);

    function hesapla(meineLongitude, meineLatitude, long1, lat1) {
        erdRadius = 6371;

        meineLongitude = meineLongitude * (Math.PI / 180);
        meineLatitude = meineLatitude * (Math.PI / 180);
        long1 = long1 * (Math.PI / 180);
        lat1 = lat1 * (Math.PI / 180);

        x0 = meineLongitude * erdRadius * Math.cos(meineLatitude);
        y0 = meineLatitude * erdRadius;

        x1 = long1 * erdRadius * Math.cos(lat1);
        y1 = lat1 * erdRadius;

        dx = x0 - x1;
        dy = y0 - y1;

        d = Math.sqrt((dx * dx) + (dy * dy));


        return Math.round(d * 1000);
    };

});