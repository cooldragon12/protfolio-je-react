import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Column, Row, Section, Image } from "../../components/utils-components";
import { url } from "../../config/settings";
import { loadingImg } from "../../assets/img";
const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.99 });
  const [data, setData] = useState([
    {
      title: "",
      subtitle: "",
      description: "",
      date_created: "",
      image: "",
    },
  ]);
  const scrollHandler = useCallback(() => {
    const scrollContainer = document.getElementById("project-cont");
    if (inView)
    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
      

        if (evt.deltaY > 0){
        // (scrollContainer.scrollTop) += evt.deltaY;
        scrollContainer.scrollLeft += evt.deltaY;
        console.log("ot");
        //   }else{
        //       document.getElementById("main-cont").scrollTop += evt.deltaY
          }
    
      });
  },[inView]);
  const dataHandler = async () => {
    const contextOpt = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    try {
      let response = await fetch(`${url}/api/projects`, contextOpt);
      let data = await response.json();
      if (data) {
        setData(JSON.parse(data));
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    dataHandler();
  }, [inView, scrollHandler]);
  return (
    <Section ref={ref} className="project-cont" flex="column">
      <div id="project-cont"  className="list-cont-proj">
        <div className="proj-title">
          <h2>Projects</h2>
        </div>
        {/* {
                                data.map(({title, subtitle, description,date_created,image}, index)=>{
                                    return(
                                        <Row key={index} tabIndex={index} className='list-item'  size={90}>
                                            <Column className='project-info' width={50}>
                                                <div className="title">
                                                    <h1>{title}</h1>
                                                    <h2>{subtitle}</h2>
                                                </div>
                                                <div className="description">
                                                    <h3>{date_created}</h3>
                                                    <p>{description}</p>
                                                </div>
                                            </Column>
                                            <Column width={50}>
                                                <Image className="project-img" source={image} />
                                            </Column>
                                        </Row>
                                    )
                                })
                            } */}
        <Row className="list-item" size={90}>
          <Column
            className="project-info"
            JContent="left"
            align="baseline"
            width={50}
          >
            <div className="title">
              <h1>Hello </h1>
              <h2>Subtitle</h2>
            </div>
            <div className="description">
              <h3>oday</h3>
              <p>Description</p>
            </div>
          </Column>
          <Column width={50}>
            <Image className="project-img" source={loadingImg} />
          </Column>
        </Row>
        <Row className="list-item" size={90}>
          <Column
            className="project-info"
            JContent="left"
            align="baseline"
            width={50}
          >
            <div className="title">
              <h1>Hello</h1>
              <h2>Subtitle</h2>
            </div>
            <div className="description">
              <h3>Today</h3>
              <p>Description</p>
            </div>
          </Column>
          <Column width={50}>
            <Image className="project-img" source={loadingImg} />
          </Column>
        </Row>
        <Row className="list-item" size={90}>
          <Column
            className="project-info"
            JContent="left"
            align="baseline"
            width={50}
          >
            <div className="title">
              <h1>Hello</h1>
              <h2>Subtitle</h2>
            </div>
            <div className="description">
              <h3>Today</h3>
              <p>Description</p>
            </div>
          </Column>
          <Column width={50}>
            <Image className="project-img" source={loadingImg} />
          </Column>
        </Row>
      </div>
    </Section>
  );
};
export default Projects;
