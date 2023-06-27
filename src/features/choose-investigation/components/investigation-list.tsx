import styled from '@emotion/styled';
import investigations from 'pseudo-back/investigations';
import { FC, useState } from 'react';
import Chevron, { chevronPosition } from './chevron';
import Collapse from 'shared/components/collapse';
import currentTeam from 'pseudo-back/current-team';
import { useRouter } from 'next/router';

const InvestigationList: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { push, query } = useRouter();
  const [shownInfo, setShownInfo] = useState<number[]>([]);

  function toggleInfo(id: number) {
    if (shownInfo?.includes(id)) {
      setShownInfo((prev) => prev.filter((el) => el !== id));
    } else {
      setShownInfo((prev) => [...prev, id]);
    }
  }

  return (
    <InvestigationListBlock>
      {investigations.map(({ name, id, preview }) => (
        <CaseWithDescriptioContainer key={id}>
          <CaseContainer>
            <DropDownButton onClick={() => toggleInfo(id)}>
              <Text>{name}</Text>
              <Chevron
                fill={'#c8bb76'}
                size={24}
                position={
                  shownInfo.includes(id) ? chevronPosition.up : chevronPosition.down
                }
              />
            </DropDownButton>
            <Button
              onClick={() => {
                push('/case/' + id + '?team=' + query?.team);
              }}
            >
              {currentTeam.solved.includes(id)
                ? 'Поновой провести расследование'
                : 'Перейти к расследованию'}
            </Button>
          </CaseContainer>
          <Collapse id={id} open={shownInfo.includes(id)}>
            {preview}
          </Collapse>
        </CaseWithDescriptioContainer>
      ))}
      <Button onClick={onClose}>Вернуться в меню</Button>
    </InvestigationListBlock>
  );
};

export default InvestigationList;

const InvestigationListBlock = styled.div`
  width: 70vw;
  max-height: 70vh;
  background: rgb(51 45 43);
  padding: 24px;
  box-sizing: border-box;
  border-radius: 8px;
  > div:last-child {
    margin-bottom: 0px;
  }
`;

const CaseWithDescriptioContainer = styled.div`
  margin-bottom: 36px;
`;

const CaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DropDownButton = styled.button`
  width: max-content;
  background: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.p`
  margin: 0px 16px 0px 0px;
  font-size: 36px;
  color: #c8bb76;
`;

export const Button = styled.button`
  width: max-content;
  font-size: 24px;
  cursor: pointer;
  background: #c8bb76;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 8px;
`;
