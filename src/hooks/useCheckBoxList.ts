import { useEffect, useState } from 'react';
type Props = {
  itemListLength: number;
};

const useCheckBoxList = ({ itemListLength }: Props) => {
  const [isCheckedList, setIsCheckedList] = useState<boolean[]>([
    ...Array(itemListLength).fill(false),
  ]);
  const [allItemIsChecked, setAllItemIsChecked] = useState<boolean>(false); // 전체 선택 체크박스
  const [allIsChecked, setAllIsChecked] = useState<boolean>(false); // 전체를 선택해주는 체크박스
  const handleCheckList = (id: number) => () => {
    setIsCheckedList((prev) =>
      prev.map((value, index) => (index === id ? !value : value))
    );
  };
  const handleAllCheck = async () => {
    setAllItemIsChecked(true);
    setAllIsChecked((prev) => !prev);
  };

  useEffect(() => {
    isCheckedList.map((value) => {
      if (value === false) {
        setAllItemIsChecked(false);
      }
    });
  }, [isCheckedList]);

  useEffect(() => {
    allIsChecked
      ? setIsCheckedList((prev) => prev.map((value) => true))
      : setIsCheckedList((prev) => prev.map((value) => false));
  }, [allIsChecked]);

  return {
    isCheckedList,
    handleCheckList,
    allIsChecked,
    handleAllCheck,
    allItemIsChecked,
  };
};

export default useCheckBoxList;
