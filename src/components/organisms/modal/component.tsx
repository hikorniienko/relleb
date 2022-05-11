import React, {
  FC,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import styled from './style.module.scss';

const Modal: FC<IModal> = ({ state, children, setState }) => {
  const [animation, setAnimation] = useState(false);
  const speed = 300;

  useEffect(() => {
    setTimeout(() => {
      setAnimation(state);
    }, speed);
  }, [state]);

  return (
    <>
      {state && (
        <div className={`${styled.modal} ${animation && styled.modalActive}`}>
          <button
            type="button"
            className={styled.modalBg}
            onClick={() => {
              setAnimation(false);
              setTimeout(() => {
                setState(false);
              }, speed);
            }}
          />
          <div className={`${styled.inner} ${animation && styled.innerActive}`}>
            <div className={styled.close}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setAnimation(false);
                  setTimeout(() => {
                    setState(false);
                  }, speed);
                }}
              >
                <circle cx="12.5" cy="12.5" r="12.5" fill="#3760EF" />
                <path d="M9 9L16 16" stroke="white" />
                <path d="M16 9L9 16" stroke="white" />
              </svg>
            </div>
            <div className={styled.content}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

interface IModal {
  children: React.ReactNode;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

export default Modal;
