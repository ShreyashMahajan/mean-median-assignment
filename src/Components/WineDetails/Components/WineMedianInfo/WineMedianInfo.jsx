const WineMedianInfoComponent = ({
    wineDataList,
    winePropertyType
}) => {
    const getMedian = (dataList) => {
        const winePropertyTypeList = dataList.map( Item => Item[winePropertyType] );
        const sortedwinePropertyTypeList = winePropertyTypeList.sort( (obj1,obj2) => parseFloat(obj1) - parseFloat(obj2) );
        const length = winePropertyTypeList.length;

        let median = 0;
        if((length%2 !== 0)){
            median = sortedwinePropertyTypeList[Math.floor(length/2) + 1];
        }else {
            median = (sortedwinePropertyTypeList[Math.floor(length/2)] + sortedwinePropertyTypeList[Math.floor((length/2)) + 1])/2;
        }
        return median.toFixed(3)   
    }

    return (
        <>
        {
            wineDataList.map( (wineData,index) => <td key={index} className="box">{ getMedian(wineData) }</td> )
        }
        </>
    )
}

export { WineMedianInfoComponent}