import cssImage from "../assets/images/css.png";
import htmlImage from "../assets/images/html5.png";
import jsImage from "../assets/images/js.png";
import responsiveImage from "../assets/images/responsive.png";
import flexboxImage from "../assets/images/flexbox.png";
import { auth } from "firebase";

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

export const getCurrentProvider = (provider) => {
  const googleProvider = new auth.GoogleAuthProvider();
  const githubProvider = new auth.GithubAuthProvider();

  switch (provider) {
    case "Google":
      return googleProvider;
    case "Github":
      return githubProvider;
  }
};
