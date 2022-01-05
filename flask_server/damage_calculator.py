# This is the main function that will calculate all the damage averages

# SETTINGS: melt, vaporize, team comp buffs
def damage_calculator(stats, settings):
	# ADDING RESONANCE BUFFS
	if('pyro' in settings['resonance']):
		stats['atk_percent'] = stats['atk_percent'] + 0.25

	# CALCULATED STATS: non-crit, crit, avg
	damage = {}
	# TOTAL ATTACK NUMBERS
	total_attack = calculate_attack(stats, settings)
	print('total_attack: ' + str(total_attack))
	elemental_attack = total_attack * (1 + stats['elemental_bonus'])
	physical_attack = total_attack * (1 + stats['physical_bonus'])
	
	print('elemental_attack: ' + str(elemental_attack))
	# TALENT EFFECTIVE DAMAGE ( non crit without enemy resistence )
	talent_effective_damage = 0
	resistance_type = 'enemy_elemental_resistance' #used later for enemy resistance calculations
	if settings['damage_type'] == 'elemental':
		talent_effective_damage = stats['talent_multiplier'] * elemental_attack
	else:
		resistance_type = 'enemy_physical_resistence'
		talent_effective_damage = stats['talent_multiplier'] * physical_attack
	print('talent effective damage: ' + str(talent_effective_damage))

	# ENEMY RESISTENCE CALCULATIONS
	level_multiplier = (stats['level']+100)/((settings['enemy_level']+100) + (stats['level']+100))
	enemy_resistence = 0
	if settings[resistance_type] >= .75:
		enemy_resistence = 1 / (4 * (settings[resistance_type] + 1))
	elif settings[resistance_type] >= 0:
		enemy_resistence = 1 - settings[resistance_type]
	else: # when enemy resistance is lower than 0 (due to resistence shred)
		enemy_resistence = 1 - (settings[resistance_type]/2)

	print('enemy_resistence: ' + str(enemy_resistence))

	# TALENT DAMAGE TO ENEMY
	talent_actual_damage = enemy_resistence * level_multiplier * talent_effective_damage

	# CRITICAL HIT
	talent_crit_damage = talent_actual_damage * (1 + stats['crit_damage'])

	# AVERAGE DAMAGE
	talent_average_damage = talent_actual_damage * stats['crit'] * (1 + stats['crit_damage']) + talent_actual_damage * (1 - stats['crit'])

	return {'non_crit': talent_actual_damage, 'crit': talent_crit_damage, 'average': talent_average_damage}


def calculate_attack(stats, settings):
	# ADDING RESONANCE BUFFS
	if('pyro' in settings['resonance']):
		stats['atk_percent'] = stats['atk_percent'] + 0.25
	# ADDS DAMAGE BONUS FROM STAFF OF HOMA
	if('homa_refinement' in settings):
		actual_refinement = settings['homa_refinement'] -1
		# each refinement adds 5% hp (base 20%)
		stats['hp_percent'] = stats['hp_percent'] + .2 + (.05 * actual_refinement)
		hp = stats['base_hp'] * (1 + stats['hp_percent']) + stats['flat_hp']
		# each refinement adds 0.4% hp worth of attack bonus (base 1.8%)
		attack_bonus = hp * (0.018 + (0.004 * actual_refinement))
		stats['flat_attack'] = stats['flat_attack'] + attack_bonus
	# ADDS ATTACK BONUS FROM HUTAO E
	if('hp_scaling' in settings):
		hp = stats['base_hp'] * (1 + stats['hp_percent']) + stats['flat_hp']
		attack_bonus = hp * (settings['hp_scaling'])
		if attack_bonus > (4 * stats['base_atk']):
			attack_bonus = (4 * stats['base_atk'])
		stats['flat_attack'] = stats['flat_attack'] + attack_bonus
	if('additional_attack' in settings):
		stats['atk_percent'] = stats['atk_percent'] + settings['additional_attack']
	total_attack = (stats['base_atk'] * (1 + stats['atk_percent'])) + stats['flat_attack']
	return total_attack

	

# STATS NEEDED: Base ATK, Base HP, Base DEF, HP%, ATK%, DEF%, EM, ER, CR, CDMG, PHYS%, ELM%, 
example = {}
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
example['talent_multiplier'] = 2.52

settings = {}
settings['damage_type'] = 'elemental'
settings['enemy_level'] = 85
settings['enemy_physical_resistence'] = .10
settings['enemy_elemental_resistance'] = -.50
settings['resonance'] = ['pyro']
settings['homa_refinement'] = 1
settings['hp_scaling'] = .0596


damage = damage_calculator(example, settings)
print(damage)