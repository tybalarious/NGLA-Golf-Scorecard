var map;

function initMap() {
    var myLatLng = {lat: 40.913575, lng: -72.453705};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 15
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h3 id="firstHeading" class="firstHeading" style="text-align: center">National Golf Links of America</h3>'+
        '<div id="bodyContent" style="text-align: center">'+
        '<p>National Golf Links of America is a prestigious links-style golf course ' +
        'in Southampton, New York, located on Long Island between Shinnecock Hills Golf Club and Peconic Bay.' +
        'Though the course is noted for hosting the initial Walker Cup in 1922,' +
        ' which the United States won 8 and 4, it has never hosted a major mens championship.' +
        ' The Walker Cup was again held at National in 2013. The private club has been called' +
        ' "Americas snootiest golf course" due to its exclusive nature.</p>'+
        '<p>Attribution: National Golf Links of America, <a href="https://en.wikipedia.org/wiki/National_Golf_Links_of_America">'+
        'https://en.wikipedia.org/wiki/National_Golf_Links_of_America</a> '+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'National Golf Links of America'
    });

    infowindow.open(map, marker);

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    google.maps.event.addDomListener(window, 'resize', function() {
        infowindow.open(map);
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

var teemarker = {
    url: 'images/golf-2.png'
};

var holemarker = {
    url: 'images/golfing.png'
};

function initMapH1() {
    var myLatLng = {lat: 40.913019, lng: -72.453602};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 18
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.913042, -72.455344),
        title: 'Hole 1 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.913275, -72.451933),
        title: 'Hole 1 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH2() {
    var myLatLng = {lat: 40.912232, lng: -72.451577};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 18
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.913268, -72.451648),
        title: 'Hole 2 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.911163, -72.451006),
        title: 'Hole 2 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH3() {
    var myLatLng = {lat: 40.909015, lng: -72.450821};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 17
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.910490, -72.451080),
        title: 'Hole 3 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.907404, -72.450560),
        title: 'Hole 3 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH4() {
    var myLatLng = {lat: 40.907969, lng: -72.449670};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 18
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.907286, -72.450095),
        title: 'Hole 4 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.908620, -72.449259),
        title: 'Hole 4 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH5() {
    var myLatLng = {lat: 40.906826, lng: -72.447513};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 17
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.908625, -72.448641),
        title: 'Hole 5 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.904917, -72.446329),
        title: 'Hole 5 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH6() {
    var myLatLng = {lat: 40.905714, lng: -72.445225};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 19
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.905477, -72.445734),
        title: 'Hole 6 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.905931, -72.444779),
        title: 'Hole 6 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH7() {
    var myLatLng = {lat: 40.904410, lng: -72.445704};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 17
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.906051, -72.444405),
        title: 'Hole 7 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.902773, -72.447019),
        title: 'Hole 7 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH8() {
    var myLatLng = {lat: 40.901836, lng: -72.448134};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 17
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.903358, -72.447297),
        title: 'Hole 8 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.900470, -72.448950),
        title: 'Hole 8 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH9() {
    var myLatLng = {lat: 40.898260, lng: -72.447894};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 17
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.900232, -72.449003),
        title: 'Hole 9 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.896367, -72.446822),
        title: 'Hole 9 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH10() {
    var myLatLng = {lat: 40.898408, lng: -72.447058};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 17
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.896790, -72.446703),
        title: 'Hole 10 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.900220, -72.447463),
        title: 'Hole 10 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH11() {
    var myLatLng = {lat: 40.901715, lng: -72.446489};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 17
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.900485, -72.447708),
        title: 'Hole 11 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.903032, -72.445179),
        title: 'Hole 11 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH12() {
    var myLatLng = {lat: 40.904917, lng: -72.444526};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 17
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.903633, -72.445103),
        title: 'Hole 12 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.906150, -72.443979),
        title: 'Hole 12 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH13() {
    var myLatLng = {lat: 40.906131, lng: -72.442937};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 19
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.905746, -72.443674),
        title: 'Hole 13 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.906478, -72.442272),
        title: 'Hole 13 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH14() {
    var myLatLng = {lat: 40.907294, lng: -72.444164};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 18
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.906670, -72.442817),
        title: 'Hole 14 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.908012, -72.445708),
        title: 'Hole 14 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH15() {
    var myLatLng = {lat: 40.908499, lng: -72.447410};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 18
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.907400, -72.445950),
        title: 'Hole 15 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.909465, -72.448694),
        title: 'Hole 15 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH16() {
    var myLatLng = {lat: 40.910879, lng: -72.449936};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 17
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.909337, -72.449182),
        title: 'Hole 16 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.912240, -72.450599),
        title: 'Hole 16 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH17() {
    var myLatLng = {lat: 40.913996, lng: -72.450454};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 17
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.912536, -72.450521),
        title: 'Hole 17 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.915234, -72.450383),
        title: 'Hole 17 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function initMapH18() {
    var myLatLng = {lat: 40.914342, lng: -72.453188};
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        zoom: 17
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.915171, -72.450857),
        title: 'Hole 18 start',
        icon: teemarker
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.913520, -72.455499),
        title: 'Hole 18 finish',
        icon: holemarker
    });

    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function mySum() {

    var P1H1 = document.getElementById('P1H1').value;
    var P1H2 = document.getElementById('P1H2').value;
    var P1H3 = document.getElementById('P1H3').value;
    var P1H4 = document.getElementById('P1H4').value;
    var P1H5 = document.getElementById('P1H5').value;
    var P1H6 = document.getElementById('P1H6').value;
    var P1H7 = document.getElementById('P1H7').value;
    var P1H8 = document.getElementById('P1H8').value;
    var P1H9 = document.getElementById('P1H9').value;
    var P1H10 = document.getElementById('P1H10').value;
    var P1H11 = document.getElementById('P1H11').value;
    var P1H12 = document.getElementById('P1H12').value;
    var P1H13 = document.getElementById('P1H13').value;
    var P1H14 = document.getElementById('P1H14').value;
    var P1H15 = document.getElementById('P1H15').value;
    var P1H16 = document.getElementById('P1H16').value;
    var P1H17 = document.getElementById('P1H17').value;
    var P1H18 = document.getElementById('P1H18').value;
    var P2H1 = document.getElementById('P2H1').value;
    var P2H2 = document.getElementById('P2H2').value;
    var P2H3 = document.getElementById('P2H3').value;
    var P2H4 = document.getElementById('P2H4').value;
    var P2H5 = document.getElementById('P2H5').value;
    var P2H6 = document.getElementById('P2H6').value;
    var P2H7 = document.getElementById('P2H7').value;
    var P2H8 = document.getElementById('P2H8').value;
    var P2H9 = document.getElementById('P2H9').value;
    var P2H10 = document.getElementById('P2H10').value;
    var P2H11 = document.getElementById('P2H11').value;
    var P2H12 = document.getElementById('P2H12').value;
    var P2H13 = document.getElementById('P2H13').value;
    var P2H14 = document.getElementById('P2H14').value;
    var P2H15 = document.getElementById('P2H15').value;
    var P2H16 = document.getElementById('P2H16').value;
    var P2H17 = document.getElementById('P2H17').value;
    var P2H18 = document.getElementById('P2H18').value;
    var P3H1 = document.getElementById('P3H1').value;
    var P3H2 = document.getElementById('P3H2').value;
    var P3H3 = document.getElementById('P3H3').value;
    var P3H4 = document.getElementById('P3H4').value;
    var P3H5 = document.getElementById('P3H5').value;
    var P3H6 = document.getElementById('P3H6').value;
    var P3H7 = document.getElementById('P3H7').value;
    var P3H8 = document.getElementById('P3H8').value;
    var P3H9 = document.getElementById('P3H9').value;
    var P3H10 = document.getElementById('P3H10').value;
    var P3H11 = document.getElementById('P3H11').value;
    var P3H12 = document.getElementById('P3H12').value;
    var P3H13 = document.getElementById('P3H13').value;
    var P3H14 = document.getElementById('P3H14').value;
    var P3H15 = document.getElementById('P3H15').value;
    var P3H16 = document.getElementById('P3H16').value;
    var P3H17 = document.getElementById('P3H17').value;
    var P3H18 = document.getElementById('P3H18').value;
    var P4H1 = document.getElementById('P4H1').value;
    var P4H2 = document.getElementById('P4H2').value;
    var P4H3 = document.getElementById('P4H3').value;
    var P4H4 = document.getElementById('P4H4').value;
    var P4H5 = document.getElementById('P4H5').value;
    var P4H6 = document.getElementById('P4H6').value;
    var P4H7 = document.getElementById('P4H7').value;
    var P4H8 = document.getElementById('P4H8').value;
    var P4H9 = document.getElementById('P4H9').value;
    var P4H10 = document.getElementById('P4H10').value;
    var P4H11 = document.getElementById('P4H11').value;
    var P4H12 = document.getElementById('P4H12').value;
    var P4H13 = document.getElementById('P4H13').value;
    var P4H14 = document.getElementById('P4H14').value;
    var P4H15 = document.getElementById('P4H15').value;
    var P4H16 = document.getElementById('P4H16').value;
    var P4H17 = document.getElementById('P4H17').value;
    var P4H18 = document.getElementById('P4H18').value;


    //start of player 1
    var P1OUT =

        parseInt(P1H1) +
        parseInt(P1H2) +
        parseInt(P1H3) +
        parseInt(P1H4) +
        parseInt(P1H5) +
        parseInt(P1H6) +
        parseInt(P1H7) +
        parseInt(P1H8) +
        parseInt(P1H9);

    if (!isNaN(P1OUT)) {
        document.getElementById('P1OUT').value = P1OUT;
    }

    var P1IN =

        parseInt(P1H10) +
        parseInt(P1H11) +
        parseInt(P1H12) +
        parseInt(P1H13) +
        parseInt(P1H14) +
        parseInt(P1H15) +
        parseInt(P1H16) +
        parseInt(P1H17) +
        parseInt(P1H18);

    if (!isNaN(P1IN)) {
        document.getElementById('P1IN').value = P1IN;
    }

    var P1total = P1OUT + P1IN;

    if (!isNaN(P1total)) {
        document.getElementById('P1total').value = P1total;
    }
    //end of player 1

    //start of player 2
    var P2OUT =

        parseInt(P2H1) +
        parseInt(P2H2) +
        parseInt(P2H3) +
        parseInt(P2H4) +
        parseInt(P2H5) +
        parseInt(P2H6) +
        parseInt(P2H7) +
        parseInt(P2H8) +
        parseInt(P2H9);

    if (!isNaN(P2OUT)) {
        document.getElementById('P2OUT').value = P2OUT;
    }

    var P2IN =

        parseInt(P2H10) +
        parseInt(P2H11) +
        parseInt(P2H12) +
        parseInt(P2H13) +
        parseInt(P2H14) +
        parseInt(P2H15) +
        parseInt(P2H16) +
        parseInt(P2H17) +
        parseInt(P2H18);

    if (!isNaN(P2IN)) {
        document.getElementById('P2IN').value = P2IN;
    }

    var P2total = P2OUT + P2IN;

    if (!isNaN(P2total)) {
        document.getElementById('P2total').value = P2total;
    }
    //end of player 2

    //start of player 3
    var P3OUT =

        parseInt(P3H1) +
        parseInt(P3H2) +
        parseInt(P3H3) +
        parseInt(P3H4) +
        parseInt(P3H5) +
        parseInt(P3H6) +
        parseInt(P3H7) +
        parseInt(P3H8) +
        parseInt(P3H9);

    if (!isNaN(P3OUT)) {
        document.getElementById('P3OUT').value = P3OUT;
    }

    var P3IN =

        parseInt(P3H10) +
        parseInt(P3H11) +
        parseInt(P3H12) +
        parseInt(P3H13) +
        parseInt(P3H14) +
        parseInt(P3H15) +
        parseInt(P3H16) +
        parseInt(P3H17) +
        parseInt(P3H18);

    if (!isNaN(P3IN)) {
        document.getElementById('P3IN').value = P3IN;
    }

    var P3total = P3OUT + P3IN;

    if (!isNaN(P3total)) {
        document.getElementById('P3total').value = P3total;
    }
    //end of player 3

    //start of player 4
    var P4OUT =

        parseInt(P4H1) +
        parseInt(P4H2) +
        parseInt(P4H3) +
        parseInt(P4H4) +
        parseInt(P4H5) +
        parseInt(P4H6) +
        parseInt(P4H7) +
        parseInt(P4H8) +
        parseInt(P4H9);

    if (!isNaN(P4OUT)) {
        document.getElementById('P4OUT').value = P4OUT;
    }

    var P4IN =

        parseInt(P4H10) +
        parseInt(P4H11) +
        parseInt(P4H12) +
        parseInt(P4H13) +
        parseInt(P4H14) +
        parseInt(P4H15) +
        parseInt(P4H16) +
        parseInt(P4H17) +
        parseInt(P4H18);

    if (!isNaN(P4IN)) {
        document.getElementById('P4IN').value = P4IN;
    }

    var P4total = P4OUT + P4IN;

    if (!isNaN(P4total)) {
        document.getElementById('P4total').value = P4total;
    }
    //end of player 4
}

function isNumber(source,evt) {
    //Grab the event
    evt = (evt) ? evt : window.event;
    //Determine the character that was pressed
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    //Ensure the character was valid and that the length doesn't exceed 2 characters (1-99)
    if (charCode > 31 && (charCode < 48 || charCode > 57) || source.value.length >= 2) {
        return false;
    }
    return true;
}

function alphaOnly(event) {
    var key = event.charCode;
    return key == 32 || (key >= 65 && key <= 90) || (key >= 97 && key <= 122);
}