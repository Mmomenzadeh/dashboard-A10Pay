import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href={"/"}>
        <img
          src="/images/logo.png"
          alt="a10pay"
          className="w-[142px] h-[40px] object-cover "
        />
      </Link>
    </>
  );
}
