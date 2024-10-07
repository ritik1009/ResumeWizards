const  Footer = () => {
  return (
    <div className="w-screen bg-[#0c4724] mt-12 sm:mt-20 p-5 sm:p-8 pb-2 grid gap-y-3 justify-center">
      <div>
        <p className="text-white text-xl md:text-3xl font-bold text-center">ResumeWizards</p>
        <p className="text-white text-xs md:text-base">
          Make unique resume for every job application
        </p>
      </div>
      <div>
        <ul className="flex gap-4 text-sm md:text-lg font-normal justify-center text-white py-3">
          <li>Templates</li>
          <li>Blogs</li>
          <li>Help</li>
          <li>Home</li>
        </ul>
      </div>
      <p className="text-white text-xs text-center">Copyright &copy; 2023 </p>
    </div>
  );
}

export default  Footer