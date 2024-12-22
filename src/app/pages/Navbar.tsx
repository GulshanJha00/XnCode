import Button from "@/ Components/Button"
const Navbar = () => {
  return (
    <div className='bg-[#000000] sticky h-20 w-full z-11 top-0 flex justify-between items-center'
   
    >
      <h1 className="text-5xl pl-[100px] font-serif"
         style={{
          fontFamily: "Itim",
          fontWeight: 700,
         }}
      >XnCode</h1>

      <div className="flex gap-11 pr-[100px]">
      <Button name="Login" link="login" />
      <Button name="Sign Up" link="signup" />
      </div>

      
    </div>
  )
}

export default Navbar