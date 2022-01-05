/* 
Artifact component
- displays the image of the artifact
- allows user to change the artifact set type
- upon focus/selection the stats display turns into a form where the stats can be changed

example['level'] = 80
example['base_atk'] = 897
example['base_hp'] = 9563
example['base_def'] = 572
example['hp_percent'] = 0.099
example['atk_percent'] = 0.99
example['def_percent'] = 0.066
example['flat_attack'] = 325
example['flat_hp'] = 5079
example['em'] = 89
example['er'] = 1.00
example['crit'] = .70
example['crit_damage'] = 1.72
example['elemental_bonus'] = .9040
example['physical_bonus'] = 0
*/
import React, { useState } from 'react';

const flower_main_stats = ['HP']
const feather_main_stats = ['ATK']
const sands_main_stats = ['ATK%', 'HP%', 'DEF%', 'ER%', 'EM']
const goblet_main_stats = ['ELEMENTAL', 'PHYSICAL', 'ATK%', 'HP%', 'DEF%', 'EM']
const circlet_main_stats = ['CRT', 'CRTDMG', 'ATK%', 'HP%', 'DEF%', 'ER%', 'EM']
const sub_stats_list = ['CRT', 'CRTDMG', 'ATK', 'ATK%', 'HP', 'HP%', 'DEF', 'DEF%', 'ER%', 'EM']

function HandleChange(value, stat_name, dict, setDict) {
    let new_dict = dict;
    new_dict[stat_name] = value;
    console.log(new_dict);
    setDict(new_dict);
}

function Artifact({image, main_stats, sub_stats, type, setMain, setSub}) {
    const [editMode, setEditMode] = useState(false);
    let main_stats_list;
    if(type == "flower"){
        main_stats_list = flower_main_stats;
    }
    else if(type == "feather"){
        main_stats_list = feather_main_stats;
    }
    else if(type == "sands"){
        main_stats_list = sands_main_stats;
    }
    else if(type == "goblet"){
        main_stats_list = goblet_main_stats;
    }
    else if(type == "circlet"){
        main_stats_list = circlet_main_stats;
    }

    return (
        <div id="artifact-div" className="mx-4 panel text-center bg-white">
            <div id={type} className="image border border-warning rounded">
                <img src={'../images/'+image+'.png'} height='150' width='150' alt="error" className="center"/>
            </div>
            <br/><br/><br/><br/>

            <div className={editMode?'fadeOut':'fadeIn stats-div text-left'}>
                {/* Displays main stats */}
                <p>{main_stats.name}    &emsp;{main_stats.value}</p>
                <p>LVL    &emsp;{main_stats.level}</p>
                <p>RAR    &emsp;{main_stats.rarity}</p>
                <hr/>

                {/* If the substat value is not 0, display its value */}

                {Object.keys(sub_stats).map((name) => (
                    sub_stats[name] > 0 ?
                    <p key={name}>{name}    &emsp;{sub_stats[name]}</p>
                    : null
                    ))
                }

                <hr/>
                <button className='btn btn-secondary' onClick={(e)=>{setEditMode(true);}}>Edit</button>
            </div>

            <div id="stats-form" className={editMode?'fadeIn text-center':'fadeOut'}>
                <div className="form-group">
                    <label htmlFor="main_stat">Main Stat</label>
                    <select id="main_stat" className="form-control" onChange={e => HandleChange(e.target.value, 'name', main_stats, setMain)}>
                        {main_stats_list.map((option) => (
                            main_stats.name == option ?
                            <option key={option} selected>{option}</option>
                            : <option key={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="level">LVL</label>
                    {main_stats.level == 16 ?
                        <select id="level" className="form-control"  onChange={e => HandleChange(e.target.value, 'level', main_stats, setMain)}>
                            <option selected>16</option>
                            <option>20</option>
                        </select>
                        :
                        <select id="level" className="form-control"  onChange={e => HandleChange(e.target.value, 'level', main_stats, setMain)}>
                            <option>16</option>
                            <option selected>20</option>
                        </select>
                    }
                    
                </div>
                <div className="form-group">
                    <label htmlFor="rarity">RAR</label>
                    {main_stats.rarity == 4 ?
                        <select id="rarity" className="form-control"  onChange={e => HandleChange(e.target.value, 'rarity', main_stats, setMain)}>
                            <option selected>4</option>
                            <option>5</option>
                        </select>
                        :
                        <select id="rarity" className="form-control"  onChange={e => HandleChange(e.target.value, 'rarity', main_stats, setMain)}>
                            <option>4</option>
                            <option selected>5</option>
                        </select>
                    }
                </div>

                <div className="form-group">
                    <label htmlFor='value'>VALUE</label>
                    <input id="value" className="form-control" type='number' defaultValue={main_stats.value} onChange={e => HandleChange(e.target.value, 'value', main_stats, setMain)}/>
                </div>
                <hr/>
                <div className="form-group">
                    <label htmlFor="CRT">CRT</label>
                    <input id="CRT" className="form-control" type='number' defaultValue={sub_stats['CRT']} onChange={e => HandleChange(e.target.value, 'CRT', sub_stats, setSub)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="CRTDMG">CRTDMG</label>
                    <input id="CRTDMG" className="form-control" type='number' defaultValue={sub_stats['CRTDMG']} onChange={e => HandleChange(e.target.value, 'CRTDMG', sub_stats, setSub)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="ATK%">ATK%</label>
                    <input id="ATK%" className="form-control" type='number' defaultValue={sub_stats['ATK%']} onChange={e => HandleChange(e.target.value, 'ATK%', sub_stats, setSub)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="ATK">ATK</label>
                    <input id="ATK" className="form-control" type='number' defaultValue={sub_stats['ATK']} onChange={e => HandleChange(e.target.value, 'ATK', sub_stats, setSub)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="HP%">HP%</label>
                    <input id="HP%" className="form-control" type='number' defaultValue={sub_stats['HP%']} onChange={e => HandleChange(e.target.value, 'HP%', sub_stats, setSub)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="HP">HP</label>
                    <input id="HP" className="form-control" type='number' defaultValue={sub_stats['HP']} onChange={e => HandleChange(e.target.value, 'HP', sub_stats, setSub)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="DEF%">DEF%</label>
                    <input id="DEF%" className="form-control" type='number' defaultValue={sub_stats['DEF%']} onChange={e => HandleChange(e.target.value, 'DEF%', sub_stats, setSub)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="DEF">DEF</label>
                    <input id="DEF" className="form-control" type='number' defaultValue={sub_stats['DEF']} onChange={e => HandleChange(e.target.value, 'DEF', sub_stats, setSub)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="EM">EM</label>
                    <input id="EM" className="form-control" type='number' defaultValue={sub_stats['EM']} onChange={e => HandleChange(e.target.value, 'EM', sub_stats, setSub)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="ER%">ER%</label>
                    <input id="ER%" className="form-control" type='number' defaultValue={sub_stats['ER%']} onChange={e => HandleChange(e.target.value, 'ER%', sub_stats, setSub)}/>
                </div>

                <button className="btn btn-secondary" onClick={(e)=>{setEditMode(false);}}>Save</button>
            </div>
        </div>
    );
}
    
export default Artifact