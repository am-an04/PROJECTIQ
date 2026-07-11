import type { ReactNode } from "react";

interface Props {

  children: ReactNode;

}


export default function Container({

  children,

}: Props) {

  return (

    <div className="max-w-[1400px] mx-auto px-6">

      {children}

    </div>

  );

}