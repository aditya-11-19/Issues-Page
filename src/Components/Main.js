import { FaBars, FaTimes } from "react-icons/fa";
import {React,useState,useEffect} from "react";
import axios from "axios"
import CodeIcon from '@mui/icons-material/Code';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SecurityIcon from '@mui/icons-material/Security';
import './Navbar.css';
import Box from "./Box";
import './Main.css';
import InfiniteScroll from "react-infinite-scroll-component"
function Main() {

    const pageNum = 1;
    const [data, changeData] = useState([]);
    const [page, setPage] = useState(pageNum);


    useEffect(() => {
        axios.get("https://api.github.com/repos/facebook/react/issues")
        .then((res) => changeData(res.data))
        .catch((err) => console.log(err))
    },[]); 


    console.log(data);
    console.log("LENGTH", data.length);
    // style={{ padding: "3% 10%",  }}
    // const scrollToEnd = () => {
    //     console.log("Scroll chal ja");
    //     setPage(page+1);
    // }
    // window.onscroll = function(){
    //     if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
    //         scrollToEnd();
    //     }
    // }
    return (
        <div className="outer">     
            <InfiniteScroll 
            dataLength={data.length} 
            next={()=>{
                console.log("PAGEchange");
                setPage(page+1)
                }}
            hasMore={true}>
        {
            data && data.map((singleData, index) => {
                {/* console.log("Sss",singleData) */}
                return  <div className="issue_card" key={index}><Box data={singleData}/></div>
            })
        }
            </InfiniteScroll>
      
        </div>

    );
}
export default Main;