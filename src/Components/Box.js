import './Box.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function calculateTime(time){
    var date1 = new Date(time);
    var date2 = new Date();
    var gap = parseInt((date2-date1)/(60*60));
    if(gap>24) return parseInt(gap/24);
    else return gap
}

function Box({data}) {
    return (
        <>
        <div style={{display:"flex",fontWeight:"bold" }}>
        <h6>{data.title}</h6>
        <div style={{display:"flex"}}>
           { data.labels.map((label) => {
                return <p style={{borderRadius:"30px", padding:"0.06rem 0.3rem 0.06rem 0.3rem", margin:"0.06rem 0.12rem 0.24rem 0.6rem ",fontWeight:"bolder" ,fontSize:"0.6rem" , border:"1px solid black", backgroundColor:`#${label.color}`}}>{label.name}</p>
            })
           }
        </div>

        </div>
        <p className="info" >#{data.number} opened {calculateTime(data.updated_at)} days ago by {data.user.login}</p>

        </>
    )
}

export default Box;