import Link from "next/link";
import { sideBarLink } from "../../../lib/sideBarLink";
import Logo from "../modules/logo";

export default function SideBar() {
  return (
    <aside className="hidden lg:block w-64 px-3 bg-dark border-solid border-r border-r-dark-500">
      <div className="mb-10 mt-[25px] flex-center">
        <Logo />
      </div>

      <div className=" flex flex-col gap-y-3">
        {sideBarLink?.map((item, index) => (
          <>
            <Link
              href={item.srcLink}
              className="flex items-center gap-x-3 py-3 pl-5"
              key={index}
            >
              <span className="block w-6 h-6">
                <img src={item.svg} alt={item.title} />
              </span>
              <span className="text-cloud-100 font-[500] capitalize font-base leading-6">
                {item.title}
              </span>
            </Link>
          </>
        ))}
      </div>
    </aside>
  );
}
