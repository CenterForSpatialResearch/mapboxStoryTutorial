var config = {
    style: 'mapbox://styles/c4sr-gsapp/ckze8qu3k002315p8l1424iis',
    accessToken: 'pk.eyJ1IjoiYzRzci1nc2FwcCIsImEiOiJja2J0ajRtNzMwOHBnMnNvNnM3Ymw5MnJzIn0.fsTNczOFZG8Ik3EtO9LdNQ',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            title: 'The Fulton Correctional Facility',
            image: '',
            description: 'This is an example story to demonstrate different data layers that can be used in a mapbox story.<br><br>'
            +"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis, augue eu vestibulum vulputate, ligula justo consectetur libero, sed vulputate lectus est et purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non pharetra leo. Phasellus eleifend ligula felis, eget posuere sapien pellentesque id. In tincidunt malesuada hendrerit. Aliquam erat volutpat. Sed ullamcorper convallis eros ut auctor. Cras vel iaculis ligula, et vestibulum metus.",
            location: {
                center: [-73.9015, 40.837],
                zoom: 18,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'food',                 opacity: 0 },
                {layer: 'satellite',            opacity: 1},
                {layer: 'greenspace',           opacity: 0},
                {layer: 'building',             opacity: 0 },
                {layer: 'averageIncome',        opacity: 0},
                {layer: 'populationDensity',    opacity: 0}, 
                {layer: 'prisonBoundaries',     opacity: 0},
                {layer: 'prisonCentroids',      opacity: 1},
                {layer: 'youth',                opacity: 0},
                {layer: 'cultural',             opacity: 0},
                {layer: 'publicSafety',         opacity: 0}
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'landuse',
            alignment: 'right',
            title: 'The location',
            image: '',
            description: 'The facility borders Crotona Park ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis, augue eu vestibulum vulputate, ligula justo consectetur libero, sed vulputate lectus est et purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non pharetra leo. Phasellus eleifend ligula felis, eget posuere sapien pellentesque id. In tincidunt malesuada hendrerit. Aliquam erat volutpat.',
            location: {
                center: [-73.9, 40.836],
                zoom: 15,
                pitch: 0,
                bearing:0
            },
            onChapterEnter: [
                {layer: 'food',                 opacity: 0},
                {layer: 'satellite',            opacity: .4},
                {layer: 'road',                 opacity: .2},
                {layer: 'greenspace',           opacity: 1},
                {layer: 'building',             opacity: 0 },
                {layer: 'averageIncome',        opacity: 0},
                {layer: 'populationDensity',    opacity: 0}, 
                {layer: 'prisonBoundaries',     opacity: 1},
                {layer: 'prisonCentroids',      opacity: 1},
                {layer: 'youth',                opacity: 0},
                {layer: 'cultural',             opacity: 0},
                {layer: 'publicSafety',         opacity: 0}
            ],
            onChapterExit: [
               
            ]
        },
        {
            id: 'food',
            alignment: 'right',
            title: 'Food',
            image: '',
            description: 'There are several chain supermarket locations in the neighborhood, including a C-Town supermarket just 2 blocks away from the facility. There are also smaller food stores in the area.',
            location: {
                center: [-73.9, 40.836],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {layer: 'satellite',opacity: .4},
                {layer: 'road',opacity: .2},
                {layer: 'greenspace', opacity: 0},
                {layer: 'building', opacity: 0 },
                {layer: 'averageIncome', opacity: 0},
                {layer: 'populationDensity', opacity: 0}, 
                {layer: 'prisonBoundaries', opacity: 1},
                {layer: 'prisonCentroids', opacity: 1},
                {layer: 'food', opacity: 1},
                {layer: 'youth',opacity: 0},
                {layer: 'cultural', opacity: 0},
                {layer: 'publicSafety', opacity: 0}
            ],
            onChapterExit: [
                {layer: 'food', opacity: 0}

            ]
        },
        {
            id: 'youth',
            alignment: 'right',
            title: 'Schools and Playgrounds',
            image: '',
            description: 'Fulton is within walking distance to several public and charter schools, as well as playgrounds and children\'s programs.',
            location: {
                center: [-73.9, 40.836],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {layer: 'satellite',opacity: .4},
                {layer: 'road',opacity: .2},
                {layer: 'greenspace', opacity: 0},
                {layer: 'building', opacity: 0 },
                {layer: 'averageIncome', opacity: 0},
                {layer: 'populationDensity', opacity: 0}, 
                {layer: 'prisonBoundaries', opacity: 1},
                {layer: 'prisonCentroids', opacity: 1},
                {layer: 'food', opacity: 0},
                {layer: 'youth',opacity: 1},
                {layer: 'cultural', opacity: 0},
                {layer: 'publicSafety', opacity: 0}
            ],
            onChapterExit: [
                {layer: 'youth',opacity:0 }

            ]
        },
        {
            id: 'cultural',
            alignment: 'right',
            title: 'Cultural Institutions',
            image: '',
            description: 'In contrast, there are very few cultural institutions in the immediate area. The closest libraries are Morrisania library and Grand Concourse Library, both are more than a 10 minute walk away.',
            location: {
                center: [-73.9, 40.836],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {layer: 'satellite',opacity: .4},
                {layer: 'road',opacity: .2},
                {layer: 'greenspace', opacity: 0},
                {layer: 'building', opacity: 0 },
                {layer: 'averageIncome', opacity: 0},
                {layer: 'populationDensity', opacity: 0}, 
                {layer: 'prisonBoundaries', opacity: 1},
                {layer: 'prisonCentroids', opacity: 1},
                {layer: 'food', opacity: 0},
                {layer: 'youth',opacity: 0},
                {layer: 'cultural', opacity: 1},
                {layer: 'publicSafety', opacity: 0}
            ],
            onChapterExit: [
                {layer: 'cultural', opacity: 0}

            ]
        },
        {
            id: 'density',
            alignment: 'right',
            title: 'Population Density by Census Tract',
            image: 'images/population_density.png',
            description: 'Fulton is situated just outside of several census tracts with high population density to the south and west.  ',
            location: {
                center: [-73.9, 40.836],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {layer: 'satellite',opacity: .4},
                {layer: 'road',opacity: .2},
                {layer: 'greenspace', opacity: 0},
                {layer: 'building', opacity: 0 },
                {layer: 'averageIncome', opacity: 0},
                {layer: 'populationDensity', opacity: 1}, 
                {layer: 'prisonBoundaries', opacity: 1},
                {layer: 'prisonCentroids', opacity: 1},
                {layer: 'food', opacity: 0},
                {layer: 'youth',opacity: 0},
                {layer: 'cultural', opacity: 0},
                {layer: 'publicSafety', opacity: 0}
            ],
            onChapterExit: [
                {layer: 'populationDensity', opacity: 0}

            ]
        },
        {
            id: 'building',
            alignment: 'right',
            title: 'Housing in the neighborhood',
            image: 'images/claremontVillage.png',
            description: 'The housing in the adjacent census tract with high population density consist of several high rise apartment buildings in the Claremont Village neighborhood.',
            location: {
                center: [-73.905, 40.837],
                zoom: 15.8,
                pitch: 50,
                bearing: 0
            },
            onChapterEnter: [
                {layer: 'satellite',opacity: .4},
                {layer: 'greenspace', opacity: 0},
                {layer: 'building', opacity: 1 },
                {layer: 'averageIncome', opacity: 0},
                {layer: 'populationDensity', opacity: 1}, 
                {layer: 'prisonBoundaries', opacity: 1},
                {layer: 'prisonCentroids', opacity: 1},
                {layer: 'food', opacity: 0},
                {layer: 'youth',opacity: 0},
                {layer: 'cultural', opacity: 0},
                {layer: 'publicSafety', opacity: 0}
            ],
            onChapterExit: [
                {layer: 'building', opacity: 0 },

            ]
            },
        {
            id: 'income',
            alignment: 'right',
            title: 'Average Household Income by Census Tract',
            image: 'images/average_household_income.png',
            description: 'The neighborhood\'s census tracts have some of the lowest average household income in the borough.',
            location: {
                center: [-73.902, 40.836],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {layer: 'satellite',opacity: .4},
                {layer: 'road',opacity: .5},
                {layer: 'greenspace', opacity: 0},
                {layer: 'building', opacity: 0 },
                {layer: 'averageIncome', opacity: 1},
                {layer: 'populationDensity', opacity: 0}, 
                {layer: 'prisonBoundaries', opacity: 1},
                {layer: 'prisonCentroids', opacity: 1},
                {layer: 'food', opacity: 0},
                {layer: 'youth',opacity: 0},
                {layer: 'cultural', opacity: 0},
                {layer: 'publicSafety', opacity: 0}
            ],
            onChapterExit: [
                {layer: 'averageIncome', opacity: 0}

            ]
        },
        {
            id: 'zoomoutIncome',
            alignment: 'right',
            title: 'Average Household Income by Census Tract',
            image: 'images/average_household_income.png',
            description: 'This area is situated in the Bronx, which has the lowest average household income areas in the city.',
            location: {
                center: [-73.902, 40.836],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {layer: 'satellite',opacity: .4},
                {layer: 'road',opacity: .1},
                {layer: 'greenspace', opacity: 0},
                {layer: 'building', opacity: 0 },
                {layer: 'averageIncome', opacity: 1},
                {layer: 'populationDensity', opacity: 0}, 
                {layer: 'prisonBoundaries', opacity: 1},
                {layer: 'prisonCentroids', opacity: 1},
                {layer: 'food', opacity: 0},
                {layer: 'youth',opacity: 0},
                {layer: 'cultural', opacity: 0},
                {layer: 'publicSafety', opacity: 0}
            ],
            onChapterExit: [
                {layer: 'averageIncome', opacity: 0}
            ]
        }, {
            id: 'end',
            alignment: 'left',
            title: 'The Fulton Correctional Facility',
            image: '',
            description: '',
            location: {
                center: [-73.9015, 40.837],
                zoom: 18,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'food',                 opacity: 0 },
                {layer: 'satellite',            opacity: 1},
                {layer: 'greenspace',           opacity: 0},
                {layer: 'building',             opacity: 0 },
                {layer: 'averageIncome',        opacity: 0},
                {layer: 'populationDensity',    opacity: 0}, 
                {layer: 'prisonBoundaries',     opacity: 0},
                {layer: 'prisonCentroids',      opacity: 1},
                {layer: 'youth',                opacity: 0},
                {layer: 'cultural',             opacity: 0},
                {layer: 'publicSafety',         opacity: 0}
            ],
            onChapterExit: [
              
            ]
        }
    ]
};
