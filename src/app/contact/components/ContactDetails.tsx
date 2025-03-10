import Image from "next/image";

const ContactDetails = () => {
  return (
    <div>
      <Image
        width={365}
        height={100}
        src="/prof-pic-small.png"
        alt="rounded profile picture of ayush raj"
        className="rounded-full"
      />
      <div className="py-9">
        <h4 className="text-[18px] text-[#3C3D3E] mb-2">Contact Details</h4>
        <p className="text-[27px] text-[#0B0C0E]">
          ayush.barnwal@brightscout.com
        </p>
        <p className="text-[27px] text-[#0B0C0E]">+91 8651447521</p>
      </div>
      <div>
        <h4 className="text-[18px] text-[#3C3D3E] mb-2">Social</h4>
        <ul className="text-[27px] text-[#0B0C0E] *:mb-2 ">
          <li className="hover:cursor-pointer">Linkedin</li>
          <li className="hover:cursor-pointer">Instagram</li>
          <li className="hover:cursor-pointer">Twitter</li>
          <li className="hover:cursor-pointer">Webflow</li>
          <li className="hover:cursor-pointer">Figma</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
