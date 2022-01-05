// Component for selecting character build
import React, { useState } from 'react';


function SelectCharacter({character_img, main_stats, sub_stats, weapon_img, weapon_main_stats, weapon_sub_stats}) {
	return (
		<div id="selectCharacterDiv">
			<h1>Select Character Build</h1>
			<div className="row">
				<div className="col" id="selectChar">
					<img src={character_img} alt="a"/>
					<p>{main_stats.name}    &emsp;{main_stats.value}</p>
					<p>LVL    &emsp;{main_stats.level}</p>
					<p>RAR    &emsp;{main_stats.rarity}</p>
					<hr/>
					{Object.keys(sub_stats).map((name) => (
					    sub_stats[name] > 0 ?
					    <p key={name}>{name}    &emsp;{sub_stats[name]}</p>
					    : null
					    ))
					}
				</div>
				<div className="col" id="selectCharWeapon">
					<img src={weapon_img} alt="a"/>
					<p>{weapon_main_stats.name}    &emsp;{weapon_main_stats.value}</p>
					<p>LVL    &emsp;{weapon_main_stats.level}</p>
					<p>RAR    &emsp;{weapon_main_stats.rarity}</p>
					<hr/>
					{Object.keys(weapon_sub_stats).map((name) => (
					    weapon_sub_stats[name] > 0 ?
					    <p key={name}>{name}    &emsp;{weapon_sub_stats[name]}</p>
					    : null
					    ))
					}
				</div>
			</div>
		</div>
	);
}