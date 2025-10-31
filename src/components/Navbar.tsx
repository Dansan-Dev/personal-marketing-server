import { Link } from '@tanstack/react-router'

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/game-dev">Game Development</Link>
        </li>
      </ul>
    </nav>
  )
}


