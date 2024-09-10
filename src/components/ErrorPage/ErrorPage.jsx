import { useRouteError } from 'react-router-dom'
import './ErrorPage.css'

function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="error-pg">
            <h1 className="err-h1">Oops!</h1>
            <p className="err-prompt">Sorry, an unexpected error has occurred!</p>
            <p className="err-msg">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage