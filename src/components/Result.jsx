const Result = ({res}) => {
  return (
    <div className="bg-white py-8 px-2">
      <h5 className="text-lg">
        Estimated converted amount : <span className="text-green-500 font-bold">{res}</span>
      </h5>
    </div>
  )
}

export default Result
