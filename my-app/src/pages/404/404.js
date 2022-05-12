import "./404.css";

function Page404() {


    return (
        <>
            <div className="page404">
                <div className="bigText">404</div>
                <div className="subText">Oups! La page que vous demandez n'existe pas.</div>
                <a href="/" className="homeButton">Retourner sur la page d’accueil</a>
            </div>
        </>
    )
}

export default Page404;