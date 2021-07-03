import React from 'react';
// import {CSSTransition} from "react-transition-group"

export class Item extends React.Component{
    constructor(props){
        super(props)
        this.item = this.props.data
        // this.state = {
        //     loaded: false,
        //     error: false
        // };

    }
    
    render(){
        const temp=[] 
        const tags = this.item.tag
        const credits = this.item.credit
        const creditTemp = []
        for (let credit in credits) {
            
            
            creditTemp.push(<div className={`credit`} key={credit}>
                <a href={credits[credit].link}><q>{credits[credit].username}</q></a></div>)
        }
        for (let tag in tags) {
            
            
            temp.push(<span className={`tag ${tag+1 % 0 ? "even":"odd"}`} key={tag}><p>{tags[tag]}</p></span>)
        }
        return (
        <div className="container-item">
                        <div className="item-picture" style={{backgroundImage:"url('"+ this.item.image +"')"}}>{}</div>
                        <div className="content-title">
                            <h1>{this.item.name}</h1>
                            <p>{this.item.subtitle}</p>
                            
                        </div>
                        <div className="description">
                
                        <div className="tag-cont">
                                        {
                                            temp
                                        }
                                    </div>
                            <p>{this.item.description}</p>
                                    <div className="credit-cont">
                                        <p>Credits:</p>
                                        {
                                            creditTemp
                                        }
                            </div>
                    </div>
              
                </div>
                )
        
    }
}
export class ItemGallery extends React.Component{
    constructor(props){
        super(props)
        this.item = this.props.data
        this.state = {
            loaded: false,
            error: false
        };
    }
    componentDidMount() {
        const img = new Image();
        img.onload = () => {
          this.setState({
            loaded: true
          });
        };
        img.onerror = () => {
          this.setState({
            error: true
          });
        };
        img.src = this.item.image;
    }
    render(){
        if (this.state.error) {
            return <div className="item-picture" style={{backgroundImage:"url('"+ this.item.image +"')"}}>{}</div>
          } else if (!this.state.loaded) {
            return <div className="item-picture" style={{backgroundImage:"url('"+ this.item.image +"')"}}>{}</div>
          }
        return(
            <div className="container-item">
                <div className="item-picture" style={{backgroundImage:"url('"+ this.item.image +"')"}}>{}</div>
                <div className="content-title">
                    <h1>{this.item.name}</h1>
                </div>
                <div className="description">
                    <p>{this.item.extra_description}</p>
                </div>
            </div>
        )
    }
}

// Just an Object
export function Hamburger(props){
    const [openDrawer, setOpenDrawer] = React.useState(false)
   
        function NavItem(props){
            return(
                <li>
                <a className="navigate-item" href={props.dropPoint} onClick={props.event}>
                    <h1 className={props.item}>{props.item}</h1>
                    <span className="underline"></span>
                </a>
                </li>
        
            )
        }
        function CustomDrawer (){
                const [openCont, setOpenCont] = React.useState(false)
                return(
                <div className={`drawer-cont ${openDrawer===true?"open-drawer":"close-drawer"}`}>
                    
                        
                        <div className="navigate-cont">
                            <ul>
                            <NavItem item="ABOUT" dropPoint="#About" event={()=>setOpenDrawer(!openDrawer)}/>

                            <NavItem item="PROJECT" dropPoint="#Gallery" event={()=>setOpenDrawer(!openDrawer)}/>
                            <NavItem item="GALLERY" dropPoint="#Gallery" event={()=>setOpenDrawer(!openDrawer)}/>
                            <NavItem item="CONTACT" dropPoint="#" event={()=>setOpenCont(!openCont)}/>
                            </ul>
                        </div>

                        {openCont && <ContactForm open={openCont}/>}

                </div>)
        
        }
    return(
        
            <div className="main-drawer">
                <div className={`hamburger ${openDrawer === true? "closeburger":""}`} onClick={()=>setOpenDrawer(!openDrawer)}>
                    <div className="lay lay1"></div>
                    <div className="lay lay2"></div>
                    <div className="lay lay3"></div>

                </div>
                <CustomDrawer />
            </div>
        

    )
}

function ContactForm(props){
    return(
        <div className={`contact-cont ${props.open=== true? "open-contact":""}`}>
            <form action="" method="post">
                <h1>Contact Me</h1>
                <div className="name-input">
                    <label htmlFor="name">Name</label>
                    <div className="input-cont">
                        <input name="name" type="text" placeholder="Your Name"/>
                    </div>
                </div>
                <div className="email-input">
                    <label htmlFor="name">Email Address</label>
                    <div className="input-cont">
                        <input name="email" type="text" placeholder="Your Email Address"/>
                    </div>
                </div>
                <div className="message-input">
                    <label htmlFor="name">Message</label>
                    <div className="input-cont">
                        <textarea name="message" type="text" placeholder="Your Message"/>
                    </div>
                </div>
                <button type="submit">SUBMIT</button>
            </form>
            
        </div>
    )
}

export function SocialMedias(props){
    const icons = props.icons;
    const links = props.links;
    const list = []
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const icon = icons[i];
        
        list.push(<li key={i} ><a href={link} target="_blank" rel="noopener noreferrer"><img key={icon} className="link-logo"   src={icon} alt="" /></a></li>)   
        // <div key={icon} className="link-logo" style={{backgroundImage: 'url('+icon+')'}}></div>
    };
 
    return(
            <ul>
                {list}
            </ul>
            
        )
    
    
}

// Portfolio Exclusiive

export class AboutContent extends React.Component{
    render(){
        return(
            <p id={this.props.id}>
                {this.props.content}
            </p>
        )
    }
    
}

