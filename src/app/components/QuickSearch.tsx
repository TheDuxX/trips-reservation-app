import React from "react";
import { LuHotel } from 'react-icons/lu';
import { GiFarmTractor } from 'react-icons/gi';
import { MdOutlineCottage } from 'react-icons/md';

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center ">
        <div className="w-full h-[1px] bg-grayLighter "></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">Tente pesquisar por</h2>
        <div className="w-full h-[1px] bg-grayLighter "></div>
      </div>

      <div className="flex w-full justify-around mt-4">
        <div className="flex flex-col text-grayPrimary items-center gap-1">
           <LuHotel className="w-[35px] h-[30px]"/>
           <p>Hotel</p>
        </div>
        <div className="flex flex-col text-grayPrimary items-center gap-1">
           <GiFarmTractor className="w-[35px] h-[35px]"/>
           <p>Fazenda</p>
        </div>
        <div className="flex flex-col text-grayPrimary items-center gap-1">
           <MdOutlineCottage className="w-[35px] h-[35px]"/>
           <p>Chalé</p>
        </div>
        <div className="flex flex-col text-grayPrimary items-center gap-1">
           <LuHotel className="w-[35px] h-[35px]"/>
           <p>Pousada</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
