import React, { useState, useEffect } from 'react';
const Goal = () => {
const [resource, setresource] = useState('Default ')

useEffect(() =>{
    console.log('render');
},[resource])

return(
    <>
    <div>
    <button onClick={() => setresource('post')}>Post</button>
    <button onClick={() => setresource('user')}>User</button>
    <button onClick={() => setresource('comment')}>Comment</button>
   </div>
    <h2>{resource}</h2>
     </>
)

}
export default Goal;
