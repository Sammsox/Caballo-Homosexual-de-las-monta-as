const HEADER = document.querySelector('header');
HEADER.innerHTML = `
<nav id="navbar" class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand ms-4" href="#">CHDLM</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item me-3">
                    <a class="nav-link active" aria-current="page" href="#">HOME</a>
                  </li>
                  <li class="nav-item me-3">
                    <a class="nav-link" href="#">MENU</a>
                  </li>
                  <li class="nav-item me-3">
                    <a class="nav-link" href="#">SHOP</a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                    <button type="button"  class=" button btn btn-light">SIGN IN</button>
                </form>
              </div>
            </div>
          </nav>
          
            <!-- contralador de el header -->
    <style>
    a{
      color: white !important;
    }
      .button{
          color: rgba(0, 178, 255, 1) !important;
      }
    </style>`

