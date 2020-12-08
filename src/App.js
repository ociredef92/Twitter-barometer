import React from 'react';
import ashtagModule from './ashtagModule';
//import firebase from './firebase';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header'
import Hashtags from './components/Hashtags'
import AddHashtag from './components/AddHashtag'
import Chart1 from './components/Chart1'
import Chart2 from './components/Chart2'
import LineChart from './components/LineChart'
import Pie from './components/Pie'
import Histo from './components/Histo'
//import Line from './components/Line'
import * as d3 from "d3";
function App() {

  const [items, setItems] = React.useState([]);
  

  React.useEffect(() => {
    ashtagModule.getAshtags(setItems) // set items calls another re-render, so the whole App would run again
  }, []);

  const handleAddNewHashtag = (value) => {
    const newItems = [...items,value]
    setItems(newItems);
    console.log(newItems)
    ashtagModule.saveNewAshtag(value)
  }

  const removeItem = (item) => {
    console.log(item);
    const itemsWithoutRemoved = items.filter(arrayItem => arrayItem !== item)
    setItems(itemsWithoutRemoved)
    console.log(items)
  }

    const generatePieData = (value, length = 5) =>
      d3.range(length).map((item, index) => ({
        date: index,
        value: value === null || value === undefined ? Math.random() * 100 : value
      }));

    const [dataPie, setDataPie] = React.useState(generatePieData());

    // const changeData = () => {
    //   setDataPie(generateData());
    // };

    const generateLineData = (value, length = 50) =>
      d3.range(length).map((item, index) => ({
        date: index,
        value: value === null || value === undefined ? Math.random() * 100 : value
      }));

    const [dataLine, setDataLine] = React.useState(generateLineData());
    //console.log(dataLine)

    const generateHistoData = (value, length = 500) =>
      d3.range(length).map((item, index) => ({
        date: index,
        value: value === null || value === undefined ? Math.random() * 1000 : value
      }));

    const [dataHisto, setDataHisto] = React.useState(generateHistoData());
    console.log(dataHisto)


  return (
    <Container maxWidth="xl">
      <Grid direction="row">
        <Header headerText='Twitter Barometer'/>
      </Grid>
      
      <AddHashtag addHashtag={handleAddNewHashtag}/>
      

      <Grid container direction="row" justify="space-between">
        <Hashtags items={items} onItemRemove={removeItem}/>
        <Pie data={dataPie} innerRadius={50} outerRadius={120} height={300} width={300}/>
      </Grid>

      <Grid container direction="row" justify="space-between" alignItems="center">
        <LineChart data={dataLine} height={300} width={300}/> 
        <Histo data={dataHisto} height={300} width={300}/>
      </Grid>
      
    </Container>
  );
}

export default App;
