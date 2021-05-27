import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	refreshID: rndString(refreshIDLength),
	input: '',
	todos: [],
	filter: 'all',
};

export default seed;
