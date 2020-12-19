import React, { useEffect } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'



export function PostChart(props){

  const options = {
    chart : { type : "column" },
    title: {
      text: 'Post Bar Chart'
    },
    xAxis : { categories : props.posts.map(item  => item.title.substring(0,10))},
    yAxis : { min : 0 , title : { text : "No of Comments"}},
    series: [{
      name : "No of Comments",
      data: props.posts.map((item,index) => item.comments.length)
    }]
  };

  return(
    <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
  )
}
