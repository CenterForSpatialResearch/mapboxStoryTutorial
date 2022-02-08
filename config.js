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
            description: 'This is an example story to demonstrate different data layers that can be used in a mapbox story. <br><br>excerpt from https://www.nytimes.com/2015/02/02/opinion/in-the-bronx-new-life-for-an-old-prison.html<br><br>It began life in 1907 as an Episcopal church house. By the 1920s, the area was heavily Jewish, and the building became a Young Men’s Hebrew Association, with a synagogue on the ground floor. In the 1950s, it was a nursing home. Later it operated as a drug treatment center. <br><br> Each time, the building’s new use tracked the shifting demographics and needs of New York City. <br><br>Today it sits vacant. If local residents think of it at all, they probably remember it not as a house of worship, but for its service of a different sort of penitent: For nearly four decades, it was the Fulton Correctional Facility, a minimum-security prison that housed up to 900 inmates on work release.'
            +"<br>But last week the building at 1511 Fulton began its latest transformation, this time into a community re-entry center that will provide temporary housing and job training to New Yorkers returning from prison."

            +"<br><br>On Jan. 28, the city signed over the building\’s deed to the Osborne Association, an 82-year-old prison reform group that will operate the center after extensive renovations, thanks mainly to a $6 million grant from a state fund established for communities where prisons have closed."
            
            +"<br><br>Elizabeth Gaynes, Osborne\’s executive director, has been the driving force behind the re-entry center. At a ceremonial handover of the building\’s keys on Thursday, she thanked state officials for the opportunity. New York\’s corrections department, Ms. Gaynes said, has “generally behaved like proud parents who are marrying off their child to someone of a different religion."
            
            +"<br><br>It will take some work to make 1511 Fulton look like a place that people aren\’t forced at gunpoint to live in. Gray cinderblock walls, low ceilings and dim, scuffed hallways ring the floors. The cells — some no more than eight feet square — are bare but for barred, dirt-caked windows and metal toilets bolted to the walls."
            
            +"<br><br>As the country\’s 40-year incarceration boom has leveled off, states have struggled with what to do with abandoned prisons. Some have been converted into hotels, others into homeless shelters, a cemetery, a summer camp and a movie studio. But 1511 Fulton is the first to become a multipurpose re-entry center, Ms. Gaynes said."
            +"<br><br>Here is a quick overview of its surrounding area.",
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
            description: 'The facility borders Crotona Park, the 2nd largest green space in the Bronx, is within 4 blocks of Claremont Park, and within walking distance to several community green spaces.',
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
