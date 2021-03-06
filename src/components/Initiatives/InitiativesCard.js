import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {
  DisplayTitle,
  DropButton,
  Paragraph,
  Button,
  MiniTag,
  Truncate
} from '..';
import { devices } from '../../utilities';

const InitiativesCard = props => {
  const { theme, id } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [initiative, setInitiative] = useState();

  useEffect(() => {
    !isLoaded &&
      axios
        .get(`https://onde-api.frb.io/api/posts/${id}`)
        .then(result => {
          setIsLoaded(true);
          setInitiative(result);
        })
        .catch(error => {
          setIsLoaded(true);
        });
  });

  const removeBaliseInDescription = description => {
    return description.substr(3, description.length - 7);
  };

  if (initiative) {
    const {
      data: { Post, Tags }
    } = initiative;
    const { name, description, likes, id } = Post;

    return (
      <InitiativesCardStyled className="initiative">
        <MiniTag tags={Tags} />

        <DisplayTitle>
          <Truncate maxChars="40" trailingCharCount="0">
            {name}
          </Truncate>
        </DisplayTitle>
        <Paragraph fontSize={17}>
          <Truncate maxChars="120" trailingCharCount="0">
            {removeBaliseInDescription(description)}
          </Truncate>
        </Paragraph>
        <div className="initiative__cta">
          <div className="like">
            <DropButton width="34" theme={theme} initiativeId={id} />
            <Paragraph fontSize={17}>{likes.length}</Paragraph>
          </div>
          <Button textCta="En savoir plus" linkCta={`/initiatives/${id}`} />
        </div>
      </InitiativesCardStyled>
    );
  }
  return '';
};

const InitiativesCardStyled = styled.article`
  margin-bottom: 64px;

  .initiative__cta {
    @media ${devices.large} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;

      button {
        margin: 0;
      }
    }
  }

  .minitags {
    display: flex;
    margin-bottom: 24px;
  }

  h2 {
    margin-bottom: 16px;
  }

  .like {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 24px 0;

    p {
      margin: 0 8px;
    }
  }
`;

export default InitiativesCard;
