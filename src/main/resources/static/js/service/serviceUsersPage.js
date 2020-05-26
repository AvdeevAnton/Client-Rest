class DataUsersPagination {

    constructor() {
    }

    // получить медия с users
    mapperMediaUsers(listUsers) {
        let listMedia = [];

        for (let i = 0; i < listUsers.length; i++) {
            let user = listUsers[i];

            const img = document.createElement("img");
            img.src = "//placehold.it/48x48?text=" + user.id;
            img.className = "align-self-start mr-3";
            img.alt = "...";

            const divs = document.createElement("div");
            divs.className = "media-body";

            const name = document.createElement("a");
            name.href = "/user/" + user.id;
            name.className = "mt-0 user-name";
            name.innerText = user.fullName;

            const city = document.createElement("div");
            city.className = "user-location";
            city.innerText = user.city;

            const ratings = document.createElement("div");
            ratings.className = "user-rating";
            ratings.innerText = user.reputationCount;

            const tags = document.createElement("a");
            tags.href = "/tags/" + user.about;
            tags.className = "user-tags";
            tags.innerText = user.about;

            divs.appendChild(name);
            divs.appendChild(city);
            divs.appendChild(ratings);
            divs.appendChild(tags);

            const media = document.createElement("div");
            media.className = "media user-info";
            media.appendChild(img);
            media.appendChild(divs);

            listMedia.push(media);
        }
        return listMedia;
    }

    // получить медия с pagination
    mapperMediaPagination(listPagination) {
        let listMediaPagination = [];

        for (let i = 0; i < listPagination.length; i++) {
            let li = document.createElement("li");
            li.className = "page-item";
            let a = document.createElement("a");
            a.className = "page-link";
            a.href = "#";
            a.innerText = listPagination[i];
            li.appendChild(a);
            listMediaPagination.push(li);
        }
        // console.log(listMediaPagination);
        return listMediaPagination;
    }

    // получить число страниц
    getNumberOfPages(countOnUsers, numberItemsOnPage) {
        return Math.ceil(countOnUsers / numberItemsOnPage);
    }

    // геренатор pagination
    generateRangePagination(currentPage, countOfPages) {
        let pagesToShow = 3,
            page = currentPage - pagesToShow > 0 ? currentPage - pagesToShow : 1,
            first = 0,
            listPagination = [];

        for (let i = 0; i < pagesToShow * 2 && page < countOfPages; i++) {
            listPagination.push(page);
            page++;
        }
        if (pagesToShow + 2 < currentPage) {
            listPagination.unshift("...");
            listPagination.unshift(1); //add first page
        }

        if (countOfPages > 1) {
            if (countOfPages - pagesToShow > currentPage) {
                listPagination.push("...");
            }
            listPagination.push(countOfPages); //add last page
        }
        // console.log(listPagination);
        return listPagination;
    }

    // запрос в базу для получения данных для страницы
    getListUsersForPagination(numbersMedia, currentPage) {
        let map = new Map();
        $.ajax({
            type: "GET",
            url: "/api/user/" + numbersMedia + "/page/" + currentPage,
            xhrFields: {withCredentials: true},
            cache: false,
            async: false,
            success: function (data) {
                console.log(data);
                for (let field in data) {
                    map.set("list", data.key);
                    map.set("count", data.value);
                }
                console.log(map);
            },
            error: function (xhr, status, error) {
                if (xhr.status === 404) {
                    alert('User list not found...');
                } else {
                    alert('Error - ' + xhr.status + ': ' + xhr.statusText + error);
                }
            }
        });
        return map;
    }
}

$(document).ready(function () {
    //
    // let data = new DataUsersPagination();
    // // начальная страница
    // let currentPage = 1;
    // // количество карточек на странице
    // let numberMedia = 5;
    //
    // /*блок кода для первой страницы*/
    // let dadaMap = data.getListUsersForPagination(numberMedia, currentPage);
    //
    // let countOfPages = data.getNumberOfPages(dadaMap.get("count"), numberMedia);
    // let listUsersForPage = dadaMap.get("list");
    // let listMediaUsers = data.mapperMediaUsers(listUsersForPage);
    // $("#users").html($(listMediaUsers));
    //
    // let listButtonPagination = data.generateRangePagination(currentPage, countOfPages);
    // let listLi = data.mapperMediaPagination(listButtonPagination);
    // $("#pagination").html($(listLi));
    //
    // /*блок кода для динамического изменения данных*/
    // $("body").on("click", ".page-link", function () {
    //     let page = $(this).text();
    //     // console.log("страница:  " + page);
    //
    //     let dadaMap = data.getListUsersForPagination(numberMedia, page);
    //
    //     let listUsersForPage = dadaMap.get("list");
    //     let listMediaUsers = data.mapperMediaUsers(listUsersForPage);
    //     $("#users").html($(listMediaUsers));
    //
    //     let countOfPages = data.getNumberOfPages(dadaMap.get("count"), numberMedia);
    //     let listButtonPagination = data.generateRangePagination(page, countOfPages);
    //     let listLi = data.mapperMediaPagination(listButtonPagination);
    //     $("#pagination").html($(listLi));
    // });
});





