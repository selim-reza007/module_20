import { getContactInfo } from "@/app/utility/contactutils";

export default async function Contact() {

  const contactInfo = await getContactInfo();
  
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="py-5">
        <p className="text-4xl font-bold mt-3 text-center">Got a project in mind? <br />
          Facing issues with your existing<br />
          platforms? Get in touch!.</p>
        <div className="text-2xl text-center flex flex-col gap-10 pt-20">
          <div>
            <p>Email Address</p>
            <p>{contactInfo['msg'][0]['email']}</p>
          </div>
          <div>
            <p>Our Studio</p>
            <p>{contactInfo['msg'][0]['location']}</p>
          </div>
          <div>
            <p>WhatsApp Number</p>
            <p>{contactInfo['msg'][0]['number']}</p>
          </div>
        </div>
      </div>
    </div>
  );
}