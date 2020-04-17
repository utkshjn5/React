import React from 'react';
import ChangeTextColor from '../HighOrderComponent/ChangeTextColor';
const About=()=>{
    return(
       <div className="container"><h4 className="center">About</h4><p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi numquam iste obcaecati quas aspernatur velit cumque quasi maxime, cupiditate, totam laboriosam repellendus, magnam id vero perferendis at inventore! Quia, temporibus.</p></div>
    )
}
export default ChangeTextColor(About);