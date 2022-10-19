import React from "react";
import adminImg from "../../assets/img/admin.jpg";

export default function AdminSection() {
  return (
    <div className="mt-40 mb-20 w-full sm:px-14 px-10 flex flex-col justify-center">
      <h1 className="font-bold text-4xl mx-10 my-2 underline">About Me</h1>

      <div className="p-4 sm:p-8 w-full grid grid-col grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 my-8 mx-auto bg-gray-100 rounded-2xl justify-center">
        <div>
          <img
            src={adminImg}
            alt="Admin"
            className="rounded-2xl sm:max-w-[200px] w-full"
          />
        </div>

        <div className="ml-4 sm:col-span-2 md:col-span-3">
          <h3 className="my-2">Do Hai Anh</h3>
          <p className="text-xl font-normal my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            velit eget nibh aliquet varius. Aenean sapien augue, cursus nec
            tristique eget, sollicitudin et erat. Aliquam tempor nibh et odio
            congue iaculis. Morbi tristique vel ante eu mollis. Praesent eros
            metus, vulputate hendrerit dolor ut, placerat varius eros.
            Suspendisse vel nibh at risus iaculis faucibus. Proin imperdiet
            ultricies libero.
          </p>
        </div>
      </div>
    </div>
  );
}
