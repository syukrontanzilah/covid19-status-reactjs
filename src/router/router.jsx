import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div style={{marginInline:0, marginTop:0, color:'green', backgroundColor:'red', padding:20,}}>
                        <Link style={styleLink} to ="/">Home</Link>
                        <Link style={styleLink} to ="/product">Product</Link>
                        <Link style={styleLink} to= "/constblog">Blog</Link>
                        <Link style={styleLink} to= "/youtube">You Tube</Link>
                        <Link style={styleLink} to= "/blogpost">Post</Link>

                    </div>
                    {/* <Route path="/" exact component={Quran} />
                    <Route path="/product" component={Product} />
                    <Route path="/constblog" component={ConstBlog} />
                    <Route path="/youtube" component={Home} />
                    <Route path="/blogpost" component={BlogPost} />
                    <Route path="/detail-post/:id" component={DetailPost}/>
 */}

                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Router;

const styleLink = {
    marginRight:20,
    color:'white',
    padding: 10,
    backgroundColor:'green',
    borderRadius: 10,
    
}