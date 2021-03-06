import React from "react";
import Icon from "../Common/Icon";
import { A } from "hookrouter";

export default function ExperiencesCards({ item }) {
    return (
        <A
            href={`/destination/${item?.name}`}
            className="w-48  mx-2 flex-shrink-0 relative border border-gray-300 shadow-lg mb-4 rounded-md">
            <div className="w-full  relative pb-3/4">
                <img
                    src={item?.url}
                    alt=""
                    className=" bg-gray-100 absolute object-cover rounded-t-md  w-full h-full"
                />
                <div className="bg-black bg-opacity-20 absolute rounded-t-md  w-full h-full"></div>
            </div>
            <div className="flex">
                <h3 className="p-4 ">{item?.name}</h3>
                <button className="focus:outline-none ml-auto pl-2 mt-1 mr-2">
                    <Icon name="plus" size={5} color="gray-600" />
                </button>
            </div>
        </A>
    );
}
