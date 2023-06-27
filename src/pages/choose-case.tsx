import { NextPage } from 'next';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import InvestigationList from 'features/choose-investigation/components/investigation-list';

const ChooseCase: NextPage = () => {
  const { back } = useRouter();
  return (
    <MenuLayout>
      <TextContainer>
        <InvestigationList onClose={() => back()} />
      </TextContainer>
    </MenuLayout>
  );
};

export default ChooseCase;

const MenuLayout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  background: rgb(51 45 43);
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const Button = styled.button`
  font-size: 32px;
  width: 100%;
  margin-bottom: 24px;
  cursor: pointer;
  background: #c8bb76;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 8px;
`;
