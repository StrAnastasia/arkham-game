import { NextPage } from 'next';
import { useRouter } from 'next/router';
import investigations from 'pseudo-back/investigations';
import { useState } from 'react';
import IntroBlock from './intro';

enum Phases {
  intro = 'intro',
  game = 'game',
  countingPoints = 'countingPoints',
  outro = 'outro',
}

const Case: NextPage = () => {
  const { query } = useRouter();
  const [phase, setPhase] = useState(Phases.intro);
  const theCase = investigations?.find(({ id }) => id === +(query.id || 0))?.case;

  return (
    <>
      {phase === Phases.intro && <IntroBlock>{theCase?.intro}</IntroBlock>}
      {phase === Phases.game && <>game</>}
      {phase === Phases.countingPoints && <>countingPoints</>}
      {phase === Phases.outro && <>outro</>}
    </>
  );
};

export default Case;
