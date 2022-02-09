var config = {
    style: 'mapbox://styles/c4sr-gsapp/ckzfvwfo3000l14o87tmi6xef',
    accessToken: 'pk.eyJ1IjoiYzRzci1nc2FwcCIsImEiOiJja2J0ajRtNzMwOHBnMnNvNnM3Ymw5MnJzIn0.fsTNczOFZG8Ik3EtO9LdNQ',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'chapter1',
            alignment: 'center',
            title: 'Chapter 1',
            image: '',
            description: 'uam erat volutpat. Sed ullamcorper convallis eros ut auctor. Cras vel iaculis ligula, et vestibulum metus.',
            location: {
                center: [-77.409,37.532],
                zoom: 18,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 0 },
                {layer: 'building', opacity:1 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter2',
            alignment: 'left',
            title: 'Chapter 2',
            image: '',
            description: 'uam erat volutpat. Sed ullamcorper convallis eros ut auctor. Cras vel iaculis ligula, et vestibulum metus.',
            location: {
                center: [-77.441,37.509],
                zoom: 12,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 1 },
                {layer: 'road', opacity: 1 },
                {layer: 'building', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter3',
            alignment: 'right',
            title: 'Chapter 3',
            image: '',
            description: 'uam erat volutpat. Sed ullamcorper convallis eros ut auctor. Cras vel iaculis ligula, et vestibulum metus.',
            location: {
                center: [-77.441,37.509],
                zoom: 18,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 1 },
                {layer: 'building', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        }
    ]
};
