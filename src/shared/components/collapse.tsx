import styled from '@emotion/styled';
import { FC, ReactNode, useEffect, useState } from 'react';

const Collapse: FC<{ children: ReactNode; open: boolean; id: number | string }> = ({
  children,
  open = false,
  id = 0,
}) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const theText = document.getElementById(String(id));
    if (theText?.clientHeight) {
      setHeight(theText?.clientHeight || 0);
      theText?.remove();
    }
  }, []);

  return (
    <>
      <Container height={height} open={open}>
        {children}
      </Container>
      <GhostText id={String(id)}>{children}</GhostText>
    </>
  );
};

const Container = styled.div<{ open: boolean; height: number }>`
  font-size: 20px;
  color: #c8bb76;
  height: ${({ height, open }) => (open ? height + 'px' : '0px')};
  margin: ${({ open }) => (open ? '20px 0px 10px' : '0px')};
  overflow: hidden;
  transition: .2s;
`;

const GhostText = styled.div`
  margin: 20px 0px 10px;
  font-size: 20px;
  color: #c8bb76;
`;

export default Collapse;
