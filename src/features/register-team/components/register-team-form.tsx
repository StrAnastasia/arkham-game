import styled from '@emotion/styled';
import { FC, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

const RegisterTeam: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { push } = useRouter();
  const [name, setName] = useState('');

  function submit(e: FormEvent) {
    e.preventDefault();
    const code = uuidv4();
    push('/choose-case/?team=' + code);
  }

  return (
    <RegisterTeamBlock>
      <form onSubmit={submit}>
        <Input
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder='Введите название команды'
        />
        <Button type='submit'>Создать каманду</Button>
      </form>
      <Button onClick={onClose}>Вернуться в меню</Button>
    </RegisterTeamBlock>
  );
};

export default RegisterTeam;

const RegisterTeamBlock = styled.div`
  width: 450px;
  max-height: 70vh;
  background: rgb(51 45 43);
  padding: 24px;
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

const Input = styled.input`
  font-size: 32px;
  width: 100%;
  margin: 24px 0px 6px;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 4px 16px;
`;
