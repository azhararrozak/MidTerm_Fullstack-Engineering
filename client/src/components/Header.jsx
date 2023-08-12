import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-white text-xl font-bold">Tokopedia Play</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-blue-300">Home</Link>
          </li>
          <li>
            <Link to="/add" className="text-white hover:text-blue-300">Add-Data</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header