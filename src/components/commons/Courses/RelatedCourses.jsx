import React from "react";
import RelatedCourse from "./RelatedCourse";
import docentes from "./docentes.png";
import ecommerce from "./ecommerce.png";
import herramientas from "./herramientas-digitales.png";
import cm from "./cm.png";

const RelatedCourses = () => {
  return (
    <>
      <RelatedCourse
        courseName="Herramientas digitales para trabajo remoto"
        courseImage={herramientas}
        students="119"
        link="trabajo-remoto"
      />
      {/* <RelatedCourse
        courseName="Redes sociales para negocios"
        courseImage={cm}
        students="259"
        link="cm"
      /> */}
      <RelatedCourse
        courseName="Herramientas digitales para docentes"
        courseImage={docentes}
        students="131"
        link="docentes"
      />
      <RelatedCourse
        courseName="Creando tu propia tienda online"
        courseImage={ecommerce}
        students="103"
        link="ecommerce"
      />
    </>
  );
};

export default RelatedCourses;
