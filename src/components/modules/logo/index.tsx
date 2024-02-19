import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href={"/"}>
        <img
          src="/images/logo.png"
          alt="a10pay"
          className=" w-28 h-5  xl:w-[142px] xl:h-10 object-cover "
        />
      </Link>
    </>
  );
}
