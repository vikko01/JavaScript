console.log("Ganpati Bappa Morya")

const accId = 12345
let accName = "sbi0123"
var accMail = "vipul@123"
accCity = "Jaipur"

console.table([accId, accName, accMail, accCity])

// accId = 45678 // cannot be changed because we described as an const
accName = "pnb123" // it is change let affected with scope
accMail = "vipul@567" // var cannot affect with scope
accCity = "Bangeluru" // don't used it

console.table([accId, accName, accMail, accCity])
