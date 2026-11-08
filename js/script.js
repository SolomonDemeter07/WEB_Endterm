const gamesData = [
    {
        title: "Space Marine 2",
        genre: "Action / Shooter",
        badgeClass: "bg-danger",
        image: "images/SpaceMarine2.png",
        description: "Step into the armor of a superhuman Space Marine. Rip and tear through hordes of Tyranids in this visually stunning and brutally satisfying sequel.",
        trailerUrl: "https://youtu.be/A_HljUo8Jjk?si=hdIAsOt3FM2EBXxW"
    },
    {
        title: "Dawn of War (Series)",
        genre: "RTS / Strategy",
        badgeClass: "bg-primary",
        image: "images/DOW.jpg",
        description: "The legendary real-time strategy series. Command vast armies, manage resources, and conquer planets in the name of the Emperor.",
        trailerUrl: "https://youtu.be/2HiUectTy9Y?si=YMM0pNHIa-4r1OSu"
    },
    {
        title: "Rogue Trader",
        genre: "Classic RPG",
        badgeClass: "bg-success",
        image: "images/Rogue.jpg",
        description: "A massive classic RPG experience. Explore the uncharted Koronus Expanse, make impactful choices, and lead your diverse crew to glory or ruin.",
        trailerUrl: "https://youtu.be/0iQ-n9Fjr2s?si=TGmde_M_o2xNnUAK"
    },
    {
        title: "Warhammer 40,000: Darktide",
        genre: "Action / Shooter",
        badgeClass: "bg-danger",
        image: "images/darktide.jpg",
        description: "Take back the hive city of Tertium from hordes of bloodthirsty foes in this intense and brutal 4-player co-op action shooter.",
        trailerUrl: "https://www.youtube.com/watch?v=e-UifdRoC8I&pp=ygUZd2FyaGFtbWVyIDQwIDAwMCBkYXJrdGlkZQ%3D%3D"
    },
    {
        title: "Warhammer 40,000: Boltgun",
        genre: "Action / Shooter",
        badgeClass: "bg-danger",
        image: "images/boltgun.jpg",
        description: "Load up your Boltgun and plunge into battle headfirst! Experience a glorious blend of Warhammer 40,000 and classic 90s retro shooter gameplay.",
        trailerUrl: "https://www.youtube.com/watch?v=xccL-pQbeJ8&pp=ygUZV2FyaGFtbWVyIDQwLDAwMDogQm9sdGd1bg%3D%3D"
    },
    {
        title: "Warhammer 40,000: Mechanicus",
        genre: "RTS / Strategy",
        badgeClass: "bg-primary",
        image: "images/mechanicus.jpg",
        description: "Take control of the most technologically advanced army in the Imperium — the Adeptus Mechanicus — in this turn-based tactical strategy game.",
        trailerUrl: "https://www.youtube.com/watch?v=XfqF81VPoM0&pp=ygUkV2FyaGFtbWVyIDQwLDAwMDogTWVjaGFuaWN1cyB0cmFpbGVy0gcJCUEMAYcqIYzv"
    },
    {
        title: "Battlefleet Gothic: Armada 2",
        genre: "RTS / Strategy",
        badgeClass: "bg-primary",
        image: "images/bga2.jpg",
        description: "Command massive space fleets across the stars. Engage in epic real-time naval void warfare featuring all 12 factions from the tabletop game.",
        trailerUrl: "https://www.youtube.com/watch?v=KubBn4syAHQ&pp=ygUcQmF0dGxlZmxlZXQgR290aGljOiBBcm1hZGEgMg%3D%3D"
    },
    {
        title: "Inquisitor - Martyr",
        genre: "Classic RPG",
        badgeClass: "bg-success",
        image: "images/martyr.jpg",
        description: "Enter the chaos-infested Caligari Sector as an Imperial Inquisitor. Purge the impure using tactical cover mechanics and destructible environments.",
        trailerUrl: "https://www.youtube.com/watch?v=pdIjMFtU8IA&pp=ygUZaW5xdWlzaXRvciBtYXJ0eXIgdHJhaWxlcg%3D%3D"
    },
    {
        title: "Chaos Gate - Daemonhunters",
        genre: "Classic RPG",
        badgeClass: "bg-success",
        image: "images/demonhunters.jpg",
        description: "Lead humanity's greatest weapon, the Grey Knights, to uproot and purge a galaxy-spanning cosmic plague in cinematic turn-based RPG combat.",
        trailerUrl: "https://www.youtube.com/watch?v=iuuuUDwUVPg&pp=ygUiQ2hhb3MgR2F0ZSAtIERhZW1vbmh1bnRlcnMgdHJhaWxlcg%3D%3D"
    }
];
const loreTabsData = {
    imperium: {
        title: "The Imperium of Man",
        description: "A galaxy-spanning empire of over a million worlds, ruled by the immortal God-Emperor from the Golden Throne of Holy Terra. Defended by the genetically engineered Space Marines and billions of Astra Militarum soldiers.",
        unit: "Key Force: Adeptus Astartes",
        status: "Status: Besieged on All Fronts"
    },
    chaos: {
        title: "Forces of Chaos",
        description: "Fueled by the dark gods of the Warp—Khorne, Tzeentch, Nurgle, and Slaanesh—the Traitor Legions and endless Daemonic legions seek to tear down the Imperium and plunge reality into madness.",
        unit: "Key Force: Chaos Space Marines",
        status: "Status: Expanding via the Great Rift"
    },
    xenos: {
        title: "Xenos Threats",
        description: "Ancient and terrifying alien civilizations vie for dominance. From the undying robotic Necrons and brutal Ork Waaaghs! to the all-consuming Tyranid Hive Fleets.",
        unit: "Key Force: Tyranids, Orks & Necrons",
        status: "Status: Multiplying Across Sectors"
    }
};

let readingList = JSON.parse(localStorage.getItem("wh40k_reading_list")) || [
    { title: "Horus Rising (The Horus Heresy)", completed: false },
    { title: "Eisenhorn: Xenos (Inquisition)", completed: true }
];

function filterGamesByCriteria(gamesArray, searchText, selectedGenre) {
    const cleanQuery = searchText.trim().toLowerCase();
    const filteredResult = [];

    for (const game of gamesArray) {
        const matchesSearch = game.title.toLowerCase().includes(cleanQuery) ||
                              game.description.toLowerCase().includes(cleanQuery);
        const matchesGenre = selectedGenre === "all" || game.genre === selectedGenre;

        if (matchesSearch && matchesGenre) {
            filteredResult.push(game);
        }
    }
    return filteredResult;
}

function isValidEmailFormat(emailString) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(emailString.trim());
}

function renderGamesCards(gamesToDisplay) {
    const container = document.getElementById("gamesContainer");
    if (!container) return;

    container.innerHTML = "";

    if (gamesToDisplay.length === 0) {
        const emptyMsg = document.createElement("p");
        emptyMsg.className = "text-warning fs-4 text-center w-100 my-4";
        emptyMsg.textContent = "No video games match your current search filter.";
        container.appendChild(emptyMsg);
        return;
    }

    for (const game of gamesToDisplay) {
        const card = document.createElement("div");
        card.className = "game-card";
        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="game-img">
            <div class="game-content">
                <h3 class="text-warning">${game.title}</h3>
                <span class="badge ${game.badgeClass} mb-3 w-50">${game.genre}</span>
                <p>${game.description}</p>
                <a href="${game.trailerUrl}" target="_blank" class="btn btn-outline-warning mt-auto">Watch Trailer</a>
            </div>
        `;
        container.appendChild(card);
    }
}

function setFieldValidationState(inputEl, errorEl, errorMessage) {
    if (!inputEl || !errorEl) return false;

    if (errorMessage) {
        inputEl.classList.add("input-error-border");
        inputEl.classList.remove("input-valid-border");
        errorEl.textContent = errorMessage;
        return false;
    } else {
        inputEl.classList.remove("input-error-border");
        inputEl.classList.add("input-valid-border");
        errorEl.textContent = "";
        return true;
    }
}

function renderReadingList() {
    const listContainer = document.getElementById("readingListContainer");
    const countSpan = document.getElementById("readingCount");
    if (!listContainer || !countSpan) return;

    listContainer.innerHTML = "";
    countSpan.textContent = readingList.length;

    readingList.forEach((book, index) => {
        const li = document.createElement("li");
        li.className = `list-group-item reading-item d-flex justify-content-between align-items-center ${book.completed ? "completed-book" : ""}`;

        const titleSpan = document.createElement("span");
        titleSpan.textContent = book.title;

        const btnGroup = document.createElement("div");

        const toggleBtn = document.createElement("button");
        toggleBtn.className = "btn btn-sm btn-outline-success me-2";
        toggleBtn.textContent = book.completed ? "Undo" : "Read";
        toggleBtn.addEventListener("click", function () {
            readingList[index].completed = !readingList[index].completed;
            localStorage.setItem("wh40k_reading_list", JSON.stringify(readingList));
            renderReadingList();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-sm btn-outline-danger";
        deleteBtn.textContent = "Remove";
        deleteBtn.addEventListener("click", function () {
            readingList.splice(index, 1);
            localStorage.setItem("wh40k_reading_list", JSON.stringify(readingList));
            renderReadingList();
        });

        btnGroup.appendChild(toggleBtn);
        btnGroup.appendChild(deleteBtn);
        li.appendChild(titleSpan);
        li.appendChild(btnGroup);
        listContainer.appendChild(li);
    });
}

function addNovelToReadingList(bookTitle) {
    const cleanTitle = bookTitle.trim();
    if (!cleanTitle) return;

    const alreadyExists = readingList.some(item => item.title.toLowerCase() === cleanTitle.toLowerCase());
    if (!alreadyExists) {
        readingList.push({ title: cleanTitle, completed: false });
        localStorage.setItem("wh40k_reading_list", JSON.stringify(readingList));
        renderReadingList();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const savedTheme = localStorage.getItem("wh40k_theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        if (themeToggleBtn) themeToggleBtn.textContent = "Dark Mode";
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("light-theme");
            const isLight = document.body.classList.contains("light-theme");
            themeToggleBtn.textContent = isLight ? "Dark Mode" : "Light Mode";
            localStorage.setItem("wh40k_theme", isLight ? "light" : "dark");
        });
    }

    const tabButtons = document.querySelectorAll(".lore-tab-btn");
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener("click", function (event) {
                const selectedKey = event.currentTarget.getAttribute("data-tab");
                const data = loreTabsData[selectedKey];

                tabButtons.forEach(btn => {
                    btn.classList.remove("btn-warning", "active");
                    btn.classList.add("btn-outline-warning");
                });

                event.currentTarget.classList.remove("btn-outline-warning");
                event.currentTarget.classList.add("btn-warning", "active");

                if (data) {
                    document.getElementById("tabTitle").textContent = data.title;
                    document.getElementById("tabDescription").textContent = data.description;
                    document.getElementById("tabKeyUnit").textContent = data.unit;
                    document.getElementById("tabStatus").textContent = data.status;
                }
            });
        });
    }

    renderReadingList();

    const bookmarkButtons = document.querySelectorAll(".add-bookmark-btn");
    bookmarkButtons.forEach(btn => {
        btn.addEventListener("click", function (event) {
            const bookName = event.currentTarget.getAttribute("data-book");
            addNovelToReadingList(bookName);
            event.currentTarget.textContent = "Added!";
            event.currentTarget.classList.replace("btn-outline-warning", "btn-warning");
        });
    });

    const addCustomBookBtn = document.getElementById("addCustomBookBtn");
    const customBookInput = document.getElementById("customBookInput");
    if (addCustomBookBtn && customBookInput) {
        addCustomBookBtn.addEventListener("click", function () {
            addNovelToReadingList(customBookInput.value);
            customBookInput.value = "";
        });

        customBookInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                addNovelToReadingList(customBookInput.value);
                customBookInput.value = "";
            }
        });
    }

    const gamesContainer = document.getElementById("gamesContainer");
    const gameSearchInput = document.getElementById("gameSearchInput");
    const gameGenreFilter = document.getElementById("gameGenreFilter");
    const resetGamesFilterBtn = document.getElementById("resetGamesFilterBtn");

    if (gamesContainer) {
        renderGamesCards(gamesData);

        const updateDisplayedGames = function () {
            const query = gameSearchInput ? gameSearchInput.value : "";
            const genre = gameGenreFilter ? gameGenreFilter.value : "all";
            const filtered = filterGamesByCriteria(gamesData, query, genre);
            renderGamesCards(filtered);
        };

        if (gameSearchInput) {
            gameSearchInput.addEventListener("input", updateDisplayedGames);
        }
        if (gameGenreFilter) {
            gameGenreFilter.addEventListener("change", updateDisplayedGames);
        }
        if (resetGamesFilterBtn) {
            resetGamesFilterBtn.addEventListener("click", function () {
                if (gameSearchInput) gameSearchInput.value = "";
                if (gameGenreFilter) gameGenreFilter.value = "all";
                renderGamesCards(gamesData);
            });
        }
    }

    const contactForm = document.getElementById("contactForm");
    const userMessageInput = document.getElementById("userMessage");
    const charCountSpan = document.getElementById("charCount");

    if (userMessageInput && charCountSpan) {
        userMessageInput.addEventListener("input", function () {
            charCountSpan.textContent = userMessageInput.value.trim().length;
        });
    }

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const nameInput = document.getElementById("userName");
            const emailInput = document.getElementById("userEmail");
            const ageInput = document.getElementById("userAge");
            const factionSelect = document.getElementById("factionSelect");
            const messageInput = document.getElementById("userMessage");
            const successBox = document.getElementById("formSuccessBox");

            const nameVal = nameInput.value.trim();
            const emailVal = emailInput.value.trim();
            const ageVal = parseInt(ageInput.value, 10);
            const factionVal = factionSelect.value;
            const messageVal = messageInput.value.trim();

            const isNameValid = setFieldValidationState(
                nameInput,
                document.getElementById("nameError"),
                nameVal.length < 3 ? "Full name must be at least 3 characters long." : ""
            );

            const isEmailValid = setFieldValidationState(
                emailInput,
                document.getElementById("emailError"),
                !isValidEmailFormat(emailVal) ? "Please enter a valid Astropathic email address." : ""
            );

            const isAgeValid = setFieldValidationState(
                ageInput,
                document.getElementById("ageError"),
                isNaN(ageVal) || ageVal < 14 || ageVal > 120 ? "Recruit age must be a number between 14 and 120." : ""
            );

            const isFactionValid = setFieldValidationState(
                factionSelect,
                document.getElementById("factionError"),
                !factionVal ? "Please choose your faction allegiance." : ""
            );

            const isMessageValid = setFieldValidationState(
                messageInput,
                document.getElementById("messageError"),
                messageVal.length < 15 ? "Transmission message must contain at least 15 characters." : ""
            );

            if (isNameValid && isEmailValid && isAgeValid && isFactionValid && isMessageValid) {
                successBox.textContent = `Transmission received, ${nameVal}! Your allegiance to the ${factionSelect.options[factionSelect.selectedIndex].text} has been logged by the Inquisition.`;
                successBox.classList.remove("d-none");
                contactForm.reset();
                if (charCountSpan) charCountSpan.textContent = "0";
            } else {
                successBox.classList.add("d-none");
            }
        });
    }
});

$(document).ready(function () {
    $(".toggle-intel-btn").on("click", function () {
        const currentWrapper = $(this).closest(".faction-card-wrapper");
        const detailsPanel = currentWrapper.find(".faction-details");

        currentWrapper.siblings(".faction-card-wrapper").find(".faction-details").slideUp(300);
        currentWrapper.siblings(".faction-card-wrapper").find(".toggle-intel-btn").text("Show Tactical Intel");

        detailsPanel.stop(true, true).slideToggle(300);

        const currentText = $(this).text();
        $(this).text(currentText === "Show Tactical Intel" ? "Hide Tactical Intel" : "Show Tactical Intel");
    });

    $(".tabletop-grid .gallery-img").on("click", function () {
        const imgSrc = $(this).attr("src");
        const imgAlt = $(this).attr("alt");

        $("#lightboxImage").attr("src", imgSrc).css({ width: "260px" });
        $("#lightboxCaption").text(imgAlt);

        $("#lightboxOverlay").css("display", "flex").hide().fadeIn(300);
        $("#lightboxImage").animate({ width: "520px" }, 400);
    });

    $("#closeLightboxBtn, #lightboxOverlay").on("click", function (event) {
        if (event.target.id === "lightboxOverlay" || event.target.id === "closeLightboxBtn") {
            $("#lightboxOverlay").fadeOut(250);
        }
    });
});