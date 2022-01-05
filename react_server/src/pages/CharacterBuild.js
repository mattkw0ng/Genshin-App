import '../App.css';
import Artifact from '../components/Artifact';
import Weapon from '../components/Weapon';
import React, { useState } from 'react';

const weapon_main_stats = {'atk': 502, 'level': 90, 'refinement': 5};
const weapon_secondary_stat = {'name': 'CRTDMG', 'value': 61.5}

const artifact_sub_stats = [{'name':'ATK', 'value':35},{'name':'ATK %', 'value':12.5}];
const artifact_sub_stats_alt = {'CRT': 3.9, 'CRTDMG': 7.8, 'ATK': 0, 'ATK%': 0, 'HP': 0, 'HP%': 0, 'DEF': 0, 'DEF%': 0, 'ER%': 0, 'EM': 0}
const artifact_main_stats = {'name':'HP', 'value': 4780, 'level': 20, 'rarity': 5};

function CharacterBuild() {
  // main stats for artifacts (dictionary: name | value | level | rarity)
  const [flower, setFlower]= useState( artifact_main_stats );
  const [feather, setFeather] = useState( artifact_main_stats );
  const [sands, setSands] = useState( artifact_main_stats );
  const [goblet, setGoblet] = useState( artifact_main_stats );
  const [circlet, setCirclet] = useState( artifact_main_stats );
  // sub stats for artifacts (dictionary with all stats and values)
  const [flower_sub, setFlower_sub]= useState( artifact_sub_stats_alt );
  const [feather_sub, setFeather_sub] = useState( artifact_sub_stats_alt );
  const [sands_sub, setSands_sub] = useState( artifact_sub_stats_alt );
  const [goblet_sub, setGoblet_sub] = useState( artifact_sub_stats_alt );
  const [circlet_sub, setCirclet_sub] = useState( artifact_sub_stats_alt );

  return (
    <div className="App py-5">
      <div id="weapon-summary-div" className='row'>
        <div className='col'>
          <Weapon image={"Staff_of_Homa"} main_stats={weapon_main_stats} secondary_stat={weapon_secondary_stat} />
        </div>
        <div className='col'>
          
        </div>
      </div>
      <hr className="text-black"/>
      <div id="artifact-div" className="d-flex px-5 ">
        <Artifact image={"Noblesse_Flower"} main_stats={artifact_main_stats} sub_stats={artifact_sub_stats_alt} setMain = {setFlower} setSub = {setFlower_sub} type='flower'/>
        <Artifact image={"Noblesse_Feather"} main_stats={artifact_main_stats} sub_stats={artifact_sub_stats_alt} setMain = {setFeather} setSub = {setFeather_sub} type='feather'/>
        <Artifact image={"Noblesse_Sands"} main_stats={artifact_main_stats} sub_stats={artifact_sub_stats_alt} setMain = {setSands} setSub = {setSands_sub} type='sands'/>
        <Artifact image={"Noblesse_Goblet"} main_stats={artifact_main_stats} sub_stats={artifact_sub_stats_alt} setMain = {setGoblet} setSub = {setGoblet_sub} type='goblet'/>
        <Artifact image={"Noblesse_Circlet"} main_stats={artifact_main_stats} sub_stats={artifact_sub_stats_alt} setMain = {setCirclet} setSub = {setCirclet_sub} type='circlet'/>
      </div>  
      <button className="btn btn-secondary">Save</button>
      <br/>
      <a href="">Test build</a>
    </div>
  );
}

export default CharacterBuild;
