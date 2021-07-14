import { React } from 'react';
import context from '../../core/context';
import { Select, InputLabel, MenuItem, Box } from '@material-ui/core';

const ThemeOption = (theme) => <MenuItem key={ theme } value={ theme }>
	{theme}
</MenuItem>;

const ThemeSelect = () =>
	<Box className="theme-select">
		<InputLabel>Theme: </InputLabel>
		<Select
			value={ context.state.theme }
			onChange={ (evt) => context.actions.themeSelect(evt.target.value) }
		>
			{ context.config.themes.map(ThemeOption)}
		</Select>
	</Box>;

export default ThemeSelect;
