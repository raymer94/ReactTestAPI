import { Redirect } from "react-router";

export default function RedirectToPosts(){
    return <Redirect to={{pathname: "/"}} />
}