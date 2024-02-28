const css = {
  h2: { style: {}, id: "h2-root", className: "Heading" },
  p: {style: {color:'grey'}, className:'para'}
};
const A = React.createElement('a', {href: "google.com"},"MDN docs")
const h2 = React.createElement('h2', css.h2 , 'Learn web development ');
const br = React.createElement('br',{}, );
const p = React.createElement(
  "p",
  css.p,
  "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.",
  br,br,
  'The aim of this arear of MDN is not to taje you from "beginner" to "expert but to take you from "beginner to comfortable From there, you should be able to start making your wat, learning from ',
  A,
  br,br,
  'The aim of this arear of MDN is not to taje you from "beginner" to "expert but to take you from "beginner to comfortable From there, you should be able to start making your wat, learning from '
);

const div = React.createElement("div", {}, [h2, p]);

ReactDOM.render(div, document.getElementById('root'));
