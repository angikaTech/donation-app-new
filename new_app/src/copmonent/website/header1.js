export default function Header1() {
    return (
        <>


            <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
                <div class="container"><a class="navbar-brand" href="#">Donation app</a><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse"
                        id="navcol-1">
                        <ul class="nav navbar-nav">
                            <li class="nav-item" role="presentation"><a class="nav-link" href="/">Home</a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link" href="#">About us</a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link" href="#">Who are We </a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link" href="#">Contact</a></li>

                            {/* <li class="dropdown"><a class="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown </a>
                                <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">First Item</a><a class="dropdown-item" role="presentation" href="#">Second Item</a><a class="dropdown-item" role="presentation" href="#">Third Item</a></div>
                            </li> */}
                        </ul>
                        <form class="form-inline mr-auto" target="_self">
                            <div class="form-group">
                                <label for="search-field"><i class="fa fa-search"></i></label>
                                {/* <input class="form-control search-field" type="search" name="search" id="search-field" /> */}
                            </div>
                        </form>

                        <span class="navbar-text"><a href="super_admin" class="login">Log In</a></span>
                        <a class="btn btn-light action-button" role="button" href="signup">Sign Up</a>
                    </div>
                </div>
            </nav>

        </>

    )

}