import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';
import ktulhuImage from '../../public/images/bg-ktulhu.jpg';

interface AppLayoutProps {
  children: ReactNode;
}

export const App: FC<AppLayoutProps> = ({ children }) => {
  return <BackGroundImage src={ktulhuImage.src}>{children}</BackGroundImage>;
};

const BackGroundImage = styled.div<{ src: string }>`
  height: 100vh;
  width 100vw;
  overflow: hidden;

  background-color: black;
  background-image: ${({ src }) => `url(${src})`};
  background-size: 110% auto;
  background-repeat: no-repeat;
  background-position: center;
`;
