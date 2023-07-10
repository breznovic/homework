import React, { useState } from "react";
import Affairs from "./affairs/Affairs";
import s2 from "../../s1-main/App.module.css";

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

export const filterAffairs = (
  affairs: AffairType[],
  filter: FilterType
): AffairType[] => {
  if (filter === "high") {
    return defaultAffairs.filter((st) => st.priority === "high");
  }
  if (filter === "middle") {
    return defaultAffairs.filter((st) => st.priority === "middle");
  }
  if (filter === "low") {
    return defaultAffairs.filter((st) => st.priority === "low");
  } else {
    return affairs;
  }
};

export const deleteAffair = (
  affairs: AffairType[],
  _id: number
): AffairType[] => {
  const filteredAffairs = affairs.filter((a) => a._id !== _id);
  return filteredAffairs;
};

function HW2() {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) => {
    const newAffairs = deleteAffair(affairs, _id);
    setAffairs(newAffairs);
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
