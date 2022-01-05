/* 
Weapon component
- displays the image of the weapon
- allows user to change the weapon
- allows user to edit the stats and automatically updates the other levels
*/
function Weapon({image, main_stats, secondary_stat}) {
    return (
        <div id="weapon-div" className="mx-5 row">
            <div className="image col border border-danger rounded bg-white">
                <img src={'../images/Staff_of_Homa.png'} height='100' width='100' alt="error" className="center"/>
            </div>
            <div className="stats-div text-left col py-2">
                <p>BASE ATK    {main_stats.atk}</p>
                <p>{secondary_stat.name}    {secondary_stat.value}%</p>
                <p>LVL    {main_stats.level}</p>
                <p>REF    {main_stats.refinement}</p>
            </div>

        </div>
    );
}
    
export default Weapon