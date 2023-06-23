    const perCords = {lat: -13.0, lng: -76.0};
    const mapDiv = document.getElementById('map');
    const input = document.getElementById("place_input")
    let map;
    let marker;
    let autocomplete;
    function initMap(){
        map = new google.maps.Map(mapDiv, {
            center: perCords,
            zoom: 9,
        });
        marker = new google.maps.Marker({
            position: perCords,
            map: map,
        });
        initAutocomplete();
    }
    function initAutocomplete(){
        autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.addListener('place_changed', function(){
            const place=autocomplete.getPlace();
            map.setCenter(place.geometry.location);
            marker.setPosition(place.geometry.location);
        })

    }
