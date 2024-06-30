let siteName = document.getElementById("Site_name");
let siteUrl = document.getElementById("Site_url");
let urlError = document.getElementById("urlError");
let sitesList = [];

function isValidURL(url) {
  const urlPattern =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([/\w \.-]*)*\/?$/;
  return urlPattern.test(url);
}

function addSite() {
  if (!isValidURL(siteUrl.value)) {
    urlError.style.display = "block";
    return;
  }
  urlError.style.display = "none";

  let siteDetails = {
    siteName: siteName.value,
    siteUrl: siteUrl.value,
  };
  sitesList.push(siteDetails);
  displayBook();
}

function displayBook() {
  let temp = "";
  for (let i = 0; i < sitesList.length; i++) {
    temp += `<tr>
            <th scope="row">${i}</th>
            <td>${sitesList[i].siteName}</td>
            <td>
              <a href="${sitesList[i].siteUrl}" class="btn btn-success" target="_blank">
                <i class="fa-solid fa-eye pe-2"></i>Visit
              </a>
            </td>
            <td>
              <button class="btn btn-danger" onclick="deleteSite(${i})">
                <i class="fa-solid fa-trash-can"></i>Delete
              </button>
            </td>
          </tr>`;
  }
  document.getElementById("bookData").innerHTML = temp;
}

function deleteSite(index) {
  sitesList.splice(index, 1);
  displayBook();
}
