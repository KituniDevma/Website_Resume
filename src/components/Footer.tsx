import { profile } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>
        © {year} {profile.fullName}. Built with React & Vite.
      </p>
    </footer>
  )
}
