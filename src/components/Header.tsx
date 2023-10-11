import { canaraHeaderNavList } from "../assets/utlity";



 const Header = () => {
  return (
    
    <header className="bg-gray-800 text-white p-4">

        
      <ul className="flex items-center justify-between">
        {canaraHeaderNavList.map((item) => (
          <li key={item.title} className="relative group">
            <a href="#" className="flex items-center">
              <span className={`mr-2 ${item.icon}`} />
              {item.title}
            </a>
            {item.subLinks && (
              <ul className="absolute hidden group-hover:flex hover:flex md:w-[1200px] bg-white text-gray-800 py-2 mt-2 rounded-lg shadow-lg">
                {item.subLinks.map((subLink) => (
                  <li key={subLink.title}>
                    <a href={""} className="flex items-center p-2">
                      <span className={`mr-2 ${subLink.icon}`} />
                      {subLink.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
};

export { Header}




 
