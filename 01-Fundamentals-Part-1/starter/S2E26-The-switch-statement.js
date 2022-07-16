const day = prompt("What day is it?");
console.log({ day });
// switch (day) {
//     case 'Monday':
//         console.log("It's start of the week");
//         console.log("Monday blues");
//         break;
//     case 'Tuesday':
//         console.log("Tequila Tuesdays");
//         break;
//     case 'Wednesday':
//     case 'Thursday':
//         console.log("Getting through the slog of the week");
//         console.log("Getting through the slog of the week");
//     default:
//         console.log("Invalid day");
// }



if (day === "Monday") {

    console.log("Monday blues");

} else if (day === "Tuesday") {
    console.log("It's Tuesday");

} else if (day === "Wednesday" || day === "Thursday") {

    console.log("Getting through the slog of the week");
    console.log("Getting through the slog of the week");

} else {
    console.log("Invalid day");
}
