import avator1 from "@/assets/avatar1.jpg";
import avator2 from "@/assets/avatar2.jpg";
import avator3 from "@/assets/avatar3.jpg";
import avator4 from "@/assets/avatar4.jpg";
import avator5 from "@/assets/avatar5.jpg";
import avator6 from "@/assets/avatar6.jpg";
import Image from "next/image";

const AvatorImage = [
  {
    id: 1,
    src: avator1,
  },
  {
    id: 2,
    src: avator2,
  },
  {
    id: 3,
    src: avator3,
  },
  {
    id: 4,
    src: avator4,
  },
  {
    id: 5,
    src: avator5,
  },
  {
    id: 6,
    src: avator6,
  },
];

const Herosection = () => {
  return (
    <div className=" flex -space-x-4 overflow-hidden justify-center items-center  ">
      {AvatorImage.map(({ id, src }) => (
        <div key={id}>
          <Image
            src={src}
            className={` rounded-full border-2 border-red-400`}
            alt={"customer"}
            width={50}
            height={50}
          />
        </div>
      ))}
    </div>
  );
};
export default Herosection;
