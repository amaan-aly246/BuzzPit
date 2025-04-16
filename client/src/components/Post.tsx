import { ReactElement } from "react";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
type Props = {
  PostProps: {
    id: string;
    user: string;
    liks: number;
    dislikes: number;
    content: string;
    title: string;
  };
};

export default function Post({}: Props): ReactElement {
  return (
    <div className="rounded-sm  grid grid-cols-[3em_auto] grid-rows-[3em_auto] bg-blue-100 w-[390px] lg:w-[700px] h-[500px] mx-auto border-2 border-blue-600 my-10">
      {/* username  */}
      <div className="  col-end-3 border-b border-blue-600">
        user-name and time
      </div>
      {/* voting and comment  */}
      <div className="rounded-l-sm flex flex-col justify-between  py-3 h-full w-full border border-r border-blue-600  row-start-1 row-end-3 cursor-pointer">
        <div className="px-1 text-xl  flex flex-col justify-around font-semibold ">
          <i>
            <ChevronUp size={"40"} />
          </i>
          <p className="px-3">5</p>
          <i>
            <ChevronDown size={40} />
          </i>
        </div>
        <div className=" px-2.5">
          <i>
            <MessageSquare size={30} color="lightgreen" />
          </i>
        </div>
      </div>
      {/* content */}
      <div className="">content</div>
    </div>
  );
}
