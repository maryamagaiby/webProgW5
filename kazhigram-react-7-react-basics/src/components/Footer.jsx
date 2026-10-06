function Footer() {
  return (
    <footer>
        <section id="about">
            <h2>About Kažigram</h2>
            <p>Kažigram is a place to share cat moments.</p>
        </section>
        <section>
            <h2>Contact</h2>
            <address>
                <a href="mailto:info@example.com">info@example.com</a>
            </address>
        </section>
            <p>&copy; 2026 Kažigram</p>
            <button type="button" onClick={() => {}} className="btn btn-outline-secondary btn-sm">
            {/* reset functionality added later with fetch */}
            Reset demo
            </button>

    </footer>
  )
}

export default Footer