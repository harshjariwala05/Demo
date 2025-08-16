import React from 'react'
import { FaStar } from "react-icons/fa";

const TopSelling = () => {
   const products = [
      {
         id: 1,
         title: "Gradient Graphic T-shirt",
         image: "https://test-task-mcg.vercel.app/static/Images/Landing/ClothImage1.png",
         rating: 4.5,
         price: 30,
      },
      {
         id: 2,
         title: "Gradient Graphic T-shirt",
         image: "https://test-task-mcg.vercel.app/static/Images/Landing/ClothImage1.png",
         rating: 4.5,
         price: 30,
      },
      {
         id: 3,
         title: "Gradient Graphic T-shirt",
         image: "https://test-task-mcg.vercel.app/static/Images/Landing/ClothImage1.png",
         rating: 4.5,
         price: 30,
      },
      {
         id: 4,
         title: "Gradient Graphic T-shirt",
         image: "https://test-task-mcg.vercel.app/static/Images/Landing/ClothImage1.png",
         rating: 4.5,
         price: 30,
      },
   ];
   return (
      <div className="flex flex-row items-center justify-center w-full">
         <div className="gap-[55px] max-w-[1240px] flex flex-col items-start justify-center w-full">

            <div className="text-black text-center text-[48px] font-bold pt-16 w-full">
               TOP SELLING
            </div>

            <div className="gap-5 w-full grid grid-cols-[repeat(auto-fill,minmax(287px,1fr))] place-items-center">
               {products.map((item) => (
                  <div
                     key={item.id}
                     className="rounded-[20px] flex flex-col gap-2 max-w-[300px]"
                  >
                     <img
                        src={item.image}
                        alt={item.title}
                        className="object-contain mx-auto rounded-2xl w-[295px] h-[298px]"
                     />

                     <div className="text-[20px] font-bold text-ellipsis overflow-hidden">
                        {item.title}
                     </div>

                     <div className="flex items-center gap-[6px] text-sm">
                        {[...Array(4)].map((_, i) => (
                           <span key={i} className="text-yellow-400">
                              <FaStar className="w-4 h-4" />
                           </span>
                        ))}
                        <span className="text-black text-[14px] font-[400] ">
                           {item.rating}/5
                        </span>
                     </div>

                     <div className="text-black text-[24px] font-bold ">₹ {item.price}</div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default TopSelling