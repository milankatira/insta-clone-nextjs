import React from 'react'

const Story = ({img,username}) => {
    return (
        <div>
            <img  className='h-14 w-14 rounded-full p-[1.5px] border-red-900 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-in  text-center
            ' src={img}/>
            <p className='text-xs w-14 truncate text-center'>{username}</p>
        </div>
    )
}

export default Story
