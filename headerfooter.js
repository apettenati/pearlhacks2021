window.onload = function () {
    const [header] = document.querySelectorAll('body > header');
    const [footer] = document.querySelectorAll('body > footer');

    header.innerHTML = ` 
      <header>
        <nav class="fixed-top navbar-expand navbar-dark bg-dark">
          <div class="header">
            <a class="navbar-brand" style="padding-left: 20%;" href="index.html">"Pearl"-sonal Finance Hacker</a>
            <div class="navbar-left"  id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="index.html">Checklist</a>
                </li>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="faq.html">FAQ</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="resources.html">Resources</a>
                </li>
              </ul>
            </div>
            <div class="navbar-right" style="padding-right: 20%;" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item mx-2">
                  <a class="nav-link" href="login.html">Log In</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="register.html">Register</a>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    `;

    footer.innerHTML = `
        <div class="footer">
          <span class="text-muted">
            Disclaimer: This <a href="https://i.imgur.com/u0ocDRI.png">chart</a> is a supplemental guide, there are circumstances where you may need to alter your approach such as earning income that exceeds the Roth IRA limit, thus creating need to pursue Backdoor Roth contributions. To make optimal financial decisions for your unique situation Snowball vs. Avalanche, Roth vs. Traditional, etc., it is vital to spend the time cultivating the necessary knowledge to enable you to move forward from an informed place of strength.
          </span>
        </div>
    `;
}