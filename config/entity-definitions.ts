const columns = {
    "roles": [
        {
            name: "name",
            type: "character varying",
            unique: true,
            nullable: false,
        },
        {
            name: "display_name",
            type: "character varying",
            unique: true,
            nullable: false,
        },
        {
            name: "description",
            type: "text",
            nullable: true,
            default: null,
        },
        
    ],
    "permissions": [

    ]
}
const relationships = {

}