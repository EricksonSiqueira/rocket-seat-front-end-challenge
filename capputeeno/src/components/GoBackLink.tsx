import { memo } from 'react';
import { styled } from 'styled-components';
import { BackArrow } from './Icons/BackArrow';
import { useRouter } from 'next/navigation';

interface GoBackLinkProps {
  link: string;
}

const LinkWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  text-decoration: none;
  margin-top: 25px;
  outline: none;
  border: none;

  cursor: pointer;

  > span {
    color: #617480;
    font-weight: 500;
    line-height: 150%;
  }

  &:hover {
    opacity: 0.8;
  }
`;

function GoBackLink(props: GoBackLinkProps) {
  const router = useRouter();

  const handleGoBack = () => {
    router.push(props.link);
  };

  return (
    <LinkWrapper onClick={handleGoBack}>
      <BackArrow />
      <span>Voltar</span>
    </LinkWrapper>
  );
}

export default memo(GoBackLink);
