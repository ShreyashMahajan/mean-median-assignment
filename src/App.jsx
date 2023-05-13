import React, { useEffect , useState}  from 'react'
import './App.css';
import { WineDetailsComponent } from './Components/WineDetails/WindeDetails';
import  wineDataObj from './Data/wineData.js'

function App() {
  const [wineData, setWineData] = useState([]);

  const [gammaData, setGammaData] = useState([]);

    
  useEffect( () => {
    const groupWiseData = 
    splitDataCategorywise(wineDataObj)
    if(groupWiseData){
      setWineData([...groupWiseData])
    }

    const gammaDataList = wineDataObj.map( dataItem => 
      ({...dataItem, Gamma: (parseFloat(dataItem.Ash) * parseFloat(dataItem.Hue))/ parseFloat(dataItem.Magnesium)}) );

    const groupwiseGammaDataList = splitDataCategorywise(gammaDataList) ;
    if(groupwiseGammaDataList){
      setGammaData([...groupwiseGammaDataList])
    } 
  }, [] )

  const splitDataCategorywise = (dataList) => {
    const sortedData = dataList.sort( (data1,data2) => data1.Alcohol > data2.Alcohol);

    let groupedData = [];
    let subGroupedData = [];
      
      for(let i = 0 ; i < sortedData.length ; i++){
        
        if( i !== sortedData.length - 1){
          if(sortedData[i].Alcohol === sortedData[i+1].Alcohol){
            subGroupedData = [...subGroupedData, sortedData[i]]
           }else {
               subGroupedData = [...subGroupedData, sortedData[i]]
               groupedData = [...groupedData, subGroupedData];
               subGroupedData = [];
           }
          
        }else {
          subGroupedData = [...subGroupedData, sortedData[i]]

          groupedData = [...groupedData, subGroupedData]
           
        }
      }
     return groupedData
     
    }
  return (
    <div className="App">
      <WineDetailsComponent label={'Flavanoids Data'} wineData={wineData} winePropertyType={'Flavanoids'} />
      <WineDetailsComponent label={'Gamma Data'} wineData={gammaData} winePropertyType={'Gamma'} />

    </div>
  );
} 

export default App;
