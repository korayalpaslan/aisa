import moment from "moment";
import "moment/locale/tr";

export const localizedDate = (date) => {
  return moment(date).locale("en").format("Do MMMM");
};

export const localizedAdmissionFormDate = (date) => {
  return moment(date).locale("en").format("Do MMMM YYYY");
};

export const localizedBlogDate = (date) => {
  return moment(date).locale("en").format("Do MMMM YYYY");
};
