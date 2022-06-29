export interface IPost {
    userId : number|string,
    id : number|string,
    title : string,
    body : string
}

export interface IPostValidate {
    userId : string,
    id : string,
    title : string,
    body : string
}