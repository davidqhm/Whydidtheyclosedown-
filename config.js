var config = {
    style: 'mapbox://styles/davidqhm/cmtqpx8yh00g501pm7c7vh8kj',
    accessToken: 'pk.eyJ1IjoiZGF2aWRxaG0iLCJhIjoiY210amcyeGhqMDk1ejJ4c2g0Y3dzNDN6biJ9.dZ3B2FSQbxl3T6avXHqQvQ',
    showMarkers: false,
    markerColor: '#3FB1CE',

    
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Why did they all close down?',
    subtitle: 'Exploring possible correlations of "Permenently Closed" cafes',
    byline: 'By David Quek',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Small Business Closures in Singapore',
            description: 'It has been my personal observation as well as the observation of many Singaporeans, news outlets and researchers that the turn-over rate of small entrepreneurial pursuits in Singapore such as cafes, boutique stores, thrift shops is significant. <br><br> This story map explores cafes that have closed down in the past year and seeks to understand the potential spatial or urban conditions that may have contributed.',
            location: {
                center: [103.814690, 1.351244],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'prop_hdb',
                     opacity: 0,
                     duration:5000
                     
                 },
                 {
                     layer: 'prop_condos',
                     opacity: 0,
                     duration:5000

                 },
                 {
                     layer: 'prop_landed',
                     opacity: 0,
                     duration:5000

                 },
                 {
                     layer: 'ura-conservation-area',
                     opacity: 0,
                     duration:5000 
                 },
                 {
                     layer: 'ura-conservation-area-name',
                     opacity: 0,
                     duration:5000 
                 },
                 {
                     layer: 'median_price',
                     opacity: 0,
                     duration:5000 
                 },
                 {
                     layer: 'median_price2',
                     opacity: 0,
                     duration:5000 
                 }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Concentration in Downtown Area',
            description: 'Of the specialty coffee cafes that have closed down in the past one year, there is a large concentration of those in the downtown area, particularly the Outram Park, Chinatown, Raffles Hall and Bugis areas.',
            location: {
                center: [103.835745, 1.299355],
                zoom: 13.2,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 1, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: '0.5',
            onChapterExit:'0.5'
        },
        {
           id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Heartlands',
            description: 'This is in comparison to areas in the heartlands or farther from the downtown area that saw considerably less permanent closures.<br><br> Despite the high concentration of cafes along Upper Thomson Road, in the past year it only saw one closure: One Man Coffee.',
            location: {
                center: [103.840694, 1.361679],
                zoom: 14.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 1, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'prop_hdb',
                     opacity: 0,
                     duration:5000
                     
                 },
                 {
                     layer: 'prop_condos',
                     opacity: 0,
                     duration:5000

                 },
                 {
                     layer: 'prop_landed',
                     opacity: 0,
                     duration:5000

                 },
                 {
                     layer: 'ura-conservation-area',
                     opacity: 0,
                     duration:5000 
                 },
                 {
                     layer: 'ura-conservation-area-name',
                     opacity: 0,
                     duration:5000 
                 },
                 {
                     layer: 'median_price',
                     opacity: 0,
                     duration:5000 
                 },
                 {
                     layer: 'median_price2',
                     opacity: 0,
                     duration:5000 
                 },

            ],
            onChapterExit: []
        },
        {
           id: 'fourth-container',
            alignment: 'left',
            hidden: false,
            title: 'Looking at Downtown',
            description: 'At first instinct, I began to look at rental prices in the area as a possible reason for the closure of these cafes. As data for specific retail units were largely unavailable to the public without engaging an agent, the median price of resale HDBs and condominiums were used instead to understand the price composition of the locale.',
            location: {
                center: [103.850926, 1.291208],
                zoom: 13.83,
                pitch: 0,
                bearing: 0,

                speed: 1, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                {
                     layer: 'prop_hdb',
                     opacity: 0.3,
                     duration:3000 
                 },
                 {
                     layer: 'prop_condos',
                     opacity: 0.4,
                     duration:5000 
                 },
                 {
                     layer: 'prop_landed',
                     opacity: 0.5,
                     duration:7000 
                 },
                 {
                     layer: 'median_price',
                     opacity: 1,
                     duration:4000 
                 },

            ],
            onChapterExit: [
                ]
        },
        {
           id: 'fifth-container',
            alignment: 'left',
            hidden: false,
            title: 'URA Conservation Areas - Is this the problem?',
            description: 'The most promising lead, however, is the proximity of the closed-down cafe to an URA Conservation Area.',
            location: {
                center: [103.850926, 1.291208],
                zoom: 13.83,
                pitch: 0,
                bearing: 0,
                speed: 1, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                {
                     layer: 'prop_hdb',
                     opacity: 0,
                     duration:3000 
                 },
                 {
                     layer: 'prop_condos',
                     opacity: 0,
                     duration:3000 
                 },
                 {
                     layer: 'prop_landed',
                     opacity: 0,
                     duration:3000 
                 },
            ],
            onChapterExit: []
        },
        {
            id: 'sixth-container',
            alignment: 'left',
            hidden: false,
            description: 'Closed Cafes:<br><br>Muyun, Equate Coffee, Fifty-Five Coffee Bar, Caracara, Cloud, Plus Coffee...',
            
            location: {
                center: [103.843659, 1.280109],
                zoom: 15.50,
                pitch: 0,
                bearing: 0,
                speed: 1, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                {
                     layer: 'ura-conservation-area',
                     opacity: 1,
                     duration:3000 
                 },
                 {
                     layer: 'prop_condos',
                     opacity: 0,
                     duration:3000 
                 },
                 {
                     layer: 'prop_landed',
                     opacity: 0,
                     duration:3000 
                 },
            ],
            onChapterExit: []  
        },
        {
            id: 'seventh-container',
            alignment: 'left',
            hidden: false,
            description: 'Closed Cafes:<br><br>Hvala CHIJMES, Shake Coffee, Ah Chew Desserts...',
            location: {
                center: [103.852554, 1.297927],
                zoom: 15.90,
                pitch: 0,
                bearing: 0,
                speed: 1, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                {
                     layer: 'ura-conservation-area',
                     opacity: 1,
                     duration:3000 
                 },
                 {
                     layer: 'prop_condos',
                     opacity: 0,
                     duration:3000 
                 },
                 {
                     layer: 'prop_landed',
                     opacity: 0,
                     duration:3000 
                 },
            ],
            onChapterExit: []  
        },
        {
            id: 'eigth-container',
            alignment: 'left',
            hidden: false,
            description: 'Closed Cafes:<br><br>Aphrodite, Penny University, Habitat Coffee...<br><br>This suggests that further studies on the correlation between <b>operating within buildings such as shophouses and other gazetted buildings have with the rate of closures.',
            location: {
                center: [103.857639, 1.307064],
                zoom: 15.90,
                pitch: 0,
                bearing: 0,
                speed: 1, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                {
                     layer: 'ura-conservation-area',
                     opacity: 1,
                     duration:3000 
                 },
                 {
                     layer: 'prop_condos',
                     opacity: 0,
                     duration:3000 
                 },
                 {
                     layer: 'prop_landed',
                     opacity: 0,
                     duration:3000 
                 },
            ],
            onChapterExit: []  
        },
        {
            id: 'ninth-container',
            hidden: false,
            description: 'By: David Quek | DEP5118',
            location: {
                center: [103.845605, 1.326343],
                zoom: 11.52,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            speed: 1, // make the flying slow
            curve: 1, // change the speed at which it zooms out
            },
            {
            onChapterEnter: [],
            onChapterExit: []
        }            
    ]
};
