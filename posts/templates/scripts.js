const  Createpost = async () =>  {
  var title = document.getElementById("exampleInputEmail1").value;
  var Category = document.getElementById("Category").value;
  var Content = document.getElementById("content").value;

  if (title !== "" && Category !== "" && Content !== "") {
    axios
      .post("/createpost", {
        title: title,
        cateogry: Category,
        content: Content,
      })
      .then((response) => {
        const user = response.user;
        alert(`Successful Created ${title}`);
      })
      .catch((error) => alert(error));
  }
};

 

const Listofpost = () => {
  const div = document.querySelector("#listofpost");
  axios
    .get("/listofpost")
    .then((response) => {
      const users = response.data;
      users.map((data) => {
        var Li = document.createElement("li");
        Li.textContent = data;
        div.appendChild(Li);
      });
    })
    .catch((error) => console.error(error));
};

const CreateCategory = () => {
  var Category = document.getElementById("CreateNewCategory").value;

  if (Category !== "") {
    axios
      .get(`/createcategory?category=${Category}`)
      .then((response) => {
        console.log(response.data);
        alert(`Successful Created ${Category}`);
      })
      .catch((error) => console.error(error));
  }
};

const Category = () => {
  const div = document.querySelector("#Category");
  axios
    .get("/category")
    .then((response) => {
      const users = response.data;
      users.map((data) => {
        var Option = document.createElement("option");
        Option.textContent = data;
        Option.value = data;
        div.appendChild(Option);
      });
    })
    .catch((error) => console.error(error));
};

Category();
Listofpost();
