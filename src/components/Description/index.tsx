import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useUserSettingsContext } from '../../Providers';

const Description = () => {
	const theme = useTheme();
	const { userSettings } = useUserSettingsContext();
	const { t } = useTranslation('settings');
	const instructionLink = useMemo(() => {
		switch (userSettings?.lang) {
			case 'uk':
				return 'https://docs.google.com/document/d/1Tu3Bn274u1Y7b4ZiZsy9mlobkJLaFpqsFXoDokXpvus';
			case 'pt-BR':
				return 'https://docs.google.com/document/d/1YgxY70-P46aw6pW3PtY4GNkgi-ydwFLxQWgHQmdmMHc';
			case 'pl':
				return 'https://docs.google.com/document/d/1BcRFYPv17XUcoU_alfbg4sLw-qyaincZ4N0Azq16bVA';
			default:
				return 'https://docs.google.com/document/d/1yCfTx8XcpR-9yiJUkwmlWZeGOspxjorCbcyNhpfSq0M';
		}
	}, [userSettings?.lang]);
	return (
		<Box
			sx={{
				marginTop: '15px',
				display: 'flex',
				flexDirection: 'column',
				gap: '8px',
				'& a': {
					textDecoration: 'none',
					color: theme.palette.primary.main,
				},
				'& p': {
					fontSize: '14px',
					color: theme.palette.text.secondary,
				},
			}}
		>
			<Typography>
				{t('instructionsForWebFlow')}{' '}
				<a href={instructionLink} target="_blank" rel="noreferrer">
					{t('here')}
				</a>
			</Typography>
			<Typography>
				{t('anyQuestions')}
				<br />
				{t('phoneTitle')} <a href="tel:+380507007572"> +38 050 700 75 72 </a>
				{t('orEmail')} <a href="mailto:y.andrusyak@alterego.digital"> y.andrusyak@alterego.digital</a>, {t('helpYou')}
			</Typography>
		</Box>
	);
};

export default Description;
