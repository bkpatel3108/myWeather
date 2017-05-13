var mainFactory = angular.module('mainFactory',['ngStorage']);

mainFactory.factory('weatherFctry', function($http){

  var url = 'https://api.forecast.io/forecast/' + '9b169a66e550be4f3c4d4bc686443a92' + '/';

  return {

    getCurrentWeather: function(lat, lng) {
      return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK');
    }
  }

})


mainFactory.factory('Cities', function() {
  var cities = [
      {id: 0, name: 'Newark',lat: 40.735657 , lgn: 74.1723667},
      {id: 1, name: 'New York',lat: 40.7143528 , lgn: 74.00597309999999},
  		{id: 2, name: 'Manhattan',lat: 40.7831 , lgn: 73.9712},
  		{id: 3, name: 'Los Angeles',lat: 34.0522342 , lgn: 118.2436849},
  	 	{id: 4, name: 'Chicago',lat: 41.8781136 , lgn: 87.6297982},
  		{id: 5, name: 'Houston',lat: 29.7601927 , lgn: 95.36938959999999},
  		{id: 6, name: 'Philadelphia',lat: 39.952335 , lgn: 75.16378900000001},
  		{id: 7, name: 'Phoenix',lat: 33.4483771 , lgn: 112.0740373},
  		{id: 8, name: 'San Antonio',lat: 29.4241219 , lgn: 98.49362819999999},
  		{id: 9, name: 'San Diego',lat: 32.7153292 , lgn: 117.1572551},
  		{id: 10, name: 'Dallas',lat: 32.802955 , lgn: 96.769923},
  		{id: 11, name: 'San Jose',lat: 37.3393857 , lgn: 121.8949555},
  		{id: 12, name: 'Jacksonville',lat: 30.3321838 , lgn: 81.65565099999999},
  		{id: 13, name: 'Indianapolis',lat: 39.7685155 , lgn: 86.1580736},
  		{id: 14, name: 'San Francisco',lat: 37.7749295 , lgn: 122.4194155},
  		{id: 15, name: 'Austin',lat: 30.267153 , lgn: 97.7430608},
  		{id: 16, name: 'Columbus',lat: 39.9611755 , lgn: 82.99879419999999},
  		{id: 17, name: 'Fort Worth',lat: 32.725409 , lgn: 97.3208496},
  		{id: 18, name: 'Charlotte',lat: 35.2270869 , lgn: 80.8431267},
  		{id: 19, name: 'Detroit',lat: 42.331427 , lgn: 83.0457538},
  		{id: 20, name: 'Michigan',lat: 42.3288623 , lgn: 83.1206665},
  		{id: 21, name: 'El Paso',lat: 31.7587198 , lgn: 106.4869314},
  		{id: 22, name: 'Memphis',lat: 35.1495343 , lgn: 90.0489801},
  		{id: 23, name: 'Baltimore',lat: 39.2903848 , lgn: 76.6121893},
  		{id: 24, name: 'Boston',lat: 42.3584308 , lgn: 71.0597732},
  		{id: 25, name: 'Seattle',lat: 47.6062095 , lgn: 122.3320708},
  		{id: 26, name: 'Washington',lat: 38.8951118 , lgn: 77.0363658},
  		{id: 27, name: 'Nashville',lat: 36.1658899 , lgn: 86.7844432},
  		{id: 28, name: 'Denver',lat: 39.7391536 , lgn: 104.9847034},
  		{id: 29, name: 'Colorado Free University',lat: 39.740324 , lgn: 104.9596773},
  		{id: 30, name: 'Louisville',lat: 38.2526647 , lgn: 85.7584557},
  		{id: 31, name: 'Milwaukee',lat: 43.0389025 , lgn: 87.9064736},
  		{id: 32, name: 'Portland',lat: 45.5234515 , lgn: 122.6762071},
  		{id: 33, name: 'Las Vegas',lat: 36.114646 , lgn: 115.172816},
  		{id: 34, name: 'Oklahoma  City',lat: 35.4675602 , lgn: 97.5164276},
  		{id: 35, name: 'Albuquerque',lat: 35.0844909 , lgn: 106.6511367},
  		{id: 36, name: 'Tucson',lat: 32.2217429 , lgn: 110.926479},
  		{id: 37, name: 'Fresno',lat: 36.7477272 , lgn: 119.7723661},
  		{id: 38, name: 'Fresno',lat: 36.9858984 , lgn: 119.2320784},
  		{id: 39, name: 'Sacramento',lat: 38.5815719 , lgn: 121.4943996},
  		{id: 40, name: 'Long Beach',lat: 33.8041667 , lgn: 118.1580556},
  		{id: 41, name: 'Kansas City',lat: 39.0997265 , lgn: 94.5785667},
  		{id: 42, name: 'Mesa',lat: 33.4151843 , lgn: 111.8314724},
  		{id: 43, name: 'Virginia Beach',lat: 36.8529263 , lgn: 75.97798499999999},
  		{id: 44, name: 'Atlanta',lat: 33.7489954 , lgn: 84.3879824},
  		{id: 45, name: 'Colorado Springs',lat: 38.8338816 , lgn: 104.8213634},
  		{id: 46, name: 'Omaha',lat: 41.2523634 , lgn: 95.99798829999999},
  		{id: 47, name: 'Raleigh',lat: 35.772096 , lgn: 78.6386145},
  		{id: 48, name: 'Miami',lat: 25.7889689 , lgn: 80.2264393},
  		{id: 49, name: 'Cleveland',lat: 41.4994954 , lgn: 81.6954088},
  		{id: 50, name: 'Tulsa',lat: 36.1539816 , lgn: 95.99277500000001},
  		{id: 51, name: 'Oakland',lat: 37.8043637 , lgn: 122.2711137},
  		{id: 52, name: 'Minneapolis',lat: 44.9799654 , lgn: 93.26383609999999},
  		{id: 53, name: 'Wichita',lat: 37.6922222 , lgn: 97.3372222},
  		{id: 54, name: 'Arlington',lat: 32.735687 , lgn: 97.10806559999999},
  		{id: 55, name: 'Bakersfield',lat: 35.3732921 , lgn: 119.0187125},
  		{id: 56, name: 'New Orleans',lat: 29.95106579999999 , lgn: 90.0715323},
  		{id: 57, name: 'Honolulu',lat: 21.3069444 , lgn: 157.8583333},
  		{id: 58, name: 'Corpus Christi',lat: 27.8005828 , lgn: 97.39638099999999},
  		{id: 59, name: 'Anaheim',lat: 33.8352932 , lgn: 117.9145036},
  		{id: 60, name: 'Tampa',lat: 27.950575 , lgn: 82.4571776},
  		{id: 61, name: 'Aurora',lat: 39.7294319 , lgn: 104.8319195},
  		{id: 62, name: 'Santa Ana',lat: 33.7455731 , lgn: 117.8678338},
  		{id: 63, name: 'St Louis',lat: 38.6270025 , lgn: 90.19940419999999},
  		{id: 64, name: 'Pittsburgh',lat: 40.44062479999999 , lgn: 79.9958864},
  		{id: 65, name: 'Riverside',lat: 33.9533487 , lgn: 117.3961564},
  		{id: 66, name: 'Cincinnati',lat: 39.1031182 , lgn: 84.5120196},
  		{id: 67, name: 'Lexington',lat: 38.0405837 , lgn: 84.5037164},
  		{id: 68, name: 'Anchorage',lat: 61.2180556 , lgn: 149.9002778},
  		{id: 69, name: 'Stockton',lat: 37.9577016 , lgn: 121.2907796},
  		{id: 70, name: 'Toledo',lat: 41.6639383 , lgn: 83.55521200000001},
  		{id: 71, name: 'St Paul',lat: 44.95416669999999 , lgn: 93.11388889999999},
      {id: 72, name: 'Harrison',lat: 40.7465 , lgn: 74.1563},
  		{id: 73, name: 'Greensboro',lat: 36.0726354 , lgn: 79.7919754},
  		{id: 74, name: 'Buffalo',lat: 42.88644679999999 , lgn: 78.8783689},
  		{id: 75, name: 'Plano',lat: 33.0198431 , lgn: 96.6988856},
  		{id: 76, name: 'Lincoln',lat: 40.806862 , lgn: 96.681679},
  		{id: 77, name: 'Henderson',lat: 36.0395247 , lgn: 114.9817213},
  		{id: 78, name: 'Fort Wayne',lat: 41.079273 , lgn: 85.1393513},
  		{id: 79, name: 'Jersey City',lat: 40.72815749999999 , lgn: 74.0776417},
  		{id: 80, name: 'St Petersburg',lat: 27.7730556 , lgn: 82.64},
  		{id: 81, name: 'Chula Vista',lat: 32.6400541 , lgn: 117.0841955},
  		{id: 82, name: 'Norfolk',lat: 36.8507689 , lgn: 76.28587259999999},
  		{id: 83, name: 'Orlando',lat: 28.5383355 , lgn: 81.3792365},
  		{id: 84, name: 'Chandler',lat: 33.3061605 , lgn: 111.8412502},
  		{id: 85, name: 'Laredo',lat: 27.506407 , lgn: 99.5075421},
  		{id: 86, name: 'Madison',lat: 43.0730517 , lgn: 89.4012302},
  		{id: 87, name: 'Winston-Salem',lat: 36.09985959999999 , lgn: 80.244216},
  		{id: 88, name: 'Lubbock',lat: 33.5778631 , lgn: 101.8551665},
  		{id: 89, name: 'Baton Rouge',lat: 30.4582829 , lgn: 91.1403196},
  		{id: 90, name: 'Durham',lat: 35.9940329 , lgn: 78.898619},
  		{id: 91, name: 'Garland',lat: 32.912624 , lgn: 96.63888329999999},
  		{id: 92, name: 'Glendale',lat: 33.5386523 , lgn: 112.1859866},
  		{id: 93, name: 'Reno',lat: 39.5296329 , lgn: 119.8138027},
  		{id: 94, name: 'Hialeah',lat: 25.8575963 , lgn: 80.2781057},
  		{id: 95, name: 'Chesapeake',lat: 36.7682088 , lgn: 76.2874927},
  		{id: 96, name: 'Scottsdale',lat: 33.4941704 , lgn: 111.9260519},
  		{id: 97, name: 'North Las Vegas',lat: 36.1988592 , lgn: 115.1175013},
  		{id: 98, name: 'Irving',lat: 32.8140177 , lgn: 96.9488945},
  		{id: 99, name: 'Fremont',lat: 37.5482697 , lgn: 121.9885719},
  		{id: 100, name: 'Irvine',lat: 33.6839473 , lgn: 117.7946942},
  		{id: 101, name: 'Birmingham',lat: 33.5206608 , lgn: 86.80248999999999},
  		{id: 102, name: 'Rochester',lat: 43.16103 , lgn: 77.6109219},
  		{id: 103, name: 'San Bernardino',lat: 34.1083449 , lgn: 117.2897652},
  		{id: 104, name: 'Spokane',lat: 47.6587802 , lgn: 117.4260466},
  		{id: 105, name: 'Gilbert',lat: 33.3528264 , lgn: 111.789027},
  		{id: 106, name: 'Arlington',lat: 38.8816208 , lgn: 77.09098089999999},
  		{id: 107, name: 'Montgomery',lat: 32.3668052 , lgn: 86.2999689},
  		{id: 108, name: 'Boise',lat: 43.612631 , lgn: 116.211076},
  		{id: 109, name: 'Richmond',lat: 37.5407246 , lgn: 77.4360481},
  		{id: 110, name: 'Des Moines',lat: 41.6005448 , lgn: 93.6091064},
  		{id: 111, name: 'Modesto',lat: 37.63909719999999 , lgn: 120.9968782},
  		{id: 112, name: 'Fayetteville',lat: 35.0526641 , lgn: 78.87835849999999},
  		{id: 113, name: 'Shreveport',lat: 32.5251516 , lgn: 93.7501789},
  		{id: 114, name: 'Akron',lat: 41.0814447 , lgn: 81.51900529999999},
  		{id: 115, name: 'Tacoma',lat: 47.2528768 , lgn: 122.4442906},
  		{id: 116, name: 'Aurora',lat: 41.7605849 , lgn: 88.32007150000001},
  		{id: 117, name: 'Oxnard',lat: 34.1975048 , lgn: 119.1770516},
  		{id: 118, name: 'Fontana',lat: 34.0922335 , lgn: 117.435048},
  		{id: 119, name: 'Yonkers',lat: 40.9312099 , lgn: 73.89874689999999},
  		{id: 120, name: 'Augusta',lat: 33.474246 , lgn: 82.00967},
  		{id: 121, name: 'Mobile',lat: 30.6943566 , lgn: 88.04305409999999},
  		{id: 122, name: 'Little Rock',lat: 34.7464809 , lgn: 92.28959479999999},
  		{id: 123, name: 'Moreno Valley',lat: 33.9424658 , lgn: 117.2296717},
  		{id: 124, name: 'Glendale',lat: 34.1425078 , lgn: 118.255075},
  		{id: 125, name: 'Amarillo',lat: 35.2219971 , lgn: 101.8312969},
  		{id: 126, name: 'Huntington Beach',lat: 33.660297 , lgn: 117.9992265},
  		{id: 127, name: 'Columbus',lat: 32.4609764 , lgn: 84.9877094},
  		{id: 128, name: 'Grand Rapids',lat: 42.9633599 , lgn: 85.6680863},
  		{id: 129, name: 'Grand Rapids Charter Township',lat: 43.0020023 , lgn: 85.57150150000001},
  		{id: 130, name: 'Salt Lake City',lat: 40.7607793 , lgn: 111.8910474},
  		{id: 131, name: 'Tallahassee',lat: 30.4382559 , lgn: 84.28073289999999},
  		{id: 132, name: 'Worcester',lat: 42.2625932 , lgn: 71.8022934},
  		{id: 133, name: 'Newport News',lat: 37.0870821 , lgn: 76.4730122},
  		{id: 134, name: 'Huntsville',lat: 34.7303688 , lgn: 86.5861037},
  		{id: 135, name: 'Knoxville',lat: 35.9606384 , lgn: 83.9207392},
  		{id: 136, name: 'Providence',lat: 41.8239891 , lgn: 71.4128343},
  		{id: 137, name: 'Santa Clarita',lat: 34.3916641 , lgn: 118.542586},
  		{id: 138, name: 'Grand Prairie',lat: 32.7459645 , lgn: 96.99778459999999},
  		{id: 139, name: 'Brownsville',lat: 25.9017472 , lgn: 97.4974838},
  		{id: 140, name: 'Jackson',lat: 32.2987573 , lgn: 90.1848103},
  		{id: 141, name: 'Overland Park',lat: 38.9822282 , lgn: 94.6707917},
  		{id: 142, name: 'Garden Grove',lat: 33.7739053 , lgn: 117.9414477},
  		{id: 143, name: 'Santa Rosa',lat: 38.4404674 , lgn: 122.7144314},
  		{id: 144, name: 'Chattanooga',lat: 35.0456297 , lgn: 85.3096801},
  		{id: 145, name: 'Oceanside',lat: 33.1958696 , lgn: 117.3794834},
  		{id: 146, name: 'Fort Lauderdale',lat: 26.1223084 , lgn: 80.14337859999999},
  		{id: 147, name: 'Rancho Cucamonga',lat: 34.10639889999999 , lgn: 117.5931084},
  		{id: 148, name: 'Port St Lucie',lat: 27.2758333 , lgn: 80.35499999999999},
  		{id: 149, name: 'Ontario',lat: 34.0633443 , lgn: 117.6508876},
  		{id: 150, name: 'Vancouver',lat: 45.6387281 , lgn: 122.6614861},
  		{id: 151, name: 'Tempe',lat: 33.4255104 , lgn: 111.9400054},
  		{id: 152, name: 'Springfield',lat: 37.2089572 , lgn: 93.29229889999999},
  		{id: 153, name: 'Lancaster',lat: 34.6867846 , lgn: 118.1541632},
  		{id: 154, name: 'Eugene',lat: 44.0520691 , lgn: 123.0867536},
  		{id: 155, name: 'Pembroke Pines',lat: 26.0122378 , lgn: 80.3152233},
  		{id: 156, name: 'Salem',lat: 44.9428975 , lgn: 123.0350963},
  		{id: 157, name: 'Cape Coral',lat: 26.5628537 , lgn: 81.9495331},
  		{id: 158, name: 'Peoria',lat: 33.5805955 , lgn: 112.2373779},
  		{id: 159, name: 'Sioux Falls, SD, USA',lat: 43.5499749 , lgn: 96.700327},
  		{id: 160, name: 'Springfield',lat: 42.1014831 , lgn: 72.589811},
  		{id: 161, name: 'Elk Grove',lat: 38.4087993 , lgn: 121.3716178},
  		{id: 162, name: 'Rockford',lat: 42.2711311 , lgn: 89.0939952},
  		{id: 163, name: 'Palmdale',lat: 34.5794343 , lgn: 118.1164613},
  		{id: 164, name: 'Corona',lat: 33.8752935 , lgn: 117.5664384},
  		{id: 165, name: 'Salinas',lat: 36.6777372 , lgn: 121.6555013},
  		{id: 166, name: 'Pomona',lat: 34.0552267 , lgn: 117.7523048},
  		{id: 167, name: 'Pasadena',lat: 29.6910625 , lgn: 95.2091006},
  		{id: 168, name: 'Joliet',lat: 41.525031 , lgn: 88.0817251},
  		{id: 169, name: 'Paterson',lat: 40.9167654 , lgn: 74.17181099999999},
  		{id: 170, name: 'Kansas City',lat: 39.114053 , lgn: 94.6274636},
  		{id: 171, name: 'Torrance',lat: 33.8358492 , lgn: 118.3406288},
  		{id: 172, name: 'Syracuse',lat: 43.0481221 , lgn: 76.14742439999999},
  		{id: 173, name: 'Bridgeport',lat: 41.1865478 , lgn: 73.19517669999999},
  		{id: 174, name: 'Hayward',lat: 37.6688205 , lgn: 122.0807964},
  		{id: 175, name: 'Fort Collins',lat: 40.5852602 , lgn: 105.084423},
  		{id: 176, name: 'Escondido',lat: 33.1192068 , lgn: 117.086421},
  		{id: 177, name: 'Lakewood',lat: 39.7047095 , lgn: 105.0813734},
  		{id: 178, name: 'Naperville',lat: 41.7858629 , lgn: 88.1472893},
  		{id: 179, name: 'Dayton',lat: 39.7589478 , lgn: 84.1916069},
  		{id: 180, name: 'Hollywood',lat: 26.0112014 , lgn: 80.1494901},
  		{id: 181, name: 'Sunnyvale',lat: 37.36883 , lgn: 122.0363496},
  		{id: 182, name: 'Alexandria',lat: 38.8048355 , lgn: 77.0469214},
  		{id: 183, name: 'Mesquite',lat: 32.76679550000001 , lgn: 96.5991593},
  		{id: 184, name: 'Hampton',lat: 37.0298687 , lgn: 76.34522179999999},
  		{id: 185, name: 'Pasadena',lat: 34.1477849 , lgn: 118.1445155},
  		{id: 186, name: 'Orange',lat: 33.7877944 , lgn: 117.8531119},
  		{id: 187, name: 'Savannah',lat: 32.0835407 , lgn: 81.09983419999999},
  		{id: 188, name: 'Cary',lat: 35.79154 , lgn: 78.7811169},
  		{id: 189, name: 'Fullerton',lat: 33.8702923 , lgn: 117.925338},
  		{id: 190, name: 'Warren',lat: 42.49299999999999 , lgn: 83.02819699999999},
  		{id: 191, name: 'Clarksville',lat: 36.5297706 , lgn: 87.3594528},
  		{id: 192, name: 'McKinney',lat: 33.1972465 , lgn: 96.6397822},
  		{id: 193, name: 'McAllen',lat: 26.2034071 , lgn: 98.23001239999999},
  		{id: 194, name: 'New Haven',lat: 41.3081527 , lgn: 72.9281577},
  		{id: 195, name: 'Sterling Heights',lat: 42.5803122 , lgn: 83.0302033},
  		{id: 196, name: 'West Valley City',lat: 40.6916132 , lgn: 112.0010501},
  		{id: 197, name: 'Columbia',lat: 34.0007104 , lgn: 81.0348144},
  		{id: 198, name: 'Killeen',lat: 31.1171194 , lgn: 97.72779589999999},
  		{id: 199, name: 'Topeka',lat: 39.0558235 , lgn: 95.68901849999999},
  		{id: 200, name: 'Thousand Oaks',lat: 34.1705609 , lgn: 118.8375937},
  		{id: 201, name: 'Cedar Rapids',lat: 41.9778795 , lgn: 91.6656232},
  		{id: 202, name: 'Olathe',lat: 38.8813958 , lgn: 94.81912849999999},
  		{id: 203, name: 'Elizabeth',lat: 40.6639916 , lgn: 74.2107006},
  		{id: 204, name: 'Waco',lat: 31.549333 , lgn: 97.1466695},
  		{id: 205, name: 'Hartford',lat: 41.76371109999999 , lgn: 72.6850932},
  		{id: 206, name: 'Visalia',lat: 36.3302284 , lgn: 119.2920585},
  		{id: 207, name: 'Gainesville',lat: 29.6516344 , lgn: 82.32482619999999},
  		{id: 208, name: 'Simi Valley',lat: 34.2694474 , lgn: 118.781482},
  		{id: 209, name: 'Stamford',lat: 41.0534302 , lgn: 73.5387341},
  		{id: 210, name: 'Bellevue',lat: 47.610377 , lgn: 122.2006786},
  		{id: 211, name: 'Concord',lat: 37.9779776 , lgn: 122.0310733},
  		{id: 212, name: 'Miramar',lat: 25.9756704 , lgn: 80.28675009999999},
  		{id: 213, name: 'Coral Springs',lat: 26.271192 , lgn: 80.2706044},
  		{id: 214, name: 'Lafayette',lat: 30.2240897 , lgn: 92.0198427},
  		{id: 215, name: 'Charleston',lat: 32.7765656 , lgn: 79.93092159999999},
  		{id: 216, name: 'Carrollton',lat: 32.9756415 , lgn: 96.8899636},
  		{id: 217, name: 'Roseville',lat: 38.7521235 , lgn: 121.2880059},
  		{id: 218, name: 'Thornton',lat: 39.8680412 , lgn: 104.9719243},
  		{id: 219, name: 'Beaumont',lat: 30.080174 , lgn: 94.1265562},
  		{id: 220, name: 'Allentown',lat: 40.6084305 , lgn: 75.4901833},
  		{id: 221, name: 'Surprise',lat: 33.639099 , lgn: 112.3957576},
  		{id: 222, name: 'Evansville',lat: 37.9715592 , lgn: 87.5710898},
  		{id: 223, name: 'Abilene',lat: 32.4487364 , lgn: 99.73314390000002},
  		{id: 224, name: 'Frisco',lat: 33.1506744 , lgn: 96.82361159999999},
  		{id: 225, name: 'Independence',lat: 39.0911161 , lgn: 94.41550679999999},
  		{id: 226, name: 'Santa Clara',lat: 37.3541079 , lgn: 121.9552356},
  		{id: 227, name: 'Springfield',lat: 39.78172130000001 , lgn: 89.6501481},
  		{id: 228, name: 'Vallejo',lat: 38.1040864 , lgn: 122.2566367},
  		{id: 229, name: 'Victorville',lat: 34.5361067 , lgn: 117.2911565},
  		{id: 230, name: 'Athens',lat: 33.955802 , lgn: 83.3823656},
  		{id: 231, name: 'Peoria',lat: 40.6936488 , lgn: 89.5889864},
  		{id: 232, name: 'Lansing',lat: 42.732535 , lgn: 84.5555347},
  		{id: 233, name: 'Lansing Charter Township',lat: 42.7563594 , lgn: 84.5283267},
  		{id: 234, name: 'Ann Arbor',lat: 42.2808256 , lgn: 83.7430378},
  		{id: 235, name: 'El Monte',lat: 34.0686206 , lgn: 118.0275667},
  		{id: 236, name: 'Denton',lat: 33.2148412 , lgn: 97.13306829999999},
  		{id: 237, name: 'Berkeley',lat: 37.8715926 , lgn: 122.272747},
  		{id: 238, name: 'Provo',lat: 40.2338438 , lgn: 111.6585337},
  		{id: 239, name: 'Downey',lat: 33.94001430000001 , lgn: 118.1325688},
  		{id: 240, name: 'Midland',lat: 31.9973456 , lgn: 102.0779146},
  		{id: 241, name: 'Norman',lat: 35.2225668 , lgn: 97.4394777},
  		{id: 242, name: 'Waterbury',lat: 41.5581525 , lgn: 73.0514965},
  		{id: 243, name: 'Costa Mesa',lat: 33.6411316 , lgn: 117.9186689},
  		{id: 244, name: 'Inglewood',lat: 33.9616801 , lgn: 118.3531311},
  		{id: 245, name: 'Manchester',lat: 42.9956397 , lgn: 71.4547891},
  		{id: 246, name: 'Murfreesboro',lat: 35.8456213 , lgn: 86.39027},
  		{id: 247, name: 'Columbia',lat: 38.9517053 , lgn: 92.3340724},
  		{id: 248, name: 'Elgin',lat: 42.0372487 , lgn: 88.2811895},
  		{id: 249, name: 'Clearwater',lat: 27.9658533 , lgn: 82.8001026},
  		{id: 250, name: 'Miami Gardens',lat: 25.9420377 , lgn: 80.2456045},
  		{id: 251, name: 'Rochester',lat: 44.0216306 , lgn: 92.4698992},
  		{id: 252, name: 'Pueblo',lat: 38.2544472 , lgn: 104.6091409},
  		{id: 253, name: 'Lowell',lat: 42.6334247 , lgn: 71.31617179999999},
  		{id: 254, name: 'Wilmington',lat: 34.2257255 , lgn: 77.9447102},
  		{id: 255, name: 'Ventura',lat: 34.2746405 , lgn: 119.2290053},
  		{id: 256, name: 'Arvada',lat: 39.8027644 , lgn: 105.0874842},
  		{id: 257, name: 'Westminster',lat: 39.8366528 , lgn: 105.0372046},
  		{id: 258, name: 'West Covina',lat: 34.0686208 , lgn: 117.9389526},
  		{id: 259, name: 'Gresham',lat: 45.5001357 , lgn: 122.4302013},
  		{id: 260, name: 'Norwalk',lat: 33.9022367 , lgn: 118.081733},
  		{id: 261, name: 'Fargo',lat: 46.8771863 , lgn: 96.7898034},
  		{id: 262, name: 'Carlsbad',lat: 33.1580933 , lgn: 117.3505939},
  		{id: 263, name: 'Fairfield',lat: 38.24935809999999 , lgn: 122.0399663},
  		{id: 264, name: 'Cambridge',lat: 42.3726399 , lgn: 71.10965279999999},
  		{id: 265, name: 'Wichita Falls',lat: 33.9137085 , lgn: 98.4933873},
  		{id: 266, name: 'High Point',lat: 35.9556923 , lgn: 80.0053176},
  		{id: 267, name: 'Billings',lat: 45.7832856 , lgn: 108.5006904},
  		{id: 268, name: 'Green Bay',lat: 44.51915899999999 , lgn: 88.019826},
  		{id: 269, name: 'West Jordan',lat: 40.6096698 , lgn: 111.9391031},
  		{id: 270, name: 'Richmond',lat: 37.9357576 , lgn: 122.3477486},
  		{id: 271, name: 'Murrieta',lat: 33.5539143 , lgn: 117.2139232},
  		{id: 272, name: 'Burbank',lat: 34.1808392 , lgn: 118.3089661},
  		{id: 273, name: 'Burbank',lat: 37.3205556 , lgn: 121.9316667},
  		{id: 274, name: 'Palm Bay',lat: 28.0344621 , lgn: 80.5886646},
  		{id: 275, name: 'Everett',lat: 47.9789848 , lgn: 122.2020794},
  		{id: 276, name: 'Flint',lat: 43.0125274 , lgn: 83.6874562},
  		{id: 277, name: 'Antioch',lat: 38.0049214 , lgn: 121.805789},
  		{id: 278, name: 'Erie',lat: 42.12922409999999 , lgn: 80.085059},
  		{id: 279, name: 'South Bend',lat: 41.6833813 , lgn: 86.25000659999999},
  		{id: 280, name: 'Daly name',lat: 37.6879241 , lgn: 122.4702079},
  		{id: 281, name: 'Centennial',lat: 39.5807452 , lgn: 104.8771726},
  		{id: 282, name: 'Temecula',lat: 33.4936391 , lgn: 117.1483648},
  	];

  return {
    all: function() {
      return cities;
    },
    get: function(cityId) {
      // Simple index lookup
      return cities[cityId];
    }
  }
})






mainFactory.factory('DataStore', function() {
  //create datastore with default values
  var DataStore = {
    city:       'Miami',
    latitude:   25.7877,
    longitude:  80.2241 };

    DataStore.setCity = function (value) {
      DataStore.city = value;
    };

    DataStore.setLatitude = function (value) {
      DataStore.longitude = value;
    };

    DataStore.setLongitude = function (value) {
      DataStore.longitude = value;
    };

    return DataStore;
  })

  mainFactory.factory ('StorageService', function ($localStorage) {

    $localStorage = $localStorage.$default({
      things: []
    });

    var _getAll = function () {
      return $localStorage.things;
    };
    var _add = function (thing) {
      $localStorage.things.push(thing);
    }
    var _remove = function (thing) {
      $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
    }
    var _clearAll = function () {
      console.log("clearAll 2");
      $localStorage.things = [];
    }


    return {
      getAll: _getAll,
      add: _add,
      remove: _remove,
      clearAll: _clearAll
    };
  })
  ;
