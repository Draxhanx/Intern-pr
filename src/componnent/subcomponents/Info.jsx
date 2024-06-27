import React from 'react'

function Info() {
  return (
    <div className='ml-[13vh]'>
   <div className='logo&text  py-8 flex items-center gap-[10px]'>
    <img className='w-[40px] h-[40px]' src="https://s3-alpha-sig.figma.com/img/7622/cd8b/0141197fff7d64b94226a8c17be3edce?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l4Y8yiQzPLyWBrt9QqkZn7pR9okvDvC3NgGSV0UGkZuif1-plYp3IhOBV9zw~Y1G4~M~pSheAtnedkSiFzfvqxS1fjySDbX7Zaq8CficHwF10YRGHeGn0zCc9BwvPkqhDzf7tY6lg6lSaAZzUujt5zZ-QEk7WU~qCI~vZo5tpoUmE4KvJmAGIaoHnm5WHe6cg72RJ~NVhCU~1AV9mBVQHKGlohMZM3if9KzQlAq~xSN7O1HoDQP7hyaascss9aWBVsh7SHG~m91DwYa8TfnPrcAY~uBpYzDed8qWVC-x7mkgYM9fRkwiHbxD9rvbSq08mC-dRvKzdt40pdf4TTaFBA__" alt="" />
    <h1 className='font-[GeneralSans] font-medium text-[20px] text-[#4F4F4F] '>Atlassian</h1>
   </div>
   <div className='ctrl flex gap-[48px]'>
    <div className='left'>
    <h4 className='text-[#6E6D6D] font-[GeneralSans] text-[14px] font-medium'>Company Size</h4>
    <h3 className='mb-5 text-[#3d3d3d] font-[GeneralSans] text-[16px] font-medium ' >1k - 2k Employees</h3>
  
    <h4 className='text-[#6E6D6D] font-[GeneralSans] text-[14px] font-medium'>Sector</h4>
    <h3 className='mb-5 text-[#3d3d3d] font-[GeneralSans] text-[16px] font-medium '>Information Technology, Infrastructure</h3>

    <h4 className='text-[#6E6D6D] font-[GeneralSans] text-[14px] font-medium'>Founded In</h4>
    <h3 className='mb-5 text-[#3d3d3d] font-[GeneralSans] text-[16px] font-medium '>2019</h3>
    </div>
    <div className='right'>
    <h4 className='text-[#6E6D6D] font-[GeneralSans] text-[14px] font-medium'>Type</h4>
    <h3 className='mb-5 text-[#3d3d3d] font-[GeneralSans] text-[16px] font-medium '>Private</h3>

    <h4 className='text-[#6E6D6D] font-[GeneralSans] text-[14px] font-medium'>Funding</h4>
    <h3 className='mb-5 text-[#3d3d3d] font-[GeneralSans] text-[16px] font-medium '>Bootstrapped</h3>

    <h4 className='text-[#6E6D6D] font-[GeneralSans] text-[14px] font-medium'>Fonded By</h4>
    <h3 className='mb-5 text-[#3d3d3d] font-[GeneralSans] text-[16px] font-medium '>Scott Farquhar,Mikr Cannon-Brookes</h3>
    </div>
   </div>

    </div>
  )
}

export default Info