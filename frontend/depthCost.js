/* Data adapted from https://www.fema.gov/media-library-data/1499290622913-0bcd74f47bf20aa94998a5a920837710/Flood_Loss_Estimations_2017.pdf */

var get_cost = function(depth, houseSize) {
	return cost[houseSize][depth];
};

var cost = [
	[
		[1, 10819],
		[2, 10889],
		[3, 11790],
		[4, 15654],
		[5, 18254],
		[6, 21161],
		[7, 22527],
		[8, 23894],
		[9, 25260],
		[10, 26626],
		[11, 27994],
		[12, 29360],
		[24, 36660],
		[36, 39831],
		[48, 43400]
	],
	[
		[1, 26907],
		[2, 26892],
		[3, 29297],
		[4, 38552],
		[5, 45339],
		[6, 52037],
		[7, 55391],
		[8, 58746],
		[9, 62100],
		[10, 65453],
		[11, 68808],
		[12, 72162],
		[24, 87326],
		[36, 94538],
		[48, 103355]
	]
	[
		[1, 53454],
		[2, 53564],
		[3, 58448],
		[4, 76707],
		[5, 90496],
		[6, 103505],
		[7, 110174],
		[8, 116843],
		[9, 123512],
		[10, 130181],
		[11, 136850],
		[12, 143519],
		[24, 171775],
		[36, 185704],
		[48, 203280]
	]
]