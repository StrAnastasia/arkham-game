import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index: NextPage = () => {
  const { push } = useRouter();
  useEffect(() => {
    push('/menu');
  }, []);
  return <></>;
};

export default Index;
