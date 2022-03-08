const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white p-3 font-bold text-center rounded-md mb-3">
    <p>{children}</p>
  </div>
  )
}

export default Error
