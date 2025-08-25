import {useState} from "react";
const Test = () => {
//    var title = "Hellow Title";

// instead of above variable var title , we can use usestate,
// In following, title is varialbe name, setTitle is a update section, and usestate is default value. 
// we use default value as null,  whatever we write in use state appear on page. 
    const [title, setTitle] = useState(null);  
    return (
        <div>
            <div className = "container">  
                <div className= "row mt-5">
                    <div className = "col-lg-8">
                        <h2> Hellow World </h2>
                        <input type = "text" className="form-control" onKeyUp={e => setTitle (e.target.value)}/> <br/>
                {/* In above input field we use Javascript function onKeyUp, so that what we type in field should show on page */}
                       {/* {title} */}
                     {title == null ? (
                        <div> Input has no text </div>
                     ) : (
                        <div> {title} </div>
                     )}  
                    </div>

                </div>
           
            </div>       
       </div>

    )
}
export default Test;