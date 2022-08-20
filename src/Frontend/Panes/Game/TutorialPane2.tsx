import React, { FC, useEffect, useState } from 'react';
import { Btn } from '../../Components/Btn';
import { Bronze, Gold, Green, Red, Silver, White } from '../../Components/Text';
import { useUIManager } from '../../Utils/AppHooks';
import UIEmitter, { UIEmitterEvent } from '../../Utils/UIEmitter';
import { ModalPane } from '../../Views/Game/ModalPane';

enum TutorialStep {
  PlanetPane,
  PlanetPaneSuccess,
  UniverseMap,
  UniverseMapSuccess,
}

type TutorialStepProps = {
  setCurrentStep: React.Dispatch<React.SetStateAction<TutorialStep>>;
};

export function TutorialPane() {
  const [currentStep, setCurrentStep] = useState(TutorialStep.PlanetPane);
  const CurrentStep = Tutorial[currentStep];

  return (
    <ModalPane
      visible={true}
      onClose={() => {}}
      id={'Tutorial' as any}
      title={'Tutorial'}
      width='24em'
      hideClose
      initialPosition={{ x: 0, y: 0 }}
    >
      <CurrentStep setCurrentStep={setCurrentStep} />
    </ModalPane>
  );
}

const Tutorial: Record<TutorialStep, FC<TutorialStepProps>> = {
  [TutorialStep.PlanetPane]: ({ setCurrentStep }) => {
    const uiManager = useUIManager();
    const uiEmitter = UIEmitter.getInstance();

    const planetSelectedHandler = () => {
      if (uiManager.getSelectedPlanet()?.isSpawnPlanet) {
        setCurrentStep(TutorialStep.PlanetPaneSuccess);
      }
    };

    useEffect(() => {
      uiEmitter.on(UIEmitterEvent.GamePlanetSelected, planetSelectedHandler);
      return () => {
        uiEmitter.removeListener(UIEmitterEvent.GamePlanetSelected, planetSelectedHandler);
      };
    }, []);

    return (
      <div>
        <div>
          <White>Welcome, this is a compact tutorial world.</White> Here you will learn the basics
          of how to play Dark Forest. In competitive game things can get more scary and exciting.
          But for now, let’s get you up to speed. Here is your planet. Try clicking on it to see
          more information.
        </div>
        <div style={{ marginTop: '5px' }}>
          <Green>— Open the Planet Information Pane</Green>
        </div>
      </div>
    );
  },

  [TutorialStep.PlanetPaneSuccess]: ({ setCurrentStep }) => {
    return (
      <div>
        <div>
          <Gold>Well done.</Gold> This pane shows all of the plants different stat values. We will
          talk about them in more detail in a different universe. Try selecting other planets - you
          can even see some of their information too, despite them not being yours… yet!
        </div>

        <NextButton onClick={() => setCurrentStep(TutorialStep.UniverseMap)} />
      </div>
    );
  },

  [TutorialStep.UniverseMap]: ({ setCurrentStep }) => {
    const [zoomedIn, setZoomedIn] = useState(false);
    const [zoomedOut, setZoomedOut] = useState(false);
    const [panned, setPanned] = useState(0);

    useEffect(() => {
      if (zoomedIn && zoomedOut && panned >= 50) {
        setCurrentStep(TutorialStep.UniverseMapSuccess);
      }
    }, [zoomedIn, zoomedOut, panned]);

    useEffect(() => {
      const handleZoomed = (delta: number) => {
        delta < 0 ? setZoomedIn(true) : setZoomedOut(true);
      };
      const handlePanned = ({ dx, dy }: { dx: number; dy: number }) => {
        (dx > 0 || dy > 0) && setPanned((n) => ++n);
      };

      const uiEmitter = UIEmitter.getInstance();
      uiEmitter.on(UIEmitterEvent.Zoomed, handleZoomed);
      uiEmitter.on(UIEmitterEvent.Panned, handlePanned);

      return () => {
        uiEmitter.removeListener(UIEmitterEvent.Zoomed, handleZoomed);
        uiEmitter.removeListener(UIEmitterEvent.Panned, handlePanned);
      };
    }, []);

    return (
      <div>
        <div>Next, lets have a look at where your planet is located within the universe.</div>
        <div style={{ marginTop: '5px' }}>
          <Green>
            — Zoom in and out
            <br />— Pan around the universe map
          </Green>
        </div>
      </div>
    );
  },

  [TutorialStep.UniverseMapSuccess]: ({ setCurrentStep }) => {
    return (
      <div>
        <div>
          Look there are lots of planets in the universe! And they come in different sizes, types
          and colors. Let’s try taking over a new planet!
        </div>

        <NextButton onClick={() => {}} />
      </div>
    );
  },
};

const NextButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div style={{ marginTop: '5px', textAlign: 'right' }}>
      <Btn className='btn' onClick={onClick}>
        Next
      </Btn>
    </div>
  );
};
