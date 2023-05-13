
const WineModeInfoComponent = ({
    wineDataList,
    winePropertyType
}) => {
    const getMode = (dataList) => {
        const winePropertyTypeList = dataList.map( item => item[winePropertyType] )
        const modeData = {};
        let maximum = 0;
        let count = 0;
        for(let i = 0 ; i < winePropertyTypeList.length ; i++){
            const item = winePropertyTypeList[i];

            if(modeData[item]){
                modeData[item]++
            }else {
                modeData[item] = 1
            }

            if( count < modeData[item] ){
                    maximum = item;
                    count = modeData[item]
            }
        }

       return maximum.toFixed(3)
    }
    return (
        <>
        {
            wineDataList.map( (wineData,index) => <td key={index} className="box">{ getMode(wineData) }</td> )
        }
        </>
    )
}

export { WineModeInfoComponent}