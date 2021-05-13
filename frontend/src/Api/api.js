import axios from 'axios';
const API = axios.create({
    baseURL: "http://127.0.0.1:8000/"
});

// Value
export const AllValueList = () => API.get("/Value/all");
export const ForwardValueList = () => API.get("/Value/forward");
export const MidfielderValueList = () => API.get("/Value/midfielder");
export const DefenderValueList = () => API.get("/Value/defender");
export const GoalkeeperValueList = () => API.get("/Value/goalkeeper");
export const ClubValueList = () => API.get("/ClubValue")

// statistics Club
export const premierClubStats = () => API.get("/ClubStats/premier");
export const laLigaClubStats = () => API.get("/ClubStats/laliga");
export const bundesLigaClubStats = () => API.get("/ClubStats/bundesliga");
export const SerieAClubStats = () => API.get("/ClubStats/seriea");
export const Ligue1ClubStats = () => API.get("/ClubStats/ligue1");
// statistics Player
export const premierPlayerStats = () => API.get("/Stats/premier");
export const laLigaPlayerStats = () => API.get("/Stats/laliga");
export const bundesLigaPlayerStats = () => API.get("/Stats/bundesliga");
export const SerieAPlayerStats = () => API.get("/Stats/seriea");
export const Ligue1PlayerStats = () => API.get("/Stats/ligue1");

// export const laLigaClubStats = () => API.get("/ClubValue")





// export const premierClubstatCreate = ((name, position, age) =>
//     API.post("/api/SearchTerm", {
//         name: name,
//         position: position,
//         age: age
//     })
// );