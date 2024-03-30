import React, { useEffect } from 'react'

const ScrollToTop = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
  return (
    <div>
    <button
  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }}

  className="fixed p-[0.8rem] bottom-[40px] right-[40px] text-[#7d12ff] bg-white border-[4px] border-[#7d12ff] text-center z-50 rounded-[50%] "
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-semibold ">
<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
</svg>


</button>
</div>
  )
}

export default ScrollToTop