import pic from "../assets/headshot.jpg"
import "../css/About.css"
import Header from "../components/Header"

function About() {
    return (
        <div className="page" id="about">
            <Header></Header>
            <div className="page-contents">
                <div className="about">
                    <div className="bio">
                        <h1>Hello!</h1>
                        <br></br>
                        <p>
                            I'm Jackie, a senior at <a href="https://www.brown.edu/" target="_blank" rel="noreferrer" className="bio-link" id="brown"><b>Brown University</b></a> studying <b>Computer Science</b> and <b>Neuroscience</b>.
                            <br></br>
                            <br></br>
                            I am a software developer with a soft spot for health/neuro technology.
                            I joined the tech space coming from a life science background, having previously
                            worked in chemistry and neuroscience labs at UNT and UCSF. In summer 2022, I interned
                            as a software engineer at <a href="https://www.qualtrics.com/" target="_blank" rel="noreferrer" className="bio-link" id="qualtrics"><b>Qualtrics</b></a> in Seattle, WA.
                            I am also currently a software engineer in Full Stack at Brown.
                            <br></br>
                            <br></br>
                            In my free time, I play chamber music, lead a care advocate team at <a href="https://www.brown.edu/news/2022-03-07/connect-health" target="_blank" rel="noreferrer" className="bio-link" id="connect4health"><b>Connect for Health</b></a>,
                            follow the Dallas Mavs, and seek out new experiences (most recently, creative nonfiction)!
                        </p>
                    </div>
                    <img src={pic} alt="headshot of me" className="pic"></img>
                </div>
                <div id="creative">
                    <div className='chamber-div'>
                        <h1 className="creative-heading" id="chamber">Chamber Music</h1>
                        <p className="music-heading">
                            <b>Brahms Clarinet Quintet in B Minor (Fall 2021)</b>
                            <br></br> 
                            I. Allegro
                        </p>
                        <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/25z6m94Tb80?start=4111" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p className="music-heading">
                            <b>Mendelssohn String Quartet No. 2 in A Minor (Fall 2022)</b>
                            <br></br>
                            II. Adagio non lento
                            <br></br>
                            III. Intermezzo
                        </p>
                        <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/fwFyI4mcE6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    {/* <div className="writing-div">
                        <h1 className="creative-heading" id="writing">Works in Progress</h1>
                        <div className="doc-tags">
                            <a id="doc-link" href="https://docs.google.com/document/d/13Z-PmuYVtn8fre405CA1QxVOM1mSJm0ouTI0dIcbyLU/edit?usp=sharing" target="_blank" rel="noreferrer">A Nation in Dance</a>
                            <a id="doc-link" href="https://docs.google.com/document/d/1GHnvzRJXikcLkBs1qz8oXpqoZx99Owsw3K6-bViOkY4/edit?usp=sharing" target="_blank" rel="noreferrer">In Perpetuity</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        
    )
}

export default About;