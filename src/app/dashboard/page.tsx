import React from "react";

import { IoMenu } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import ContentLayout from "@/components/contentLayout/ContentLayout";

function page() {
  return (
    <div className="w-full min-h-screen flex bg-slate-100">
      <div className="w-1/5 bg-[#636e72] px-">
        <h1 className="text-white font-bold">Hell Pedro</h1>
      </div>
      <div className="w-4/5">
        <header className="bg-slate-100 shadow py-3 flex justify-between items-center">
          <button className="font-bold px-4">
            <IoMenu size={35}/>
          </button>
          <nav className="px-4">
            
            <div className="w-[50px] h-[50px] border rounded-full"><FaRegCircleUser size={50} /></div>
          </nav>
        </header>
        <div>
          <ContentLayout>
            
          </ContentLayout>
        </div>
      </div>
    </div>
  );
}

export default page;
