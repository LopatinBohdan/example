import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, Outlet, useParams, Link } from "react-router-dom";
const pictures=[
    {id:1, title:"painting1"},
    {id:2, title:"painting2"},
    {id:3, title:"painting3"},
    {id:4, title:"painting4"}
]

function Main(){
    return <h2>Famous Painter Page</h2>;
}

function NotFound() {
    return <h2>Not found</h2>;
}

function Paint(){
    const params=useParams();
    const pId=params.id;
    const pTitle=params.title;
    return <h2>Painting title: { pictures.find(id=>id.id==pId).title}</h2>
}

function About(){
    return(
        <>
            <h2>Painter Biography</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet varius ultrices. Aenean ut diam ante. Nulla ac tempor mi. Maecenas at sapien eu arcu suscipit egestas ut quis leo. Suspendisse mollis libero magna, ac feugiat tellus vulputate sed. Quisque turpis tortor, maximus eget turpis nec, volutpat fermentum ligula. Maecenas rhoncus a nunc quis sollicitudin. Pellentesque laoreet velit nec lorem laoreet, sed sagittis arcu semper. Suspendisse pellentesque, diam id malesuada congue, eros urna dapibus nisi, vestibulum suscipit leo ex sed tellus. Mauris ac orci semper, porta nisi vel, malesuada mi.</p>
        </>
    ) 
}

function FamousPainting(){
    return(
        <>
            <h2>Famous Painting</h2>
            <p>{pictures[0].title}</p>
        </>
    )
}

function Paintings(){
    return(
        <>
            <h2>Paintings</h2>
            <ul>
                {
                    pictures.map(function(item){
                        return <li key={item.id}>
                            <NavLink to={`/paintings/${item.id}`}>{item.title}</NavLink>
                        </li>
                    })
                }
            </ul>
            <Outlet></Outlet>
        </>
    ) 
}

function Nav(){
    return <nav>
        <Link className="links" to="/">Main</Link>
        <Link className="links" to="/about">Painter's BIO</Link>
        <Link className="links" to="/famous">Famous Painting</Link>
        <Link className="links" to="/paintings">Paintings</Link>
    </nav>
}

function Painter(){
    return(
        <>
        <Router>
            <div>
                <Nav></Nav>
                <Routes>
                    <Route path="/" element={<Main></Main>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/famous" element={<FamousPainting></FamousPainting>}></Route>
                    <Route path="/paintings" element={<Paintings></Paintings>}>
                         <Route path=":id" element={<Paint></Paint>}></Route> 
                    </Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
        </Router>
        </>
    )
}

export default Painter;
