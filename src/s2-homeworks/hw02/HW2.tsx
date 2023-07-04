import React, { useState } from "react";
import Affairs from "./affairs/Affairs";
import s2 from "../../s1-main/App.module.css";

/*
 * 3 - дописать типы и логику функции filterAffairs и проверить её тестами
 * 4 - выполнить пункт 3 для функции deleteAffair
 * 5 - указать нужный тип в useState с affairs
 * 6 - дописать тип и логику функции deleteAffairCallback
 * 7 - в файле Affairs.tsx дописать типизацию пропсов
 * 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
 * 9 - в файле Affair.tsx дописать типизацию пропсов
 * 10 - в файле Affair.tsx дописать функции deleteCallback и использовать
 * 11 - в файле Affair.tsx отобразить приходящие данные
 * */

// types
export type AffairPriorityType = "high" | "middle" | "low"; 
export type AffairType = {
  _id: number; 
  name: string; 
  priority: AffairPriorityType;
};
export type FilterType = "all" | AffairPriorityType;


const defaultAffairs: AffairType[] = [
  { _id: 1, name: "React", priority: "high" }, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
  { _id: 2, name: "Anime", priority: "low" },
  { _id: 3, name: "Games", priority: "low" },
  { _id: 4, name: "Work", priority: "high" },
  { _id: 5, name: "HTML & CSS", priority: "middle" },
];

// pure helper functions
export const filterAffairs = (affairs: AffairType, filter: FilterType): AffairType => {
  const initialState = defaultAffairs
  

  return affairs; // need to fix
};
export const deleteAffair = (affairs: any, _id: any): any => {
  // need to fix any

  return affairs; // need to fix
};

function HW2() {
  const [affairs, setAffairs] = useState<any>(defaultAffairs); // need to fix any
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: any) => {
    // need to fix any
    // need to fix
  };

  return (
    <div id={"hw2"}>
      <div className={s2.hwTitle}>Homework #2</div>
      <div className={s2.hw}>
        <Affairs
          data={filteredAffairs}
          setFilter={setFilter}
          deleteAffairCallback={deleteAffairCallback}
          filter={filter}
        />
      </div>
    </div>
  );
}

export default HW2;
