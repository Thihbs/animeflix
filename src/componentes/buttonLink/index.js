import '../buttonLink/button.css';

export const ButtonLink = (props) => {
    return(
        <a className={props.className} href={props.href}> {props.children}</a>
    )
}