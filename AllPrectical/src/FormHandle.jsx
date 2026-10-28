import React from 'react'

const FormHandle = () => {
  return (
    <div>
        <form action="">
            <div>
                <label htmlFor="" className='text-2xl font-semibold'>username</label>
                <input type="text" placeholder='enter username' className='text-xl border rounded m-1 p-1 ' />
                <label htmlFor="" className='text-2xl font-semibold'>password</label>
                <input type="password" placeholder='enter password' className='text-xl border rounded m-1 p-1 ' />
                <button className='h-9 w-56'>submit</button>
            </div>
        </form>
    </div>
  )
}

export default FormHandle