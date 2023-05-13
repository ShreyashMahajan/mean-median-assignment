
const WineMeanInfoComponent = ({
    wineDataList,
    winePropertyType
}) => {

    const getMean = (wineDataList) => {
        const winePropertyTypeList = wineDataList.map( wineData => wineData[winePropertyType] );
       
        
        const winePropertyTypeSum = winePropertyTypeList.reduce( (prev,acc) => Number(prev) + Number(acc), 0 );

        const winePropertyTypeTotalCount = wineDataList.length;

        const winePropertyTypeMean = winePropertyTypeSum / winePropertyTypeTotalCount;
        


        return winePropertyTypeMean.toFixed(3)
    }
    return (
        <>
        {
            wineDataList.map( (wineData,index) => <td key={index} className="box">{ getMean(wineData) }</td> )
        }
        </>
    )
}

export { WineMeanInfoComponent}