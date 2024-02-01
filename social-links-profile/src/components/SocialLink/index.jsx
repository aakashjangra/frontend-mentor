const SocialLink = ({text, url}) => {

  const redirectToUrl = () => {
    if(window?.location){
      window.location.href = url;
      console.log(window.location)
    }
  }
  return (
    <div
      className='text-white w-full h-8 flex items-center justify-center  rounded-md bg-grey font-semibold hover:cursor-pointer hover:bg-green hover:text-offBlack' 
      onClick={redirectToUrl}
    >
      {text}
    </div>
  )
}

export default SocialLink