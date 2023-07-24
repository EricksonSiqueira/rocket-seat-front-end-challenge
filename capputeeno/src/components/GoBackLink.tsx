import { memo } from 'react';
import { styled } from 'styled-components';
import { BackArrow } from './Icons/BackArrow';

interface GoBackLinkProps {
  link: string;
}

const LinkWrapper = styled.a`
  display: flex;
  column-gap: 8px;
  text-decoration: none;
  margin-top: 25px;

  > span {
    color: #617480;
    font-weight: 500;
    line-height: 150%;
  }
`;

function GoBackLink(props: GoBackLinkProps) {
  return (
    <LinkWrapper href={props.link}>
      <BackArrow />
      <span>Voltar</span>
    </LinkWrapper>
  );
}

export default memo(GoBackLink);
