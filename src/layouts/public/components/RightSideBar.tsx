import { Fragment, ReactNode } from "react";

function RightSideBar({loveMove, children}: {loveMove: boolean, children: ReactNode}) {
  return (
    <Fragment>
      {loveMove && (
        <div className="w-[75vw] h-screen bg-gray-100 overflow-y-auto pt-17 pl-10">
          {children}
        </div>
      )}
    </Fragment>
  );
}

export default RightSideBar;
