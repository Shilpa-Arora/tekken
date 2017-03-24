(function() {
    'use strict';

    var data = [{
        "id": "Ease of Use",
        "order": 1.1,
        "score": 65,
        "weight": 0.5,
        "color": "#b3b3b3",
        "label": "Ease of Use"
    }, {
        "id": "Power",
        "order": 1.3,
        "score": 77,
        "weight": 0.5,
        "color": "#999999",
        "label": "Power"
    }, {
        "id": "Attack",
        "order": 2,
        "score": 75,
        "weight": 1,
        "color": "#666666",
        "label": "Attack"
    }, {
        "id": "Speed",
        "order": 3,
        "score": 87,
        "weight": 1,
        "color": "#b3b3b3",
        "label": "Speed"
    }, {
        "id": "Reach",
        "order": 4,
        "score": 65,
        "weight": 1,
        "color": "#999999",
        "label": "Reach"
    }, {
        "id": "Defence",
        "order": 5,
        "score": 75,
        "weight": 1,
        "color": "#666666",
        "label": "Defence"
    }];

    var margin = {
        top: 40,
        right: 80,
        bottom: 40,
        left: 80
    };

    var tooltip = d3.select('#chart')
        .append('div')
        .attr('class', 'tooltip');

    var width = 300,
        height = 300,
        radius = Math.min(width, height) / 2,
        innerRadius = 0;

    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) {
            return d.width;
        });

    var arc = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(function(d) {
            return (radius - innerRadius) * (d.data.score / 100.0) + innerRadius;
        });

    var outlineArc = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius);

    var svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + (width / 2 + margin.left) + "," + (height / 2 + margin.top) + ")");

    data.forEach(function(d) {
        d.id = d.id;
        d.order = +d.order;
        d.color = d.color;
        d.weight = +d.weight;
        d.score = +d.score;
        d.width = +d.weight;
        d.label = d.label;
    });

    var outerGroup = svg.selectAll(".solidArc")
        .data(pie(data))
        .enter()
        .append("g");

    outerGroup
        .append("path")
        .attr("fill", function(d) {
            return d.data.color;
        })
        .attr("class", "solidArc")
        .attr("d", arc)
        .on('mouseenter', function(d) {
            // console.log(d.data.id);
            if (d.data.id === 'Attack') {
                d3.select(this)
                    .style("transform", "translate(20px, 8px)")
            }
            if (d.data.id === 'Power') {
                d3.select(this)
                    .style("transform", "translate(22px, -18px)")
            }
            if (d.data.id === 'Speed') {
                d3.select(this)
                    .style("transform", "translate(0px, 14px)")
            }
            if (d.data.id === 'Reach') {
                d3.select(this)
                    .style("transform", "translate(-20px, 5px)")
            }
            if (d.data.id === 'Defence') {
                d3.select(this)
                    .style("transform", "translate(-10px, -15px)")
            }
            if (d.data.id === 'Ease of Use') {
                d3.select(this)
                    .style("transform", "translate(10px, -35px)")
            }

        })
        .on('mouseleave', function(d) {
            d3.select(this)
                .style("transform", "translate(0px, 0px)")

        })

    .on('mouseover', function(d) {
        tooltip.select('.label').text(d.data.score);
        tooltip.style('display', 'block');
        tooltip.append("text");
        tooltip.text(function() {
            return d.data.label + '\xa0' + d.data.score
        });

    });


    outerGroup
        .append("text")
        .attr("transform", function(d) {
            return "translate(" + centroid(40, width, d.startAngle, d.endAngle) + ")";
        })
        .attr("text-anchor", "middle")
        .text(function(d) {
            return d.data.label
        });


    function centroid(innerR, outerR, startAngle, endAngle) {
        var r = (innerR + outerR) / 2,
            a = (startAngle + endAngle) / 2 - (Math.PI / 2);
        return [Math.cos(a) * r, Math.sin(a) * r];
    }


})();
