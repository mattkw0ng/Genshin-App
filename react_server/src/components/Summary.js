/* 
Summary component
- automatically calculates the character's stats and displays them
*/
function Summary({image, main_stats, sub_stats, type}) {
    return (
        <div id="artifact-div" className="mx-5 panel text-center bg-white">
            <div id={type} className="image border border-warning rounded">
                <img src={'../images/'+image+'.png'} height='150' width='150' alt="error" className="center"/>
            </div>
            <br/><br/><br/><br/>
            <div className="stats-div text-left">
                <p>{main_stats.name}    &emsp;{main_stats.value}</p>
                <p>LVL    &emsp;{main_stats.level}</p>
                <p>RAR    &emsp;{main_stats.rarity}</p>
                <hr/>
                {sub_stats.map((substat) => (
                    <p key={substat.name}>{substat.name}    &emsp;{substat.value}</p>
                ))}
                <hr/>
            </div>
            <button className="btn btn-secondary mx-auto">SAVE</button>

        </div>
    );
}
    
export default Summary