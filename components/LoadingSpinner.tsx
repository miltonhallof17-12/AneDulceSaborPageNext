const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D85C56] border-t-transparent"></div>
    <p className="ml-4 text-gray-600">Cargando...</p>
    </div>
  )
}

export default LoadingSpinner
