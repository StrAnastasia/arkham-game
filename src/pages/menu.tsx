import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';

import asModal from 'shared/hooks/as-modal';
import { Cookie, cookies } from 'app/cookie';
import currentTeam from 'pseudo-back/current-team';
import RegisterTeam from 'features/register-team/components/register-team-form';
// @ts-ignore
const InvestigationListModal = asModal(RegisterTeam);

const Index: NextPage = () => {
  const { push } = useRouter();
  const [code, setCode] = useState('');
  const [openRegistrationModal, setOpenRegistrationModal] = useState(false);
  const [teamCode, setTeamCode] = useState('');

  function login(e: FormEvent) {
    e.preventDefault();
    if (!code?.length) return;
    // cookies.set(Cookie.teamCode, code);
    push('/choose-case/?team=' + code);
  }

  function logout() {
    cookies.remove(Cookie.teamCode);
    setTeamCode('');
  }

  useEffect(() => {
    const code = cookies.get(Cookie.teamCode);
    setTeamCode(code || '');
  }, []);

  return (
    <MenuLayout>
      <InvestigationListModal open={openRegistrationModal} onClose={() => setOpenRegistrationModal(false)} />

      {!openRegistrationModal && (
        <TextContainer>
          <Welcome>Добро пожаловать в<br/>Аркхэм</Welcome>
          {!!teamCode ? (
            <>
              <Welcome>Вы состоите в команде {currentTeam.name}</Welcome>
              <Button onClick={() => setOpenRegistrationModal(true)}>
                Продолжить расследования
                <br />с этой командой
              </Button>
              <Button onClick={logout}>Выбрать новую компанию</Button>
            </>
          ) : (
            <>
              <Button onClick={() => setOpenRegistrationModal(true)}>
                Создать новую компанию
                <br />
                для расследований
              </Button>
              <form onSubmit={login}>
                <Input
                  value={code}
                  onChange={({ target }) => setCode(target.value)}
                  placeholder='Введите код команды'
                />
                <Button type='submit'>
                  Продолжить расследование
                  <br /> с командой
                </Button>
              </form>
            </>
          )}

          <Button>Правила</Button>
        </TextContainer>
      )}
    </MenuLayout>
  );
};

export default Index;

const MenuLayout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 450px;
  background: rgb(51 45 43);
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
`;

const Welcome = styled.p`
  margin: 0px;
  font-size: 36px;
  text-align: center;
  margin-bottom: 36px;
  color: #c8bb76;
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

const Input = styled.input`
  font-size: 32px;
  width: 100%;
  margin: 24px 0px 6px;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 4px 16px;
`;
