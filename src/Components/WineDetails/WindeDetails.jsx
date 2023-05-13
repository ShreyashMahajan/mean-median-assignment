import { WineMeanInfoComponent } from "./Components/WineMeanInfo/WineMeanInfo"
import { WineMedianInfoComponent } from "./Components/WineMedianInfo/WineMedianInfo"
import { WineModeInfoComponent } from "./Components/WineModeInfo/WineModeInfo"

const WineDetailsComponent = ({
  label,
  wineData,
  winePropertyType
}) => {
  
    return (
       <>
        <h2>{label}</h2>
        <table className="table">
          <thead>
            <tr>
                <th className="box">Measure</th>
                <th className="box">Class 1</th>
                <th className="box"> Class 2</th>
                <th className="box"> Class 3</th>

            </tr>
          </thead>
          <tbody>
<tr>
    <td className="box">{winePropertyType} Mean</td>
     <WineMeanInfoComponent wineDataList={wineData} winePropertyType={winePropertyType}/>
</tr>
<tr>
    <td className="box">{winePropertyType} Median</td>
    <WineMedianInfoComponent wineDataList={wineData} winePropertyType={winePropertyType}/>

</tr><tr>
    <td className="box">{winePropertyType} Mode</td>
    <WineModeInfoComponent wineDataList={wineData} winePropertyType={winePropertyType} />

</tr>
          </tbody>
        </table></>
    )
}

export { WineDetailsComponent }