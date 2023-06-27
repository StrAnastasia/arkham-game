import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';

const IntroBlock: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Layout>
      <TextContainer>
        {String(children)?.split('<enter>')?.map((el: string) => (
          <>
            {el}
            <br />
            <br />
          </>
        ))}
      </TextContainer>
    </Layout>
  );
};

export default IntroBlock;

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 90vw;
  height: 90vh;
  background: rgb(51 45 43);
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;

  overflow-y: scroll;

  font-size: 24px;
  /* text-align: center; */
  /* margin-bottom: 36px; */
  color: #c8bb76;
`;
