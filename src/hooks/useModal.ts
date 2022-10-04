import { useState } from 'react';

export const useModal = () => {
  const [isActive, setIsActive] = useState(false);

  const onActiveModal = () => {

    setIsActive(true);
  };
  const onDisabledModal = () => {
    setIsActive(false);
  };

  return {
    isActive,
    onDisabledModal,
    onActiveModal,
  };
};
