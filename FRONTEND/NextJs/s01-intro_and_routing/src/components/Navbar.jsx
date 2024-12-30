import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navigation = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="bg-navbarColor text-sm px-4 flex justify-between">
      <div className="flex items-center">
        <div className="flex items-center py-5 mr-4 ">
          <Link href="/" className="flex items-center">
            {/* //? Next.js, import edilen dosyaya göre image genişliğini ve yüksekliğini otomatik olarak belirler ancak Next.js'nin build işlemi sırasında remote dosyalara erişimi olmadığından, genişlik ve yükseklik özelliklerini manuel olarak sağlamanız gerekir. */}
            {/* //* farklı domainlerden alınan image'ler için ilgili domainler config dosyasında belirtilmelidir. */}
            <img src="https://clarusway.com/wp-content/uploads/2022/12/clarusway-logo-black.png" width={150}/>
          </Link>
        </div>
        <ul className="flex">
          {navigation.map((item) => (
            <li
              key={item.title}
              className={`font-medium hover:bg-gray-300 rounded-full py-2 px-4 hover:text-white inline-block text-lg 
               `}
            >
              {/* //? next/link arka planda sayfayı önceden fetch edilir. Bu, client tarafı gezintilerin performansını iyileştirmek için kullanışlıdır. Görünüm alanındaki herhangi bir <Link />  önceden yüklenecektir. */}
              <Link href={item.path}> {item.title} </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
