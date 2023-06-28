import images from "./Uploaded";
function Header() {
   return ( 
      <header className="flex justify-around items-center border p-4">
         <figure>
            <img src="./assets/logo_book.png" alt="Logo TypeBook" width={50} />
         </figure>
         <ul className=" justify-around space-x-4 hidden md:flex">
            <li><img src={images.IconHome} alt="Home" width={40} draggable={false} className=" duration-200 hover:translate-y-[-4px] cursor-pointer " /></li>
            <li><img src={images.IconWorld} alt="World" width={40} draggable={false} className=" duration-200 hover:translate-y-[-4px] cursor-pointer " /></li>
            <li><img src={images.IconVip} alt="VIP" width={40} draggable={false} className=" duration-200 hover:translate-y-[-4px] cursor-pointer " /></li>
         </ul>
         <div className="flex justify-around items-center space-x-4">
            <div>Username</div>
            <div className="border border-gray-500 w-10 h-10 bg-cover" style={{background : `url(${images.Fin})` , backgroundSize : "cover"}}></div>
         </div>
      </header>
    );
}

export default Header;