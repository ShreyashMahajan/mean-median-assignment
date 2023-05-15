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

    let groupedData = [];
let subGroupedData = [];

for (let i = 0; i < dataList.length; i++) {
  subGroupedData = [...subGroupedData, dataList[i]];

  if (i !== dataList.length - 1 && dataList[i].Alcohol !== dataList[i + 1].Alcohol) {
    groupedData = [...groupedData, subGroupedData];
    subGroupedData = [];
  }
}

groupedData = [...groupedData,subGroupedData];
return groupedData;
    }
  return (
    <div className="App">
      <WineDetailsComponent label={'Flavanoids Data'} wineData={wineData} winePropertyType={'Flavanoids'} />
      <WineDetailsComponent label={'Gamma Data'} wineData={gammaData} winePropertyType={'Gamma'} />

    </div>
  );
} 

export default App;
