console.log("Cohort De09");
var b = 5;
var c = 2;
var currentUser = 3 /* Role.DbAdmin */;
currentUser = 4 /* Role.Tester */;
console.log(currentUser);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Created"] = 201] = "Created";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 500] = "BadRequest";
    StatusCodes[StatusCodes["NoContent"] = 204] = "NoContent";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
})(StatusCodes || (StatusCodes = {}));
var response = StatusCodes.Success;
console.log(response);
var Sizes;
(function (Sizes) {
    Sizes["Small"] = "S";
    Sizes["Medium"] = "M";
    Sizes["Large"] = "L";
    Sizes[Sizes["XLarge"] = 100] = "XLarge";
    Sizes[Sizes["XXLarge"] = 101] = "XXLarge";
})(Sizes || (Sizes = {}));
Sizes.Medium;
Sizes["Medium"]; // "M"
Sizes[101]; // XXLarge
