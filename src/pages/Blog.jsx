

import "../styles/blog.css"

/* eslint-disable react/react-in-jsx-scope */
const userNameBase = 'Varias'

import { Post } from '../Post'
// componente basado en una funcion
function Blog () {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <main className='blogPage'>
            <section className="container">
            <header className='BlogPageHeader'>
            <h1> Bienvenido a esta pagina del blog, {userNameBase} </h1>
            </header>
            <section className="blogPageWrapper">
            <Post />
            <Post />
            </section>
            </section>
        </main>
        
    )
}

// cmponente basado en funcion flecha
const ArrowBlogFunction = () => {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <h1> Revisa mas articulos que tenemos para ti...</h1>
    )
}

export { Blog, ArrowBlogFunction, userNameBase}