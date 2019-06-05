$(document).ready(function () {
    console.log("JS Ready!");    
    drawgraph1();
    drawgraph2();
    drawgraph3();
});


//function to draw the map
function drawgraph1(){
    
    var trace1 = {
        x: ['Johor','Kedah','Kelantan','Melaka','N.Sembilan','Pahang','P.Pinang','Perak','Perlis','Selangor','Terengganu','Sabah & W.P. Labuan','Sarawak','W.P.Kuala Lumpur','W.P.Putrajaya'],
        y: [30679,11475,6906,5619,5134,10375,9729,12661,1324,33860,5604,16976,14723,10989,349],
        name: '2012',
        type: 'bar'
      };
      
      var trace2 = {
        x: ['Johor','Kedah','Kelantan','Melaka','N.Sembilan','Pahang','P.Pinang','Perak','Perlis','Selangor','Terengganu','Sabah & W.P. Labuan','Sarawak','W.P.Kuala Lumpur','W.P.Putrajaya'],
        y: [20659,15881,7749,4318,8343,9346,10713,20145,2374,49880,6966,20202,21432,14770,824],
        name: '2017',
        type: 'bar'
      };
      
      var data = [trace1, trace2];
      
      var layout = {
        title: {
          text:'Suicidal Ideation among Malaysians aged 13-17',
          font: {
            family: 'Arial',
            size: 30
          }},
      bargap : 0.2,
      barmode: 'group'};
      
      Plotly.newPlot('myDiv', data, layout);
    

}
function drawgraph2(){
    let dataset = [];
var state = [];
var year = [];
var year2 = [];

Plotly.d3.csv("dataset/Stress.csv", function(data){
    dataset = data;
   //pre process data
    for (i = 0; i < dataset.length; i++) {
      year.push(dataset[i].Year);
      year2.push(dataset[i].Year2);
      state.push(dataset[i].State);
            
    }
var trace1 = {

    x: state,
    y: year,
    name: '2012',
    
    type: 'line',


};

var trace2 = {
  x:state,
  y:year2,
  name: '2017',
  type: 'scatter',
};


var layout= {
    title: {
      text:'State vs Stressed Population',
      font: {
      family: 'Arial',
      size: 30
    }},
      xaxis: {title: 'States'},
      yaxis: {title: 'population'}
      }

    var data = [trace1,trace2];
    Plotly.newPlot('myDiv2', data,layout);
});
}

function drawgraph3(){
    let states =[];
    let popu_12 = [];
    let popu_17 = [];
    d3.csv("dataset/depressionmy.csv").then(function (data) {
        console.log(data);
        for(i=0;i<=15;i++){
            states.push(data[i].State); 
            popu_12.push(data[i].year12);
            popu_17.push(data[i].year17);

        }
        console.log(states,popu_12,popu_17);
    });
    var data = [{
        values: [44808,30525,21579,11603,12353,23002,18810,34666,3419,66325,19451,33196,40108,20779,'null',800],
        labels: ['Johor','Kedah','Kelantan','Melaka','N.Sembilan','Pahang','P.Pinang','Perak','Perlis','Selangor','Terengganu','Sabah','Sarawak','W.P.Kuala Lumpur','W.P. Labuan','W.P.Putrajaya'],
        domain: {column: 0},
        hoverinfo: 'label+percent',
        hole: .5,
        type: 'pie'
      },{
        values: [39599,19585,18668,10161,14189,21174,20853,33577,4744,86059,15373,42316,29844,23620,1120,1535],
        labels: ['Johor','Kedah','Kelantan','Melaka','N.Sembilan','Pahang','P.Pinang','Perak','Perlis','Selangor','Terengganu','Sabah','Sarawak','W.P.Kuala Lumpur','W.P. Labuan','W.P.Putrajaya'],
        textposition: 'inside',
        domain: {column: 1},
        hoverinfo: 'label+percent',
        hole: .5,
        type: 'pie'
      }];
      var layout = {
        title: {
          text:'Depression in Malaysia by states',
          font: {
            family: 'Arial',
            size: 30
          }},
        annotations: [
          {
            font: {
              size: 25
            },
            showarrow: false,
            text: '2012',
            x: 0.19,
            y: 0.5
          },
          {
            font: {
              size: 25
            },
            showarrow: false,
            text: '2017',
            x: 0.8,
            y: 0.5
          }
        ],
        height: 600,
        width: 1200,
        showlegend: true,
        grid: {rows: 1, columns: 2}
      };
      
      Plotly.newPlot('myDiv3', data, layout);



}