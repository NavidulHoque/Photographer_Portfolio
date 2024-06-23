
const Footer = () => {
  return (
    <footer className="bg-black flex flex-col items-center py-[40px] gap-y-2">
      <div className="flex gap-x-1">
        <i className="fa fa-facebook-official text-[#757575] cursor-pointer text-[23px] hover:text-[#1877F2]"></i>
        <i className="fa fa-instagram text-[#757575] cursor-pointer text-[23px] hover:text-[#D62976]"></i>
        <i className="fa fa-snapchat text-[#757575] cursor-pointer text-[23px] hover:text-[#FFFC00]"></i>
        <i className="fa fa-pinterest text-[#757575] cursor-pointer text-[23px] hover:text-[#E60023]"></i>
        <i className="fa fa-twitter text-[#757575] cursor-pointer text-[23px] hover:text-[#1DA1F2]"></i>
        <i className="fa fa-linkedin text-[#757575] cursor-pointer text-[23px] hover:text-[#0077B5]"></i>
      </div>
      <p className="w3-medium">Powered by React </p>
    </footer>
  )
}

export default Footer
