export function voting (number){
    return({
        type: "VOTE",
        candidate : number
    })
};