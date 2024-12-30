import Button from "@/components/Button"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbg sticky h-20 w-full z-50 top-0 flex justify-between items-center'  
    >
      <h1 className=" text-2xl lg:text-5xl pl-10 lg:pl-[100px] font-serif"
         style={{
          fontFamily: "Itim",
          fontWeight: 700,
         }}
      >XnCode</h1>

<div className="flex gap-4 sm:gap-7 items-center pr-10 lg:pr-[100px]">
  <Button
    name="Login"
    link="/login"
    style={{
      backgroundColor: '#937EFA',
      padding: '10px 25px', 
      color: '#fff',
    }}
  />
  <Button
    name="Sign Up"
    link="/signup"
    style={{
      backgroundColor: '#00C4E8',
      padding: '10px 25px', 
      color: '#fff',
    }}
  />
</div>

      
    </div>
  )
}

export default Navbar