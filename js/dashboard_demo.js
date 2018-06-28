var morrisCharts = function() {

    /* feasio Sample charts data*/
    Morris.Area({
        element: 'average-10days-accuracy',
        data: [
            { y: '2018-04-01', a: 66},
            { y: '2018-04-14', a: 60 },
            { y: '2018-05-01', a: 76 },
            { y: '2018-05-14', a: 81 },
            { y: '2018-06-01', a: 89 },
            { y: '2018-06-14', a: 77 },
            { y: '2018-07-03', a: 85 }
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Accuracy'],
        resize: true,
        lineColors: ['#1caf9a']
    });

    Morris.Donut({
        element: 'exercise-share',
        data: [
            {label: "1.Stabilization Leg - Hip - Back", value: 55},
            {label: "2. Leg and mechanical axis", value: 25},
            {label: "3. Stretching of neck & shoulders", value: 78},
            {label: "4. Hip flexor stretch", value: 46},
            {label: "5. Palvis mobilization", value: 88},
            {label: "6. Straightening the shoulder blades", value: 45},
            {label: "7. Strengthening legs and back", value: 44},
            {label: "8. Back stabilization", value: 11},
        ],
        colors: ['#95B75D', '#1caf9a', '#FEA223', "#ee98fb", "#ffa4a2", "#62757f", "#2286c3", "#c30000"]
    });


    Morris.Bar({
        element: 'accuracy-per-exercise',
        data: [
            { y: '1', a: 81},
            { y: '2', a: 75},
            { y: '3', a: 50},
            { y: '4', a: 75},
            { y: '5', a: 50},
            { y: '6', a: 75},
            { y: '7', a: 60},
            { y: '8', a: 66}
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Accuracy of exercise'],
        barColors: ['#B64645', '#33414E']
    });

    Morris.Line({
      element: 'accuracy-per-side',
      data: [
        { y: '2018-04-01', a: 65, b: 70 },
        { y: '2018-04-14', a: 79,  b: 65 },
        { y: '2018-05-01', a: 50,  b: 60 },
        { y: '2018-05-14', a: 75,  b: 65 },
        { y: '2018-06-01', a: 72,  b: 64 },
        { y: '2018-06-14', a: 60,  b: 65 },
        { y: '2018-07-01', a: 57, b: 48 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Left', 'Right'],
      resize: true,
      lineColors: ['#33414E', '#95B75D']
    });


    Morris.Line({
        element: 'morris-area-example',
        data: [
            { y: '2018-04-01', a: 80, b: 90 },
            { y: '2018-04-14', a: 75,  b: 83 },
            { y: '2018-05-01', a: 69,  b: 79 },
            { y: '2018-05-14', a: 75,  b: 68 },
            { y: '2018-06-01', a: 88,  b: 75 },
            { y: '2018-06-14', a: 75,  b: 65 },
            { y: '2018-07-01', a: 80, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Patrick', 'Thomas'],
        resize: true,
        lineColors: ['#1caf9a', '#FEA223']
    });    

    /* *feasio sample data end*/

}();