/* 
Get / 
 Homepage 

*/

exports.homepage = async(req, res) => {
  res.render("index", {
    title: "Homepage",
    description: "This is the homepage",
  });
};
