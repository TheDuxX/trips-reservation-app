import React from "react";
import Image from "next/image";
import { Trip } from "@prisma/client";
import { ReactCountryFlag } from "react-country-flag";

interface TripItemProps{
    trip: Trip;
}

const TripItem = ({trip}: TripItemProps) => {
    return ( 
       <div className="flex-col">
        <Image src={trip.coverImage} width={280} height={280} className="rounded-lg" alt={trip.nome}/> 

        <h3 className="text-primaryDarker font-medium text-sm">{trip.nome}</h3>
        <div className="flex item-center">
            <ReactCountryFlag countryCode={trip.countryCode} svg />
            <p className="text-xs text-grayPrimary">{trip.location}</p>
        </div>
       </div>
     )
}
 
export default TripItem;