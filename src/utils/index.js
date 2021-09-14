import cssImage from "../assets/images/css.png";
import htmlImage from "../assets/images/html5.png";
import jsImage from "../assets/images/js.png";
import responsiveImage from "../assets/images/responsive.png";
import flexboxImage from "../assets/images/flexbox.png";

export const getCourseImage = (course) => {
  switch (course) {
    case "html":
      return htmlImage;
    case "css":
      return cssImage;
    case "js":
      return jsImage;
    case "responsive-design":
      return responsiveImage;
    case "flexbox":
      return flexboxImage;
    default:
      break;
  }
};
