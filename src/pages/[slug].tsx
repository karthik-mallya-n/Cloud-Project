
import Navbar from '../components/Navbar'
import Header from '../components/Header'



import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import SearchItem from '../components/SearchItem'
import { useRouter } from 'next/router';

export default function List() {
  const router = useRouter();
  const {slug} = router.query;
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer flex justify-center mt-[20px]">
        <div className="listWrapper w-full max-w-[1024px] flex gap-[20px]">
          <div className="listSearch flex-1 bg-[#febb02] p-[10px] rounded-[10px] sticky top-[10px] h-[max-content] ">
              <h1 className="listTitle text-[20px] text-[#555] mb-[10px]">Search</h1>
              <input className='h-[30px] border-none p-[5px]' type="text" placeholder={slug ? String(slug) : undefined}/>
              <div className="listItem flex flex-col gap-[10px] mb-[10px]">
                <div className="listOptions p-[10px]">
                <label className="text-[2px]" htmlFor="option">Options</label>
                  <div className="listOptionItem flex justify-between mb-[10px] text-[#555] text-[12px]">
                    <span className="listOptiontext h-[20px] p-[5px]  flex items-center">Min Price <small> per night</small></span>
                    <input type="text" className="listItemInput w-[50px]" />
                  </div>
                  <div className="listOptionItem flex justify-between mb-[10px] text-[#555] text-[12px]">
                    <span className="listOptiontext h-[20px] p-[5px]  flex items-center">Max Price <small> per night</small></span>
                    <input type="text" className="listItemInput w-[50px]" />
                  </div>
                 
                </div>
                
              </div>
              <button className='p-[10px] bg-[#0071c2] text-white border-none w-full cursor-pointer font-[500]'>Search</button>
          </div>
          <div className="listResult flex-3">
            <SearchItem/>
          
          </div>
        </div>
      </div>
    </div>
  )
}
