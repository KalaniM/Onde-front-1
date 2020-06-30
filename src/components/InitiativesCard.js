import React from 'react';
import styled from 'styled-components';

import { DisplayTitle, Paragraph, Button, MiniTag, Truncate } from '../components';
import { DropCircleF, ShareCircleF } from '../assets';

// TEMPLATE
const InitiativesCard = (props) => {
	const { theme, initiative } = props;

	const { name, description, likes, tags } = initiative;
	// Initiative informations : GET ​/api​/posts​/{id}
	// Tags are in collection : tags[]
	// Gouttes are in collection : likes[]

	return (
		<InitiativesCardStyled>
			<MiniTag tags={tags} />

			<DisplayTitle>
				<Truncate maxChars="40" trailingCharCount="0">
					{name}
				</Truncate>
			</DisplayTitle>
			{/* <DisplayTitle>{console.log(tags)}</DisplayTitle> */}
			<Paragraph>
				<Truncate maxChars="120" trailingCharCount="0">
					{description}
				</Truncate>
			</Paragraph>
			<div>
				<DropCircleF width="34" fill={theme.blue} />
				<Paragraph>{likes}</Paragraph>
			</div>
			<ShareCircleF width="40" fill={theme.midnight} />
			<Button>Je participe</Button>
		</InitiativesCardStyled>
	);
};

// STYLE
const InitiativesCardStyled = styled.section``;

export default InitiativesCard;
