class DataUsersPage {

    constructor() {
    }

    // mapperMediaModerator(listUsers) {
    //     let listMedia = [];
    //
    //     for (let i = 0; i < listUsers.length; i++) {
    //         let user = listUsers[i];
    //
    //         const img = document.createElement("img");
    //         img.src = "//placehold.it/48x48?text=" + user.userId;
    //         img.className = "align-self-start mr-3";
    //         img.alt = "...";
    //
    //         const divs = document.createElement("div");
    //         divs.className = "media-body";
    //
    //         const name = document.createElement("a");
    //         name.href = "/profile";
    //         name.className = "mt-0 user-name";
    //         name.innerText = user.fullNameUser;
    //
    //         const city = document.createElement("div");
    //         city.className = "user-location";
    //         city.innerText = user.cityUser;
    //
    //         const ratings = document.createElement("div");
    //         ratings.className = "user-rating";
    //         ratings.innerText = "reputation " + user.reputationCount;
    //
    //         const year = document.createElement("div");
    //         year.className = "user-year";
    //         year.innerText = "выбран " + user.persistDateTime.substr(0, 4);
    //
    //         divs.appendChild(name);
    //         divs.appendChild(city);
    //         divs.appendChild(ratings);
    //         divs.appendChild(year);
    //
    //         const media = document.createElement("div");
    //         media.className = "media user-info";
    //         media.appendChild(img);
    //         media.appendChild(divs);
    //
    //         listMedia.push(media);
    //     }
    //     // console.log(listMedia);
    //     return listMedia;
    // }
    //
    // mapperMediaEditor(listUsers) {
    //     let listMedia = [];
    //
    //     for (let i = 0; i < listUsers.length; i++) {
    //         let user = listUsers[i];
    //
    //         const img = document.createElement("img");
    //         img.src = "//placehold.it/48x48?text=" + user.userId;
    //         img.className = "align-self-start mr-3";
    //         img.alt = "...";
    //
    //         const divs = document.createElement("div");
    //         divs.className = "media-body";
    //
    //         const name = document.createElement("a");
    //         name.href = "/profile";
    //         name.className = "mt-0 user-name";
    //         name.innerText = user.fullNameUser;
    //
    //         const city = document.createElement("div");
    //         city.className = "user-location";
    //         city.innerText = user.cityUser;
    //
    //         let result = user.reputationCount == null ? 0 : user.reputationCount;
    //
    //         const ratings = document.createElement("div");
    //         ratings.className = "user-rating";
    //         ratings.innerText = "reputation " + result;
    //
    //         const editor = document.createElement("div");
    //         editor.className = "user-editor";
    //         editor.innerText = user.countChanges + "правок";
    //
    //         divs.appendChild(name);
    //
    //         divs.appendChild(city);
    //         divs.appendChild(ratings);
    //         divs.appendChild(editor);
    //
    //         const media = document.createElement("div");
    //         media.className = "media user-info";
    //         media.appendChild(img);
    //         media.appendChild(divs);
    //
    //         listMedia.push(media);
    //     }
    //     // console.log(listMedia);
    //     return listMedia;
    // }
    //
    // mapperMediaVoice(listUsers) {
    //     let listMedia = [];
    //
    //     for (let i = 0; i < listUsers.length; i++) {
    //         let user = listUsers[i];
    //
    //         const img = document.createElement("img");
    //         img.src = "//placehold.it/48x48?text=" + user.userId;
    //         img.className = "align-self-start mr-3";
    //         img.alt = "...";
    //
    //         const divs = document.createElement("div");
    //         divs.className = "media-body";
    //
    //         const name = document.createElement("a");
    //         name.href = "/profile";
    //         name.className = "mt-0 user-name";
    //         name.innerText = user.fullNameUser;
    //
    //         const city = document.createElement("div");
    //         city.className = "user-location";
    //         city.innerText = user.cityUser;
    //
    //         const ratings = document.createElement("div");
    //         ratings.className = "user-rating";
    //         ratings.innerText = "reputation " + user.reputationCount;
    //
    //         const voice = document.createElement("div");
    //         voice.className = "user-voice";
    //         voice.innerText = user.voiceCount + "голосов";
    //
    //         divs.appendChild(name);
    //         divs.appendChild(city);
    //         divs.appendChild(ratings);
    //         divs.appendChild(voice);
    //
    //         const media = document.createElement("div");
    //         media.className = "media user-info";
    //         media.appendChild(img);
    //         media.appendChild(divs);
    //
    //         listMedia.push(media);
    //     }
    //     // console.log(listMedia);
    //     return listMedia;
    // }
    //
    // mapperMediaNewUsers(listUsers) {
    //     let listMedia = [];
    //
    //     for (let i = 0; i < listUsers.length; i++) {
    //         let user = listUsers[i];
    //
    //         const img = document.createElement("img");
    //         img.src = "//placehold.it/48x48?text=" + user.userId;
    //         img.className = "align-self-start mr-3";
    //         img.alt = "...";
    //
    //         const divs = document.createElement("div");
    //         divs.className = "media-body";
    //
    //         const name = document.createElement("a");
    //         name.href = "/profile";
    //         name.className = "mt-0 user-name";
    //         name.innerText = user.fullNameUser;
    //
    //         // репутация от даты создания
    //         let today = new Date();
    //         let data = user.persistDateTimeUser();
    //         let dateCreation = new Date(data.substr(0, 10));
    //         let days = Math.ceil((today - dateCreation) / 86400000);
    //
    //         const ratings = document.createElement("div");
    //         ratings.className = "user-rating";
    //         ratings.innerText = user.reputationCount + " за " + days;
    //
    //         divs.appendChild(name);
    //         divs.appendChild(ratings);
    //
    //         const media = document.createElement("div");
    //         media.className = "media user-info";
    //         media.appendChild(img);
    //         media.appendChild(divs);
    //
    //         listMedia.push(media);
    //     }
    //     // console.log(listMedia);
    //     return listMedia;
    // }
    //
    // mapperMediaNewUsersReputation(listUsers) {
    //     let listMedia = [];
    //
    //     for (let i = 0; i < listUsers.length; i++) {
    //         let user = listUsers[i];
    //
    //         const img = document.createElement("img");
    //         img.src = "//placehold.it/48x48?text=" + user.userId;
    //         img.className = "align-self-start mr-3";
    //         img.alt = "...";
    //
    //         const divs = document.createElement("div");
    //         divs.className = "media-body";
    //
    //         const name = document.createElement("a");
    //         name.href = "/profile";
    //         name.className = "mt-0 user-name";
    //         name.innerText = user.fullNameUser;
    //
    //         const city = document.createElement("div");
    //         city.className = "user-location";
    //         city.innerText = user.cityUser;
    //
    //         // репутация от даты создания
    //         let today = new Date();
    //         let data = user.persistDateTimeUser();
    //         let dateCreation = new Date(data.substr(0, 10));
    //         let days = Math.ceil((today - dateCreation) / 86400000);
    //
    //         let result = user.reputationCount == null ? 0 : user.reputationCount;
    //
    //         const ratings = document.createElement("div");
    //         ratings.className = "user-rating";
    //         ratings.innerText = result + " за " + days;
    //
    //         const tags = document.createElement("a");
    //         tags.href = "/tags/" + user.aboutUser;
    //         tags.className = "user-tags";
    //         tags.innerText = user.aboutUser;
    //
    //         divs.appendChild(name);
    //         divs.appendChild(city);
    //         divs.appendChild(ratings);
    //         divs.appendChild(tags);
    //
    //         const media = document.createElement("div");
    //         media.className = "media user-info";
    //         media.appendChild(img);
    //         media.appendChild(divs);
    //
    //         listMedia.push(media);
    //     }
    //     // console.log(listMedia);
    //     return listMedia;
    // }
    //
    // mapperMediaUsers(listUsers) {
    //     let listMedia = [];
    //
    //     for (let i = 0; i < listUsers.length; i++) {
    //         let user = listUsers[i];
    //
    //         const img = document.createElement("img");
    //         img.src = "//placehold.it/48x48?text=" + user.userId;
    //         img.className = "align-self-start mr-3";
    //         img.alt = "...";
    //
    //         const divs = document.createElement("div");
    //         divs.className = "media-body";
    //
    //         const name = document.createElement("a");
    //         name.href = "/profile";
    //         name.className = "mt-0 user-name";
    //         name.innerText = user.fullNameUser;
    //
    //         const city = document.createElement("div");
    //         city.className = "user-location";
    //         city.innerText = user.cityUser;
    //
    //         const ratings = document.createElement("div");
    //         ratings.className = "user-rating";
    //         ratings.innerText = "reputation " + user.reputationCount;
    //
    //         const voices = document.createElement("div");
    //         voices.className = "user-voices";
    //         voices.innerText = "voice " + user.voiceCount;
    //
    //         const tags = document.createElement("a");
    //         tags.href = "/tags/" + user.aboutUser;
    //         tags.className = "user-tags";
    //         tags.innerText = user.aboutUser;
    //
    //         divs.appendChild(name);
    //         divs.appendChild(city);
    //         divs.appendChild(ratings);
    //         divs.appendChild(voices);
    //         divs.appendChild(tags);
    //
    //         const media = document.createElement("div");
    //         media.className = "media user-info";
    //         media.appendChild(img);
    //         media.appendChild(divs);
    //
    //         listMedia.push(media);
    //     }
    //     // console.log(listMedia);
    //     return listMedia;
    // }

    // mapperMediaPagination(listPagination) {
    //     let listMediaPagination = [];
    //
    //     for (let i = 0; i < listPagination.length; i++) {
    //         let li = document.createElement("li");
    //         li.className = "page-item";
    //         let a = document.createElement("a");
    //         a.className = "page-link";
    //         a.href = "#";
    //         a.innerText = listPagination[i];
    //         li.appendChild(a);
    //         listMediaPagination.push(li);
    //     }
    //     // console.log(listMediaPagination);
    //     return listMediaPagination;
    // }

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

    getListUsers(url) {
        let map = new Map();
        $.ajax({
            type: "GET",
            url: url,
            xhrFields: {withCredentials: true},
            cache: false,
            async: false,
            success: function (data) {
                // console.log(data);
                for (let field in data) {
                    map.set("list", data.key);
                    map.set("count", data.value);
                }
            },
            error: function (xhr, status, error) {
                if (xhr.status === 404) {
                    alert('list User not found...');
                } else {
                    alert('The server does not answer...');
                    console.log('Error - ' + xhr.status + ': ' + xhr.statusText + error);
                }
            }
        });
        // console.log(map);
        return map;
    }
}

class DataUsersService {

    constructor() {
    }

    showPagination(media, data, dataMap, numberMedia, currentPage) {
        let countOfPages = data.getNumberOfPages(dataMap.get("count"), numberMedia);
        let listButtonPagination = data.generateRangePagination(currentPage, countOfPages);
        let listLi = media.mapperMediaPagination(listButtonPagination);
        $("#pagination").html($(listLi));
    }

    // showUsers(data, dataMap) {
    //     let listUsersForPage = dataMap.get("list");
    //     // todo надо подменять mapper
    //     let listMediaUsers = data.mapperMediaUsers(listUsersForPage);
    //     $("#users").html($(listMediaUsers));
    // }

    showUsers(listUsers) {
        $("#users").html($(listUsers));
    }

    getUrl(key) {
        let mapUrl = new Map([
            ["reputation", "http://localhost:5557/api/user/reputation?count="],
            ["voice", "http://localhost:5557/api/user/voice?count="],
            ["editor", "http://localhost:5557/api/user/editor?count="],
            ["moderator", "http://localhost:5557/api/user/moderator"],
            ["new", "http://localhost:5557/api/user/new?count="],
            ["new-reputation", "http://localhost:5557/api/user/new/reputation?count="],
            ["search", "http://localhost:5557/api/user/search?count="]
        ]);
        return mapUrl.get(key);
    }

    getCountWeeksSinceCreation() {
        let today = new Date();
        let dateCreation = new Date('2018-01-01');
        return Math.ceil((today - dateCreation) / 604800000);
    }
}

class MediaFactory {
    constructor() {
    }

    getMediaList(key, list) {
        if (key === "reputation") return this.mapperMediaUsers(list);
        if (key === "voice") return this.mapperMediaVoice(list);
        if (key === "editor") return this.mapperMediaEditor(list);
        if (key === "moderator") return this.mapperMediaModerator(list);
        if (key === "new") return this.mapperMediaNewUsers(list);
        if (key === "new-reputation") return this.mapperMediaNewUsersReputation(list);
        if (key === "search") return this.mapperMediaUsers(list);
    }

    mapperMediaModerator(list) {
        let listMedia = [];

        for (let i = 0; i < list.length; i++) {
            let user = list[i];

            const img = document.createElement("img");
            img.src = "//placehold.it/48x48?text=" + user.userId;
            img.className = "align-self-start mr-3";
            img.alt = "...";

            const divs = document.createElement("div");
            divs.className = "media-body";

            const name = document.createElement("a");
            name.href = "/profile";
            name.className = "mt-0 user-name";
            name.innerText = user.fullNameUser;

            const city = document.createElement("div");
            city.className = "user-location";
            city.innerText = user.cityUser;

            const ratings = document.createElement("div");
            ratings.className = "user-rating";
            ratings.innerText = "reputation " + user.reputationCount;

            const year = document.createElement("div");
            year.className = "user-year";
            year.innerText = "выбран " + user.persistDateTime.substr(0, 4);

            divs.appendChild(name);
            divs.appendChild(city);
            divs.appendChild(ratings);
            divs.appendChild(year);

            const media = document.createElement("div");
            media.className = "media user-info";
            media.appendChild(img);
            media.appendChild(divs);

            listMedia.push(media);
        }
        // console.log(listMedia);
        return listMedia;
    }

    mapperMediaEditor(list) {
        let listMedia = [];

        for (let i = 0; i < list.length; i++) {
            let user = list[i];

            const img = document.createElement("img");
            img.src = "//placehold.it/48x48?text=" + user.userId;
            img.className = "align-self-start mr-3";
            img.alt = "...";

            const divs = document.createElement("div");
            divs.className = "media-body";

            const name = document.createElement("a");
            name.href = "/profile";
            name.className = "mt-0 user-name";
            name.innerText = user.fullNameUser;

            const city = document.createElement("div");
            city.className = "user-location";
            city.innerText = user.cityUser;

            let result = user.reputationCount == null ? 0 : user.reputationCount;

            const ratings = document.createElement("div");
            ratings.className = "user-rating";
            ratings.innerText = "reputation " + result;

            const editor = document.createElement("div");
            editor.className = "user-editor";
            editor.innerText = user.countChanges + " правок";

            divs.appendChild(name);

            divs.appendChild(city);
            divs.appendChild(ratings);
            divs.appendChild(editor);

            const media = document.createElement("div");
            media.className = "media user-info";
            media.appendChild(img);
            media.appendChild(divs);

            listMedia.push(media);
        }
        // console.log(listMedia);
        return listMedia;
    }

    mapperMediaVoice(list) {
        let listMedia = [];

        for (let i = 0; i < list.length; i++) {
            let user = list[i];

            const img = document.createElement("img");
            img.src = "//placehold.it/48x48?text=" + user.userId;
            img.className = "align-self-start mr-3";
            img.alt = "...";

            const divs = document.createElement("div");
            divs.className = "media-body";

            const name = document.createElement("a");
            name.href = "/profile";
            name.className = "mt-0 user-name";
            name.innerText = user.fullNameUser;

            const city = document.createElement("div");
            city.className = "user-location";
            city.innerText = user.cityUser;

            const ratings = document.createElement("div");
            ratings.className = "user-rating";
            ratings.innerText = "reputation " + user.reputationCount;

            const voice = document.createElement("div");
            voice.className = "user-voice";
            voice.innerText = user.voiceCount + " голосов";

            divs.appendChild(name);
            divs.appendChild(city);
            divs.appendChild(ratings);
            divs.appendChild(voice);

            const media = document.createElement("div");
            media.className = "media user-info";
            media.appendChild(img);
            media.appendChild(divs);

            listMedia.push(media);
        }
        // console.log(listMedia);
        return listMedia;
    }

    mapperMediaNewUsers(list) {
        let listMedia = [];

        for (let i = 0; i < list.length; i++) {
            let user = list[i];

            const img = document.createElement("img");
            img.src = "//placehold.it/48x48?text=" + user.userId;
            img.className = "align-self-start mr-3";
            img.alt = "...";

            const divs = document.createElement("div");
            divs.className = "media-body";

            const name = document.createElement("a");
            name.href = "/profile";
            name.className = "mt-0 user-name";
            name.innerText = user.fullNameUser;

            // репутация от даты создания
            let today = new Date();
            let data = user.persistDateTimeUser();
            let dateCreation = new Date(data.substr(0, 10));
            let days = Math.ceil((today - dateCreation) / 86400000);

            const ratings = document.createElement("div");
            ratings.className = "user-rating";
            ratings.innerText = user.reputationCount + " за " + days;

            divs.appendChild(name);
            divs.appendChild(ratings);

            const media = document.createElement("div");
            media.className = "media user-info";
            media.appendChild(img);
            media.appendChild(divs);

            listMedia.push(media);
        }
        // console.log(listMedia);
        return listMedia;
    }

    mapperMediaNewUsersReputation(list) {
        let listMedia = [];

        for (let i = 0; i < list.length; i++) {
            let user = list[i];

            const img = document.createElement("img");
            img.src = "//placehold.it/48x48?text=" + user.userId;
            img.className = "align-self-start mr-3";
            img.alt = "...";

            const divs = document.createElement("div");
            divs.className = "media-body";

            const name = document.createElement("a");
            name.href = "/profile";
            name.className = "mt-0 user-name";
            name.innerText = user.fullNameUser;

            const city = document.createElement("div");
            city.className = "user-location";
            city.innerText = user.cityUser;

            // репутация от даты создания
            let today = new Date();
            let data = user.persistDateTimeUser();
            let dateCreation = new Date(data.substr(0, 10));
            let days = Math.ceil((today - dateCreation) / 86400000);

            let result = user.reputationCount == null ? 0 : user.reputationCount;

            const ratings = document.createElement("div");
            ratings.className = "user-rating";
            ratings.innerText = result + " за " + days;

            const tags = document.createElement("a");
            tags.href = "/tags/" + user.aboutUser;
            tags.className = "user-tags";
            tags.innerText = user.aboutUser;

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
        // console.log(listMedia);
        return listMedia;
    }

    mapperMediaUsers(list) {
        let listMedia = [];

        for (let i = 0; i < list.length; i++) {
            let user = list[i];

            const img = document.createElement("img");
            img.src = "//placehold.it/48x48?text=" + user.userId;
            img.className = "align-self-start mr-3";
            img.alt = "...";

            const divs = document.createElement("div");
            divs.className = "media-body";

            const name = document.createElement("a");
            name.href = "/profile";
            name.className = "mt-0 user-name";
            name.innerText = user.fullNameUser;

            const city = document.createElement("div");
            city.className = "user-location";
            city.innerText = user.cityUser;

            const ratings = document.createElement("div");
            ratings.className = "user-rating";
            ratings.innerText = "reputation " + user.reputationCount;

            const voices = document.createElement("div");
            voices.className = "user-voices";
            voices.innerText = "voice " + user.voiceCount;

            const tags = document.createElement("a");
            tags.href = "/tags/" + user.aboutUser;
            tags.className = "user-tags";
            tags.innerText = user.aboutUser;

            divs.appendChild(name);
            divs.appendChild(city);
            divs.appendChild(ratings);
            divs.appendChild(voices);
            divs.appendChild(tags);

            const media = document.createElement("div");
            media.className = "media user-info";
            media.appendChild(img);
            media.appendChild(divs);

            listMedia.push(media);
        }
        // console.log(listMedia);
        return listMedia;
    }

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
}




