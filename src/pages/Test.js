import React from 'react';

import { BiWifi, BiDrink, BiHandicap, BiFridge } from 'react-icons/bi';
import { FaDog, FaSmokingBan, FaSwimmer, FaShuttleVan } from 'react-icons/fa';
import { MdDryCleaning, MdRoomService, MdFamilyRestroom, MdLuggage, MdOutlineAir, MdFreeBreakfast, MdRestaurant } from 'react-icons/md';
import { IoIosBed } from 'react-icons/io';
import { CgGym } from 'react-icons/cg';
import { SiGotomeeting } from 'react-icons/si';
import { GrSpa, GrLanguage } from 'react-icons/gr';

function Test(props) {
    return (
        <>

        <ul>
            <li> <BiWifi /> wifi</li>
            <li> <BiDrink /> bar</li>
            <li> <FaDog /> animals</li>
            <li> <FaSmokingBan /> non smoking</li>
            <li> <MdDryCleaning /> dry cleaning</li>
            <li> <GrLanguage /> multilingual staff</li>
            <li> <IoIosBed /> suites</li>
            <li> <FaSwimmer /> swimming pool</li>
            <li> <MdRestaurant /> restaurant</li>
            <li> <CgGym /> gym</li>
            <li> <MdRoomService /> room service</li>
            <li> <GrSpa /> spa</li>
            <li> <BiHandicap /> disabled access</li>
            <li> <MdFamilyRestroom /> family</li>
            <li> <MdLuggage /> conciergerie</li>
            <li> <FaShuttleVan /> shuttle</li>
            <li> <SiGotomeeting /> meeting rooms</li>
            <li> <MdOutlineAir /> air conditioning</li>
            <li> <BiFridge /> minibar</li>
            <li> <MdFreeBreakfast /> breakfast included</li>
        </ul>

        </>
    );
}

export default Test;