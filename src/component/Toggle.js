import { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
    position: relative;
    margin-top: 8rem;
    left: 48.6%;
    cursor: pointer;

    > .toggle-container {
        width: 50px;
        height: 24px;
        border-radius: 30px;
        background-color: #8d837f;
        transition: all .2s ease;

        &.toggle--checked {
            background-color: rgb(250, 250, 250);
        }
    }

    > .toggle-circle {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: #794936;
        transition: all .25s ease;

        &.toggle--checked {
            left: 27px;
        }
    }
`;

const Desc = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

export const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? 'toggle--checked' : ''}`} />
        <but className={`toggle-circle ${isOn ? 'toggle--checked' : ''}`} />
      </ToggleContainer>
      {isOn ? <Desc>Toggle Switch ON</Desc> : <Desc>Toggle Switch OFF</Desc>}
    </>
  );
};

export default Toggle;