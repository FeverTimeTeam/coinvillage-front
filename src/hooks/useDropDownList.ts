import { useState } from 'react';

type Props = {
  itemList: string[];
};

const useDropDownList = ({ itemList }: Props) => {
  const [selectedItemList, setSelectedItemList] = useState<number[]>([
    ...Array(itemList.length).fill(-1),
  ]);
  const [isToggledList, setIsToggledList] = useState<boolean[]>([
    ...Array(itemList.length).fill(false),
  ]);

  const handleSelectItem = (id: number) => () => {
    setSelectedItemList((prev) =>
      prev.map((value, index) => (index === id ? 1 : 0))
    );
    setIsToggledList((prev) =>
      prev.map((value, index) => (index === id ? false : true))
    );
  };

  const handleSelectItemList = [
    ...Array(itemList.length).fill(handleSelectItem),
  ];

  const handleToggled = (id: number) => () => {
    setIsToggledList((prev) =>
      prev.map((value, index) => index === id && !value)
    );
  };
  return {
    selectedItemList,
    isToggledList,
    handleSelectItem,
    handleSelectItemList,
    handleToggled,
  };
};

export default useDropDownList;
