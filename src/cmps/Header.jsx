export function Header({}) {
  return (
    <header className="app-header main-layout full">
      <h2>myteam</h2>
      <nav>
        <a className="body-1" href="">
          home
        </a>
        <a className="body-1" href="">
          about
        </a>
      </nav>
      <button className="menu-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17">
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
          </g>
        </svg>
      </button>
      <button className="contact-btn btn-outline-md">contact us</button>
    </header>
  )
}
