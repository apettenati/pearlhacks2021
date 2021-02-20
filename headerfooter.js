window.onload = function () {
    const [header] = document.querySelectorAll('body > header');
    const [footer] = document.querySelectorAll('body > footer');

    header.innerHTML = ` 
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html">Personal Finance Tracker</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="login.html">Log In</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="register.html">Register</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    `;

    footer.innerHTML = `
        <div class="container">
          <span class="text-muted">
            Disclaimer: This <a href="https://i.imgur.com/u0ocDRI.png">chart</a> is a supplemental guide, there are circumstances where you may need to alter your approach such as earning income that exceeds the Roth IRA limit, thus creating need to pursue Backdoor Roth contributions. To make optimal financial decisions for your unique situation Snowball vs. Avalanche, Roth vs. Traditional, etc., it is vital to spend the time cultivating the necessary knowledge to enable you to move forward from an informed place of strength.
          </span>
        </div>
    `;
}